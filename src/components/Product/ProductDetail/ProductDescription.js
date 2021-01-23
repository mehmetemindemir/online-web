import {Fragment, useState} from "react";
import {IoIosHeartEmpty} from "react-icons/io";
import {getProductCartQuantity} from "../../../lib/product";

const ProductDescription = ({
                                product,
                                productPrice,
                                discountedPrice,
                                cartItems,
                                wishlistItem,
                                compareItem,
                                addToast,
                                addToCart,
                                addToWishlist,
                                deleteFromWishlist,
                                addToCompare,
                                deleteFromCompare
                            }) => {
    const [selectedProductColor, setSelectedProductColor] = useState(
        product.variation ? product.variation[0].color : ""
    );
    const [selectedProductSize, setSelectedProductSize] = useState(
        product.variation ? product.variation[0].size[0].name : ""
    );
    const [productStock, setProductStock] = useState(
        product.variation ? product.variation[0].size[0].stock : product.stock
    );
    const [quantityCount, setQuantityCount] = useState(1);

    const productCartQty = getProductCartQuantity(
        cartItems,
        product,
        selectedProductColor,
        selectedProductSize
    );

    return (
        <div className="product-content">

            <h2 className="product-content__title space-mb--20">{product.productName}</h2>
            <div className="product-content__price space-mb--20">
                <span className="main-price">Marka : {product.brandName} </span>
            </div>

            {product.discount > 0 ? (
                <Fragment>
                    <div className="product-content__price space-mb--20">
                        <span className="main-price discounted">Fiyat : {product.price} {product.currency} + KDV</span>
                    </div>
                    <div className="product-content__price space-mb--20">
                        <span
                            className="main-price">Indirimli Fiyat : {product.discountPrice} {product.currency} +KDV  %{product.discount} indirim</span>
                    </div>
                </Fragment>
            ) : (
                <span className="main-price">Fiyat : {product.price}{product.currency} </span>
            )}

            <div className="product-content__price space-mb--20">
                <span className="main-price">KDV : {product.tax} </span>
            </div>
            <div className="product-content__price space-mb--20">
                <span className="main-price">KDV Dahil : {product.discountPriceWithTax} {product.currency}</span>
            </div>
            <Fragment>
                <div className="product-content__quantity space-mb--40">
                    <div className="product-content__quantity__title">Quantity</div>
                    <div className="cart-plus-minus">
                        <button
                            onClick={() =>
                                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                            }
                            className="qtybutton"
                        >
                            -
                        </button>
                        <input
                            className="cart-plus-minus-box"
                            type="text"
                            value={quantityCount}
                            readOnly
                        />
                        <button
                            onClick={() =>
                                setQuantityCount(
                                    quantityCount < productStock - productCartQty
                                        ? quantityCount + 1
                                        : quantityCount
                                )
                            }
                            className="qtybutton"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="product-content__button-wrapper d-flex align-items-center">
                    {productStock && productStock > 0 ? (
                        <button
                            onClick={() =>
                                addToCart(
                                    product,
                                    addToast,
                                    quantityCount,
                                    selectedProductColor,
                                    selectedProductSize
                                )
                            }
                            disabled={productCartQty >= productStock}
                            className="lezada-button lezada-button--medium product-content__cart space-mr--10"
                        >
                            Add To Cart
                        </button>
                    ) : (
                        <button
                            className="lezada-button lezada-button--medium product-content__ofs space-mr--10"
                            disabled
                        >
                            Out of Stock
                        </button>
                    )}

                    <button
                        className={`product-content__wishlist space-mr--10 ${
                            wishlistItem !== undefined ? "active" : ""
                        }`}
                        title={
                            wishlistItem !== undefined
                                ? "Added to wishlist"
                                : "Add to wishlist"
                        }
                        onClick={
                            wishlistItem !== undefined
                                ? () => deleteFromWishlist(product, addToast)
                                : () => addToWishlist(product, addToast)
                        }
                    >
                        <IoIosHeartEmpty/>
                    </button>


                </div>

            </Fragment>

        </div>
    );
};

export default ProductDescription;
