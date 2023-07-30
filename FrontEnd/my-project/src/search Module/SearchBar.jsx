const SearchBar = () => {
  return (
    <>
      <div class=" col-start-2 col-end-12 row-start-2 row-end-7 mt-2 flex justify-center items-center">
        {/* <!-- searching form --> */}

        <form class="formCart h-4/5 flex-row space-y-4 p-2">
          <div class="p-1 flex space-x-2">
            <label for="">From:</label>
            <input
              class="border-2 border-slate-500 rounded-lg w-3/5"
              type="text"
            />
          </div>

          <div class="p-1 flex space-x-7">
            <label for="">To:</label>
            <input
              class="border-2 border-slate-500 rounded-lg w-3/5"
              type="text"
            />
          </div>

          <div class="p-1 flex space-x-3">
            <label for="">Date:</label>
            <input
              class="border-2 border-slate-500 rounded-lg w-3/5"
              type="date"
            />
          </div>
          {/* <!-- search button  --> */}
          <div class=" w-full flex justify-center ">
            <div class=" buttonCart bg-white w-2/4 text-center       ">
              <button>Search</button>
            </div>
          </div>

          <div class="w-5/6  m-6 bg-slate-100">
            <p class="text-sm">Note:</p>
            <p class="font-serif text-xs">
              Please make sure a stable connection
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
