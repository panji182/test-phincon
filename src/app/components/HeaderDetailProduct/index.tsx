"use client"
import { useState } from 'react'
import Image from 'next/image'
import Stack from 'react-bootstrap/Stack'
import styles from "./styles.module.scss"
import cx from "classnames"

interface HeaderProps {
  isMobile?: boolean;
}
const HeaderDetailProduct = ({ isMobile }: HeaderProps) => {
  const [startSearch, setStartSearch] = useState(false);

  return (
    <Stack direction="horizontal" gap={3} className={cx(isMobile ? styles.headerDetailProductMobile : styles.headerDetailProductPC, "mt-3", "mb-3", "stack-space-between")}>
      <Image src="/assets/icons/left-nav-button.png" className="cursor-pointer" width={36} height={37} alt="Prev Button" />
      <Image src="/assets/icons/shop_inside_pict.png" width={32} height={32} alt={"shop item"} />
    </Stack>
  )
};

export default HeaderDetailProduct;