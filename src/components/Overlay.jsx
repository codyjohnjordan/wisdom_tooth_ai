import { PropTypes } from 'prop-types'
import { ButtonBase } from '@mui/material'
import backgroundImage from '../assets/vintage_computer_edit.png'

export function Overlay({ buttonHeight, headerHeight }) {
  const logoStyle = {
    position: 'fixed',
    top: headerHeight,
    fontSize: '1.8vw',
    color: '#504c42',
    left: 'calc(50% - 6.6vw)',
  }

  const buttonStyle = {
    boxSizing: 'border-box',
    position: 'fixed',
    top: buttonHeight,
    fontSize: '1.8vw',
    color: '#504c42',
    border: '2px solid #aea79a',
    borderRadius: '20px',
    backgroundColor: '#d4d4c9',
    padding: '0.4vw 1vw',
  }

  return (
    <div style={{
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      backgroundAttachment: 'fixed',
      zIndex: 2,
      pointerEvents: 'none'
    }}>
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
    </div>
  )
}

Overlay.propTypes = {
  buttonHeight: PropTypes.number.isRequired, 
  headerHeight: PropTypes.number.isRequired, 
}