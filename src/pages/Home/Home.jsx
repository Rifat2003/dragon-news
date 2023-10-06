import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  
     const news = useLoaderData();
   

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-poppins font-bold">Dragon news Home</h2>
            <div className=" mt-20 grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                   {/* news here */}
                   {
                    news.map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
                   }
                </div>
                <div>
                  <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;