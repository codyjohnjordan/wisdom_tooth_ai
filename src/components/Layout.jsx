import { useContext } from 'react'
import { LayoutContext } from '../context/LayoutProvider'
import { Overlay } from './Overlay'
import { ButtonDisplay } from './ButtonDisplay'
import { Screen } from './Screen'
import Grid from '@mui/material/Unstable_Grid2'

export function Layout() {
  const { headerHeight, contentHeight, footerHeight } = useContext(LayoutContext)

  return (
    <>
      <Overlay />
      <ButtonDisplay/>
      <Grid container>
        <Grid width='16%' />

        <Grid width='68%'>
          <Grid>
            <div style={{ height: headerHeight }} />

            <div style={{ height: contentHeight }}>
              <Screen />
            </div>

            <div style={{ height: footerHeight }} />
          </Grid>
        </Grid>

        <Grid width='16%' />
      </Grid>
      <Grid container>
        <div>Hola</div>
      </Grid>
    </>
  )
}
