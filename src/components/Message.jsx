import { PropTypes } from 'prop-types'
import { IconButton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

export function Message({ children, isUser }) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        background: isUser ? '#343541' : '#444654',
        color: 'white',
        padding: '10px'
      }}
    >
      <IconButton
        type='button'
        aria-label='search'
      >
        <AccountCircle/>
      </IconButton>
      {children}
    </div>
  )
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  isUser: PropTypes.bool,
}