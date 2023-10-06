import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const {title, details, img, image_url, _id} = aNews;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div>
                        {/* <img src={} alt="" /> */}
                    </div>
                    <h2 className="card-title">
                       {title}
                        
                    </h2>
                <figure><img className="w-full h-[300px]" src={image_url} alt="Shoes" /></figure>
                    {
                        details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-orange-400 font-semibold">Read more...</Link></p>
                        :
                        <p>{details}</p>
                    }
                    <hr />
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;