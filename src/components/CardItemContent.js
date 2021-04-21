export function CardItemContent({ item,isWishlist }) {
  return (
    <div className="card-content-padding anchor-link">
      <div className="card-title font-size-5">{isWishlist?item.product.name:item.name}</div>
      <div className="card-text font-size-5">
        Rs {isWishlist?item.product.price:item.price}{" "}
        <span
          className="font-size-6 "
          style={{ color: "#aa3a3a", fontWeight: "550" }}
        >
          {isWishlist?item.product.offer:item.offer}
        </span>
      </div>
      <div>
        {(isWishlist?item.product.fastDelivery:item.fastDelivery)
          ? "Delivery : Fast Delivery"
          : "Delivery : 3 days minimum"}
      </div>
    </div>
  );
}
