import {Col, Container, Row} from "react-bootstrap";
import {IoIosCall, IoIosClock, IoIosMail, IoIosPin} from "react-icons/io";
import {SectionTitleOne, SectionTitleTwo} from "../../components/SectionTitle";
import {BreadcrumbOne} from "../../components/Breadcrumb";
import LayoutTwo from "../../components/Layout/LayoutTwo";
import {useState} from "react";

const Index = () => {
    const [company, setCompany] = useState(null);
    console.log("company :", company)
    if (typeof window !== "undefined" && !company) {
        setCompany(JSON.parse(localStorage.getItem("company")));

    }
    let infoView = "";
    if (company) {
        infoView = <Row className="space-mb-mobile-only--m50">
            <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                    <div className="icon-box__icon">
                        <IoIosPin/>
                    </div>
                    <div className="icon-box__content">
                        <h3 className="title">ADRES</h3>
                        <p className="content">
                            {company.address}
                        </p>
                    </div>
                </div>
            </Col>
            <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                    <div className="icon-box__icon">
                        <IoIosCall/>
                    </div>
                    <div className="icon-box__content">
                        <h3 className="title">Iletisim</h3>
                        <p className="content">
                            Mobile: {company.phone ? (company.phone + " | ") : ("")}
                            {company.phone2 ? (company.phone2 + " | ") : ("")}
                            {company.mobilPhone ? (company.mobilPhone + " | ") : ("")}
                            {company.mobilPhone ? (company.mobilPhone2 + " | ") : ("")}{" "}
                        </p>
                    </div>
                </div>
                <div className="icon-box">
                    <div className="icon-box__icon">
                        <IoIosMail/>
                    </div>
                    <div className="icon-box__content">
                        <p className="content"> Mail: {company.infoMail} </p>
                    </div>
                </div>
            </Col>
            <Col md={4} className="space-mb-mobile-only--50">
                <div className="icon-box">
                    <div className="icon-box__icon">
                        <IoIosClock/>
                    </div>
                    <div className="icon-box__content">
                        <h3 className="title">Hizmet Saatleri</h3>
                        <p className="content">
                            {company.info}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    }

    return (
        <LayoutTwo menu={[]}>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle=""
                backgroundImage="/assets/images/backgrounds/contact-1920x380.jpg"
            >

            </BreadcrumbOne>
            <div className="contact-page-content-wrapper space-mt--r130 space-mb--r130">
                <div className="contact-page-top-info space-mb--r100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitleTwo
                                    title="Iletisim "
                                    subtitle=""
                                />
                            </Col>
                        </Row>

                        {infoView}

                    </Container>
                </div>
                <div className="contact-page-map space-mb--r100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="google-map">
                                    <iframe
                                        title="map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6777.000026107364!2d-74.08304414937152!3d40.83212940017352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f866a80dcc27%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area!5e0!3m2!1sen!2sbd!4v1581852597883!5m2!1sen!2sbd"
                                        allowFullScreen
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="contact-page-form">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitleOne title="Indirimler ile ilgili olmak icin"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} className="ml-auto mr-auto">
                                <div className="lezada-form contact-form">
                                    <form>
                                        <Row>
                                            <Col md={6} className="space-mb--40">
                                                <input
                                                    type="text"
                                                    placeholder="First Name *"
                                                    name="customerName"
                                                    id="customerName"
                                                    required
                                                />
                                            </Col>
                                            <Col md={6} className="space-mb--40">
                                                <input
                                                    type="email"
                                                    placeholder="Email *"
                                                    name="customerEmail"
                                                    id="customerEmail"
                                                    required
                                                />
                                            </Col>
                                            <Col md={12} className="space-mb--40">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name="contactSubject"
                                                    id="contactSubject"
                                                />
                                            </Col>
                                            <Col md={12} className="space-mb--40">
                        <textarea
                            cols={30}
                            rows={10}
                            placeholder="Message"
                            name="contactMessage"
                            id="contactMessage"
                            defaultValue={""}
                        />
                                            </Col>
                                            <Col md={12} className="text-center">
                                                <button
                                                    type="submit"
                                                    value="submit"
                                                    id="submit"
                                                    className="lezada-button lezada-button--medium"
                                                >
                                                    Kaydet
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </LayoutTwo>
    );
};

export default Index;
