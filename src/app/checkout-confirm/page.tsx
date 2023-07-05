"use client"
import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import DatePicker from 'react-datepicker'
import cx from "classnames";

import HeaderCheckout from '@/app/components/HeaderCheckout';

const initPayload = {
  cardNumber: "",
  expDate: "",
  cvv: ""
};

const CheckoutConfirm = () => {
  const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [payload, setPayload] = useState(initPayload);
  const [errMsg, setErrMsg] = useState(initPayload);

  const handleInput = (inputName: string, value: any) => {
    setPayload((prevState: any) => ({
      ...prevState,
      [inputName]: value
    }));
  }

  const handleSubmit = () => {
    setErrMsg((prevState: any) => ({
      cardNumber: payload.cardNumber === "" ? "Card Number tidak boleh kosong" : "",
      expDate: !payload.expDate ? "Exp Date tidak boleh kosong" : "",
      cvv: payload.cvv === "" ? "CVV tidak boleh kosong" : ""
    }));
    if (payload.cardNumber === "" || payload.expDate === "" || payload.cvv === "") {
      setModalShow(false);
    } else {
      setModalShow(true);
    }
  }

  return (
    <Container>
      <HeaderCheckout />
      <p className="text-title text-color-base text-bold">Payment</p>
      <Row className="mb-4">
        <Col xs="12" sm="12" md="12" lg="12" className="text-center">
          <Image src="/assets/credit-card.png" className="me-2" width={325} height={237} alt={"Credit Card"} />
        </Col>
      </Row>
      <p className="text-title text-color-base text-bold">Card Details</p>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12" className="mb-5">
          <Form>
            <div className="mb-3">
              <Form.Control type="text" placeholder="Card Number" value={payload.cardNumber} onChange={(e) => handleInput("cardNumber", e.currentTarget.value)} />
              {errMsg.cardNumber !== "" && <span className="text-danger">*{errMsg.cardNumber}</span>}
            </div>

            <div className="mb-3">
              <DatePicker selected={payload.expDate} minDate={new Date()} className={cx("form-control")} placeholder="Exp Date" onChange={(date: any) => handleInput("expDate", date)} />
              {errMsg.expDate !== "" && <span className="text-danger">*{errMsg.expDate}</span>}
            </div>
            
            <div className="mb-5">
              <Form.Control type="password" maxLength={3} placeholder="CVV" value={payload.cvv} onChange={(e) => handleInput("cvv", e.currentTarget.value)} />
              {errMsg.cvv !== "" && <span className="text-danger">*{errMsg.cvv}</span>}
            </div>

            <Stack direction="horizontal" style={{ justifyContent: "space-evenly" }}>
              <Button variant="light" onClick={() => router.push("/category-detail")} style={{ backgroundColor: "#eeeeee" }}>Cancel</Button><Button variant="dark" onClick={handleSubmit}>Confirm</Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    <Modal
      show={modalShow}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="text-center mt-3 mb-3">
          <Image src="/assets/success-payment.png" className="me-2" width={80} height={80} alt={"Success Payment"} />
        </div>
        <h5 className="text-center text-bold">Successful!</h5>
        <p className="text-center mb-3">Your payment confirmed successfully!</p>
        <div className="text-center">
          <Button variant="dark" onClick={() => {
            router.push("/category-detail");
            setModalShow(false);
          }}>Continue Shopping</Button>
        </div>
      </Modal.Body>
    </Modal>
    </Container>
  );
}

export default CheckoutConfirm;
