"use client"
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Skeleton from 'react-loading-skeleton'
import { Products } from '@/app/types/Products'
import { useGetAllCartsQuery, useUpdateCartMutation } from '@/services/fakeStore';

import HeaderCart from '@/app/components/HeaderCart';

const useBorderBottom = { borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" };

const Cart = () => {
  const router = useRouter();
  const allCartsQuery = useGetAllCartsQuery(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allCartsData = allCartsQuery?.data || [];
  const [updateCart, responseUpdateCart] = useUpdateCartMutation();
  const [arrCartDatas, setArrCartDatas] = useState<Products[]>([]);

  const bagTotal = useMemo(() => {
    const products = allCartsData?.products || [];
    return products.reduce((result, item) => {
      result += 1;
      return result;
    }, 0);
  }, [allCartsData]);

  useEffect(() => {
      setArrCartDatas(allCartsData?.products || []);
  }, [allCartsData]);

  useEffect(() => {
    updateCart({
      userId: 3, //default user
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      products: arrCartDatas
    });
  }, [updateCart, arrCartDatas]);

  const onWishlist = () => {
    alert("Wishlisted !")
  }

  const handleUpdateCart = (arrIndex: number, action: string) => {
    setArrCartDatas((prevState: Products[]) => {
      const tmp = [...prevState];
      const currentQuantity = action === "addition" ? tmp[arrIndex].quantity + 1 : tmp[arrIndex].quantity - 1;
      tmp[arrIndex] = {
        ...tmp[arrIndex],
        quantity: currentQuantity > -1 ? currentQuantity : 0
      };
      return tmp;
    })
  }

  return (
    <Container>
      <HeaderCart />
      <p className="text-title text-color-base text-bold">My Cart</p>
      <Row className="mb-5">
        {!allCartsQuery.isLoading ? arrCartDatas.map((item, index) => <Col key={index} xs="12" sm="12" md="12" lg="12">
          <Stack direction="horizontal" gap={3} style={useBorderBottom}>
            <Image src="/assets/item-clothes-1.png" style={{ borderRadius: "10px" }} width={80} height={80} alt={"Item 1"} />
            <Stack gap={3}>
              <div>
                <div className="text-md text-color-base text-bold">Product {item?.productId}</div>
                <div className="text-md text-color-secondary">Category {item?.productId}</div>
              </div>
              <div className="text-md text-bold">{!allCartsQuery.isLoading ? `$198.00` : <Skeleton />}</div>
            </Stack>
            <Stack gap={3} style={{ flex: 0, alignSelf: "flex-end" }}>
              <Stack direction="horizontal" gap={3}className="text-md p-2 text-bold" style={{ backgroundColor: "#eeeeee", borderRadius: "20px" }}>
                <span className="text-lg" onClick={() => handleUpdateCart(index, "subtract")}>-</span>
                <span className="text-lg">{item?.quantity}</span>
                <span className="text-lg" onClick={() => handleUpdateCart(index, "addition")}>+</span>
              </Stack>
            </Stack>
          </Stack>
        </Col>) : <Skeleton />}
        {/* <Col xs="12" sm="12" md="12" lg="12">
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
        </Col> */}
      </Row>
      <Row className="mb-5">
        <Col xs="12" sm="12" md="12" lg="12">
          <Card className="p-3">
            <Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between", borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
                <span className="text-md text-bold">Subtotal:</span>
                <span className="text-price text-bold">{!allCartsQuery.isLoading ? `$483` : <Skeleton />}</span>
              </Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between", borderBottom: "1px solid #dedede", paddingBottom: ".5rem", marginBottom: ".5rem" }}>
                <span className="text-md text-bold">Shipping:</span>
                <span className="text-price text-bold">{!allCartsQuery.isLoading ? `$17` : <Skeleton />}</span>
              </Stack>
              <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
                <span className="text-md text-bold">Bag Total:</span>
                <div>
                  <span className="text-sm text-color-secondary">({( !allCartsQuery.isLoading ? `${bagTotal} item` : <Skeleton />)})&nbsp;&nbsp;</span>
                  <span className="text-price text-bold">{!allCartsQuery.isLoading ? `$500` : <Skeleton />}</span>
                </div>
              </Stack>
            </Stack>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs="12" sm="12" md="12" lg="12">
          <Button variant="dark" style={{ width: "100%" }} onClick={() => router.push("/checkout")}>Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
