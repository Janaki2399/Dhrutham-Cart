export function CardItemContent({ item }) {
  return (
    <div className="card-content-padding anchor-link">
      <div className="card-title font-size-5">{item.name}</div>
      <div className="card-text font-size-5">
        Rs {item.price}{" "}
        <span
          className="font-size-6 "
          style={{ color: "#aa3a3a", fontWeight: "550" }}
        >
          {item.offer}
        </span>
      </div>
      <div>
        {item.fastDelivery
          ? "Delivery : Fast Delivery"
          : "Delivery : 3 days minimum"}
      </div>
    </div>
  );
}
