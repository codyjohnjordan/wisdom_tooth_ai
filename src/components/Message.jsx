import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './TypingEffect.scss'

export function Message ({ text, typingDelay, cursorBlinkInterval, shouldType }) {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const isAnimationFinished = currentIndex >= text.length

  useEffect(() => {
    let timeout = null

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setTypedText(prevTypedText => prevTypedText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }
    }

    if (shouldType && currentIndex < text.length) {
      timeout = setTimeout(typeNextCharacter, typingDelay)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [text, typingDelay, currentIndex, shouldType])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prevShowCursor => {
        if (isAnimationFinished && !prevShowCursor) {
          clearInterval(blinkInterval)
          return false
        }
        return !prevShowCursor
      })
    }, cursorBlinkInterval)

    return () => {
      clearInterval(blinkInterval)
    }
  }, [cursorBlinkInterval, isAnimationFinished])

  return (
    <div className="typing-effect">
      {shouldType ? <span>{typedText}</span> : <span>{text}</span>}
      {shouldType && showCursor && <span className="blinking-cursor" />}
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  typingDelay: PropTypes.number,
  cursorBlinkInterval: PropTypes.number,
  shouldType: PropTypes.bool,
}

Message.defaultProps = {
  typingDelay: 50,
  cursorBlinkInterval: 500,
  shouldType: true,
}
