import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from '../store/slices/PostSlice'

import PostsExcerpt from './PostsExcerpt'


const Todos = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
      if(postStatus === 'idle'){
        dispatch(fetchPosts())
      }      
    }, [postStatus])

    let content;
    if(postStatus === 'loading'){
        content = <p>'Loading...'</p>

    }else if(postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
        console.log(content)

    }else if(postStatus === 'failed'){
        content = <p>{error}</p>
    }
    


    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default Todos
