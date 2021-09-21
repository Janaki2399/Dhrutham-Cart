export function ProductImage({ image, inStock }) {
  return (
    <div className="relative-position product-img-width">
      <img
        className="card-img "
        src={image}
        alt="product-card"
        loading="lazy"
        height="100%"
      />
      {!inStock && <div className="text-overlay">OUT OF STOCK</div>}
    </div>
  );
}
