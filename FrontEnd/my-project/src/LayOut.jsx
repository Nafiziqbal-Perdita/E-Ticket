import NavBar from "./Nav Bar/NavBar";
import SearchBar from "./search Module/SearchBar";
import SearchResult from "./Result/SearchResult";
const LayOut = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div class="bg-slate-400 mt-4 text-center">
            <span class=" text-xl font-semibold ">Search Your Ticket</span>
          </div>

          <SearchBar />
          <SearchResult />









        </div>
      </div>
    </div>
  );
};

export default LayOut;
