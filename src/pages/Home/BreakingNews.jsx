import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex border items-center bg-gray-100 h-16">
            <button className="btn btn-secondary ml-1">Breaking News</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="mr-8" to='/'>
                    I can be a React component, multiple React components...
                </Link>
                <Link className="mr-8" to='/'>
                    I can be a React component, multiple React components...
                </Link>
                <Link className="mr-8" to='/'>
                    I can be a React component, multiple React components...
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;