import { useEffect, useState } from "react";
import { CategoryItem } from "../components/Categories/CategoryItem";
import { API_STATUS } from "../constants";
import { useGetData } from "../hooks/useGetData";
import { useCategoriesContext } from "../contexts/category-context";

export function Categories() {
  const { fetchCategories } = useGetData();
  const { categoriesState } = useCategoriesContext();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (categoriesState.status === API_STATUS.LOADING) {
    return (
      <div className="center-page-align">
        <div className="loader " />
      </div>
    );
  }
  return (
    <div>
      <div className="margin-top-3">
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
      <div
        className="grid-col-3 grid-col-mobile margin-3"
        style={{ marginBottom: "5rem" }}
      >
        {categoriesState.categories.map(({ _id, name, image }) => {
          return <CategoryItem key={_id} _id={_id} name={name} image={image} />;
        })}
      </div>
    </div>
  );
}
