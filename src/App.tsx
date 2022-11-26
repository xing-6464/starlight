import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

const App: React.FC = () => {
  return (
    <>
      <Button className='custom'>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >Hello</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' target='_blank'>西瓜</Button>
    </>
  )
}

export default App
