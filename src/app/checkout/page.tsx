"use client"
import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { FiPlus } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from './styles.module.scss'
import cx from 'classnames'

import HeaderCheckout from '@/app/components/HeaderCheckout';

const Checkout = () => {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<number | undefined>();

  const handleSelectedPayment = (indexPayment: number) => {
    setSelectedPayment(indexPayment);
    indexPayment === 2 && router.push("/checkout-confirm");
  };

  return (
    <Container>
      <HeaderCheckout />
      <p className="text-title text-color-base text-bold">Payment</p>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" className={cx("p-3", selectedPayment === 0 ? styles.paymentWrapSelected : styles.paymentWrap)} onClick={() => handleSelectedPayment(0)}>
            <div>
              <Image src="/assets/icons/payment-1.png" className="me-2" width={41} height={40} alt={"Payment 1"} />&nbsp;
              <span className="text-md">Credit Card</span>
            </div>
            <div className={styles.circleSelector} />
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" className={cx("p-3", selectedPayment === 1 ? styles.paymentWrapSelected : styles.paymentWrap)} onClick={() => handleSelectedPayment(1)}>
            <div>
              <Image src="/assets/icons/payment-2.png" className="me-2" width={41} height={40} alt={"Payment 2"} />
              <span className="text-md">Paypal</span>
            </div>
            <div className={styles.circleSelector} />
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" className={cx("p-3", selectedPayment === 2 ? styles.paymentWrapSelected : styles.paymentWrap)} onClick={() => handleSelectedPayment(2)}>
            <div>
              <Image src="/assets/icons/payment-3.png" className="me-2" width={41} height={40} alt={"Payment 3"} />
              <span className="text-md">Visa</span>
            </div>
            <div className={styles.circleSelector} />
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" className={cx("p-3", selectedPayment === 3 ? styles.paymentWrapSelected : styles.paymentWrap)} onClick={() => handleSelectedPayment(3)}>
            <div>
              <Image src="/assets/icons/payment-4.png" className="me-2" width={41} height={40} alt={"Payment 4"} />
              <span className="text-md">Google Pay</span>
            </div>
            <div className={styles.circleSelector} />
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" className={cx("p-3", styles.paymentWrapAdd)}>
            <Stack className={cx(styles.buttonAddCard, "p-1", "me-2")}><FiPlus /></Stack>
            <div className="text-md">Add Card</div>
          </Stack>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" gap={3} className={cx("p-3", styles.paymentWrap)}>
            <Image src="/assets/item-clothes-1.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Roller Rabit</div>
                <div className="text-md text-color-secondary">Vodo Odelle Dres</div>
              </div>
              <div>
                <Button variant="light" disabled style={{ backgroundColor: "#eeeeee" }}><AiFillCheckCircle />&nbsp;Send</Button>
              </div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "center" }}>
              <div className="text-md text-bold">$198.00</div>
            </Stack>
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12" className="mb-3">
          <Stack direction="horizontal" gap={3} className={cx("p-3", styles.paymentWrap)}>
            <Image src="/assets/item-shoes-1.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Axel Arigato</div>
                <div className="text-md text-color-secondary">Clean 90 Triole Sneakers</div>
              </div>
              <div>
                <Button variant="light" disabled style={{ backgroundColor: "#eeeeee" }}><AiFillCheckCircle />&nbsp;Send</Button>
              </div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "center" }}>
              <div className="text-md text-bold">$245.00</div>
            </Stack>
          </Stack>
        </Col>
        <Col xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" gap={3} className={cx("p-3", styles.paymentWrap)}>
            <Image src="/assets/item-clothes-2.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Endless rose</div>
                <div className="text-md text-color-secondary">Bubble Elistic T-Shirt</div>
              </div>
              <div>
                <Button variant="light" disabled style={{ backgroundColor: "#eeeeee" }}><AiFillCheckCircle />&nbsp;Send</Button>
              </div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "center" }}>
              <div className="text-md text-bold">$40.00</div>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
