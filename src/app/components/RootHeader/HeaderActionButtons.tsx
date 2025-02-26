"use client";

import Link from 'next/link';
import React from 'react'
import styles from './styles.module.scss'
import { ShoppingCart } from 'lucide-react';

function HeaderActionButtons() {
  return (
    <div className={styles.actsBtnContainer} >
        <Link href='/' ><ShoppingCart size={30}/></Link>
        <Link href='/sign-in' ><button className={styles.signInBtn}>Sign In</button></Link>
        <Link href='/sign-up' ><button className={styles.signUpBtn}>Sign Up</button></Link>
    </div>
  )
}

export default HeaderActionButtons