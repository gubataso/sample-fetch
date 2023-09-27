import React from 'react'

function PostCard(props) {
  return (
    <div className='shadow-2xl m-5 w-2/5 h-60 border rounded-lg p-5'>
      <div>
        UserId:
        {props.post.userId}
      </div>
      <div>
        Id:
        {props.post.id}
      </div>
      <div>
        Title:
        {props.post.title}
      </div>
      <div>
        Description:
        <p className='text-ellipsis overflow-hidden'>
          {props.post.body}
        </p>
        
      </div>
    </div>
  )
}

export default PostCard