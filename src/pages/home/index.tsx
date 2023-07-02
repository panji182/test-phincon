"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi";
import cx from 'classnames';
// import { getData } from '@/api/api'
import styles from "./styles.module.scss"

import Header from '@/app/components/Header';

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Header isMobile={true} />
        <InputGroup className="mb-3">
          <InputGroup.Text id="search"><FiSearch /></InputGroup.Text>
          <Form.Control
            placeholder="Search Categories"
            aria-label="search"
          />
        </InputGroup>
        <Row className={cx("mx-auto")}>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesLeft)}>  
              <h4 className="font-weight-bold">New Arrivals</h4>
              <p>208 Product</p>
            </div>
            <Image src="/assets/new-arrivals.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesRight)}>  
              <h4 className="font-weight-bold">Clothes</h4>
              <p>358 Product</p>
            </div>
            <Image src="/assets/Clothes.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesLeft)}>  
              <h4 className="font-weight-bold">Bags</h4>
              <p>160 Product</p>
            </div>
            <Image src="/assets/Bags.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesRight)}>  
              <h4 className="font-weight-bold">Shoes</h4>
              <p>230 Product</p>
            </div>
            <Image src="/assets/Shoes.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesLeft)}>  
              <h4 className="font-weight-bold">Electronics</h4>
              <p>130 Product</p>
            </div>
            <Image src="/assets/Electronics.png" width={325} height={102} alt="nav-button" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;