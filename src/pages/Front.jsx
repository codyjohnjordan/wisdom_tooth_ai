import { useEffect, useState } from 'react'
import { Overlay } from '../components/Overlay'
import { Layout } from '../components/layout'

export function Front() {
  const headerRatio = 10
  const contentRatio = 3.25
  const logoRatio = 6
  const buttonRatio = 2.16

  const [headerHeight, setHeaderHeight] = useState((window.innerWidth / headerRatio))
  const [contentHeight, setContentHeight] = useState((window.innerWidth / contentRatio))
  const [buttonHeight, setButtonHeight] = useState((window.innerWidth / buttonRatio))

  const handleResize = () => {
    setHeaderHeight((window.innerWidth / headerRatio))
    setContentHeight((window.innerWidth / contentRatio))
    setButtonHeight((window.innerWidth / buttonRatio))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <>
      <Overlay buttonHeight={buttonHeight} headerHeight={(headerHeight / logoRatio)} />
      <Layout headerHeight={headerHeight} contentHeight={contentHeight} />
    </>
  )
}