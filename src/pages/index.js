import axios from '../axios-instance';
import React from 'react'
import { Container, Row } from "react-bootstrap";
import * as actions from "../redux/actions/index"
import {connect} from "react-redux";
import LayoutHome from "../components/Layout/LayoutHome";
import Product from "../components/Product/Product";
class Home extends React.Component {
    state={
        layout:"grid four-column",
        productCritea: {
            companyId: 1,
            brandId: 0,
            categoryId: 0,
            subCategoryId: 0,
            lang: "TR"
        }
    }
    static async getInitialProps(ctx) {
        return { stars: 2 }

    }
        componentDidMount() {
        this.props.doLogin("MED","MED7319")
            this.props.getMenu();
            this.props.getProduct(this.state.productCritea);
        }


    render() {
        let menu=[];
        if(this.props.menuList){
            menu=this.props.menuList;
        }
        return (
            <LayoutHome aboutOverlay={false} menu={menu} >
                <div className="product-tab space-mb--r100">
                    <Container>
                        <Row className="space-mb--rm50">
                        <Product
                            products={this.props.productList}
                            bottomSpace="space-mb--r50"
                        />
                        </Row>
                    </Container>
                </div>
            </LayoutHome>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.brand.loading,
        error: state.brand.error,
        menuList: state.menu.menuData,
        productList: state.product.productList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMenu: () => dispatch(actions.getMenu()),
        doLogin:(userName,pass)=>dispatch(actions.auth(userName,pass)),
        getProduct:(data)=>dispatch(actions.getProduct(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home,axios);
