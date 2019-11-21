import React from 'react';
import postService from '../../services/post-service';
import Post from '../Posts/Post/Post';

export default class Detail extends React.Component {
    state = {
        posts: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        postService.load(id)
            .then(post => {
                this.setState({ post });
            });
    }

    render() {
        const { post } = this.state;
        return <Post description={post.description} author={post.author.username} />
    }
}