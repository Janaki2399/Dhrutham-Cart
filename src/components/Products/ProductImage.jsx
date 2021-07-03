export function ProductImage({ image, inStock }) {
  return (
    <div className="relative-position " style={{ height: "19rem" }}>
      <img
        className="card-img "
        src={image}
        alt="product-card"
        loading="lazy"
        height="100%"
        // height="250"
      />
      {!inStock && <div className="text-overlay">OUT OF STOCK</div>}
    </div>
  );
}
