import { MessageDisplay } from './MessageDisplay'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { UserInput } from './UserInput'

export function Screen() {
  return (
    <>
      <Scrollbars>
        <MessageDisplay />
      </Scrollbars>
      <UserInput />
    </>
  )
}