const postService = {
    load: function(id, limit) {
        // return fetch(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`)
       return fetch(`http://localhost:9999/api/origami${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`)
            .then(res => res.json());
    }
};

export default postService;