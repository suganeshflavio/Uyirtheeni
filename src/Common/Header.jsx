import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {apiCalls} from "../Axios/Services";
const Header = () => {

  const token = (localStorage.getItem('tok'));
  const [cartlistcount, setCartlistcount] = useState(0)

  function logout() {
    window.localStorage.removeItem("logged");
    window.localStorage.removeItem("tok");
    localStorage.clear()
    window.location.href = "/Login"
}
  
  useEffect(() => {  
    axios.post(`${process.env.REACT_APP_API}/customer/getCartCount`, {}, {
        headers: { "authtoken": `${token}` }
    }).then((res) => {
        if (res.data.data !== null)
            setCartlistcount(res.data.data.count)
    })

}, [])
var flag=0;
function mytoggel(){ 
  if(flag==0){ 
    document.getElementById('mobile-menu').style.display = "flex";
    document.getElementById('mobile-menu').style.width = window.screen.width/2+"px";
    document.getElementById('mobile-menu').style.height = window.screen.height+"px";
    document.querySelector('.mm-toggle').style.marginLeft = window.screen.width/2+"15px";
    document.getElementById('mobile-menu').classList.add("mobile-menu");
    flag++;
  }else{
    document.getElementById('mobile-menu').style.display = "none";
    document.getElementById('mobile-menu').style.width = "0px";
    document.querySelector('.mm-toggle').style.marginLeft = "0px";
    document.getElementById('mobile-menu').classList.remove("mobile-menu");   
    flag--;  
  }
  }
 


  return (
    <div>
        <header>
    <div class="container">
      <div class="row">
        <div class="container">
      <div class="row">
        <div class="header-banner">
          <div class="assetBlock">
            <div id="slideshow">
              <p> <span> Special Offers! </span> - We supply all organic food from farm</p>
              <p>Entice yourself with <span> delicious sweets!</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div id="header">
      <div class="container">
        <div class="header-container row">
          <div class="logo"> <a href="/" title="index" >
            <div><img src="/images/logo.png" alt="logo" width="50px"/></div>
            </a> </div>
          <div class="fl-nav-menu">
            <nav>
              <div class="mm-toggle-wrap">
                <div class="mm-toggle"><i class="icon-align-justify" onClick={mytoggel}></i><span class="mm-label">Menu</span> </div>
              </div>
              <div class="nav-inner"> 
                {/* <!-- BEGIN NAV --> */}
                <ul id="nav" class="hidden-xs">
                
                  <li> <a class="level-top" href="/"><span>Home</span></a></li>
                  <li class="mega-menu"> <a class="level-top" href="/shop"><span>Shop</span></a>
                    {/* <div class="level0-wrapper dropdown-6col">
                      <div class="container">
                        <div class="level0-wrapper2">
                          <div class="col-1">
                            <div class="nav-block nav-block-center"> 
                              <ul class="level0">
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Tropical Fruits</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Coconuts</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Dragonfruits</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Pomegranates</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Passionfruit</span></a> </li>
                                  </ul>
                                </li>
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Citrus Fruits‎</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Fresh Oranges</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Grapefruits</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Organic Limes</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Yellow Lemons</span></a> </li>
                                  </ul>
                                </li>
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Stone Fruits</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Sweet Apricots</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Nectarines</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Doughnut Peachs</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Italian Fruits</span></a> </li>
                                  </ul>
                                </li>
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Large Fruits</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Pineapples</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Organic Papayas</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Fresh Melons</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Grapefruits</span></a> </li>
                                  </ul>
                                </li>
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Seasonal Fruits</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Black Jamuns</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Fresh Mangos</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Longans</span></a> </li>
                                  </ul>
                                </li>
                                <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Berries & Cherries</span></a> 
                                  <ul class="level1">
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Strawberries</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Raspberries</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Blackberries</span></a> </li>
                                    <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Cherries</span></a> </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="menu_image"><a title="" href="grid.html"><img alt="menu_image" src="images/banner.jpg"/></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li class="mega-menu"> <a class="level-top" href="/category"><span>Categories</span></a>
                    {/* <div class="level0-wrapper dropdown-6col">
                      <div class="container">
                        <div class="level0-wrapper2">
                          <div class="nav-block nav-block-center"> 
                            <ul class="level0">
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Veg Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Tomatoes</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Cucumbers</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Peppers & Capsicums</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Avocados</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Dressings Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Hellmann's</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Giuseppe Giusti</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Unitednature</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Walden Farms</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Fruits Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Pineapples</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Red Apple</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Strawberries</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Row Mangos</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bagged Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Italian Baby Spinach</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Australia Green Kale</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Sustenir Fresh Toscano</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Oro Rocket Salad</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Lettuce Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Butterhead</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Red Coral</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Rolla Rosa Lettuce</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Summercrisp</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Bread Salads</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Green Goddess</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Grilled Broccoli</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Panzanella</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Green Tomato</span></a> </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div class="nav-add">
                            <div class="push_item">
                              <div class="push_img"><a href="#"><img src="images/banner1.jpg" alt="menu item 1"/></a></div>
                            </div>
                            <div class="push_item">
                              <div class="push_img"><a href="#"><img src="images/banner2.jpg" alt="menu item 2"/></a></div>
                            </div>
                            <div class="push_item">
                              <div class="push_img"><a href="#"><img src="images/banner3.jpg" alt="menu item 3"/></a></div>
                            </div>
                            <div class="push_item push_item_last">
                              <div class="push_img"><a href="#"><img src="images/banner4.jpg" alt="menu item 4"/></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                     </div> */}
                  </li>
                  {/* <li class="mega-menu"> <a class="level-top" href="/blog"><span>Blog</span></a>
                    <div class="level0-wrapper dropdown-6col">
                      <div class="container">
                        <div class="level0-wrapper2">
                          <div class="nav-block nav-block-center"> 
                            <ul class="level0">
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Leafy Vegetables</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Sprouts</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Lettuce</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Banana Leaves</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Microgreens</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Mushrooms</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Shimeji Mushroom</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Portobello Mushroom</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Oyster Mushroom</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Shiitake Mushroom</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Baby Vegetables</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Cabbage</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Capsicums</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Pak Choi</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Spinach</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Salad Vegetables</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Cucumbers</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Avocados</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Mustard Leaves</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Tomatoes</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Asian Vegetables</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Spring Onion</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Lady Fingers</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Watercress</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Curry Leaves</span></a> </li>
                                </ul>
                              </li>
                              <li class="level3 nav-6-1 parent item"> <a href="grid.html"><span>Beans Vegetables</span></a> 
                                <ul class="level1">
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>French Beans</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Sweet Corn</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Fine Green Beans</span></a> </li>
                                  <li class="level2 nav-6-1-1"> <a href="grid.html"><span>Petai Beans</span></a> </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  <li class="mega-menu"> <a class="level-top" href="/about"><span>About</span></a> </li>
                  <li class="mega-menu"> <a class="level-top" href="/contact"><span>Contact</span></a> </li>
                  {/* <li class="level0 parent drop-menu"><a href="#"><span>Pages</span> </a> 
                    <ul class="level1">
                      <li class="level1 first"><a href="grid.html"><span>Product Grid</span></a></li>
                      <li class="level1 nav-10-2"> <a href="list.html"> <span>Product List</span> </a> </li>
                      <li class="level1 nav-10-3"> <a href="product-detail.html"> <span>Product Detail</span> </a> </li>
                      <li class="level1 nav-10-4"> <a href="shopping-cart.html"> <span>Cart Page</span> </a> </li>
                      <li class="level1 first parent"><a href="checkout.html"><span>Checkout</span></a> 
                        <ul class="level2 right-sub">
                          <li class="level2 nav-2-1-1 first"><a href="checkout-method.html"><span>Method</span></a></li>
                          <li class="level2 nav-2-1-5 last"><a href="checkout-billing-info.html"><span>Billing Info</span></a></li>
                        </ul>
                      </li>
                      <li class="level1 nav-10-4"> <a href="wishlist.html"> <span>Wishlist</span> </a> </li>
                      <li class="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
                      <li class="level1"> <a href="multiple-addresses.html"> <span>Multiple Addresses</span> </a> </li>
                      <li class="level1"> <a href="about-us.html"> <span>About us</span> </a> </li>
                      <li class="level1 first parent"><a href="blog.html"><span>Blog</span></a> 
                        <ul class="level2 right-sub">
                          <li class="level2 nav-2-1-1 first"><a href="blog-detail.html"><span>Blog Detail</span></a></li>
                        </ul>
                      </li>
                      <li class="level1"><a href="contact-us.html"><span>Contact us</span></a> </li>
                      <li class="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                      <li class="level1"><a href="login.html"><span>Login Page</span></a> </li>
                      <li class="level1"><a href="quickview.html"><span>Quick View</span></a> </li>
                      <li class="level1"><a href="newsletter.html"><span>Newsletter</span></a> </li>
                    </ul>
                  </li> */}
                  {/* <li class="fl-custom-tabmenulink mega-menu"> <a href="#" class="level-top"> <span>Custom</span> </a>
                    <div class="level0-wrapper fl-custom-tabmenu">
                      <div class="container">
                        <div class="header-nav-dropdown-wrapper clearer">
                          <div class="grid12-3">
                            <div><img src="images/custom-img1.jpg" alt="custom-image"/></div>
                            <h4 class="heading">Up to 70% Off</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                          <div class="grid12-3">
                            <div><img src="images/custom-img2.jpg" alt="custom-image"/></div>
                            <h4 class="heading">Big Sale - Get 50% oFF</h4>
                            <p>Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>
                          </div>
                          <div class="grid12-3">
                            <div><img src="images/custom-img3.jpg" alt="custom-image"/></div>
                            <h4 class="heading">SALE UP TO 40% OFF</h4>
                            <p>Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>
                          </div>
                          <div class="grid12-3">
                            <div><img src="images/custom-img4.jpg" alt="custom-image"/></div>
                            <h4 class="heading">Summer Sale! limited time</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
                {/* <!--nav-->  */}
              </div>
            </nav>
          </div>
          
          {/* <!--row--> */}
          
          <div class="fl-header-right">
            <div class="fl-links">
              <div class="no-js"> <a title="Company" class="clicker"></a>
                <div class="fl-nav-links">
                  <div class="language-currency">
                    {/* <div class="fl-language">
                      <ul class="lang">
                        <li><a href="#"> <img src="images/english.png" alt="English"/> <span>English</span> </a></li>
                        <li><a href="#"> <img src="images/francais.png" alt="French"/> <span>French</span> </a></li>
                        <li><a href="#"> <img src="images/german.png" alt="German"/> <span>German</span> </a></li>
                      </ul>
                    </div> */}
                    {/* <!--fl-language-->  */}
                    {/* <!-- END For version 1,2,3,4,6 -->  */}
                    {/* <!-- For version 1,2,3,4,6 --> */}
                    {/* <div class="fl-currency">
                      <ul class="currencies_list">
                        <li><a href="#" title="EGP"> £</a></li>
                        <li><a href="#" title="EUR"> €</a></li>
                        <li><a href="#" title="USD"> $</a></li>
                      </ul>
                    </div> */}
                    {/* <!--fl-currency-->  */}
                    {/* <!-- END For version 1,2,3,4,6 -->  */}
                  </div>
                  <ul class="links">
                    <li><a href="/dashboard" title="My Account">My Account</a></li>
                    <li><a href="/wishlist" title="Wishlist">Wishlist</a></li>
                    {/* <li><a href="checkout.html" title="Checkout">Checkout</a></li> */}
                    {token ? 
                    <li class="last"><a onClick={logout} title="Logout"><span style={{cursor:"pointer"}}>Logout</span></a></li>
                    :
                    <li class="last"><a href="/login" title="Login"><span>Login</span></a></li>

                    }
                  </ul>
                </div>
              </div>
            </div>
            <div class="fl-cart-contain">
              <div class="mini-cart">
                
                <div class="basket"> <a href="/cart">
                  {cartlistcount?
                  <span> {cartlistcount} </span>
                  :false}
                  </a> </div>
                <div class="fl-mini-cart-content" style={{display: "none"}}>
                  <div class="block-subtitle">
                    <div class="top-subtotal">2 items, <span class="price">$259.99</span> </div>
                    {/* <!--top-subtotal-->  */}
                    {/* <!--pull-right-->  */}
                  </div>
                  {/* <!--block-subtitle--> */}
                  <ul class="mini-products-list" id="cart-sidebar">
                    <li class="item first">
                      <div class="item-inner"><a class="product-image" title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" href="#l"><img alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White" src="products-images/p4.jpg"/></a>
                        <div class="product-details">
                          <div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Remove</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div>
                          {/* <!--access-->  */}
                          <strong>1</strong> x <span class="price">$179.99</span>
                          <p class="product-name"><a href="product-detail.html">Fresh Organic Mustard Leaves</a></p>
                        </div>
                      </div>
                    </li>
                    <li class="item last">
                      <div class="item-inner"><a class="product-image" title="JP Lizzy Satchel Designer Diaper Bag - Slate Citron" href="#"><img alt="JP Lizzy Satchel Designer Diaper Bag - Slate Citron" src="products-images/p3.jpg"/></a>
                        <div class="product-details">
                          <div class="access"><a class="btn-remove1" title="Remove This Item" href="#">Remove</a> <a class="btn-edit" title="Edit item" href="#"><i class="icon-pencil"></i><span class="hidden">Edit item</span></a> </div>
                          {/* <!--access-->  */}
                          <strong>1</strong> x <span class="price">$80.00</span>
                          <p class="product-name"><a href="product-detail.html">Fresh Organic Mustard Leaves</a></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="actions">
                    <button class="btn-checkout" title="Checkout" type="button" onClick="window.location=checkout.html"><span>Checkout</span></button>
                  </div>
                  {/* <!--actions-->  */}
                </div>
                {/* <!--fl-mini-cart-content-->  */}
              </div>
            </div>
            {/* <!--mini-cart--> */}
            {/* <div class="collapse navbar-collapse">
              <form class="navbar-form" role="search">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search"/>
                  <span class="input-group-btn">
                  <button type="submit" class="search-btn"> <span class="glyphicon glyphicon-search"> <span class="sr-only">Search</span> </span> </button>
                  </span> </div>
              </form>
            </div> */}
            {/* <!--links-->  */}
          </div>
        </div>
      </div>
    </div>
  </header>

  {/* <!-- Mobile Menu--> */}
<div id="mobile-menu">
  <ul>
<div class="logo"> <a href="/" title="index" >
            <div><img src="/images/logo.png" alt="logo" width="50px"/></div>
            </a> 
            </div>
    <li>
      <div class="/"><a href="#">Home</a> </div>
    </li>
    <li><a href="/shop">Shop</a>
    </li>
    <li><a href="/category">Categories</a>
    </li>
    <li><a href="/about">About</a>
    </li>
    <li><a href="/contact">Contact</a>
    </li>
    <li><a href="/termsandcondition">Terms&Conditions</a></li>
     <li><a href="/privacypolicy">Privacy Policy</a></li>
       {/* <li><a href="#">Custom‎</a></li>
    <li><a href="contact-us.html">Contact Us</a></li> */}
  </ul>
  {/* <div class="top-links">
    <ul class="links">
      <li><a title="My Account" href="login.html">My Account</a> </li>
      <li><a title="Wishlist" href="wishlist.html">Wishlist</a> </li>
      <li><a title="Checkout" href="checkout.html">Checkout</a> </li>
      <li><a title="Blog" href="blog.html">Blog</a> </li>
      <li class="last"><a title="Login" href="login.html">Login</a> </li>
    </ul>
  </div> */}
</div>

    </div>
  )
}

export default Header