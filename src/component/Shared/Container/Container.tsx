import React, {ReactNode, FC} from 'react'

interface containerProps {
    children:ReactNode
}
const Container:FC<containerProps> = ({children}) => {
  return (
    <div className='px-[2rem]  xl:px-[3rem] 2xl:px-[20rem]'>{children}</div>
  )
}

export default Container