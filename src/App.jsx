import { useReducer, useState } from "react"
import Main from "./components/Main"
import { BookContext, ThemeContext } from "./context"
import { cartReducer, initialState } from "./reducer/CartReducer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(cartReducer,initialState)
  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <BookContext.Provider value={{state, dispatch}}>
          <Main />
          <ToastContainer />
      </BookContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
