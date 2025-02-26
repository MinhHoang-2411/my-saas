"use client";

import { useState } from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import styles from './styles.module.scss'
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.sidebarToggle} onClick={() => setIsOpen(!isOpen)}>
        <Menu color="white" size={30}/>
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}><X color="white" /></button>
        <div className={styles.searchMobileContainer} >
            <HeaderSearch/>
        </div>
        <ul>
          <li onClick={() => setIsOpen(false)} ><Link href='/sign-in' >Sign In</Link></li>
          <li onClick={() => setIsOpen(false)} ><Link href='/sign-up' >Sign Up</Link></li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
