import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { NearMe } from '@mui/icons-material';

export function UserInput() {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userInput)
    document.getElementById('input-form').reset()
  }

  return (
    <Box component='form' id='input-form' onSubmit={handleSubmit} style={{
      display: 'flex',
      flexWrap: 'nowrap',
      }}>
      <InputBase
        placeholder='Send a message.'
        inputProps={{ 'aria-label': 'send a message' }}
        onChange={e => setUserInput(e.target.value)}
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
        aria-label='search'
      >
        <NearMe color='info'/>
      </IconButton>
    </Box>
  )
}