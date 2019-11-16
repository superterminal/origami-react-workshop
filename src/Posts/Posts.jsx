import React from 'react';
import Post from './Post/Post';
import postService  from '../services/post-service';

import './Posts.css';

class Posts extends React.Component {
    state = {
        posts: null
    }

    componentDidMount() {
        postService.load()
            .then(posts => {
                this.setState({ posts });
            });
    }

    render() {
        const { posts } = this.state;
        return posts ? 
            <div className="Posts">
                {posts.map(post => (
                    <Post key={post.id} imageUrl="/logo192.png" imageAlt="post" author={post.userId}>{post.body}</Post>
                ))}
            </div>
         : <div>Loading...</div>
    }
}

export default Posts;