import React from 'react'
import { auth } from '../../api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation';

const page = async () => {
    const session = await auth()
    const user = session?.user;
    if (!user){
      console.log("redirected")
        redirect('/login')
    }
    return(
    <div>page</div>
  )
}

export default page