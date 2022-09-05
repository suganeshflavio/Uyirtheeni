import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const QuickView = () => {
  return (
    <div>
        
        <div class="popup1" style={{display: "block"}}>
 
  <div class="quick-view-box">


<img src="images/close-icon.png" alt="close"  onclick='window.close()' class="x"/>

   <div class="product-view product-essential container">
            <div class="row">
              
              <form action="#" method="post" id="product_addtocart_form">
                {/* <!--End For version 1, 2, 6 -->
                <!-- For version 3 --> */}
                <div class="product-img-box col-lg-5 col-sm-5 col-xs-12">
                    <div class="new-label new-top-left">Hot</div>
                    <div class="sale-label sale-top-left">-15%</div>
                    <div class="product-image">
                      <div class="product-full"> <img id="product-zoom" src="products-images/p14.jpg" data-zoom-image="products-images/p14.jpg" alt="product-image"/> </div>
                      {/* <div class="more-views">
                        <div class="slider-items-products">
                          <div id="gallery_01" class="product-flexslider hidden-buttons product-img-thumb">
                            <div class="slider-items slider-width-col4 block-content">
                              <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
                              <div class="more-views-items"> <a href="#" data-image="products-images/p3.jpg" data-zoom-image="products-images/p3.jpg"> <img id="product-zoom"  src="products-images/p3.jpg" alt="product-image"/> </a></div>
                              <div class="more-views-items"> <a href="#" data-image="products-images/p4.jpg" data-zoom-image="products-images/p4.jpg"> <img id="product-zoom"  src="products-images/p4.jpg" alt="product-image"/> </a></div>
                              <div class="more-views-items"> <a href="#" data-image="products-images/p14.jpg" data-zoom-image="products-images/p14.jpg"> <img id="product-zoom"  src="products-images/p14.jpg" alt="product-image"/> </a> </div>
                              <div class="more-views-items"> <a href="#" data-image="products-images/p6.jpg" data-zoom-image="products-images/p6.jpg"> <img id="product-zoom"  src="products-images/p6.jpg" alt="product-image" /> </a></div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
    <div class='item' style={{width:"100%"}}>
    <div class="more-views-items"> <a href="#" data-image="products-images/p2.jpg" data-zoom-image="products-images/p2.jpg"> <img id="product-zoom"  src="products-images/p2.jpg" alt="product-image"/> </a></div>
    </div>
</OwlCarousel>
                    </div>
                    {/* <!-- end: more-images -->  */}
                  </div>
                {/* <!--End For version 1,2,6-->
                <!-- For version 3 --> */}
                <div class="product-shop col-lg- col-sm-7 col-xs-12">
                    
                    <div class="product-name">
                      <h1>Fresh Organic Mustard Leaves </h1>
                    </div>
                    <div class="ratings">
                      <div class="rating-box">
                        <div style={{width:"60%"}} class="rating"></div>
                      </div>
                      <p class="rating-links"> <a href="#">1 Review</a> <span class="separator">|</span> <a href="#">Add Your Review</a> </p>
                    </div>
                    <div class="price-block">
                      <div class="price-box">
                      <p class="availability in-stock"><span>In Stock</span></p>
                        <p class="special-price"> <span class="price-label">Special Price</span> <span id="product-price-48" class="price"> $309.99 </span> </p>
                        
                        
                      </div>
                    </div>
                    <div class="add-to-box">
                      <div class="add-to-cart">
                        <div class="pull-left">
                          <div class="custom pull-left">
                            <button  class="reduced items-count" type="button"><i class="fa fa-minus">&nbsp;</i></button>
                            <input type="text" class="input-text qty" title="Qty" value="1" disabled maxlength="12" id="qty" name="qty"/>
                            <button  class="increase items-count" type="button"><i class="fa fa-plus">&nbsp;</i></button>
                          </div>
                        </div>
                        <button onclick="productAddToCartForm.submit(this)" class="button btn-cart" title="Add to Cart" type="button">Add to Cart</button>
                      </div>
                      
                    </div>
                    <div class="short-description">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. </p>
                    </div>
                    <div class="email-addto-box">
                        <ul class="add-to-links">
                          <li> <a class="link-wishlist" href="wishlist.html"><span>Add to Wishlist</span></a></li>
                          <li><span class="separator">|</span> <a class="link-compare" href="compare.html"><span>Add to Compare</span></a></li>
                        </ul>
                        <p class="email-friend"><a href="#" class=""><span>Email to a Friend</span></a></p>
                      </div>
                    
                    
                    <ul class="shipping-pro">
                                    <li>Free Wordwide Shipping</li>
                                    <li>30 Days Return</li>
                                    <li>Member Discount</li>
                                </ul>
                  </div>
                {/* <!--product-shop-->
                <!--Detail page static block for version 3--> */}
              </form>
            </div>
          </div> 


  </div> 
</div>
 <div id="fade" style={{display: "block"}}></div> 

    </div>
  )
}

export default QuickView