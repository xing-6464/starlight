import React, { useState, createContext } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: number) => void
export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode 
  style?: React.CSSProperties
  onSelect?: SelectCallBack,
  children?: React.ReactNode
}
interface IMenuContext {
  index: number
  onSelect?: SelectCallBack
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode = 'horizontal',
    style,
    defaultIndex = 0,
    children,
    onSelect
  } = props
  const [ currentActive, setCurrentActive ] = useState(defaultIndex)

  const classes = classNames('star-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

export default Menu
