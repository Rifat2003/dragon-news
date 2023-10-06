import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const location = useLocation()
    // const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result);


            // navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="border-[#FFFFFF] border-2 bg-slate-50  w-[800px] h-[700px] mt-12 ml-36 rounded-md">
                <h2 className="text-center mt-[100px] font-bold text-3xl">Please Register</h2>
                <hr className="w-[450px] ml-[180px] mt-16 mb-16" />
                <form onSubmit={handleRegister} className="w-1/2 ml-[200px]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl mb-4">Your name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="border h-14 pl-2 bg-gray-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl mb-4">Photo url</span>
                        </label>
                        <input type="text" placeholder="Photo url" name="photo" className="border h-14 pl-2 bg-gray-200" />
                    </div>

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
                        <button className="btn bg-[#403F3F] text-white rounded-sm mb-16 ">Register</button>
                    </div>
                    <p className="text-center pb-10"><small>Already have account? please <Link to='/login'><span className="text-red-500">Login</span></Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Register;