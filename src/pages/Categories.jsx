import { useEffect, useState } from "react";
import { CategoryItem } from "../components/Categories/CategoryItem";
import axios from "axios";
import { API_STATUS } from "../constants";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(API_STATUS.IDLE);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setStatus(API_STATUS.LOADING);
        const { data, status } = await axios.get(
          `https://dhrutham-cart-backend.herokuapp.com/categories`
        );

        if (status === 200) {
          setStatus(API_STATUS.SUCCESS);
          setCategories(data.categories);
        }
      } catch (error) {
        setStatus(API_STATUS.ERROR);
        alert(error);
      }
    })();
  }, []);

  if (status === API_STATUS.LOADING) {
    return (
      <div className="center-page-align">
        <div className="loader " />
      </div>
    );
  }
  return (
    <div>
      <div style={{ marginTop: "3rem" }}>
        <img
          className="full-width"
          src="https://images-static.nykaa.com/uploads/tr:w-2698,/7d27ee70-0b73-46dc-9ddd-86fc48ac6849.jpg"
          alt="product-card"
          loading="lazy"
        />
      </div>
      <div className="text-center margin-top font-size-2 text-color-primary font-bold-1">
        Curated collection for carnatic music
      </div>
      <div className="grid-col-3" style={{ margin: "3rem" }}>
        {categories.map(({ _id, name, image }) => {
          return <CategoryItem key={_id} _id={_id} name={name} image={image} />;
        })}
      </div>
    </div>
  );
}
