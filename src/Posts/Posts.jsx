import React from 'react';
import Post from './Post/Post';

import './Posts.css';

function Posts() {
    return (
        <div className="Posts">
            <Post imageUrl="logo192.png" imageAlt="origami" author="some author">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex accusamus vero eligendi aut molestiae ratione ipsam sit rem autem. Cumque itaque amet eius eos! Nihil nisi delectus culpa facilis!</Post>
        </div>
    )
}

export default Posts;