"use client";
import { useCartStore } from "@/lib/zustand/store/cartStore";
import styles from './styles.module.scss'
import Image from "next/image";

interface ProductItemProps {
    productInfo : {
        id: number;
        name: string;
        price: number;
        imgUrl: string;
    }
}

export default function ProductItem({ productInfo }: ProductItemProps) {
  const { addToCart } = useCartStore();
  const {id, name, price, imgUrl} = productInfo

  console.log({productInfo})

  return (
    <div className={styles.productItemContainer}>
      <h3>{name}</h3>
      <div className={styles.productImageContainer} >
        <Image
            src={imgUrl}
            alt={name}
            fill={true}
            objectFit="cover"
        />
      </div>

      <p className={styles.price} >${price}</p>
      <button onClick={() => addToCart({ id, name, price, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
}