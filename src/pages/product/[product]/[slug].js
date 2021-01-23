import LayoutTwo from "../../../components/Layout/LayoutTwo";
import BreadcrumbOne from "../../../components/Breadcrumb/BreadcrumbOne";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import ProductDescription from "../../../components/Product/ProductDetail/ProductDescription";
import {useToasts} from "react-toast-notifications";
import React, {useEffect} from "react";
import ImageGalleryBottomThumb from "../../../components/Product/ProductDetail/ImageGalleryBottomThumb";
import * as actions from "../../../redux/actions/index"
import ProductDescriptionTab from "../../../components/Product/ProductDetail/ProductDescriptionTab";

const ProductDetail = ({
                           menu,
                           product,
                           cartItems,
                           wishlistItems,
                           compareItems,
                           addToCart,
                           addToWishlist,
                           deleteFromWishlist,
                           addToCompare,
                           deleteFromCompare
                       }) => {


    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
    });
    const {addToast} = useToasts();
    let cartItem = cartItems;
    let wishlistItem = wishlistItems;
    let compareItem = compareItems;
    let tempMenu = [];
    let breadcrumbView = "";
    let productDetailView = "";
    let imageGalleryBottomThumbView = "";
    let descriptionView = "";
    if (menu) {
        tempMenu = menu;
    }

    if (product) {
        compareItem = compareItems.filter((compareItem) => compareItem.id === product.prdId)[0];
        cartItem = cartItems.filter((cartItem) => cartItem.id === product.prdId)[0];
        wishlistItem = wishlistItems.filter((wishlistItem) => wishlistItem.id === product.prdId)[0];
        breadcrumbView =
            <BreadcrumbOne
                pageTitle={product.productName}
                backgroundImage="/assets/images/backgrounds/pexels-photo-356043.jpeg"
            >

            </BreadcrumbOne>;

        ;
        descriptionView = <ProductDescriptionTab product={product}/>;
        productDetailView = <ProductDescription
            product={product}
            productPrice={product.price}
            discountedPrice={product.discountPrice}
            cartItems={cartItems}
            cartItem={cartItem}
            wishlistItem={wishlistItem}
            compareItem={compareItem}
            addToast={addToast}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            deleteFromWishlist={deleteFromWishlist}
            addToCompare={addToCompare}
            deleteFromCompare={deleteFromCompare}
        />;
        imageGalleryBottomThumbView = <ImageGalleryBottomThumb
            product={product}
            wishlistItem={wishlistItem}
            addToast={addToast}
            addToWishlist={addToWishlist}
            deleteFromWishlist={deleteFromWishlist}
        />;
    }

    return (
        <LayoutTwo menu={tempMenu}>
            {/* breadcrumb */}
            {breadcrumbView}
            {/* product details */}
            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            {/* image gallery bottom thumb */}
                            {imageGalleryBottomThumbView}
                        </Col>

                        <Col lg={6}>
                            {/* product description */}
                            {productDetailView}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* product description tab */}
                            {descriptionView}
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartData,
        wishlistItems: state.wishlistData,
        compareItems: state.compareData,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (
            item,
            addToast,
            quantityCount,
            selectedProductColor,
            selectedProductSize
        ) => {
            dispatch(
                addToCart(
                    item,
                    addToast,
                    quantityCount,
                    selectedProductColor,
                    selectedProductSize
                )
            );
        },
        addToWishlist: (item, addToast) => {
            dispatch(addToWishlist(item, addToast));
        },
        deleteFromWishlist: (item, addToast) => {
            dispatch(deleteFromWishlist(item, addToast));
        },
        addToCompare: (item, addToast) => {
            dispatch(addToCompare(item, addToast));
        },
        deleteFromCompare: (item, addToast) => {
            dispatch(deleteFromCompare(item, addToast));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);


export async function getServerSideProps(context) {
    const id = context.params.slug;
    const reqMenu = {
        companyId: 1
    };
    const reqData = {
        companyId: 1,
        brandId: 0,
        prdId: id,
        categoryId: 0,
        subCategoryId: 0,
        lang: "TR"
    }
    const resMenu = await actions.getAsyncMenu(reqMenu);
    const resProduct = await actions.getAsyncProduct(reqData);
    return {
        props: {
            menu: resMenu.menu.data,
            product: resProduct.product.data[0]
        }
    }
}