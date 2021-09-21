export function Filter({ filterMobile, sortFilterState, sortFilterDispatch }) {
  return (
    <div
      className={
        !filterMobile ? "sidebar full-height margin-top" : "filterMobile"
      }
    >
      <div className="text-end">
        <button
          className="btn btn-text text-color-primary"
          onClick={() => {
            sortFilterDispatch({ type: "CLEAR_FILTER" });
          }}
        >
          CLEAR ALL
        </button>
      </div>
      <div className="flex-column">
        <div className="font-bold-1 font-size-5">Sort By</div>
        <div className="margin-top">
        <label className="font-size-5 cursor-pointer">
          <input
            type="radio"
            name="sortBy"
            checked={
              sortFilterState.sortBy &&
              sortFilterState.sortBy === "PRICE_HIGH_TO_LOW"
            }
            onChange={() => {
              sortFilterDispatch({
                type: "SORT_BY",
                payload: "PRICE_HIGH_TO_LOW",
              });
            }}
            className="cursor-pointer"
          />
         Price - High To low</label>
        </div>

        <div>
        <label className="font-size-5 cursor-pointer">
          <input
            type="radio"
            name="sortBy"
            checked={
              sortFilterState.sortBy &&
              sortFilterState.sortBy === "PRICE_LOW_TO_HIGH"
            }
            onChange={() => {
              sortFilterDispatch({
                type: "SORT_BY",
                payload: "PRICE_LOW_TO_HIGH",
              });
            }}
            className="cursor-pointer"
          />
       Price - Low To High</label>
        </div>
      </div>

      <div className="flex-column" style={{ marginTop: "1rem" }}>
        <div className="font-bold-1">Filter</div>
        <div className="flex-horizontal margin-top">
        <label className="font-size-5 cursor-pointer">
          <input
            type="checkbox"
            checked={sortFilterState.includeOutOfStock}
            onChange={() => {
              sortFilterDispatch({ type: "INCLUDE_OUT_OF_STOCK" });
            }}
            className="cursor-pointer"
          />
         Include out of stock</label>
        </div>
        <div>
        <label className="font-size-5 cursor-pointer">
          <input
            type="checkbox"
            checked={sortFilterState.fastDelivery}
            onChange={() => {
              sortFilterDispatch({ type: "FAST_DELIVERY" });
            }}
            className="cursor-pointer"
          />
          Fast delivery</label>
        </div>

        <div>
        <label className="font-size-5 cursor-pointer">
          <input
            type="checkbox"
            checked={sortFilterState.offerOnly}
            onChange={() => {
              sortFilterDispatch({ type: "OFFER_ONLY" });
            }}
            className="cursor-pointer"
          />
         Offer only</label>
        </div>

        <div className="font-size-5 font-bold-1 margin-top margin-bottom">
          Ratings
        </div>
        <div>
          {
            [4,3,2,1].map((rating)=>{
              return (
              <div>
               <label className="font-size-5 cursor-pointer">
               <input
                 type="checkbox"
                 checked={sortFilterState.ratings.includes(rating)}
                 onChange={() => {
                  sortFilterDispatch({ type: "SORT_BY_RATING",payload:{rating} });
                }}
                 className="cursor-pointer"
              />
             {rating} and above</label>
              </div>)
            })
          }
        </div>
      </div>
    </div>
  );
}
