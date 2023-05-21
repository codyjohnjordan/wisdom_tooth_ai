import { Overlay } from './Overlay'
import { ButtonDisplay } from './ButtonDisplay'
import { Screen } from './Screen'
import Grid from '@mui/material/Unstable_Grid2'

export function Layout() {
  const screenBG = '#343541'

  return (
    <>
      <Overlay />
      <ButtonDisplay />
      <Grid container height={'100vh'}>
        <Grid width='10%' />

        <Grid width='80%'>
          <Grid>
            <div style={{ height: 'calc(50vh - 100vw * 0.25)', background: 'none' }} />

            <div style={{ height: 'calc(100vw * 0.31)', background: screenBG, padding: '6vw 6vw 6vw 6vw' }}>
              <Screen />
            </div>
          </Grid>
        </Grid>

        <Grid width='10%' />
      </Grid>
      <div style={{ position: 'absolute', width: '100vw', bottom: 0, height: 'calc(50vh - 100vw * 0.28)', background: screenBG }} />
    </>
  )
}
