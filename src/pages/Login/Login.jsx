import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location:', location );
    

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

       signIn(email, password)
       .then(result =>{
        console.log(result);

        navigate(location?.state ? location.state : '/');
       })
       .catch(error =>{
        console.error(error);
       })

        

    }

    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <div className="border-[#FFFFFF] border-2 bg-slate-50  w-[800px] h-[700px] mt-12 ml-36 rounded-md">
                <h2 className="text-center mt-[100px] font-bold text-3xl">Login your account</h2>
                <hr className="w-[450px] ml-[180px] mt-16 mb-16" />
                <form onSubmit={handleLogin} className="w-1/2 ml-[200px]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl mb-4">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name="email" className="border h-14 pl-2 bg-gray-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl mb-4">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name="password" className="border h-14 pl-2 bg-gray-200" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white rounded-sm mb-16 ">Login</button>
                    </div>
                    <p className="text-center"><small>Do not have account? please <Link to='/register'><span className="text-red-500">register</span></Link></small></p>
                </form>
            </div>



        </div>
    );
};

export default Login;