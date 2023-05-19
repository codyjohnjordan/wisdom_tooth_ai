import { useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'
import { Message } from './Message'
import { Stack } from '@mui/material'
import { Scrollbars } from 'react-custom-scrollbars-2'

export function MessageDisplay({ messages }) {
  const messagesEnd = useRef(null);

  function scrollToBottom() {
    messagesEnd.current?.scrollIntoView({ behaviour: 'smooth' });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  return (
    <Scrollbars>
      <Stack direction='column'>
        {messages.map((msg, ind) => {
          { msg.type == 'user' && <Message isUser>{msg.content}</Message> }
          { msg.type == 'answer' && <Message>{msg.content}</Message> }
          { ind == messages.length - 1 && <div ref={messagesEnd}></div> }
        })}
      </Stack>
    </Scrollbars>
  )
}

MessageDisplay.propTypes = {
  messages: PropTypes.array,
}