import React, { useEffect, useState } from 'react'
import '../Page.css'
import TweetBox from './TweetBox'
import Post from './Post/Post';

const Feed = () => {

  const [posts , setPosts]  = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/post')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [posts])

  return (
    <div>
      <TweetBox />
      {
        posts.map( p => <Post key={p.id} p={p} />) 
      }
    </div>
  )
}

export default Feed
