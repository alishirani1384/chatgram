import Messages from '@/components/Chat-Threads/Messages'
import Sidebar from '@/components/SideBar/Sidebar'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto flex'>
        {/* SIDEBAR */}
        <Sidebar/>
        {/* MESSAGES */}
        <Messages/>
      </div>
    </div>
  )
}

export default page