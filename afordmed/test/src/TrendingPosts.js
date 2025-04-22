import React, { useState, useEffect } from 'react';

function TrendingPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts?type=popular')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error('Error fetching trending posts:', err));
    }, []);

    return (
        <div>
            <h1 className="mb-4">Trending Posts</h1>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.postId} className="col-12 mb-3">
                        <div className="card">
                            <img
                                src={`https://picsum.photos/200/150?random=${post.postId}`}
                                className="card-img-top"
                                alt="Post"
                            />
                            <div className="card-body">
                                <p className="card-text">{post.content}</p>
                                <p className="card-text text-muted">
                                    Comments: {post.commentCount || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingPosts;