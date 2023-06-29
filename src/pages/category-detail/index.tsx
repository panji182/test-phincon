"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = dynamic(() => import('@/components/Header'));

const CategoryDetail = () => {
  return (
    <Container>
      <Header />
      <h3>Clothes</h3>
      <Row>
        <Col sm="6" md="4" className="text-center"><Image src="/assets/Item-clothes-1.png" width={155} height={172} alt="item" /></Col>
        <Col sm="6" md="4" className="text-center"><Image src="/assets/Item-clothes-2.png" width={155} height={172} alt="item" /></Col>
        <Col sm="6" md="4" className="text-center"><Image src="/assets/Item-clothes-3.png" width={155} height={172} alt="item" /></Col>
        <Col sm="6" md="4" className="text-center"><Image src="/assets/Item-clothes-4.png" width={155} height={172} alt="item" /></Col>
      </Row>
    </Container>
  )
}

export default CategoryDetail;