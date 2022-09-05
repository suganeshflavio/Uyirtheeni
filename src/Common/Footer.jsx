import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer> 
    {/* <!-- BEGIN INFORMATIVE FOOTER --> */}
    <div class="footer-inner">
      {/* <div class="newsletter-row">
        <div class="container">
          <div class="row"> 
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col1">
              <div class="newsletter-wrap">
                <h5>Newsletter</h5>
                <h4>Get discount 30% off</h4>
                <form action="#" method="post" id="newsletter-validate-detail1">
                  <div id="container_form_news">
                    <div id="container_form_news2">
                      <input type="text" name="email" id="newsletter1" title="Sign up for our newsletter" class="input-text required-entry validate-email" placeholder="Enter your email address"/>
                      <button type="submit" title="Subscribe" class="button subscribe"><span>Subscribe</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-column">
                <h4>Shopping Guide</h4>
                <ul class="links">
                  {/* <li><a href="blog.html" title="How to buy">Blog</a></li> */}
                  <li><a href="faq.html" title="FAQs">FAQs</a></li>
                  <li><a href="#" title="Payment">Payment</a></li>
                  <li><a href="#" title="Shipment">Shipment</a></li>
                  <li><a href="#" title="Where is my order?">Where is my order?</a></li>
                  <li><a href="#" title="Return policy">Return policy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-column">
                <h4>Style Advisor</h4>
                <ul class="links">
                  <li><a href="/dashboard" title="Your Account">Your Account</a></li>
                  <li><a href="#" title="Information">Information</a></li>
                  <li><a href="#" title="Addresses">Addresses</a></li>
                  <li><a href="#" title="Addresses">Discount</a></li>
                  <li><a href="#" title="Orders History">Orders History</a></li>
                  <li><a href="#" title="Order Tracking">Order Tracking</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-column">
                <h4>Information</h4>
                <ul class="links">
                  <li><a href="/termsandcondition" title="termsandcondition">Terma&Conditions</a></li>
                  <li><a href="/privacypolicy" title="privacypolicy">Privacy Policy</a></li>
                  <li><a href="/about" title="About Us">About Us</a></li>
                  <li><a href="/contact" title="Contact Us">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-column">
                <h4>Contact Us</h4>
                <div class="contacts-info">
                  <address>
                  <i class="add-icon"></i>Nalam Agro Foods,
                    Ichikattuvalasu, Nathakadaiyur,
                    Kangayam, Tirupur - 638108.
                  </address>
                  <div class="phone-footer"><i class="phone-icon"></i><a href="tel:+919095959587">+91 9095959587</a></div>
                  <div class="email-footer"><i class="email-icon"></i><a href="mailto:info@uyirtheeni.com">info@uyirtheeni.com</a></div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!--container-->  */}
    </div>
    {/* <!--footer-inner-->  */}
    
    {/* <!--footer-middle--> */}
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="social">
              <ul>
                <li class="fb"><a href="#"></a></li>
                <li class="tw"><a href="#"></a></li>
                <li class="googleplus"><a href="#"></a></li>
                <li class="rss"><a href="#"></a></li>
                <li class="pintrest"><a href="#"></a></li>
                <li class="linkedin"><a href="#"></a></li>
                <li class="youtube"><a href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4 col-xs-12 coppyright"> © 2018 ThemesGround. All Rights Reserved. </div>
          <div class="col-xs-12 col-sm-4">
            <div class="payment-accept"> <img src="images/payment-1.png" alt=""/> <img src="images/payment-2.png" alt=""/> <img src="images/payment-3.png" alt=""/> <img src="images/payment-4.png" alt=""/> </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--footer-bottom-->  */}
    {/* <!-- BEGIN SIMPLE FOOTER -->  */}
  </footer>
    </div>
  )
}

export default Footer