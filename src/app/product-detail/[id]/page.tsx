"use client"
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image'
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import styles from './styles.module.scss'
import { FiCheck } from "react-icons/fi"
import cx from "classnames"
import Skeleton from 'react-loading-skeleton'
import { Products } from '@/app/types/Products';
import { useGetDetailProductQuery, useGetAllCartsQuery, useAddNewCartMutation, useUpdateCartMutation } from '@/services/fakeStore';
import { ToastContainer, toast } from 'react-toastify';

import HeaderDetailProduct from '@/app/components/HeaderDetailProduct';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [index, setIndex] = useState(0);
  const productId = params.id || 0;

  const detailProductQuery = useGetDetailProductQuery({ id: isFinite(productId) ? +productId : 0 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const detailProductData = detailProductQuery?.data || {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: ""
  };
  
  const allCartsQuery = useGetAllCartsQuery(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allCartsData = allCartsQuery?.data || [];
  const [arrCartDatas, setArrCartDatas] = useState<Products[]>([]);
  const [selectedCount, setSelectedCount] = useState(1);

  const toBuyProduct = useMemo(() => {
    return {
      productId: detailProductData?.id || 0,
      quantity: selectedCount
    };
  }, [detailProductData, selectedCount]);

  const [addCart] = useAddNewCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const onWishlist = () => {
    alert("Wishlisted !")
  }

  useEffect(() => {
    setArrCartDatas(allCartsData?.products || []);
  }, [allCartsData]);

  const handleAddCart = () => {
    const currentProductIndex = arrCartDatas.findIndex(item => item.productId === toBuyProduct.productId);
    if (currentProductIndex > -1) {
      setArrCartDatas((prevState: Products[]) => {
        const tmp = [...prevState];
        tmp[currentProductIndex] = {
          ...tmp[currentProductIndex],
          quantity: selectedCount
        };
        updateCart({
          userId: 3, //default user
          date: dayjs(new Date()).format("YYYY-MM-DD"),
          products: tmp
        });
        return tmp;
      })
    } else {
      const tmp = [...arrCartDatas];
      tmp.push(toBuyProduct);
      addCart({
        userId: 3, //default user
        date: dayjs(new Date()).format("YYYY-MM-DD"),
        products: tmp
      });
      setArrCartDatas(tmp);
    }
    toast.success("Already added to Cart !");
  }

  const handleUpdateCart = (action: string) => {
    setSelectedCount((prevState: number) => {
      const currentQuantity = action === "addition" ? prevState + 1 : prevState - 1;
      return currentQuantity > -1 ? currentQuantity : 0;
    });
  }

  return (
    <Container>
      <HeaderDetailProduct />
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" className="position-relative mt-3">
          <HeaderDetailProduct isMobile={true} />
          {detailProductQuery.isLoading ? <Skeleton /> : <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
            <Carousel.Item className="position-relative">
              <Image src={detailProductData.image} className="borderRadius20" width={375} height={400} alt={"product 1"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src={detailProductData.image} className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
            <Carousel.Item className="position-relative">
              <Image src={detailProductData.image} className="borderRadius20" width={375} height={400} alt={"product 2"} />
              <Image src="/assets/icons/wishlist_inside_pict.png" onClick={onWishlist} className={styles.wishlistInsidePict} width={30} height={30} alt={"whishlist icon"} />
            </Carousel.Item>
          </Carousel>}
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <Stack direction="horizontal" gap={3} className="mt-3" style={{ justifyContent: "space-between"}}>
            <div>
              <span className="text-title text-color-base text-bold">{detailProductData.title || <Skeleton />}</span><br />
              <span className="text-md text-color-secondary">{detailProductData.category || <Skeleton />}</span><br />
              {detailProductQuery.isLoading ? <Skeleton /> : <div>
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <Image src="/assets/icons/star.png" className={styles.star} width={12} height={11} alt="star" />
                <span className="text-md">(320 Review)</span>
              </div>}
            </div>
            {detailProductQuery.isLoading ? <Skeleton /> : <div>
              <Stack direction="horizontal" gap={3} className="p-2" style={{ backgroundColor: "#eeeeee", borderRadius: "20px", justifyContent: "space-evenly" }}>
              <span className="text-lg" onClick={() => handleUpdateCart("subtract")}>-</span>
                <span className="text-lg">{selectedCount}</span>
                <span className="text-lg" onClick={() => handleUpdateCart("addition")}>+</span>
              </Stack>
              <span className="text-md text-bold">Available in stock</span>
            </div>}
          </Stack>
          <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
            <Stack gap={3} style={{  justifyContent: "center" }}>
              <span className="text-title text-color-base text-bold">Size</span>
              {detailProductQuery.isLoading ? <Skeleton /> : <Stack direction="horizontal" gap={3}>
                <div className={cx("text-lg", styles.sizeBlock)}>S</div>
                <div className={cx("text-lg", styles.sizeBlock)}>M</div>
                <div className={cx("text-lg", styles.sizeBlockSelected)}>L</div>
                <div className={cx("text-lg", styles.sizeBlock)}>XL</div>
                <div className={cx("text-lg", styles.sizeBlock)}>XXL</div>
              </Stack>}
            </Stack>
            {detailProductQuery.isLoading ? <Skeleton /> :<Stack
              gap={3}
              style={{ flex: 0 }}
            >
              <div className={styles.colorSelectIndicator}>
                <div className={styles.colorItem1}><FiCheck /></div>
                <div className={styles.colorItem2}>&nbsp;</div>
                <div className={styles.colorItem3}>&nbsp;</div>
                <div className={styles.colorItem4}>&nbsp;</div>
              </div>
            </Stack>}
          </Stack>
          <p className="mb-3 text-title text-bold">Description</p>
          <p className="text-md">{detailProductData.description || <Skeleton />}</p>
          <Stack
            direction="horizontal"
            gap={3}
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <p className="lineHeight17">
                <span className="text-sm text-color-secondary">Total Price</span><br />
                <span className="text-price text-bold">${detailProductData.price || <Skeleton />}</span>
              </p>
            </div>
            <Button variant="dark" onClick={handleAddCart}><Image src="/assets/icons/shop.png" width={19} height={19} alt="shop" />&nbsp;&nbsp;Add to cart</Button>
          </Stack>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
}

export default ProductDetail;
