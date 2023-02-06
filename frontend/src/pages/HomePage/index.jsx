import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    return (
    <>
      
    </>
  )
}
