"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi";
import cx from 'classnames';
import Skeleton from 'react-loading-skeleton'
// import { loginUser, addUser } from '../api/api';
import { useGetAllProductCategoriesQuery, useGetAllProductsQuery } from '@/services/fakeStore';
import styles from "./styles.module.scss"

import Header from '@/app/components/Header';

const Home = () => {
  const router = useRouter();
  const productListCategoryQuery = useGetAllProductCategoriesQuery(null);
  const productListCategoryData = productListCategoryQuery?.data || [];

  const handleDetail = () => {
    router.push("/category-detail");
  }

  // useEffect(() => {
  //   loginUser();
  // }, []);

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
        <Row className={cx("mx-auto", "pb-5")}>
          {!productListCategoryQuery.isLoading ? productListCategoryData.map((item, index) => (
            <Col key={index}  sm="12" md="4" className="position-relative mb-3" onClick={handleDetail}>
              <div className={cx("position-absolute", styles.titlesRight)}>  
                <h4 className="text-bold">{item}</h4>
                <p>208 Product</p>
              </div>
              <Image src="/assets/Clothes.png" width={325} height={102} alt="nav-button" />
              {/* <Image src="/assets/new-arrivals.png" width={325} height={102} alt="nav-button" /> */}
            </Col>
          )) : <Skeleton count={4} />}
          {/* <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesRight)}>  
              <h4 className="text-bold">Clothes</h4>
              <p>358 Product</p>
            </div>
            <Image src="/assets/Clothes.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesLeft)}>  
              <h4 className="text-bold">Bags</h4>
              <p>160 Product</p>
            </div>
            <Image src="/assets/Bags.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesRight)}>  
              <h4 className="text-bold">Shoes</h4>
              <p>230 Product</p>
            </div>
            <Image src="/assets/Shoes.png" width={325} height={102} alt="nav-button" />
          </Col>
          <Col sm="12" md="4" className="position-relative mb-3">
            <div className={cx("position-absolute", styles.titlesLeft)}>  
              <h4 className="text-bold">Electronics</h4>
              <p>130 Product</p>
            </div>
            <Image src="/assets/Electronics.png" width={325} height={102} alt="nav-button" />
          </Col> */}
        </Row>
      </Container>
    </>
  )
}

export default Home;