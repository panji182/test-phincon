"use client"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FiSearch } from "react-icons/fi"
import Stack from 'react-bootstrap/Stack'
import styles from "./styles.module.scss"
import cx from "classnames"

interface HeaderProps {
  isMobile?: boolean;
}
const Header = ({ isMobile }: HeaderProps) => {
  const router = useRouter();
  const [startSearch, setStartSearch] = useState(false);

  return (
    <Row className={isMobile ? styles["header-mobile"] : styles["header-pc"]}>
      <Stack direction="horizontal" gap={3} className={cx(styles.menuBar, "stack-space-between")} >
        <div className="p-2"><Image src="/assets/icons/home_button.png" className="cursor-pointer" onClick={() => router.push("/")} width={77} height={31} alt="Home Button" /></div>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 ms-auto"><Image src="/assets/icons/cart.png" className="cursor-pointer" onClick={() => router.push("/cart")} width={18} height={18} alt="cart" /></div>
          <div className="p-2"><Image src="/assets/icons/notification.png" className="cursor-pointer" onClick={() => router.push("/")} width={18} height={18} alt="notification" /></div>
          <div className="p-2"><Image src="/assets/icons/user.png" className="cursor-pointer" onClick={() => router.push("/")} width={18} height={18} alt="user" /></div>
        </Stack>
      </Stack>
      <Stack direction="horizontal" gap={3} className={cx(styles.navBar, "mt-3", "mb-3", "stack-space-between")}>
        <Image src="/assets/icons/left-nav-button.png" className="cursor-pointer" onClick={() => router.push("/")} width={36} height={37} alt="Prev Button" />
        <InputGroup className={startSearch ? styles.inputGroupActive : styles.inputGroup}>
          <InputGroup.Text id="search" onClick={() => setStartSearch( prev => !prev )}><FiSearch /></InputGroup.Text>
          {startSearch && <Form.Control
            placeholder="Search"
            aria-label="search"
          />}
        </InputGroup>
      </Stack>
    </Row>
  )
};

export default Header;