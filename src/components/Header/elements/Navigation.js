import Link from "next/link";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {slugify} from "../../../shared/utility";

const Navigation = ({menu}) => {
    return (
        <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
            <ul>
                <li className="position-relative">
                    <Link href="/#">
                        <a>Tum Kategoriler</a>
                    </Link>
                    <IoIosArrowDown/>
                    <ul className="sub-menu sub-menu--one-column">
                        {menu.map((item, index) => (

                            <li key={item.id}>
                                <Link href="/category/[categoryName]/[category]/[id]" replace={true}
                                      as={`/category/${slugify(item.categoryName)}/${item.id}/0`}>
                                    <a>{item.categoryName}</a>
                                </Link>
                                {item.subCate.length > 0 ? (
                                    <IoIosArrowForward/>
                                ) : (
                                    ""
                                )}

                                <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                                    {item.subCate.map((item2, index2) => (

                                        <li key={item2.id}>
                                            <Link href="/category/[categoryName]/[category]/[id]"
                                                  as={`/category/${slugify(item2.categoryName)}/${item.id}/${item2.id}`}>
                                                <a>{item2.categoryName}</a>
                                            </Link>
                                        </li>

                                    ))}
                                </ul>
                            </li>
                        ))}

                    </ul>
                </li>
                <li className="position-relative">
                    <Link href="/brand">
                        <a>Markalar</a>
                    </Link>
                </li>
                <li className="position-relative">
                    <Link href="/offers/newproduct">
                        <a>Yeni Urunler</a>
                    </Link>
                </li>
                <li className="position-relative">
                    <Link href="/pricelist">
                        <a>Fiyat listesi</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
