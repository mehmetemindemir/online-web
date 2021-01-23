import {Col, Container, Row} from "react-bootstrap";

const BreadcrumbOne = ({backgroundImage, pageTitle, className}) => {
    return (
        <div
            className={`breadcrumb-area space-pt--70 space-pb--70 ${
                className ? className : ""
            }`}
            style={{
                backgroundImage: `url("${process.env.PUBLIC_URL + backgroundImage}")`
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <h1 className="breadcrumb__title text-white"
                        ></h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BreadcrumbOne;
