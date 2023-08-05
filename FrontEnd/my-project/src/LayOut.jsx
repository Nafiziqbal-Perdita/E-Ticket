import NavBar from "./Nav Bar/NavBar";
import SearchBar from "./search Module/SearchBar";
import SearchResult from "./Result/SearchResult";
import Land from "./Land";
import Loading from "./Loading/Loading";
import { useTicket } from "./Context/TicketContext";

const LayOut = () => {
  const { ticket, loading } = useTicket();

  return (
    <div className="  h-screen w-screen bg-gray-200 grid grid-cols-12 grid-rows-12">
      {/* navbar  */}
      <NavBar />
      {/* search utility */}

      <SearchBar />

      {(loading===false && ticket.length===0) && <Land />}
      {loading === true && <Loading />}

      {/* result utility  */}

      {ticket.length != 0 && <SearchResult />}
    </div>
  );
};

export default LayOut;
