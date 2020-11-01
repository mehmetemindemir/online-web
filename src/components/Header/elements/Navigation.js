import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = ({menu}) => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li className="position-relative">
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Tum Kategoriler</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            {menu.map((item,index) => (

              <li key={index} >
                <Link key={index} href="/blog/standard-left-sidebar"  as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}>
                  <a>{item.categoryName}</a>
                </Link>
                {item.subCate.length>0?(
                    <IoIosArrowForward />
                ):(
                    ""
                )}


                    {item.subCate.map((item2,index2) => (
                      <ul key={index2} className="sub-menu--one-column sub-menu--one-column--child-menu">
                        <li>
                          <Link    href="/blog/standard-left-sidebar"   as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}>
                            <a>{item2.categoryName}</a>
                          </Link>
                        </li>
                      </ul>
                    ))}

              </li>
            ))}

          </ul>
        </li>
        <li className="position-relative">
          <Link
              href="/blog/standard-left-sidebar"
              as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Kampanyalar</a>
          </Link>
        </li>
        <li className="position-relative">
          <Link
              href="/blog/standard-left-sidebar"
              as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Gunun Firsatlari</a>
          </Link>
        </li>
        <li className="position-relative">
          <Link
              href="/blog/standard-left-sidebar"
              as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Yeni Urunler</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
