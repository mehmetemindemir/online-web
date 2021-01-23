import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({product}) => {
    return (
        <div className="product-description-tab space-pt--r100 space-mt--r100 border-top--grey">
            <Tab.Container defaultActiveKey="comment">
                <Nav
                    variant="pills"
                    className="product-description-tab__navigation text-center justify-content-center space-mb--50"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="comment">Description</Nav.Link>
                    </Nav.Item>

                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="comment">
                        <div className="product-description-tab__details">
                            {product.comment}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
};

export default ProductDescriptionTab;
