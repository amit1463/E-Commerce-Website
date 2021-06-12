import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <h1><a href="index.html"><b>T<div>H</div>E</b>Big Store<span>The Best Supermarket</span></a></h1>
                </div>
                <div className="head-t">
                    <ul className="card">
               
                    <li><Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</Link></li>
                    <li><Link to="/login"><i className="fa fa-user" aria-hidden="true"></i>Login</Link></li>
                    <li><Link to="/register"><i className="fa fa-arrow-right" aria-hidden="true"></i>Register</Link></li>
                    <li><Link to="/orderhistory"><i className="fa fa-file-text-o" aria-hidden="true"></i>Order History</Link></li>
                    <li><Link to="/shipping"><i className="fa fa-ship" aria-hidden="true"></i>Shipping</Link></li>
                    </ul>
                </div>
                <div className="nav-top">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header nav_2">
                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                            data-target="#bs-megadropdown-tabs">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav ">
                            <li><Link to="/" className="hyper"><span>Home</span></Link></li>
                            <li className="dropdown ">
                                <a href="#" className="dropdown-toggle  hyper" data-toggle="dropdown"><span>Kitchen<b
                                    className="caret"></b></span></a>
                                <ul className="dropdown-menu multi">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Water &
                                                Beverages</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Fruits &
                                                Vegetables</a></li>
                                            <li><a href="kitchen.html"> <i className="fa fa-angle-right" aria-hidden="true"></i>Staples</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Branded Food</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Breakfast &amp;
                                                Cereal</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Snacks</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Spices</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Biscuit &amp;
                                                Cookie</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Sweets</a></li>
                                        </ul>

                                    </div>
                                    <div className="col-sm-3">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pickle &
                                                Condiment</a></li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Instant Food</a>
                                            </li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Dry Fruit</a>
                                            </li>
                                            <li><a href="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Tea &amp;
                                                Coffee</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3 w3l">
                                        <a href="kitchen.html"><img src="images/me.png" className="img-responsive" alt="" /></a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                </ul>
                            </li>
                            <li className="dropdown">

                                <a href="#" className="dropdown-toggle hyper" data-toggle="dropdown"><span> Personal Care <b
                                    className="caret"></b></span></a>
                                <ul className="dropdown-menu multi multi1">
                                <div className="row">
                                    <div className="col-sm-3">
                                    <ul className="multi-column-dropdown">
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i> Ayurvedic </a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Baby Care</a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Cosmetics</a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Deo & Purfumes</a>
                                        </li>

                                    </ul>

                                    </div>
                                    <div className="col-sm-3">

                                    <ul className="multi-column-dropdown">
                                        <li><a href="care.html"> <i className="fa fa-angle-right" aria-hidden="true"></i>Hair Care </a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Oral Care</a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Personal Hygiene</a>
                                        </li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Skin care</a></li>

                                    </ul>

                                    </div>
                                    <div className="col-sm-3">

                                    <ul className="multi-column-dropdown">
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i> Fashion Accessories
                                        </a></li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Grooming Tools</a>
                                        </li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Shaving Need</a>
                                        </li>
                                        <li><a href="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Sanitary Needs</a>
                                        </li>

                                    </ul>
                                    </div>
                                    <div className="col-sm-3 w3l">
                                    <a href="care.html"><img src="images/me1.png" className="img-responsive" alt="" /></a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle hyper" data-toggle="dropdown"><span>Household<b
                                    className="caret"></b></span></a>
                                <ul className="dropdown-menu multi multi2">
                                <div className="row">
                                    <div className="col-sm-3">
                                    <ul className="multi-column-dropdown">
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Cleaning
                                            Accessories</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>CookWear</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Detergents</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Gardening Needs</a>
                                        </li>

                                    </ul>

                                    </div>
                                    <div className="col-sm-3">

                                    <ul className="multi-column-dropdown">
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Kitchen & Dining</a>
                                        </li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>KitchenWear</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pet Care</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Plastic Wear</a>
                                        </li>

                                    </ul>

                                    </div>
                                    <div className="col-sm-3">

                                    <ul className="multi-column-dropdown">
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pooja Needs</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Serveware</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Safety
                                            Accessories</a></li>
                                        <li><a href="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Festive Decoratives
                                        </a></li>

                                    </ul>
                                    </div>
                                    <div className="col-sm-3 w3l">
                                    <a href="hold.html"><img src="images/me2.png" className="img-responsive" alt="" /></a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                </ul>
                            </li>

                            <li><a href="codes.html" className="hyper"> <span>Codes</span></a></li>
                            {/* <li><a href="/contact" className="hyper"> <span>Contact</span></a></li> */}
                            <li><Link to="/contact" className="hyper"><span>Contact</span></Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="cart">

                        <span className="fa fa-shopping-cart my-cart-icon"><span className="badge badge-notify my-cart-badge"></span></span>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
};

export default Header;