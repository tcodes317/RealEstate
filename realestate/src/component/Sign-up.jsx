import { useState } from "react";

function SignUp(){
    const [formData, setFormData] = useState({});
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch("/api/auth/signup", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        const data=await res.json();
        console.log(data);
    }
    console.log(formData);
    return(
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit
                } action="" method="post">
                    <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg" onChange={handleChange} />
                    <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg" onChange={handleChange} />
                    <input type="password" placeholder="password" id="password" className="border p-3 rounded-lg" onChange={handleChange} />
                    <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                        <span>Sign Up</span>
                    </button>
                    <button className="bg-red-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                        <span>Continue with google</span>
                    </button>
                </form>
                
                <div className="flex items-center gap-2 mt-5">
                        <span>Have an account?</span>
                        <a href="/sign-in" hrefLang="en" className="text-blue-700">Sign in</a>
                    </div>
            </div>
        </>
    )
}
export default SignUp