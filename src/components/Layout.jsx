import { useEffect, useState } from 'react'
import { Overlay } from './Overlay'
import { ButtonDisplay } from './ButtonDisplay'
import { Screen } from './Screen'

export function Layout() {
  const screenBG = '#343541'
  const heightToWidthRatio = 1064 / 1864

  const initialHeight = window.innerHeight / window.innerWidth > heightToWidthRatio ? `calc(0.36 * 100vw)` : `calc(0.62 * 100vh)`;
  const initialWidth = window.innerHeight / window.innerWidth > heightToWidthRatio ? `calc(0.74 * 100vw)` : `calc(1.28 * 100vh)`;

  const [height, setHeight] = useState(initialHeight)
  const [width, setWidth] = useState(initialWidth)

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerHeight / window.innerWidth > heightToWidthRatio) {
        setHeight(`calc(0.36 * 100vw)`)
        setWidth(`calc(0.74 * 100vw)`)
      } else {
        setHeight(`calc(0.62 * 100vh)`)
        setWidth(`calc(1.28 * 100vh)`)
      }
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions)
  }, [heightToWidthRatio])

  return (
    <>
      <Overlay />
      <ButtonDisplay />
      <div style={{
        display: 'flex',
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-61%)',
        height: height,
        width: width,
        background: screenBG,
        padding: window.innerHeight / window.innerWidth > heightToWidthRatio ? '3vw' : '5vh',
      }}>
        <Screen />
      </div>
      <div style={{ position: 'absolute', width: '100vw', bottom: 0, height: 'calc(50vh - 100vw * 0.28)', background: screenBG }} />
    </>
  )
}
