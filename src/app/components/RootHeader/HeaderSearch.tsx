"use client";

import React from 'react'
import styles from './styles.module.scss'

function HeaderSearch() {
  return (
    <input className={styles.searchInput} placeholder='Search...' />
  )
}

export default HeaderSearch