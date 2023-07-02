"use client"
import { useState } from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import styles from './styles.module.scss'
import cx from "classnames"

import HeaderDetailProduct from '@/app/components/HeaderDetailProduct';

const ProductDetail = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <HeaderDetailProduct />
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" className="position-relative">
          <HeaderDetailProduct isMobile={true} />
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 1"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src="/assets/detail-product-1.png" className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <div className={cx("p-3", styles.itemBlock)}>
            <span className="text-title text-color-base text-bold">Roller Rabit</span><br />
            <span className="text-md text-color-secondary">Vodo Odelle Dres</span><br />
            <span className="text-md text-color-price text-bold">$198.00</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
