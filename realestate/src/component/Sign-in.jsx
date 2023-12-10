export default function SignIn() {
  return (
    <div className='xs:relative'>
      <div className='xxs:px-5 xl:mx-auto xl:w-6/12 xs:flex xs:flex-col xs:py-8 xs:items-center xs:justify-center'>
        <h1 className='xs:font-bold xs:pb-6 xs:text-2xl'>Sign In</h1>
        <form action="" method="post">
          <input type="email" placeholder="Email" className='border-2 w-full p-3 mb-3'/>
          <input type="password" placeholder="Password" className='border-2 w-full p-3'/>
          <button className="p-3 bg-slate-500 text-white rounded-xl my-3 block text-center w-full">
            <span>SIGN IN</span>
          </button>
          <button className="p-3 bg-red-700 mb-3 rounded-xl text-white block text-center w-full">
            <span>CONTINUE WITH GOOGLE</span>
          </button>
          <div className='xs:flex xs:items-center'>
            <span>Don't Have an account?</span>
            <a href="/sign-up" hrefLang="" className='ml-2'>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}