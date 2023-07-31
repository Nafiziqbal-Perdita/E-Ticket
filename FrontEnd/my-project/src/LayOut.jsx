import NavBar from "./Nav Bar/NavBar";
import SearchBar from "./search Module/SearchBar";
import SearchResult from "./Result/SearchResult";

import { TicketProvider } from "./Context/TicketContext";

const LayOut = () => {
  return (
    <div className="  h-screen w-screen bg-gray-200 grid grid-cols-12 grid-rows-12">
      {/* navbar  */}
      <NavBar />
      {/* search utility */}

      <TicketProvider>
        <SearchBar />
        {/* result utility  */}
        <SearchResult />
      </TicketProvider>
    </div>
  );
};

export default LayOut;
