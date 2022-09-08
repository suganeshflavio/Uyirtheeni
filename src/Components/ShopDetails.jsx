import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { apiCalls } from "../Axios/Services";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation, } from "react-router-dom";
const token = (localStorage.getItem('tok'));


const ShopDetails = () => {
  const [sproduct, setSproduct] = useState([])
  const history = useNavigate;
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [product, setProduct] = useState([])
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState("")
  const [recProducts, setRecProducts] = useState([])
  const [product_varient, setProduct_varient] = useState("")
  var [variant_id, setVariant_id] = useState("")
  var [curprice, setCurprice] = useState("")
  var [curdisprice, setCurdisprice] = useState("")
  var [no_of_products, setNo_of_products] = useState("1")


  useEffect(() => {
    apiCalls("post", "/customer/getweb_Product", { "id": id }).then((res) => {
      setLoad(false)
      console.log("response", res.data.data[0].product_variants[0].actual_price);
      setSproduct(res.data.data[0]);
      setVariant_id(res.data.data[0].product_variants[0].id);
      setProduct_varient(res.data.data[0].product_variants);
      // setProduct_varient(res.data.data.product_variants);
      setCurprice(res.data.data[0].product_variants[0].actual_price);
      setCurdisprice(res.data.data[0].product_variants[0].discount_price);

    })
      .catch((err) => {

      })
  }, [])

  useEffect(() => {
    apiCalls("post", `/customer/recommendedProduct`, { "cat_id": id })
      .then((res) => {
        setLoad(false)
        console.log(res.data);
        setRecProducts(res.data.data);
      });
  }, []);

  // function addtocart(sproduct) {
  //   if (localStorage.tok) {
  //     apiCalls("post",`/customer/addCart`, {
  //       "product_id": sproduct[0].id,
  //       "variant_id": variant_id,
  //       "no_of_products": no_of_products,
  //     }, ).then((res) => {
  //       setNo_of_products("");
  //       toast.success(" Added to Cart!", { autoClose: 2000 })
  //       window.location.reload()

  //     });
  //   }
  //   else {
  //     history.push("/login")
  //     toast.success("Please Login", { autoClose: 2000 })
  //   }
  // }
  function addtocart(sproduct) {
    if (localStorage.tok) {
      axios.post(`${process.env.REACT_APP_API}/customer/addCart`, {
        "product_id": sproduct.id,
        "variant_id": variant_id,
        "no_of_products": count,
      }, { headers: { "authtoken": `${token}` } }).then((res) => {
        setLoad(false)
        setNo_of_products("");
        toast.success(" Added to Cart!", { autoClose: 2000 })
        window.location.reload()

      });
    }
    else {
      window.location.href = "/login"
      toast.success("Please Login", { autoClose: 2000 })
    }
  }


  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
      setCount(prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
        setCount(prevCount -= 1);
      } else {
        return (prevCount = 1);
        setCount(prevCount -= 1);
      }
    });
  }

  function Updatee(id) {
    window.location.href = `/shopdetails/` + id
    // props.history.push("/Product?id=" + id)

  }


  const changevariant = (res) => {
    setVariant_id(product_varient[res].id)
    setCurprice(product_varient[res].actual_price)
    setCurdisprice(product_varient[res].discount_price)
  }

  return load ? (
    <div
      style={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div>
      <div class="page-heading">
        <div class="breadcrumbs">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <ul>
                  <li class="home"> <a href="/" title="Go to Home Page">Home</a> <span>&rsaquo; </span> </li>
                  <li class="category1601"> <strong>Shop</strong> </li>
                </ul>
              </div>
              {/* <!--col-xs-12-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--container-->  */}
        </div>
        <div class="page-title">
          <h2>Shop Details</h2>
        </div>
      </div>

      <div class="main-container col1-layout wow bounceInUp animated">
        <div class="main">
          <div class="col-main">
            {/* <!-- Endif Next Previous Product --> */}
            <div class="product-view wow bounceInUp animated" itemscope="" itemtype="http://schema.org/Product" itemid="#product_base">
              <div id="messages_product_view"></div>
              {/* <!--product-next-prev--> */}
              <div class="product-essential container">
                <div class="row">

                  <form action="#" method="post" id="product_addtocart_form">
                    {/* <!--End For version 1, 2, 6 --> */}
                    {/* <!-- For version 3 --> */}
                    <div class="product-img-box col-lg-5 col-sm-5 col-xs-12">
                      {/* <div class="new-label new-top-left">Hot</div>
                                            <div class="sale-label sale-top-left">-15%</div> */}
                      <div class="product-image">
                        {/* { sproduct.map((data)=>{ */}

                        <div class="product-full">
                          <img id="product-zoom" src={sproduct?.product_image} data-zoom-image="products-images/p14.jpg" alt="product-image" />
                        </div>

                        {/* <div class="more-views">
                                                    <div class="slider-items-products">
                                                        <div id="gallery_01" class="product-flexslider hidden-buttons product-img-thumb">
                                                            <div class="slider-items slider-width-col4 block-content">
                                                                <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom0" src="products-images/p2.jpg" alt="product-image" /> </a></div>
                                                                <div class="more-views-items"> <a href="#" data-image="products-images/p3.jpg" data-zoom-image="products-images/p3.jpg"> <img id="product-zoom1" src="products-images/p3.jpg" alt="product-image" /> </a></div>
                                                                <div class="more-views-items"> <a href="#" data-image="products-images/p4.jpg" data-zoom-image="products-images/p4.jpg"> <img id="product-zoom2" src="products-images/p4.jpg" alt="product-image" /> </a></div>
                                                                <div class="more-views-items"> <a href="#" data-image="products-images/p14.jpg" data-zoom-image="products-images/p14.jpg"> <img id="product-zoom3" src="products-images/p14.jpg" alt="product-image" /> </a> </div>
                                                                <div class="more-views-items"> <a href="#" data-image="products-images/p6.jpg" data-zoom-image="products-images/p6.jpg"> <img id="product-zoom4" src="products-images/p6.jpg" alt="product-image" /> </a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                        {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
                                                    <div class='item'>
                                                    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom0" src="products-images/p2.jpg" alt="product-image" /> </a></div>
                                                    </div>
                                                    <div class='item'>
                                                    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom0" src="products-images/p2.jpg" alt="product-image" /> </a></div>
                                                    </div>
                                                    <div class='item'>
                                                    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom0" src="products-images/p2.jpg" alt="product-image" /> </a></div>
                                                    </div>
                                                  
                                                </OwlCarousel> */}
                      </div>
                      {/* <!-- end: more-images -->  */}
                    </div>
                    {/* <!--End For version 1,2,6--> */}
                    {/* <!-- For version 3 --> */}
                    <div class="product-shop col-lg- col-sm-7 col-xs-12">
                      {/* <div class="product-next-prev"> <a class="product-next" href="#"><span></span></a> <a class="product-prev" href="#"><span></span></a> </div> */}
                      <div class="brand"></div>
                      <div class="product-name">
                        <h1>{sproduct?.product_name} </h1>
                      </div>
                      {/* <div class="ratings">
                                                <div class="rating-box">
                                                    <div style={{width:"60%"}} class="rating"></div>
                                                </div>
                                                <p class="rating-links"> <a href="#">1 Review</a> <span class="separator">|</span> <a href="#">Add Your Review</a> </p>
                                            </div> */}
                      <div class="price-block">
                        <div class="price-box">
                          {/* <p class="availability in-stock"><span>In Stock</span></p> */}
                          <p class="special-price">
                            <span class="price-label">Special Price</span>
                            <span id="product-price-48" class="price"> <span style={{ color: "green" }}> ₹{curdisprice ? curdisprice : "-"}</span>  <span style={{ fontSize: "18px" }}><strike>₹ {curprice ? curprice : "0"}</strike></span> </span> </p>
                        </div>
                      </div>
                      <div class="add-to-box">
                        <div class="add-to-cart">
                          <div class="pull-left">
                            <div class="custom pull-left">
                              <button onClick={decrement} class="reduced items-count" value={count} type="button"><i class="fa fa-minus">&nbsp;</i></button>
                              <input type="text" class="input-text qty" title="Qty" value={count} disabled maxlength="12" id="qty" name="qty" />
                              <button onClick={increment} class="increase items-count" value={count} type="button"><i class="fa fa-plus">&nbsp;</i></button>
                            </div>
                          </div>
                          <button onClick={() => addtocart(sproduct)} class="button btn-cart" title="Add to Cart" type="button">Add to Cart</button>
                        </div>

                      </div>
                      <div class="short-description">
                        <p style={{ textAlign: "justify" }}>{sproduct?.product_description}</p>
                      </div>
                      <div class="email-addto-box">
                        <ul class="add-to-links">
                          {/* <li> <a class="link-wishlist" 
                                                    ><span>Add to Wishlist</span></a></li> */}
                          {/* <li><span class="separator">|</span> <a class="link-compare" href="compare.html"><span>Add to Compare</span></a></li> */}
                        </ul>
                        {/* <p class="email-friend"><a href="#" class=""><span>Email to a Friend</span></a></p> */}
                      </div>
                      {/* <div class="social">
                                                <ul class="link">
                                                    <li class="fb"><a href="#"></a></li>
                                                    <li class="tw"><a href="#"></a></li>
                                                    <li class="googleplus"><a href="#"></a></li>
                                                    <li class="rss"><a href="#"></a></li>
                                                    <li class="pintrest"><a href="#"></a></li>
                                                    <li class="linkedin"><a href="#"></a></li>
                                                    <li class="youtube"><a href="#"></a></li>
                                                </ul>
                                            </div> */}

                      <ul class="shipping-pro" style={{ listStyle: "none" }}>
                        <li >
                          <span style={{ fontWeight: "bold" }}> Category:</span>  &nbsp;<span style={{ textTransform: "capitalize" }}>{sproduct?.category_name} </span>

                        </li>
                        <li>
                          <span style={{ fontWeight: "bold" }}> SKU:</span> &nbsp;<span>{sproduct?.sku}</span>
                        </li>
                        <li>
                          <div style={{ display: "flex" }}>

                            <span style={{ fontWeight: "bold" }}>Quantity: </span>
                            <div className="pt-3 pb-3" >
                              {Object?.keys(product_varient)?.map((varient, index) => (
                                <span className="active" onClick={() => changevariant(varient)}>
                                  <span class="badge bg-success active" style={{ padding: "8px", backgroundColor: "green", marginLeft: "10px",cursor:"pointer" }}> {product_varient[varient]?.quantity}</span>


                                </span>
                              ))}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <!--product-shop--> */}
                    {/* <!--Detail page static block for version 3--> */}
                  </form>
                </div>
              </div>
              {/* <!--product-essential--> */}
              <div class="product-collateral container">
                {/* <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
                                    <li class="active"> <a href="#product_tabs_description" data-toggle="tab"> Product Description </a> </li>
                                    <li><a href="#product_tabs_tags" data-toggle="tab">Specificaiton</a></li>
                                    <li> <a href="#reviews_tabs" data-toggle="tab">More Info</a> </li>
                                    <li> <a href="#product_tabs_custom" data-toggle="tab">Custom Tab</a> </li>
                                    <li> <a href="#product_tabs_custom1" data-toggle="tab">Custom Tab1</a> </li>
                                </ul>
                                <div id="productTabContent" class="tab-content">
                                    <div class="tab-pane fade in active" id="product_tabs_description">
                                        <div class="std">

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                                            <img alt="" src="images/custom-img2.jpg" style={{float:"right"}} />
                                            <p> Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit.</p>
                                            <ul>
                                                <li><strong>Mauris vel tellus non nunc mattis lobortis</strong></li>
                                                <li><strong>Suspendisse aliquet urna pretium eros convallis</strong></li>
                                                <li>Vestibulum ante ipsum <strong>primis in faucibus</strong></li>
                                                <li><strong>Fusce ultricies massa massa</strong></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="product_tabs_tags">
                                    <div class="std">
                                      <ul>
                                          <li><strong>Mauris vel tellus non nunc mattis lobortis</strong></li>
                                          <li><strong>Suspendisse aliquet urna pretium eros convallis</strong></li>
                                          <li>Vestibulum ante ipsum <strong>primis in faucibus</strong></li>
                                          <li><strong>Fusce ultricies massa massa</strong></li>
                                      </ul>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                                      </div>
                                    </div>
                                    <div class="tab-pane fade in" id="reviews_tabs">
                                    <div class="std">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. </p>
                                          </div>
                                        <div class="tab-pane fade" id="product_tabs_custom">
                                            <div class="product-tabs-content-inner clearfix">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.</p>
                                                <p> Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue.</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="product_tabs_custom1">
                                            <div class="product-tabs-content-inner clearfix">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                {/* <!--product-collateral--> */}
                <div class="box-additional">
                  {/* <!-- BEGIN RELATED PRODUCTS --> */}
                  <div class="related-pro container">
                    <div class="slider-items-products">
                      <div class="new_title center" style={{ textAlign: "center" }}>
                        <h2>Related Products</h2>
                      </div>

                    </div>
                  </div>
                  {/* <!-- end related product --> */}

                </div>


                <div class="row">
                  <div class="hot-deal">
                    <div class="box-timer">
                      <div class="countbox_1 timer-grid"></div>
                    </div>
                    <ul class="products-grid">
                      {recProducts?.map((y) => (

                        <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                          <div class="item-inner">
                            <div class="item-img">
                              <div class="item-img-info">
                                <a onClick={() => Updatee(y?.id)} class="product-image">
                                  <img src={y?.product_image} alt={y?.product_name} /></a>
                                {/* <div class="new-label new-top-left"></div>
                      <div class="item-box-hover">
                        <div class="box-inner">
                          <div class="product-detail-bnt"><a href="#" class="button detail-bnt"><span>Quick View</span></a></div>
                          <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist button detail-bnt" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                        </div>
                      </div> */}
                              </div>
                              <div class="add_cart">
                                <button class="button" type="button"><span onClick={() => Updatee(y?.id)}>View</span></button>

                              </div>
                            </div>
                            <div class="item-info">
                              <div class="info-inner">
                                <div class="item-title"><a onClick={() => Updatee(y?.id)} style={{ textTranform: "capitalize" }}>{y?.product_name} </a> </div>
                                <div class="item-content">
                                  {/* <div class="rating">
                          <div class="ratings">
                            <div class="rating-box">
                              <div class="rating" style={{width:"80%"}}></div>
                            </div>
                            <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                          </div>
                        </div> */}
                                  <div class="item-price">
                                    {/* <div class="price-box"><span class="regular-price"><span class="price">$125.00</span> </span> </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <!-- end related product --> */}
              </div>
              {/* <!--box-additional--> */}
              {/* <!--product-view--> */}
            </div>
          </div>
          {/* <!--col-main--> */}
        </div>
      </div>
    </div >
  )
}

export default ShopDetails