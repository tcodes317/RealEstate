export default function SignOut() {
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center" id="ty">
        <div className='bg-white p-4 rounded-xl'>
          <p className='mb-5 font-bold'>Are you sure you want to exit?</p>
          <div className='relative flex justify-center'>
            <button className='p-3 bg-red-400 hover:bg-red-700 px-8'>Yes</button>
            <button className='p-3 px-8 hover:bg-black hover:text-white'>No</button>
          </div>
        </div>
      </div>
    </>
  )
}