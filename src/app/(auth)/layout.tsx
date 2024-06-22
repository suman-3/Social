import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
   <div className='w-full h-[calc(97vh-80px)] flex items-center justify-center'>
    {children}
   </div>
  )
}

export default AuthLayout