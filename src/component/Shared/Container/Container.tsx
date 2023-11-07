import React, {ReactNode, FC} from 'react'

interface containerProps {
    children:ReactNode
}
const Container:FC<containerProps> = ({children}) => {
  return (
    <div className='px-[2rem] lg:px-[10rem]'>{children}</div>
  )
}

export default Container