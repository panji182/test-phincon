"use client"
import { useState } from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import cx from "classnames"

import HeaderCart from '@/app/components/HeaderCart';

const Cart = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const onWishlist = () => {
    alert("Wishlisted !")
  }

  return (
    <Container>
      <HeaderCart />
      <p className="text-title text-color-base text-bold">My Cart</p>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" gap={3} style={{ borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
            <Image src="/assets/item-clothes-1.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Roller Rabit</div>
                <div className="text-md text-color-secondary">Vodo Odelle Dres</div>
              </div>
              <div className="text-md text-bold">$198.00</div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "flex-end" }}>
              <Stack direction="horizontal" gap={3} className="text-md p-2 text-bold" style={{ backgroundColor: "#eeeeee", borderRadius: "20px" }}>
                <span className="text-lg">-</span>
                <span className="text-lg">1</span>
                <span className="text-lg">+</span>
              </Stack>
            </Stack>
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" gap={3} style={{ borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
            <Image src="/assets/item-shoes-1.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Axel Arigato</div>
                <div className="text-md text-color-secondary">Clean 90 Triole Sneakers</div>
              </div>
              <div className="text-md text-bold">$245.00</div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "flex-end" }}>
              <Stack direction="horizontal" gap={3} className="text-md p-2 text-bold" style={{ backgroundColor: "#eeeeee", borderRadius: "20px" }}>
                <span className="text-lg">-</span>
                <span className="text-lg">1</span>
                <span className="text-lg">+</span>
              </Stack>
            </Stack>
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" gap={3}>
            <Image src="/assets/item-clothes-2.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Endless rose</div>
                <div className="text-md text-color-secondary">Bubble Elistic T-Shirt</div>
              </div>
              <div className="text-md text-bold">$50.00</div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "flex-end" }}>
              <Stack direction="horizontal" gap={3} className="text-md p-2 text-bold" style={{ backgroundColor: "#eeeeee", borderRadius: "20px" }}>
                <span className="text-lg">-</span>
                <span className="text-lg">1</span>
                <span className="text-lg">+</span>
              </Stack>
            </Stack>
          </Stack>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12">
          <Card className="p-3">
            <Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between", borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
                <span className="text-md text-bold">Subtotal:</span>
                <span className="text-price text-bold">$483</span>
              </Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between", borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
                <span className="text-md text-bold">Shipping:</span>
                <span className="text-price text-bold">$17</span>
              </Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
                <span className="text-md text-bold">Bag Total:</span>
                <div>
                  <span className="text-sm text-color-secondary">(3 item)&nbsp;&nbsp;</span>
                  <span className="text-price text-bold">$500</span>
                </div>
              </Stack>
            </Stack>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs="12" sm="12" md="12" lg="12">
          <Button variant="dark" style={{ width: "100%" }}>Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
