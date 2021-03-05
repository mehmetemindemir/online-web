import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import * as actions from "../../redux/actions";
import BreadcrumbOne from "../../components/Breadcrumb/BreadcrumbOne";
import LayoutHome from "../../components/Layout/LayoutHome";
import Product from "../../components/Product/Product";
import {SectionTitleTwo} from "../../components/SectionTitle";


const BrandProducts = ({menu, product, slug}) => {
    let body = "";

    if (menu && product && slug) {
        body = <LayoutHome aboutOverlay={false} menu={menu}>
            <BreadcrumbOne
                pageTitle=""
                backgroundImage="/assets/images/backgrounds/pexels-photo-356043.jpeg"
            >

            </BreadcrumbOne>;
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitleTwo
                            title={slug}
                            subtitle=""
                        />
                    </Col>
                </Row>

            </Container>
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


export async function getServerSideProps(context) {
    let slug = context.params.slug;
    console.log("brand Id:", slug)
    const reqMenu = {
        companyId: 1
    };
    const reqData = {
        companyId: 1,
        brandId: slug,
        prdId: 0,
        categoryId: 0,
        subCategoryId: 0,
        lang: "TR"
    }
    const resMenu = await actions.getAsyncMenu(reqMenu);
    const resProduct = await actions.getAsyncProduct(reqData);
    return {
        props: {
            menu: resMenu.menu.data,
            product: resProduct.product.data,
            slug: slug
        }
    }
}

export default BrandProducts;
