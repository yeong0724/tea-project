const express = require('express');
const router = express.Router();
const { unlink } = require('fs');
const { Product } = require('../models/Product'); //모델에있는 스키마를 가져온다
var multer = require('multer');
//route는 ctrl.js와 같은 기능구현이 돼있다
/*=================================
              Product
=================================*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/products/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

var upload = multer({ storage: storage }).single('file');

// page에서 add한 image를 server upload/products 폴더에 저장
router.post('/image', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return req.json({ success: false, err });
        }
        return res.json({
            success: true,
            filePath: res.req.file.path,
            fileName: res.req.file.filename,
        });
    });
});

// page에서 클릭하면 server 폴더에 있는 image를 삭제
router.post('/imageDelete', (req, res) => {
    unlink(req.body.path, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        res.json({ success: true });
    });
});

router.post('/register', (req, res) => {
    //register를 프론트엔드 api에서 쏴준걸 req로 req.body로 write, name, price....등등 받는다
    //write: req.body.writer
    const product = new Product(req.body); //프로덕트가 body를 받아와서 지가 알아서 매치를 시킨다 model에 선언해둔 칼럼에다가 알아서 매치함 가격은 얼마 이름은 뭐 알아서 매치해서 매치한 객체를 product로 만든다 이 product를 save 하면 몽고db에 저장이된다
    product.save((err) => {
        //post로 저장할땐 이런방식을 써야한다
        if (err) {
            return res.status(400).json({ success: false, err }); //400에러에대한코드  .해줘야 에러발생했을때 console에 뜸
        }
        res.status(200).json({ success: true });
    });
});

router.post('/list', (req, res) => {
    Product.find() //조회 - find하면 product객체의 테이블에서 find함
        .populate('writer') //ref 로 write걸었음 모델폴더에서 ref: 'User'걸었으니까 user테이블 참조해서 objectId에해당하는 user데이터 들고와라 writer가 칼럼명인데 몽고디비가 writer에 걸려있으니까 user테이블에서 가져와준다
        .exec((err, productList) => {
            //find가 에러든 성공하든 여기걸리는데 에러가있으면 err값이있고 성공했다면 productList 프로덕트 정보들을 다 들고 온다
            if (err) {
                return res.status(400).json({ success: false, err });
            }
            res.status(200).json({ success: true, productList }); //에러나 productList가 프론트로 전달되는것
            //이게 front의 createRequestSaga에서 dispatch로 전달받은게 request한것을 서버에서 준것을 반환해준다 saga의 response 로 action.paload에 담긴다최초에 saga에서 출발하는것
        });
});

module.exports = router;
