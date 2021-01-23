import {Fragment, useEffect, useState} from "react";
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import Swiper from "react-id-swiper";
import {IoIosArrowBack, IoIosArrowForward, IoIosHeartEmpty, IoMdExpand} from "react-icons/io";
import {Tooltip} from "react-tippy";

const ImageGalleryBottomThumb = ({
                                     product,
                                     wishlistItem,
                                     addToast,
                                     addToWishlist,
                                     deleteFromWishlist
                                 }) => {
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

    // effect for swiper slider synchronize
    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);

    // swiper slider settings
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        loopedSlides: product.productPhotos.length,
        slidesPerView: product.productPhotos.length,
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    };

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 2,
        slidesPerView: product.productPhotos.length,
        loopedSlides: product.productPhotos.length,
        touchRatio: 0.2,
        freeMode: true,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        renderPrevButton: () => (
            <button className="swiper-button-prev ht-swiper-button-nav">
                <IoIosArrowBack/>
            </button>
        ),
        renderNextButton: () => (
            <button className="swiper-button-next ht-swiper-button-nav">
                <IoIosArrowForward/>
            </button>
        )
    };
    return (
        <Fragment>
            <div className="product-large-image-wrapper border  ">

                {/* wishlist button */}
                <div className="product-details-button-wrapper">
                    <Tooltip
                        title={
                            wishlistItem !== undefined
                                ? "Added to wishlist"
                                : "Add to wishlist"
                        }
                        position="left"
                        trigger="mouseenter"
                        animation="shift"
                        arrow={true}
                        duration={200}
                    >
                        <button
                            className=""
                            onClick={
                                wishlistItem !== undefined
                                    ? () => deleteFromWishlist(product, addToast)
                                    : () => addToWishlist(product, addToast)
                            }
                            className={`wishlist-icon ${
                                wishlistItem !== undefined ? "active" : ""
                            }`}
                        >
                            <IoIosHeartEmpty/>
                        </button>
                    </Tooltip>
                </div>
                <LightgalleryProvider>
                    <Swiper {...gallerySwiperParams}>
                        {product.productPhotos &&
                        product.productPhotos.map((image, i) => {
                            return (
                                <div key={i}>
                                    <LightgalleryItem
                                        group="any"
                                        src={process.env.PUBLIC_URL + image.photoUrl}
                                    >
                                        <Tooltip
                                            title="Click to enlarge"
                                            position="left"
                                            trigger="mouseenter"
                                            animation="shift"
                                            arrow={true}
                                            duration={200}
                                        >
                                            <button className="enlarge-icon">
                                                <IoMdExpand/>
                                            </button>
                                        </Tooltip>
                                    </LightgalleryItem>
                                    <div className="single-image">
                                        <img
                                            src={process.env.PUBLIC_URL + image.photoUrl}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Swiper>
                </LightgalleryProvider>
            </div>
            {/*<div className="product-small-image-wrapper " style={{width: "100%", height: "10%", alignItems: 'center'}}>
                <Swiper {...thumbnailSwiperParams} >
                    {product.productPhotos &&
                    product.productPhotos.map((image, i) => {
                        return (
                            <div key={i}>
                                <div className="single-image ml-20">
                                    <img

                                        src={process.env.PUBLIC_URL + image.photoUrl}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Swiper>
            </div>*/}
        </Fragment>
    );
};

export default ImageGalleryBottomThumb;
