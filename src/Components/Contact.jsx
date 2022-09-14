import React from "react";
import { FaPhoneAlt } from 'react-icons/fa';  
import { GrMail } from 'react-icons/gr';  
import { MdLocationPin } from 'react-icons/md';  



const Contact = () => {
  return (
    <div>
      <div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="page-title">
                <li class="home">
                  {" "}
                  <a href="/" title="Go to Home Page">
                    Home
                  </a>{" "}
                  <span>&rsaquo; </span>{" "}
                </li>

                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row our-features-box">
          
            
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="feature-box">
                {/* <div class="icon-truck"></div> */}
                <GrMail style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/>
                <div class="content"><a href="mailto:info@uyirtheeni.com"> <br />  info@uyirtheeni.com</a></div>
              </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="feature-box">
                {/* <div class="icon-support"></div> */}
                <FaPhoneAlt style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/>
                <div class="content">
                  {/* Have a question? */}
                  <br />
                  <a href="tel:+91 90959-59587"> +91 90959 59587</a>
                </div>
              </div>
              </div>
          
            
            <div class="col-lg-4 col-md-4 col-sm-4" style={{paddingRight:"0px"}}>
              <div class="feature-box">
                {/* <div class="icon-money"></div>  */}
                <MdLocationPin style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/>
                <div class="content">Nalam Agro Foods,
                    Ichikattuvalasu, Nathakadaiyur,
                    Kangayam, Tirupur - 638108.</div>
              </div>
              </div>
          
            {/* <li>
              <div class="feature-box">
                <div class="icon-return"></div>
                <div class="content">30 days return Service</div>
              </div>
            </li>
            <li class="last">
              <div class="feature-box">
                {" "}
                <a href="#">
                  <i class="fa fa-apple"></i> download
                </a>{" "}
                <a href="#">
                  <i class="fa fa-android"></i> download
                </a>{" "}
              </div>
            </li> */}
        
        </div>
      </div>

      {/* <!-- BEGIN Main Container col2-right --> */}
      <div class="main-container col2-right-layout" style={{marginBottom:"30px"}}>
        <div class="main container">
          <div class="row">
            <div
              class="col-main col-sm-9 wow bounceInUp animated animated"
              style={{ visibility: "visible" }}
            >
              <div id="messages_product_view"></div>
              <form action="#" id="contactForm" method="post">
                {/* <div class="static-contain">
                  <fieldset class="group-select">
                    <ul>
                      <li id="billing-new-address-form">
                        <fieldset class="">
                          <ul>
                            <li>
                              <div class="customer-name">
                                <div class="input-box name-firstname">
                                  <label for="name">
                                    <em class="required">*</em>Name
                                  </label>
                                  <br />
                                  <input
                                    name="name"
                                    id="name"
                                    title="Name"
                                    value="john doe"
                                    class="input-text required-entry"
                                    type="text"
                                  />
                                </div>
                                <div class="input-box name-firstname">
                                  <label for="email">
                                    <em class="required">*</em>Email
                                  </label>
                                  <br />
                                  <input
                                    name="email"
                                    id="email"
                                    title="Email"
                                    value="john.doe@gmail.com"
                                    class="input-text required-entry validate-email"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <label for="telephone">Telephone</label>
                              <br />
                              <input
                                name="telephone"
                                id="telephone"
                                title="Telephone"
                                value=""
                                class="input-text"
                                type="text"
                              />
                            </li>
                            <li>
                              <label for="comment">
                                <em class="required">*</em>Comment
                              </label>
                              <br />
                              <textarea
                                name="comment"
                                id="comment"
                                title="Comment"
                                class="required-entry input-text"
                                cols="5"
                                rows="3"
                              ></textarea>
                            </li>
                          </ul>
                        </fieldset>
                      </li>
                      <p class="require">
                        <em class="required">* </em>Required Fields
                      </p>
                      <div class="buttons-set">
                        <button
                          type="submit"
                          title="Submit"
                          class="button submit"
                        >
                          <span>
                            <span>Submit</span>
                          </span>
                        </button>
                      </div>
                    </ul>
                  </fieldset>
                </div> */}
              </form>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31326.15575130541!2d77.693463!3d11.055903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb21fd7e6668e1f9!2sNalam%20Agro%20Foods!5e0!3m2!1sen!2sin!4v1630991819632!5m2!1sen!2sin"
                width="100%"
                height="500px"
                style={{ border: "0" }}
                allowfullscreen="true"
                loading="lazy"
              ></iframe>
            </div>
            <aside
              class="col-right sidebar col-sm-3 wow bounceInUp animated animated"
              style={{ visibility: "visible" }}
            >
              <div class="block block-company">
                <div class="block-title">Company</div>
                <div class="block-content">
                  <ol id="recently-viewed-items">
                    <li class="item odd">
                      <a href="/about">About Us</a>
                    </li>
                    <li class="item  odd">
                      <a href="/termsandcondition">Terms & Condition</a>
                    </li>
                    <li class="item last">
                      <a href="/privacypolicy">privacy policy</a>
                    </li>
                    <li class="item last">
                      <a href="/contact">
                        <strong>Contact Us</strong>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </aside>
            {/* <!--col-right sidebar-->  */}
          </div>
          {/* <!--row-->  */}
        </div>
        {/* <!--main-container-inner-->  */}
      </div>
      {/* <!--main-container col2-left-layout-->  */}

      <div class="container">
        <div class="row our-features-box">
          <ul>
            <li>
              <div class="feature-box">
                <div class="icon-truck"></div>
                <div class="content">We supply only organic food farm</div>
              </div>
            </li>
            <li>
              <div class="feature-box">
                <div class="icon-support"></div>
                <div class="content">
                  Have a question?
                  <br />
                  <a href="tel:+91 90959-59587"> +91 90959 59587</a>
                </div>
              </div>
            </li>
            <li>
              <div class="feature-box">
                <div class="icon-money"></div>
                <div class="content">no return & refund policy available</div>
              </div>
            </li>
            <li>
              <div class="feature-box">
                <div class="icon-return"></div>
                <div class="content">Entice yourself with delicious sweets!</div>
              </div>
            </li>
            <li class="last">
              <div class="feature-box">
                {" "}
                <a href="#">
                  <i class="fa fa-apple"></i> download
                </a>{" "}
                <a href="#">
                  <i class="fa fa-android"></i> download
                </a>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;


{/* <FaPhoneAlt style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/> 
    <MdLocationPin style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/>
    <GrMail style={{fontSize: "26px",marginBottom:"26px",lineHeight:"60px",width:"65px",color:" #80b435"}}/>
*/}
