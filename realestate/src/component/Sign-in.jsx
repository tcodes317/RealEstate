import { useState } from "react";

function SignIn(){
    const [formData, setFormData] = useState({});
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    };
    console.log(formData);
    return(
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="username" className="border p-3 rounded-lg" onChange={handleChange}/>
                    <input type="password" placeholder="username" className="border p-3 rounded-lg" id="password" onChange={handleChange}/>
                    <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                        <span>Sign In</span>
                    </button>
                </form>
            </div>
        </>
    )
}
export default SignIn