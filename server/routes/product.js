const express = require('express');
const router = express.Router();
const { unlink } = require('fs');
const { Product } = require('../models/Product');
var multer = require('multer');

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
    const product = new Product(req.body);
    product.save((err) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        res.status(200).json({ success: true });
    });
});

router.post('/list', (req, res) => {
    Product.find()
        .populate('writer')
        .exec((err, productList) => {
            if (err) {
                return res.status(400).json({ success: false, err });
            }
            res.status(200).json({ success: true, productList });
        });
});

module.exports = router;
