export function CardItemContent({ item }) {
  return (
    <div className="card-content-padding anchor-link">
      <div className="card-title font-size-5">{item.name}</div>
      <div className="card-text font-size-5">
        Rs {item.price}{" "}
        {item.offer !== 0 && (
          <span
            className="font-size-6 text-color-primary"
            style={{ fontWeight: "550" }}
          >
            {item.offer}% off
          </span>
        )}
      </div>
      <div className="rating bg-primary font-size-6 flex flex-horizontal">
        <div> {item.rating}</div>
        <span class=" material-icons-outlined icon-size-18 ">star</span>
      </div>
      {/* <div>
        {item.isFastDelivery
          ? "Delivery : Fast Delivery"
          : "Delivery : 3 days minimum"}
      </div> */}
    </div>
  );
}
