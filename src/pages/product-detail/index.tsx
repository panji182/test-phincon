"use client"
import { useState } from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss'
import { FiCheck } from "react-icons/fi"
import cx from "classnames"

import HeaderDetailProduct from '@/app/components/HeaderDetailProduct';

const ProductDetail = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const onWishlist = () => {
    alert("Wishlisted !")
  }

  return (
    <Container>
      <HeaderDetailProduct />
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" className="position-relative mt-3">
          <HeaderDetailProduct isMobile={true} />
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 1"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <Stack direction="horizontal" gap={3} className="mt-3" style={{ justifyContent: "space-between"}}>
            <div>
              <span className="text-title text-color-base text-bold">Roller Rabit</span><br />
              <span className="text-md text-color-secondary">Vodo Odelle Dres</span><br />
              <div>
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <span className="text-md">(320 Review)</span>
              </div>
            </div>
            <div>
              <Stack direction="horizontal" gap={3} className="p-2" style={{ backgroundColor: "#eeeeee", borderRadius: "20px", justifyContent: "space-evenly" }}>
                <span className="text-lg">-</span>
                <span className="text-lg">1</span>
                <span className="text-lg">+</span>
              </Stack>
              <span className="text-md text-bold">Available in stock</span>
            </div>
          </Stack>
          <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
            <Stack gap={3} style={{  justifyContent: "center" }}>
              <span className="text-title text-color-base text-bold">Size</span>
              <Stack direction="horizontal" gap={3}>
                <div className={cx("text-lg", styles.sizeBlock)}>S</div>
                <div className={cx("text-lg", styles.sizeBlock)}>M</div>
                <div className={cx("text-lg", styles.sizeBlockSelected)}>L</div>
                <div className={cx("text-lg", styles.sizeBlock)}>XL</div>
                <div className={cx("text-lg", styles.sizeBlock)}>XXL</div>
              </Stack>
            </Stack>
            <Stack
              gap={3}
              style={{ flex: 0 }}
            >
              <div className={styles.colorSelectIndicator}>
                <div className={styles.colorItem1}><FiCheck /></div>
                <div className={styles.colorItem2}>&nbsp;</div>
                <div className={styles.colorItem3}>&nbsp;</div>
                <div className={styles.colorItem4}>&nbsp;</div>
              </div>
            </Stack>
          </Stack>
          <p className="mb-3 text-title text-bold">Description</p>
          <p className="text-md">lorem ipsum dollor sit amet lorem ipsum dollor sit amet lorem ipsum dollor sit amet lorem ipsum dollor sit amet lorem ipsum dollor sit amet lorem ipsum dollor sit amet lorem ipsum dollor sit amet</p>
          <Stack
            direction="horizontal"
            gap={3}
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <p className="lineHeight17">
                <span className="text-sm text-color-secondary">Total Price</span><br />
                <span className="text-price text-bold">$198.00</span>
              </p>
            </div>
            <Button variant="dark"><Image src="/assets/icons/shop.png" width={19} height={19} alt="shop" />&nbsp;&nbsp;Add to cart</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
