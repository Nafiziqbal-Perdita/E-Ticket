import Trop from "./Trop";
import { ticketData } from "../Data/ticketData";
// import { busData } from "../Data/data";
import { useTicket } from "../Context/TicketContext";
import { useEffect } from "react";

const SearchResult = () => {
  const { ticket } = useTicket();

  // console.log(ticket);

  ticket.map((e,i) => console.log( "index"+i+" "+  e.name + " " + e.price));

  return (
    <>
      <div className=" resultCart col-span-full row-start-7 row-end-13 m-2 bg-white  flex-row justify-center  overflow-auto  ">
        {/* <!-- every cart for Results --> */}

        {ticket.map((data, i) => (
          <Trop
            key={i}
            name={data.name}
            route={data.route}
            time={data.DepTime}
            seat={data.seats}
            price={data.price}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
