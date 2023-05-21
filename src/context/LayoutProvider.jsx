import { useReducer, createContext, useEffect } from 'react';
import LayoutReducer from './LayoutReducer.js';

const headerRatio = 7
const contentRatio = 3.2
const footerRatio = 6.2

const initialState = {
  headerHeight: window.innerWidth / headerRatio,
  contentHeight: window.innerWidth / contentRatio,
  footerHeight: window.innerWidth / footerRatio,
}

export const LayoutContext = createContext(initialState);

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LayoutReducer, initialState);
  
  const handleResize = () => {
    dispatch({ type: 'SET_HEADER_HEIGHT', payload: (window.innerWidth / headerRatio) })
    dispatch({ type: 'SET_CONTENT_HEIGHT', payload: (window.innerWidth / contentRatio) })
    dispatch({ type: 'SET_FOOTER_HEIGHT', payload: (window.innerWidth / footerRatio) })
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        headerHeight: state.headerHeight,
        contentHeight: state.contentHeight,
        footerHeight: state.footerHeight,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
