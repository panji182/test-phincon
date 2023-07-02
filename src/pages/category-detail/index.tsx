"use client"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from "./styles.module.scss"
import cx from "classnames"

import Header from '@/app/components/Header';

const CategoryDetail = () => {
  return (
    <Container>
      <Header />
      <Header isMobile={true} />
      <h3 className="text-bold">Clothes</h3>
      <Row className="pb-5">
        <Col xs="6" sm="6" md="3" lg="3">
          <div className={cx(styles.imageBox, "position-relative")}>
            <div className={styles.wishlistBlock}><Image src="/assets/icons/wishlist.png" width={21} height={22} alt="wishlist" /></div>
            <Image src="/assets/Item-clothes-1.png" width={155} height={172} alt="item" />
          </div>
          <div className={cx("p-3", styles.itemBlock)}>
            <span className="text-md text-color-base text-bold">Roller Rabit</span><br />
            <span className="text-md text-color-secondary">Vodo Odelle Dres</span><br />
            <span className="text-md text-color-price text-bold">$198.00</span>
          </div>
        </Col>
        <Col xs="6" sm="6" md="3" lg="3">
          <div className={cx(styles.imageBox, "position-relative")}>
            <div className={styles.wishlistBlock}><Image src="/assets/icons/wishlist.png" width={21} height={22} alt="wishlist" /></div>
            <Image src="/assets/Item-clothes-2.png" width={155} height={172} alt="item" />
          </div>
          <div className={cx("p-3", styles.itemBlock)}>
            <span className="text-md text-color-base text-bold">Endless Rose</span><br />
            <span className="text-md text-color-secondary">Bubble Elastic T-Shirt</span><br />
            <span className="text-md text-color-price text-bold">$50.00</span>
          </div>
        </Col>
        <Col xs="6" sm="6" md="3" lg="3">
          <div className={cx(styles.imageBox, "position-relative")}>
            <div className={styles.wishlistBlock}><Image src="/assets/icons/wishlist.png" width={21} height={22} alt="wishlist" /></div>
            <Image src="/assets/Item-clothes-3.png" width={155} height={172} alt="item" />
          </div>
          <div className={cx("p-3", styles.itemBlock)}>
            <span className="text-md text-color-base text-bold">Theory</span><br />
            <span className="text-md text-color-secondary">Irregular Rib Skirt</span><br />
            <span className="text-md text-color-price text-bold">$345.00</span>
          </div>
        </Col>
        <Col xs="6" sm="6" md="3" lg="3">
          <div className={cx(styles.imageBox, "position-relative")}>
            <div className={styles.wishlistBlock}><Image src="/assets/icons/wishlist.png" width={21} height={22} alt="wishlist" /></div>
            <Image src="/assets/Item-clothes-4.png" width={155} height={172} alt="item" />
          </div>
          <div className={cx("p-3", styles.itemBlock)}>
            <span className="text-md text-color-base text-bold">Madewell</span><br />
            <span className="text-md text-color-secondary">Giselle Top In White Linen</span><br />
            <span className="text-md text-color-price text-bold">$69.50</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CategoryDetail;