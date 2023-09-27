import React from 'react'

function SkeletonCard() {
  const Card = () => (
    <div className='animate-pulse bg-slate-50 shadow-2xl m-5 w-2/5 h-60 border rounded-lg p-5'>
      <div className='text-white'>
        test
      </div>
    </div>
    )
const Times = (num) => {
    const arr = []
    for(let i = 0; i < num; i++){
        arr.push(i)
    }
    return (
        arr.map(a => <Card />)
    )
}
  return (
    Times(100)
  )
}

export default SkeletonCard