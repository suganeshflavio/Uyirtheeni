import React from 'react'

const About = () => {
    return (
        <div>

            <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-container col1-layout wow bounceInUp animated animated" style={{visibility: "visible"}}>

                <div class="main container">
                    <div class="row">
                        <div class="std">
                            <div class="wrapper_bl" style={{marginTop: "1px"}}>
                                <div class="form_background">
                                <div class="ad-info">
                                     <h3 style={{textAlign:"center",color:"green",padding:"10px"}}>A Organic & Food for 25 Years a hobbiest for 30</h3>
                                    </div>
                                    <p style={{ fontSize: "18px", textAlign: "justify", lineHeight: "2em" }}>Organic products are grown under a system of agriculture without the use of chemical fertilizers and pesticides with an environmentally and socially responsible approach. Organic foods promote healthier and more sustainable use of natural resources. Modern conventional farming methods include excessive use of chemicals and planting only one crop multiple times.</p>
                                    <br />
                                    <div class="ad-info">
                                     <h3 style={{textAlign:"center",color:"green",padding:"10px"}}>A Hobby, a Talent, and now, a Profession</h3>
                                    </div>
                                    <p style={{ fontSize: "18px", textAlign: "justify", lineHeight: "2em" }}>Organic farms are only certified after they have been operating according to organic principles for three years. However, the use of the word ‘organic’ is not regulated in Australia, so it is important to make sure that products you buy come from certified growers and producers.</p>
                                    <br />
                                    <div class="ad-info">
                                     <h3 style={{textAlign:"center",color:"green",padding:"10px"}}>Organic food is here Grab It</h3>
                                    </div>
                                    <p style={{ fontSize: "18px", textAlign: "justify", lineHeight: "2em" }}>These standards provide an agreed set of procedures to be followed in organic food production. This helps to ensure the integrity and traceability of an organic food product from ‘paddock to plate’. The standards include requirements for production, preparation, transportation, marketing and labelling of organic products in Australia.</p>
                                </div>
                            </div></div>
                    </div>
                </div>
                {/* <!--main-container--> */}

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

export default About