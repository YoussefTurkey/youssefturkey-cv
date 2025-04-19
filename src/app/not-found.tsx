import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <h2 className='text-[100px] font-bold'>Error <span className='underline underline-offset-8 decoration-[#02ec63]'>404</span></h2>
      <p className='pt-3 text-[24px] capitalize'>We could not find this page...</p>
      <Link href="/" className='border-1 border-[#02ec63] rounded-md px-3 py-2 my-3 hover:bg-[#02ec63] hover:text-[#2b2b2b] transition-all font-bold'>Return Home</Link>
    </div>
  )
}