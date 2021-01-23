import {IoIosSearch} from "react-icons/io";
import React from "react";
import {setActiveSort} from "../../../lib/product";

const ShopSidebar = ({categories, getSorCategory, selected, categoryName}) => {
    const tags = [];
    console.log('selected :', selected)
    return (
        <div className="shop-sidebar">
            <div className="single-sidebar-widget space-mb--40">
                {/* search widget */}
                <div className="search-widget">
                    <form>
                        <input type="search" placeholder="Search products ..."/>
                        <button type="button">
                            <IoIosSearch/>
                        </button>
                    </form>
                </div>
            </div>

            {/* category list */}
            <div className="single-sidebar-widget space-mb--40">
                <h2 className="single-sidebar-widget__title space-mb--30">
                    {categoryName}
                </h2>
                {categories.length > 0 ? (
                    <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
                        <li>
                            <button
                                onClick={(e) => {
                                    if (selected !== 0) {
                                        getSorCategory(0)
                                        setActiveSort(e);
                                    }

                                }}
                                className={selected == 0 ? ("active") : ("")}
                            >
                                Butun alt kategoriler
                            </button>
                        </li>
                        {categories.map((item, i) => {
                            return (
                                <li key={i}>
                                    <button
                                        onClick={(e) => {
                                            getSorCategory(item.id);
                                            setActiveSort(e);
                                        }}
                                        className={selected == item.id ? ("active") : ("")}
                                    >
                                        {item.categoryName}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    "No categories found"
                )}
            </div>


            {/* tag list */}
            <div className="single-sidebar-widget">
                <h2 className="single-sidebar-widget__title space-mb--30">Tags</h2>
                {tags.length > 0 ? (
                    <div className="tag-container">
                        {tags.map((tag, i) => {
                            return (
                                <button
                                    key={i}
                                    onClick={(e) => {
                                    }}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    "No tags found"
                )}
            </div>
        </div>
    );
};

export default ShopSidebar;
