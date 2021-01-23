import LayoutTwo from "../../components/Layout/LayoutTwo";
import {BreadcrumbOne} from "../../components/Breadcrumb";
import * as actions from "../../redux/actions";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

const Index = (props) => {
    const [company, setCompany] = useState(null);
    console.log("company :", company)
    if (typeof window !== "undefined" && !company) {
        setCompany(JSON.parse(localStorage.getItem("company")));

    }

    let companyView = '';
    if (company) {
        companyView =
            <div className="about-content space-mt--r130 space-mb--r130">
                <div className="section-title-container space-mb--40">
                    <Container>
                        <Row>
                            <Col lg={8} className="ml-auto mr-auto">
                                {/* section title */}
                                <div className="about-title-container text-center">
                                    <p className="dark-title space-mb--35">{company.contactName}</p>
                                    <h2 className="title space-mb--15">
                                        {company.companyName}
                                    </h2>
                                    <p className="title-text">
                                        {company.info}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* about video content */}
                <div className="about-video-content space-mb--r100">
                    <Container>

                        <Row>
                            <Col lg={10} className="ml-auto mr-auto">
                                <Row>
                                    <Col md={6}>
                                        <div className="about-widget space-mb--35">
                                            <h2 className="widget-title space-mb--25">ADDRESS</h2>
                                            <p className="widget-content">
                                                {company.address}
                                            </p>
                                        </div>
                                        <div className="about-widget space-mb--35">
                                            <h2 className="widget-title space-mb--25">PHONE</h2>
                                            <p className="widget-content">Mobile:{company.mobilPhone}</p>
                                        </div>
                                        <div className="about-widget">
                                            <h2 className="widget-title space-mb--25">EMAIL</h2>
                                            <p className="widget-content">{company.infoMail}</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="about-page-text">
                                            <p className="space-mb--35">
                                                {company.aboutUs}
                                            </p>

                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="space-mb--r100"></div>
            </div>
    }
    return (
        <LayoutTwo menu={props.menu}>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle=""
                backgroundImage="/assets/images/backgrounds/bgIndicator-Light-1-1920x380.jpg"
            >

            </BreadcrumbOne>
            {/* about content */}
            {companyView}
        </LayoutTwo>
    )
}

export async function getStaticProps() {
    const reqMenu = {
        companyId: 1
    };
    const resMenu = await actions.getAsyncMenu(reqMenu);


    return {
        props: {
            menu: resMenu.menu.data,
        }

    }
}

export default Index;