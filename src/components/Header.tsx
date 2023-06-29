"use client";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FiHome, FiShoppingCart, FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <Row className="justify-content-end">
      <Col sm="3" md="3">
        <div className="p-2"><FiHome />&nbsp;Home</div>
      </Col>
      <Col sm="9" md="9">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 ms-auto"><FiShoppingCart /></div>
          <div className="p-2"><FiBell /></div>
          <div className="p-2"><FiUser /></div>
        </Stack>
      </Col>
    </Row>
  )
};

export default Header;