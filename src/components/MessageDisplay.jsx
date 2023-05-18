import { Message } from './Message'
import { Stack } from '@mui/material'

export function MessageDisplay() {
  return (
    <Stack direction='column'>
      <Message isUser>Hola</Message>
      <Message>Hola</Message>
      <Message isUser>Hola</Message>
      <Message>Hola</Message>
      <Message isUser>Hola</Message>
      <Message>Hola</Message>
      <Message isUser>Hola</Message>
      <Message>Hola</Message>
      <Message isUser>Hola</Message>
      <Message>Hola</Message>
    </Stack>
  )
}