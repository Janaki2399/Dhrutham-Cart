import {Link} from "react-router-dom";
export const CategoryItem=({_id,name,image})=>{
    return (
        <Link to={`/categories/${_id}`} className="anchor-link">
            <div className="card card-vertical card-shadow ">
            <img
                className="full-width"
                style={{
                objectFit: "cover",
                height: "25rem",
                objectPosition: "bottom",
                }}
                src={image}
                alt="product-card"
                loading="lazy"
            />
            <div className="text-overlay font-bold-1">
                {name}{" "}
            </div>
            </div>
        </Link>
    )
}