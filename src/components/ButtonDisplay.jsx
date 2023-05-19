import { useContext } from 'react'
import { LayoutContext } from '../context/LayoutProvider'
import { ButtonBase } from '@mui/material'

export function ButtonDisplay() {
  const { headerHeight } = useContext(LayoutContext)

  const logoStyle = {
    position: 'fixed',
    top: headerHeight,
    fontSize: '1.8vw',
    color: '#504c42',
    left: 'calc(50% - 6.6vw)',
    zIndex: 2,
  }

  const buttonStyle = {
    boxSizing: 'border-box',
    position: 'fixed',
    top: '40px',
    fontSize: '1.8vw',
    color: '#504c42',
    border: '2px solid #aea79a',
    borderRadius: '20px',
    backgroundColor: '#d4d4c9',
    padding: '0.4vw 1vw',
    zIndex: 2,
  }

  return (
    <>
      <ButtonBase
        style={logoStyle}>
        WisdomTooth AI
      </ButtonBase>
      <ButtonBase
        style={{ ...buttonStyle, left: '20%' }}>
        About
      </ButtonBase>
      <ButtonBase
        style={{ ...buttonStyle, left: '28%' }}>
        Contact
      </ButtonBase>
    </>
  )
}
