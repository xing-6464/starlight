import React from 'react'
import './App.css'
// import Button, { ButtonSize, ButtonType } from './components/Button/button'
// import Alert from './components/Alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Menu defaultIndex={0}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link1
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App
