import { PropTypes } from 'prop-types'
import { Screen } from './Screen'
import { Grid } from '@mui/material'

export function Layout({ headerHeight, contentHeight }) {
  return (
    <>
      <Grid
        container
        direction='column'
        wrap='nowrap'
        style={{ height: '100vh', alignItems: 'center' }}
      >
        <Grid style={{ height: headerHeight }} />
        <Grid
          container
          direction='column'
          wrap='nowrap'
          style={{ width: '68%', height: contentHeight }}>
          <Screen />
        </Grid>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  headerHeight: PropTypes.number.isRequired,
  contentHeight: PropTypes.number.isRequired,
}