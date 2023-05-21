import { useContext } from 'react'
import { LayoutContext } from '../context/LayoutProvider'
import { Overlay } from './Overlay'
import { ButtonDisplay } from './ButtonDisplay'
import { Screen } from './Screen'
import Grid from '@mui/material/Unstable_Grid2'

export function Layout() {
  const { headerHeight, contentHeight, footerHeight } = useContext(LayoutContext)
  const screenBG = '#343541'

  return (
    <>
      <Overlay />
      <ButtonDisplay />
      <Grid container>
        <Grid width='10%' />
        <Grid width='6%'>
          <div style={{ marginTop: headerHeight * 0.9, height: contentHeight * 1.1, background: screenBG }} />
        </Grid>

        <Grid width='68%'>
          <Grid>
            <div style={{ height: headerHeight * 0.5 }} />
            <div style={{ height: headerHeight * 0.5, background: screenBG }} />

            <div style={{ height: contentHeight, background: screenBG }}>
              <Screen />
            </div>

            <div style={{ height: footerHeight, background: screenBG }} />
          </Grid>
        </Grid>

        <Grid width='6%'>
          <div style={{ marginTop: headerHeight * 0.9, height: contentHeight * 1.1, background: screenBG }} />
        </Grid>
        <Grid width='10%' />
      </Grid>
      <Grid container>
        <div style={{
          height: window.innerHeight - headerHeight - contentHeight - footerHeight,
          width: '100vw',
          display: 'flex',
          boxSizing: 'border-box',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '20px',
          background: '#343541',
          color: 'white',
          fontSize: '1.4vw',
        }} >
        </div>
      </Grid>
    </>
  )
}
