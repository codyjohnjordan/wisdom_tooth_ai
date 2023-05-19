import backgroundImage from '../assets/vintage_computer_edit.png'

export function Overlay() {
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
      zIndex: 1,
      pointerEvents: 'none'
    }} />
  )
}
