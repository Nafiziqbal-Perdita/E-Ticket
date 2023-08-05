import sohoj from "../photo/shohoz_logo.png";
import jatri from "../photo/Jatri-logo.webp";
import { useEffect } from "react";

const cart = ({ name, type, route, time, seat, price, photo }) => {
  
  

  return (
    <>
      <div className="mt-2 p-2 w-11/12 h-[178px] tropCart overflow-y-auto flex flex-wrap searchCartRes">
        {/* <!-- catagory items --> */}
        <div className="w-2/3 flex flex-col flex-wrap justify-between">
          <p className="font-serif  text-xl px-1 ">
            {name}, <sub className="font-bold text-sm">{type}</sub>
          </p>
          <p className="bg-slate-50 rounded-md font-semibold text-sm p-1 grow">
            {route.replace(/Route:/g, "")}
          </p>
          <p className="p-1 text-sm font-serif">Time: {time} </p>

          <div className="bg-slate-100 rounded-md p-1 flex space-x-1">
            <p className="text-sm font-serif">Price: {price} </p>
            <p className="text-sm font-serif">
              | seats: {seat.replace(/Seats/g, " ")}{" "}
            </p>
          </div>
        </div>
        {/* <!-- photo --> */}
        <div className="w-1/3 flex items-center justify-center">
          <div className="">
            <img
              src={photo === "sohoj" ? sohoj : jatri}
              className="rounded-full cartImageRes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
