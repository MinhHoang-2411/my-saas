"use client";
import { useEffect } from "react";
import { useProductStore } from "@/lib/zustand/store/productStore";
import ProductItem from "./ProductItem";
import styles from "./styles.module.scss";

export default function ProductList() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.productListContainer}>
      <h1 className="">Product List</h1>
      <div className="grid grid-flexible-columns">
        {products.map((product) => (
          <ProductItem key={product?.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
}
