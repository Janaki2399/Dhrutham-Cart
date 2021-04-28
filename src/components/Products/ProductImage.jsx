export function ProductImage({ image,inStock }) {
  return (
    <div className="relative-position">
      <img className="card-img" src={image} alt="product-card" loading="lazy"/>
      {!inStock && <div className="text-overlay">OUT OF STOCK</div>}
    </div>
  );
}
