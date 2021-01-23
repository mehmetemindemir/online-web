import {Fragment, useState} from "react";
import {Col} from "react-bootstrap";
import Link from "next/link";
import {slugify} from "../../../shared/utility";

const ProductGrid = ({
                         product,
                         discountedPrice,
                         productPrice,
                         cartItem,
                         wishlistItem,
                         compareItem,
                         bottomSpace,
                         addToCart,
                         addToWishlist,
                         deleteFromWishlist,
                         addToCompare,
                         deleteFromCompare,
                         addToast,
                         cartItems,
                         column
                     }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <Col
                lg={column}
                className={bottomSpace ? bottomSpace : ""}
            >
                <div className="product-grid border " style={{"borderRadius": "10px", "padding": "10px"}}>
                    {/*=======  single product image  =======*/}
                    <div className="product-grid__image">
                        <Link
                            href={`/product/[product]/[slug]`}
                            as={
                                process.env.PUBLIC_URL + `/product/${slugify(product.productName)}/${product.prdId}`
                            }
                        >
                            <a className="image-wrap">
                                <img
                                    src={product.image}
                                    className="img-fluid"
                                    alt={product.productName}
                                />

                            </a>
                        </Link>
                        <div className="product-grid__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">-{product.discount}%</span>
                            ) : (
                                ""
                            )}

                            {product.stock === 0 ? (
                                <span className="out-of-stock">out</span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-grid__content">
                        <div className="title  ">
                            <h3>
                                <Link
                                    href={`/product/[product]/[slug]`}
                                    as={
                                        process.env.PUBLIC_URL + `/product/${slugify(product.productName)}/${product.prdId}`
                                    }
                                >
                                    <a>{product.productName}</a>
                                </Link>
                            </h3>

                        </div>
                        <div className="price">
                            {product.discount > 0 ? (
                                <Fragment>
                                    <span className="main-price discounted">${productPrice}</span>
                                    <span className="discounted-price">${discountedPrice}</span>
                                </Fragment>
                            ) : (
                                <span className="main-price">${productPrice}</span>
                            )}
                        </div>
                    </div>
                </div>
            </Col>

        </Fragment>
    );
};

export default ProductGrid;
