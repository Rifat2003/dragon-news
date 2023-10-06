import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className=" p-4 font-poppins">
            <div>
                <h2 className="font-bold text-xl mb-7">Login with</h2>
                <button className="btn btn-outline w-full mb-2">
                <FaGoogle></FaGoogle>
                login with google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                login with Github
                </button>
            </div>
            <div className="mt-8">
                <h2 className="font-bold text-lg mb-7">Find us on</h2>
                <a className="flex p-4 items-center border-2 rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center border-2 border-t-0" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 items-center border-2 border-t-0" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
                
            </div>
            {/* q zone */}

            <div className="bg-gray-100">
                <h2 className="font-bold text-2xl mt-3 mb-7 pl-4">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img className="pb-4" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;