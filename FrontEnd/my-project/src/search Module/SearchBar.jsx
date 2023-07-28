const SearchBar = () => {
  return (
    <>
      <form class="mt-2 h-auto flex items-center justify-center w-auto ">
        <div class="bg-blue-400 flex flex-col w-2/3 h-fit p-2 rounded-md shadow-xl ">
          <div class=" ">
            <label class="text-lg font-bold">From</label>

            <input class="border m-1 p-2 rounded-lg " type="text" />
          </div>
          <div>
            <label class="text-lg font-bold">To</label>
            <input class="border my-1 ml-7  p-2 rounded-lg " type="text" />
          </div>
          <div>
            <label class="text-lg font-bold">Date</label>
            <input class="m-1 ml-2 p-2 rounded-lg " type="date" />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
