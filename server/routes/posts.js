const express = require('express');
const router = express.Router();
const { unlink } = require('fs');
const { Post } = require('../models/Post');
const sanitizeHtml = require('sanitize-html');

//모델에있는 스키마를 가져온다

//route는 ctrl.js와 같은 기능구현이 돼있다
/*=================================
              Posts
=================================*/

// page에서 add한 image를 server upload/products 폴더에 저장

const sanitizeOption = {
    allowedTags: ['h1', 'h2', 'b', 'i', 'u', 's', 'p', 'ul', 'ol', 'li', 'blockquote', 'a', 'img'],
    allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src'],
        li: ['class'],
    },
    allowedSchemes: ['data', 'http'],
};

router.post('/write', (req, res) => {
    const { title, body, tags, userId } = req.body;
    console.log('글내용', sanitizeHtml(body));

    const post = new Post({ title, body, tags, userId });
    post.save((err) => {
        //post로 저장할땐 이런save방식을 써야한다
        if (err) {
            return res.status(400).json({ success: false, err }); //400에러에대한코드  .해줘야 에러발생했을때 console에 뜸
        }
        res.status(200).json({ success: true });
    });
});

router.get('/list', (req, res) => {
    Post.find()
        .populate('userId')
        .exec((err, postlist) => {
            if (err) {
                return res.status(400).json({ success: false, err }); //400에러에대한코드  .해줘야 에러발생했을때 console에 뜸
            }
            console.log('포스트불러d왔어어떻게?', postlist);
            res.status(200).json({ success: true, postlist });
            console.log('포스트불러왓어@@@@@@@@@@@@@글쎄어떻게?', postlist);
        });
});

// /api/posts/list/:id
router.get('/list/:id', (req, res) => {
    console.log('쿼리', { _id: req.params.id });
    Post.findOne({ _id: req.params.id })
        .populate('userId')
        .exec((err, post) => {
            if (err) {
                console.log('여기까지왓니?');
                return res.status(400).json({ success: false, err }); //400에러에대한코드  .해줘야 에러발생했을때 console에 뜸
            }
            res.status(200).json({ success: true, post });
            console.log('성공여기까지왓니?dd^_^dd', post);
        });
});

//삭제하자~~~~

router.delete('/:id', (req, res) => {
    console.log('삭제오호 여기까지온거가??ㅋㅋ', { _id: req.params.id });
    Post.deleteOne({ _id: req.params.id })
        .populate('userId')
        .exec((err) => {
            if (err) {
                console.log('여기까지왓니?에러다 ㅋ');
                return res.status(404).json({ message: 'post not found', err }); //400에러에대한코드  .해줘야 에러발생했을때 console에 뜸
            }
            res.status(200).json({ success: true });
            console.log('성공!여기까지왓니?dd^_^dd');
        });
});
// //수정하기

// router.put('/:id', function (req, res, next) {
//     const post_id = req.params.id;
//     const { title, body, tags } = req.body;

//     try {
//         var post = Post.findById(post_id);
//         if (!post) return res.status(404).json({ message: 'post not found' });
//         post.title = title;
//         post.body = body;
//         post.tags = tags;
//         var output = post.save();
//         console.log('Update 완료');
//         res.status(200).json({
//             message: 'Update success',
//             data: {
//                 post: output,
//             },
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: err,
//         });
//     }

// });

//수정하기 2
// router.post('/update/:id', function (req, res) {
//     Post.findById(req.params.id, function (err, post) {
//         console.log('수정날라오는거니?????...ㅎㅎ', req.params.id);
//         if (err) return res.status(500).json({ error: 'database failure' });
//         if (!post) return res.status(404).json({ error: 'post not found' });

//         if (req.body.title) post.title = req.body.title;
//         if (req.body.body) post.body = req.body.body;
//         if (req.body.tags) post.tags = req.body.tags;

//         post.save(function (err) {
//             if (err) res.status(500).json({ error: 'failed to update' });
//             res.json({ message: 'post updated' });
//         });
//     });
// });

//수정하기 33
router.post('/update/:id', function (req, res) {
    Post.findOneAndUpdate(
        { _id: req.params.id, comments: { $elemMatch: { _id: req.params.id } } },
        { $set: { 'comments.$.memo': modifiedtext } },
        function (err, results) {
            if (err) throw err;
            console.log(results);
            if (results) {
                Post.find({ _id: req.params.id }, function (err, reply) {
                    if (err) throw err;
                    console.log('reply after modifying', reply[0].comments);
                    res.send({ reply: reply[0].comments });
                });
            }
        }
    );
});

module.exports = router;
