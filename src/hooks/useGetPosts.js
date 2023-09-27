import React, { useEffect, useState } from 'react'
import { PostIndex } from '../api'
const useGetPosts = () => {
    const [posts, setPosts] = useState(null)

    const refreshPosts = () => {
        const postIndex = PostIndex()
        postIndex.then(json => {
            setPosts(json)
        })
    }

    useEffect(refreshPosts)
    return posts
}

export default useGetPosts