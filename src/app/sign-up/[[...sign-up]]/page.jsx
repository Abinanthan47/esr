import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'
import login from '../../../../public/login.jpg'

export default function Page() {
  return (
    <div className='grid grid-cols-2 overflow-y-hidden'>
        <Image src={login} alt='login'  className='w-full object-cover h-screen ' />
        <div className=' flex justify-center items-center '>
        <SignUp className='h-96'/>
        </div>
    </div>
  
       
    

  )
}