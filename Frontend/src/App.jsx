import React from 'react'
import TicTacToe from './components/Tic-Tac-Toe/TicTacToe'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider>
      <div>
        <TicTacToe/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </ThemeProvider>
  )
}

export default App