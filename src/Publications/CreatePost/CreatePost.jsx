import React from 'react';
import Posts from '../Posts/Posts';

import './CreatePost.css';

export default function CreatePost() {
    return <div>
        <form>
            <textarea></textarea>
            <button>Post</button>
        </form>
        <div>
            <Posts />
        </div>
    </div>
}