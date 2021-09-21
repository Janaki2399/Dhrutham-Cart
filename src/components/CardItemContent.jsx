export function CardItemContent({ item }) {
  return (
    <div className="card-content-padding anchor-link">
      <div className="card-title font-size-5">{item.name}</div>
      <div className="card-text font-size-5">
        Rs {item.price}{" "}
        {item.offer !== 0 && (
          <span className="font-size-6 text-color-primary">
            {item.offer}% off
          </span>
        )}
      </div>
      <div
        className="rating bg-primary font-size-6 flex flex-horizontal "
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span> {item.rating}</span>

        <span className=" material-icons-outlined rating-icon-size ">star</span>
      </div>
    </div>
  );
}
