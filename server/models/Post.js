const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//모델은 스키마를 선언해둔것

// Schema.Types.ObjectId -User에 글쓰는사람정보가 등록돼있다 ObjectId를 통해서 User테이블의 데이터를 참조할 수있다 스키마는 하나의 테이블. ref가 User테이블에 걸려있다 참조가 User테이블 , 나는 User의 언더바아이디만 등록했지만 User에 이메일, 네임, 패스워드 정보가 다 들어있다 ref가 그런기능이다. 이런식으로 스키마선언하는것.
const postSchema = mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            maxlength: 50,
        },
        body: {
            type: String,
        },

        tags: {
            type: Array,
            default: [],
        },
        publishedDate: {
            type: Date,

            default: Date.now,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
