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
          />
          <label className="font-size-5 ">Price - High To low</label>
        </div>

        <div>
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
          />
          <label className="font-size-5">Price - Low To High</label>
        </div>
      </div>

      <div className="flex-column" style={{ marginTop: "1rem" }}>
        <div className="font-bold-1">Filter</div>
        <div className="flex-horizontal margin-top">
          <input
            type="checkbox"
            checked={sortFilterState.includeOutOfStock}
            onChange={() => {
              sortFilterDispatch({ type: "INCLUDE_OUT_OF_STOCK" });
            }}
          />
          <label className="font-size-5">Include out of stock</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={sortFilterState.fastDelivery}
            onChange={() => {
              sortFilterDispatch({ type: "FAST_DELIVERY" });
            }}
          />
          <label className="font-size-5">Fast delivery</label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={sortFilterState.offerOnly}
            onChange={() => {
              sortFilterDispatch({ type: "OFFER_ONLY" });
            }}
          />
          <label className="font-size-5">Offer only</label>
        </div>

        <div className="font-size-5 font-bold-1 margin-top margin-bottom">
          Ratings
        </div>
        <div>
          <input
            type="checkbox"
            checked={sortFilterState.ratings.aboveFour}
            onChange={() => {
              sortFilterDispatch({ type: "RATING_ABOVE_FOUR" });
            }}
          />
          <label className="font-size-5">4 and above</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={sortFilterState.ratings.aboveThree}
            onChange={() => {
              sortFilterDispatch({ type: "RATING_ABOVE_THREE" });
            }}
          />
          <label className="font-size-5">3 and above</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={sortFilterState.ratings.aboveTwo}
            onChange={() => {
              sortFilterDispatch({ type: "RATING_ABOVE_TWO" });
            }}
          />
          <label className="font-size-5">2 and above</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={sortFilterState.ratings.aboveOne}
            onChange={() => {
              sortFilterDispatch({ type: "RATING_ABOVE_ONE" });
            }}
          />
          <label className="font-size-5">1 and above</label>
        </div>
      </div>
    </div>
  );
}
