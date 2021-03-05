import {Fragment} from "react";
import {Col} from "react-bootstrap";
import Link from "next/link";
import {slugify} from "../../shared/utility";

const BrandGrid = ({brands, column, bottomSpace, isPrice}) => {
    return (
        <Fragment>
            {brands.map((brand) => {
                return (
                    <Col
                        lg={column}
                        className={bottomSpace ? bottomSpace : ""}
                    >
                        {isPrice === true ? (
                            <div className="product-grid border " style={{"borderRadius": "10px", "padding": "10px"}}>
                                {/*=======  single product image  =======*/}
                                <div className="product-grid__image">

                                    <Link
                                        href={brand.priceList} target={"_blank"}
                                    >
                                        <a className="image-wrap" target="_blank">
                                            <img
                                                src={brand.logo}
                                                className="img-fluid"
                                                alt={brand.priceListTitle}
                                            />

                                        </a>
                                    </Link>

                                </div>

                                {/*=======  single product content  =======*/}
                                <div className="product-grid__content">
                                    <div className="title  ">
                                        <h3>
                                            <Link href={brand.priceList} target={"_blank"}
                                            >
                                                <a target="_blank">{brand.priceListTitle}</a>
                                            </Link>
                                        </h3>

                                    </div>

                                </div>
                            </div>) : (
                            <div className="product-grid border " style={{"borderRadius": "10px", "padding": "10px"}}>
                                {/*=======  single product image  =======*/}
                                <div className="product-grid__image">

                                    <Link
                                        href={`/product/[product]/[slug]`}
                                        as={
                                            process.env.PUBLIC_URL + `/product/${slugify(brand.brandName)}/${brand.brandId}`
                                        }
                                    >
                                        <a className="image-wrap">
                                            <img
                                                src={brand.logo}
                                                className="img-fluid"
                                                alt={brand.brandName}
                                            />

                                        </a>
                                    </Link>

                                </div>

                                {/*=======  single product content  =======*/}
                                <div className="product-grid__content">
                                    <div className="title  ">
                                        <h3>
                                            <Link
                                                href={`/product/[product]/[slug]`}
                                                as={
                                                    process.env.PUBLIC_URL + `/product/${slugify(brand.brandName)}/${brand.brandId}`
                                                }
                                            >
                                                <a>{brand.brandName}</a>
                                            </Link>
                                        </h3>

                                    </div>

                                </div>
                            </div>)}

                    </Col>
                );
            })}

        </Fragment>
    )
}
export default BrandGrid;