"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/zustand/store/cartStore";
import styles from "./styles.module.scss";
import { useClickOutside } from "@/app/hooks/useClickOutSide";

function CartLogo() {
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div ref={dropdownRef} className={styles.cartLogo}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={30} />
        {totalQuantity > 0 ? <span className={styles.cartBadge}>{totalQuantity}</span> : null}
      </div>
      {isOpen && (
        <div className={styles.cartPopup}>
          {totalQuantity > 0 ? (
            <>
              <p>{`You have ${totalQuantity} items`}</p>
              <button onClick={() => setIsOpen(false)}>
                <Link href="/cart">Go to cart</Link>
              </button>
            </>
          ) : (
            <p>Empty</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CartLogo;
