import React from 'react';
import propTypes from 'prop-types';
import Post from './Post/Post';
import postService  from '../../services/post-service';

import './Posts.css';

class Posts extends React.Component {
    state = {
        posts: null
    }

    componentDidMount() {
        postService.load(null, this.props.limit)
            .then(posts => {
                this.setState({ posts });
            });
    }

    render() {
        const { posts } = this.state;
        return posts ? 
            <div className="Posts">
                {posts.map(post => (
                    <Post key={post._id} imageUrl="/logo192.png" imageAlt="post" author={post.author.username}>{post.description}</Post>
                ))}
            </div>
         : <div>Loading...</div>
    }
}

Posts.propTypes = {
    limit: propTypes.number
}

export default Posts;