import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<div className='h-full items-center flex justify-center'>
  {children}
</div>
 
  )
}

