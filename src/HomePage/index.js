import React from 'react'
import Navbar from '../components/Navbar'
import withRoot from '../theme/withRoot'

function HomePage() {
  return (
    <div className="IndexPage">
      <Navbar />
    </div>
  )
}

export default withRoot(HomePage)
