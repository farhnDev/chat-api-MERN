import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const {loading,login} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username,password)
    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl text-gray-300 font-semibold text-center">Login
                    <span className="text-blue-500">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
                    <div>
                        <label className="label p-2" htmlFor="">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input placeholder="Username" className="w-full h-10 input input-boarded" type="text"
                            value={username} onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label p-2" htmlFor="">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input placeholder="Password" className="w-full h-10 input input-boarded" type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 inline-block transition-all duration-500 ">{"Dont't"} have a account?</Link>
                    <div>
                        <button type='submit' className="btn btn-block btn-sm mt-2"
                        disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// stater code
// export default function Login() {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl text-gray-300 font-semibold text-center">Login
//                     <span className="text-blue-500">ChatApp</span>
//                 </h1>


//                 <form action="" className="flex flex-col gap-2">
//                     <div>
//                         <label className="label p-2" htmlFor="">
//                             <span className="text-base label-text">Username</span>
//                         </label>
//                         <input placeholder="Username" className="w-full h-10 input input-boarded" type="text" />
//                     </div>
//                     <div>
//                         <label className="label p-2" htmlFor="">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input placeholder="Password" className="w-full h-10 input input-boarded" type="password" />
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block transition-all duration-500 ">{"Dont't"} have a account?</a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }