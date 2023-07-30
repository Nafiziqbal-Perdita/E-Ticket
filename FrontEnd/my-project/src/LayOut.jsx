import NavBar from "./Nav Bar/NavBar";
import SearchBar from "./search Module/SearchBar";
import SearchResult from "./Result/SearchResult";
const LayOut = () => {
  return (
    <div class="  h-screen w-screen bg-gray-200 grid grid-cols-12 grid-rows-12">
      {/* navbar  */}
      <NavBar />
      {/* search utility */}
      <SearchBar />

{/* result utility  */}
<SearchResult/>





    </div>
  );
};

export default LayOut;
