import React from 'react'
import {Container, Row} from "react-bootstrap";
import LayoutHome from "../components/Layout/LayoutHome";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json"
import HeroSliderOne from "../components/Slider/HeroSliderOne";
import Product from "../components/Product/Product";
import * as actions from '../redux/actions/index'


const Home = ({menu, product}) => {
    let body = "";
    if (menu && product) {
        body = <LayoutHome aboutOverlay={false} menu={menu}>
            <HeroSliderOne sliderData={heroSliderData}/>
            <div className="product-tab space-mb--r100">
                <Container>
                    <Row className="space-mb--rm50">
                        <div className="shop-products">
                            <Row className="grid four-column">
                                <Product
                                    products={product}
                                    bottomSpace="space-mb--r50"
                                    column={2}
                                />
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </LayoutHome>
    }
    return (
        <div>
            {body}
        </div>

    )
};

export async function getServerSideProps() {
    const reqData = {
        companyId: 1,
        brandId: 0,
        prdId: 0,
        categoryId: 0,
        subCategoryId: 0,
        lang: "TR"
    }
    const resProduct = await actions.getAsyncProduct(reqData);
    //console.log("resProduct :", resProduct.product)
    const reqMenu = {
        companyId: 1
    };
    const resMenu = await actions.getAsyncMenu(reqMenu);
    if (resMenu.error || resMenu.menu.statusCode !== "OK") {
        console.log("resMenu.error :", resMenu.menu)
    }
    return {
        props: {
            product: resProduct.product.data,
            menu: resMenu.menu.data
        }

    }
}


export default Home;
