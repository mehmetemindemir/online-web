import LayoutTwo from "../../components/Layout/LayoutTwo";
import React from "react";
import {Container, Row} from "react-bootstrap";
import {BreadcrumbOne} from "../../components/Breadcrumb";
import * as actions from "../../redux/actions";
import BrandGrid from "../../components/Brand/BrandGrid";

const Index = ({menu, brands}) => {
    return (
        <LayoutTwo menu={menu}>
            <BreadcrumbOne
                pageTitle="Fiyat Listesi"
                backgroundImage="/assets/images/backgrounds/bgIndicator-Light-1-1920x380.jpg"
            ></BreadcrumbOne>
            <div className="shop-page-content__body space-mt--r130 space-mb--r130">
                <Container>
                    <Row>
                        <BrandGrid
                            brands={brands}
                            column={2}
                            isPrice={true}
                            bottomSpace="space-mb--r50"></BrandGrid>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    )
}

export async function getServerSideProps() {
    const reqMenu = {
        companyId: 1
    }
    const reqBrand = {
        lang: "TR"
    }
    let menuData = [];
    let brands = [];
    const resBrands = await actions.getAsyncBrand(reqBrand);
    const resMenu = await actions.getAsyncMenu(reqMenu);

    console.log("brands :" + resBrands.brands.data);
    if (!resMenu.error) {
        menuData = resMenu.menu.data;
    }
    if (!resBrands.error) {
        brands = resBrands.brands.data.filter(x => x.priceList !== null)
    }

    return {
        props: {
            menu: menuData,
            brands: brands
        }
    }
}

export default Index;