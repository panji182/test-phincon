"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Stack from 'react-bootstrap/Stack'
import cx from "classnames"

const HeaderCheckout = () => {
  const router = useRouter();
  return (
    <Stack direction="horizontal" gap={3} className={cx("mt-3", "mb-3")}>
      <Image src="/assets/icons/left-nav-button.png" className="cursor-pointer" onClick={() => router.back()} width={36} height={37} alt="Prev Button" />
    </Stack>
  )
};

export default HeaderCheckout;