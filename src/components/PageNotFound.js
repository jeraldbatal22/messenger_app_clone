import React from 'react'
import { useLocation } from 'react-router'

const PageNotFound = () => {
  const location = useLocation()
  return (
    <div>
      <h1>Sorry the page {location.pathname} doesn't exist!.</h1>
    </div>
  )
}

export default PageNotFound
