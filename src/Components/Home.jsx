import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const token = (localStorage.getItem("tok"));

const Home = (props) => {
  const [getCategory, setGetCategory] = useState([])
  const [recProducts, setRecProducts] = useState([])
  const [error, setError] = useState([])
  const [load, setLoad] = useState(true);
  const [banner, setBanner] = useState([])

    // GET BANNERS API CALL
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API}/customer/getBanners`, { headers: { "authtoken": ` ${token}` } }).
        then((res) => {
          setLoad(false)
          setBanner(res.data.data)
        }).catch((e) => {
          props.history.push("/Apifails")
        })
    }, [])
  
 // GET CATEGORY API CALL
 useEffect(() => {
  axios.get(`https://api.uyirtheeni.com/customer/getCategory`).
    then((res) => {
      setLoad(false)
      setGetCategory(res.data.data)
      console.log(res.data.data)
      // console.log(res.data.data);
    }).catch(function (error) {
      console.log('API CALL FAILS')
      setError('API CALL FAILS')
    })
}, [])

function Update(id) {
  window.location.href=`/categoryShop/` + id
  // props.history.push("/CategoryShop?id=" + id)
}
function Updatee(id) {
  window.location.href=`/shopdetails/`+id
  // props.history.push("/Product?id=" + id)

}
useEffect(() => {
  axios.post(`https://api.uyirtheeni.com/customer/recommendedProduct`, { "recommended": true })
    .then((res) => {
      setLoad(false)
      setRecProducts(res.data.data);
    });
}, [])


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
  <div class="content">
    {/* <div id="thmg-slider-slideshow" class="thmg-slider-slideshow">
      <div class="container">
        <div id='thm_slider_wrapper' class='thm_slider_wrapper fullwidthbanner-container' >
          <div id='thm-rev-slider' class='rev_slider fullwidthabanner'>
            <ul>
              <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img1.jpg'><img src='images/slide-img2.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image1" />
                <div class="info">
                  <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0'  data-y='220'  data-endspeed='500'  data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"2", whiteSpace:"nowrap"}}><span>Fresh Food</span></div>
                  <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0'  data-y='300'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"3", whiteSpace:"nowrap"}}>Simply <span>delicious</span></div>
                  <div class='tp-caption sfb  tp-resizeme ' data-x='0'  data-y='520'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4", whiteSpace:"nowrap"}}><a href='#' class="buy-btn">Shop Now</a></div>
                  <div    class='tp-caption Title sft  tp-resizeme ' data-x='0'  data-y='420'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4", whiteSpace:"nowrap"}}>We supply highly quality organic products</div>
                </div>
              </li>
              <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='images/slide-img3.jpg'><img src='images/slide-img3.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat' alt="slider-image2"  />
                <div class="info">
                  <div class='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='0'  data-y='220'  data-endspeed='500'  data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"2", whiteSpace:"nowrap"}}><span>Fresh Look</span></div>
                  <div class='tp-caption LargeTitle sfl  tp-resizeme ' data-x='0'  data-y='300'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"3", whiteSpace:"nowrap"}}><span>100%</span> Organic</div>
                  <div class='tp-caption sfb  tp-resizeme ' data-x='0'  data-y='520'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4", whiteSpace:"nowrap"}}><a href='#' class="buy-btn">Shop Now</a></div>
                  <div    class='tp-caption Title sft  tp-resizeme ' data-x='0'  data-y='420'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:"4", whiteSpace:"nowrap"}}>Farm Fresh Produce Right to Your Door</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}

    {/* carousel */}
    <div class="slider-area">

                <Swiper style={{ display: 'flex', justifyContent: "center", flexWrap: "wrap-reverse" }}
                    spaceBetween={30}
                    centeredSlides={true}

                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        backgroundColor: 'white'
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                           {banner.map((x) => (


                            <SwiperSlide>
                                {/* slide{i} */}
                                <a href="#">
                                    <div
                                        class="intro-section slider-content-center bg-img single-animation-wrap slider-bg-color-1"
                                        style={{
                                            aspectRatio: "16/9",
                                            backgroundImage: `url(${x.banner_image})`,
                                        }}
                                    >
                                        <div class="container">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    {/* <div class="slider-content-1 slider-animated-1" id="carosel">
                                                        <h1 class="animated" style={{ color: "white" }}>Optimize Your Health</h1>
                                                        <h3 id='offer' style={{ fontSize: "25px" }}>Flat 15% OFF</h3>
                                                        <h1 class="animated" style={{ background: "rgb(242 242 242 / 60%)", paddingLeft: "20px" }}>
                                                          </h1>
                                                        <div class="slider-btn btn-hover">
                                                            <a href="/shop" class="btn animated" id='buttonan' target="_blank" style={{ padding: "10px" }}>
                                                                Shop Now <i className="fas fa-long-arrow-alt-right "></i></a>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="hero-slider-img-1 slider-animated-1">
                                                        <img
                                                            class="animated animated-slider-img-1"

                                                            alt=""
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </SwiperSlide>


))}
                    
                </Swiper>
            </div>
    
    {/* <!--Category slider Start--> */}
    {/* <div class="top-cate">
      <div class="featured-pro container">
        <div class="row">
          <div class="slider-items-products">
            <div id="top-categories" class="product-flexslider hidden-buttons">
              <div class="slider-items slider-width-col4 products-grid">
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p1.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Fruits</div>
                  </div>
                  </a> </div>
                 <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p2.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Salads</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p3.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Vegetables</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p5.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Juices</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p12.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Meats</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p27.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Lettuce</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p8.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Citrus‎</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p11.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Berries</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p9.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Beans</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p6.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Pomegranates</div>
                  </div>
                  </a> </div>
                <div class="item"> <a href="#">
                  <div class="pro-img"><img src="products-images/p7.jpg" alt="Fresh Organic Mustard Leaves "/>
                    <div class="pro-info">Leafy Veg</div>
                  </div>
                  </a> </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* category */}
    <div class="best-pro slider-items-products container">
        <div class="new_title">
          <h2>All Categories</h2>
        </div>
        </div>
    <div class="row">
          <div class="hot-deal">
            <div class="box-timer">
              <div class="countbox_1 timer-grid"></div>
            </div>
            <ul class="products-grid">
            {getCategory.map((x) => {
            return (

              <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="item-inner">
                  <div class="item-img">
                    <div class="item-img-info"><a onClick={() => Update(x.id)}  class="product-image"><img src={x.category_image} alt="{x.category_name}"/></a>
                      {/* <div class="new-label new-top-left">Hot</div>
                      <div class="item-box-hover">
                        <div class="box-inner">
                          <div class="product-detail-bnt"><a href="#" class="button detail-bnt"><span>Quick View</span></a></div>
                          <div class="actions"><span class="add-to-links"><a href="#" class="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="#" class="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                        </div>
                      </div> */}
                    </div>
                    {/* <div class="add_cart">
                      <button class="button btn-cart" type="button"><span>Add to Cart</span></button>
                    </div> */}
                  </div>
                  <div class="item-info">
                    <div class="info-inner">
                      <div class="item-title"><a onClick={() => Update(x.id)}  style={{textTransform:"capitalize",cursor:"pointer",fontSize:"18px"}}>{x.category_name}</a> </div>
                      {/* <div class="item-content">
                        <div class="rating">
                          <div class="ratings">
                            <div class="rating-box">
                              <div class="rating" style={{width:"80%"}}></div>
                            </div>
                            <p class="rating-links"><a href="#">1 Review(s)</a> <span class="separator">|</span> <a href="#">Add Review</a> </p>
                          </div>
                        </div>
                        <div class="item-price">
                          <div class="price-box"><span class="regular-price"><span class="price">$125.00</span> </span> </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </li>
              )
            })
            }
            <ToastContainer Transition="zoom" />
            </ul>
          </div>
        </div>
    
    <div id="top">
      <div class="container">
        <div class="row">
          {/* <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <a href="#" data-scroll-goto="1"> <img src="images/banner-img1.jpg" alt="promotion-banner1"/> </a> </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"> <a href="#" data-scroll-goto="2"> <img src="images/banner-img2.jpg" alt="promotion-banner2"/> </a> </div> */}
        </div>
      </div>
    </div>
    
    {/* best seller */}

    {/* <section class=" wow bounceInUp animated">
      <div class="best-pro slider-items-products container">
        <div class="new_title">
          <h2>Best Seller</h2>
          <h4>So you get to know me better</h4>
        </div>
      </div>
    </section> */}

{/* best seller products */}

{/* <div class="row">
          <div class="hot-deal">
            <div class="box-timer">
              <div class="countbox_1 timer-grid"></div>
            </div>
            <ul class="products-grid">
            {recProducts.map((y) => (
              <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <div class="item-inner">
                  <div class="item-img">
                    <div class="item-img-info"><a onClick={() => Updatee(y.id)}  class="product-image"><img src={y.product_image} alt="Fresh Organic Mustard Leaves "/></a>
                      <div class="new-label new-top-left">Hot</div>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="info-inner">
                      <div class="item-title"><a onClick={() => Updatee(y.id)}  style={{textTransform:"capitalize",cursor:"pointer",fontSize:"18px"}}>{y.product_name} </a> </div>
                      <div class="item-content">
                        <div class="rating">
                          <div class="ratings">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </div> */}

    {/* hot deals */}
    <div class="hot-section" style={{marginBottom:"60px"}}>
      <div class="container">
        <div class="row">
          <div class="ad-info">
            <h2>Hurry Up!</h2>
            <h3>Deal of the week</h3>
            <h4>From our family farm right to your doorstep.</h4>
          </div>
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
                    <div class="item-img-info"><a onClick={() => Updatee(y?.id)}  class="product-image"><img src={y.product_image} alt="{y?.product_name"/></a>
                      <div class="new-label new-top-left">Hot</div>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="info-inner">
                      <div class="item-title"><a onClick={() => Updatee(y?.id)}  style={{textTransform:"capitalize",cursor:"pointer",fontSize:"18px"}}>{y?.product_name} </a> </div>
                      <div class="item-content">
                        <div class="rating">
                          <div class="ratings">
                          </div>
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

        {/* testimoniali */}
        {/* <div class="row">
          <div class="testimonials-section slider-items-products">
            <div  id="testimonials" class="offer-slider parallax parallax-2">
              <div class="slider-items slider-width-col6">
                <div class="item">
                  <div class="avatar"><img src="images/member1.png" alt="Image"/></div>
                  <div class="testimonials">Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people!</div>
                  <div class="clients_author"> Smith John <span>Happy Customer</span> </div>
                </div>
                <div class="item">
                  <div class="avatar"><img src="images/member2.png" alt="Image"/></div>
                  <div class="testimonials">Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated.</div>
                  <div class="clients_author"> Karla Anderson <span>Happy Customer</span> </div>
                </div>
                <div class="item">
                  <div class="avatar"><img src="images/member3.png" alt="Image"/></div>
                  <div class="testimonials">Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them!</div>
                  <div class="clients_author"> Stephen Smith <span>Happy Customer</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* logos */}
        {/* <div class="row">
          <div class="logo-brand">
            <div class="slider-items-products">
              <div id="brand-slider" class="product-flexslider hidden-buttons">
                <div class="slider-items slider-width-col6"> 
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand1.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand2.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand3.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand4.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand5.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand6.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand1.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand2.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand3.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand4.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand5.png" alt="Image"/></a></div>
                  </div>
                  <div class="item">
                    <div class="logo-item"><a href="#"><img src="images/brand6.png" alt="Image"/></a></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    
   
{/* segment shop */}


    {/* <div class="latest-blog wow bounceInUp animated animated container"> 
      
      <div>
        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
          <div class="blog_inner">
            <div class="blog-img"> <a href="blog-detail.html"> <img src="images/blog-img1.jpg" alt="blog image"/> </a>
              <div class="mask"> <a class="info" href="blog-detail.html">Read More</a> </div>
            </div>
            <div class="blog-info">
              <div class="post-date">
                <time class="entry-date" datetime="2015-05-11T11:07:27+00:00">26 <span>June</span></time>
              </div>
              <ul class="post-meta">
                <li><i class="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                <li><i class="fa fa-comments"></i><a href="#">4 comments</a> </li>
              </ul>
              <h3><a href="blog-detail.html">Powerful and flexible premium Ecommerce themes</a></h3>
              <p>Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu dictum nec...</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
          <div class="blog_inner">
            <div class="blog-img"> <a href="blog-detail.html"> <img src="images/blog-img2.jpg" alt="blog image"/> </a>
              <div class="mask"> <a class="info" href="blog-detail.html">Read More</a> </div>
            </div>
            <div class="blog-info">
              <div class="post-date">
                <time class="entry-date" datetime="2015-05-11T11:07:27+00:00">30 <span>June</span></time>
              </div>
              <ul class="post-meta">
                <li><i class="fa fa-user"></i>Posted by <a href="#">admin</a> </li>
                <li><i class="fa fa-comments"></i><a href="#">6 comments</a> </li>
              </ul>
              <h3><a href="blog-detail.html">Awesome template with lot's of features on the board!</a></h3>
              <p>Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor euismod laoreet eget ac felis erat sed elit bibendum ...</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    
  </div>

  <div class="container">
    <div class="row our-features-box">
      <ul>
        <li>
          <div class="feature-box">
            <div class="icon-truck"></div>
            <div class="content">FREE SHIPPING on order over ₹99</div>
          </div>
        </li>
        <li>
          <div class="feature-box">
            <div class="icon-support"></div>
            <div class="content">Have a question?<br/>
            <a href="tel:+91 90959-59587"> +91 90959 59587</a></div>
          </div>
        </li>
        <li>
          <div class="feature-box">
            <div class="icon-money"></div>
            <div class="content">100% Money Back Guarantee</div>
          </div>
        </li>
        <li>
          <div class="feature-box">
            <div class="icon-return"></div>
            <div class="content">30 days return Service</div>
          </div>
        </li>
        <li class="last">
          <div class="feature-box"> <a href="#"><i class="fa fa-apple"></i> download</a> <a href="#"><i class="fa fa-android"></i> download</a> </div>
        </li>
      </ul>
    </div>
  </div>

    </div>
  )
}

export default Home