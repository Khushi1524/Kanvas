import { Link } from "react-router-dom";

const ProductCard = ({art, index}) => {
  return (
    <>
        <Link to={'/arts/' + art._id} onClick={()=> scrollTo(0, 0)} key={art._id}  className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
          <img src={art.images[0]} alt="" />

          { index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">Best Seller</p>}

            <div className="p-5">
              <div className="flex items-center justify-between gap-1">
                 <p className="text-xl font-medium text-gray-800">{art.name}</p>
                 <div className="flex items-center gap-1">
                 <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FDA708"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#FDA708"></path> </g></svg>4.5</div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xl text-gray-800">${art.price}</p>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">Buy Now</button>
              </div>
            </div>
        </Link>
    </>
  );
};

export default ProductCard;
