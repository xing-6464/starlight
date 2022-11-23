import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

const App: React.FC = () => {
  return (
    <>
      <Button>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >Hello</Button>
      <Button btnType={ButtonType.Link} href='www.xiguan.com'>西瓜</Button>
    </>
  )
}

export default App
