import React, { useState } from 'react'
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
export default function SignUp() {
    const [inputs, setInputs] = useState(
        {
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: ""
        })
        const {loading,signUp} = useSignUp()
    const handleCheckGender = (gender) => {
        setInputs({ ...inputs, gender })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl text-gray-300 font-semibold text-center">Sign Up
                    <span className="text-blue-500">ChatApp</span>
                </h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" className="w-full h-10 input input-bordered"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="w-full h-10 input input-bordered"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="w-full h-10 input input-bordered"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" className="w-full h-10 input input-bordered"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckBox selectedGender={inputs.gender} onCheckboxChange={handleCheckGender} />
                    <Link className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block " to="/login">Already have an account?</Link>
                    <div >
                        <button type='submit' className="btn btn-sm btn-block" disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "SignUp"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// stater code
// export default function SignUp() {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl text-gray-300 font-semibold text-center">Sign Up
//                     <span className="text-blue-500">ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text" className="w-full h-10 input input-bordered" />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input type="text" className="w-full h-10 input input-bordered" />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="password" className="w-full h-10 input input-bordered" />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input type="password" className="w-full h-10 input input-bordered" />
//                     </div>
//                     <GenderCheckBox />
//                     <a className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block " href="#">Already have an account?</a>
//                     <div >
//                         <button className="btn btn-sm btn-block">SignUp</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }