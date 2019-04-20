import React from 'react'
import Typography from '@material-ui/core/Typography'
import withRoot from '../theme/withRoot'

function HomePage() {
  return <Typography variant="h1">Hello World</Typography>
}

export default withRoot(HomePage)
