const Card = ({icon, heading, description}) => {
  return (
    <>
      <div className="p-6 bg-white hover:-translate-y-1 transition duration-300 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-w-100 flex flex-col items-start gap-1.8">
        <img
          className="rounded-md w-7 ml-2 object-cover"
          src={icon}
        />
        <p className="text-gray-950 text-2xl font-semibold ml-2 mt-4">
         {heading}
        </p>
        <p className="text-gray-500 text-[16px] mt-2 ml-2 mb-2">
            {description}
        </p>
      </div>
    </>
  );
};

export default Card;
