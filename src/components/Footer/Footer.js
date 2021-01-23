import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {IoIosArrowRoundUp} from "react-icons/io";
import {animateScroll} from "react-scroll";
import {Tooltip} from "react-tippy";

const Footer = () => {
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);
    const [company, setCompany] = useState(null);
    console.log("company :", company)
    if (typeof window !== "undefined" && !company) {
        setCompany(JSON.parse(localStorage.getItem("company")));

    }
    useEffect(() => {
        setTop(100);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    let copyrightView = '';
    let socialView = '';
    if (company) {
        copyrightView = <div className="footer-copyright-text">
            &copy; {new Date().getFullYear() + " "}
            <a href="https://www.hasthemes.com" target="_blank">
                Shopping
            </a>
            . All Rights Reserved
            | <span>
            {company.phone ? (company.phone + " | ") : ("")}
            {company.phone2 ? (company.phone2 + " | ") : ("")}
            {company.mobilPhone ? (company.mobilPhone + " | ") : ("")}
            {company.mobilPhone ? (company.mobilPhone2 + " | ") : ("")}</span>
            {company.infoMail}
        </div>
        socialView = <div className="footer-social-icons space-mb--20">
            <ul>
                {company.twitter ? (
                    <li>
                        <Tooltip
                            title="Twitter"
                            position="top"
                            trigger="mouseenter"
                            animation="shift"
                            arrow={true}
                            duration={200}
                        >
                            <a href={company.twitter} target="_blank">
                                <FaTwitter/>
                            </a>
                        </Tooltip>
                    </li>
                ) : (<li></li>)}
                {company.facebook ? (
                    <li>
                        <Tooltip
                            title="Facebook"
                            position="top"
                            trigger="mouseenter"
                            animation="shift"
                            arrow={true}
                            duration={200}
                        >
                            <a href={company.facebook} target="_blank">
                                <FaFacebookF/>
                            </a>
                        </Tooltip>
                    </li>
                ) : (<li></li>)}
                {company.instagram ? (
                    <li>
                        <Tooltip
                            title="Instagram"
                            position="top"
                            trigger="mouseenter"
                            animation="shift"
                            arrow={true}
                            duration={200}
                        >
                            <a href={company.instagram} target="_blank">
                                <FaInstagram/>
                            </a>
                        </Tooltip>
                    </li>
                ) : (<li></li>)}
                {company.youtube ? (
                    <li>
                        <Tooltip
                            title="Youtube"
                            position="top"
                            trigger="mouseenter"
                            animation="shift"
                            arrow={true}
                            duration={200}
                        >
                            <a href={company.youtube} target="_blank">
                                <FaYoutube/>
                            </a>
                        </Tooltip>
                    </li>
                ) : (<li></li>)}
            </ul>
        </div>
    }

    return (
        <footer className="space-pt--100 space-pb--100 bg-color--grey">
            <Container>
                <Row>
                    <Col lg={9} md={12} className="space-mb-mobile-only--50">
                        {/*=======  footer navigation  =======*/}
                        <nav className="footer-nav-container footer-nav-container--horizontal space-mb--20">
                            <ul>
                                <li>
                                    <a href="/about">Hakkimizda</a>
                                </li>

                                <li>
                                    <a href="/contact">Iletisim</a>
                                </li>
                                
                            </ul>
                        </nav>

                        {/*=======  copyright text  =======*/}
                        {copyrightView}
                    </Col>
                    <Col lg={3} md={12} className="text-left text-lg-right">
                        {/*=======  social icons  =======*/}
                        {socialView}

                        {/*=======  payment icon  =======*/}
                        <div className="payment-icon">
                            <img
                                src={process.env.PUBLIC_URL + "/assets/images/icon/pay.png"}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <button
                className={`scroll-top ${scroll > top ? "show" : ""}`}
                onClick={() => scrollToTop()}
            >
                <IoIosArrowRoundUp/>
            </button>
        </footer>
    );
};


export default Footer;
