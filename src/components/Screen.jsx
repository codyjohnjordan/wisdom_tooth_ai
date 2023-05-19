import { useState } from 'react'
import { MessageDisplay } from './MessageDisplay'
import { UserInput } from './UserInput'

export function Screen() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (data) => {
    setMessages([...messages, { type: 'user', content: data.user }])
    console.log(data)
  }

  return (
    <div style={{
      display: 'flex',
      boxSizing: 'border-box',
      flexFlow: 'column nowrap',
      height: '100%',
      width: '100%'
    }}>
      <MessageDisplay messages={messages} />
      <UserInput sendMessage={sendMessage} />
    </div>
  )
}