import { useState } from 'react';
import { PropTypes } from 'prop-types';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { NearMeOutlined } from '@mui/icons-material';

export function UserInput({ sendMessage }) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(userInput);
    document.getElementById('input-form').reset()
  }

  return (
    <Box component='form' id='input-form' onSubmit={handleSubmit} style={{
      display: 'flex',
      flexWrap: 'nowrap',
    }}>
      <InputBase
        name='user'
        placeholder='Send a message.'
        inputProps={{ 'aria-label': 'write a message' }}
        onChange={e => setUserInput({ [e.target.name]: e.target.value })}
        style={{
          boxSizing: 'border-box',
          padding: '10px',
          paddingTop: '20px',
          background: '#343541',
          color: 'white',
          width: '100%'
        }}
      />
      <IconButton
        type='button'
        aria-label='send'
      >
        <NearMeOutlined color='info' />
      </IconButton>
    </Box>
  )
}

UserInput.propTypes = {
  sendMessage: PropTypes.func,
}