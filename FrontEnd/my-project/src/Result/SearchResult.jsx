import Trop from "./Trop";
import { ticketData } from "../Data/ticketData";
import { busData } from "../Data/data";

const SearchResult = () => {
  return (
    <>
      <div>
        <div class="bg-slate-400 mt-4 text-center">
          <span class=" text-xl font-semibold ">Find Your Results</span>
        </div>

        {ticketData.map((data) => (
          <Trop name={data.name} route={data.route} time={data.DepTime} seat={data.seats} price={data.price} />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
