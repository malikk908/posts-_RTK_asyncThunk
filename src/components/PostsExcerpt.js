import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    return (
        <article className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post?.body?.substring(0, 100)}</p>
            <p className="postCredit mb-3 font-normal text-gray-700 dark:text-gray-400">
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />                
            </p>
            
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt
