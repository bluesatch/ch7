import React from 'react';
import useJazzyNews from '../hooks/useJazzyNews';

const NewsFeed =({ url})=> {
    const posts = useJazzyNews;

    return (
        <div>
            <h1>{posts.length} articles</h1>
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
} 

export default NewsFeed;