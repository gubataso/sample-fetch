import React from 'react'
import useGetPosts from './hooks/useGetPosts'
import PostCard from './components/PostCard'
import SkeletonCard from './components/SkeletonCard'



function App() {
  const posts = useGetPosts()
  return (
    <>
      <div className='flex justify-center flex-grow flex-wrap'>
        {
          posts ? posts.map(post => <PostCard key={post.id} post={post} />) :
          <SkeletonCard />
        }
      </div>
    </>
  )
}

export default App
