import backgroundImage from '../assets/vintage_computer_edit.png'

export function Overlay() {
  return (
    <div style={{
      boxSizing: 'border-box',
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundAttachment: 'fixed',
      backgroundPositionY: '50%',
      zIndex: 1,
      pointerEvents: 'none',
    }} />
  )
}
