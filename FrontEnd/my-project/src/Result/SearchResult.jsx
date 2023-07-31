import Trop from "./Trop";
import { ticketData } from "../Data/ticketData";
import { busData } from "../Data/data";

const SearchResult = () => {
  return (
    <>
      <div className=" resultCart col-span-full row-start-7 row-end-13 m-2 bg-white  flex-row justify-center  overflow-auto  ">
        {/* <!-- every cart for Results --> */}
      
    
    {
      ticketData.map((data,i)=>(

        <Trop key={i}  name={data.name} route={data.route} time={data.DepTime} seat={data.seats} price={data.price}     /> 

      ))
    }



      </div>
    </>
  );
};

export default SearchResult;
