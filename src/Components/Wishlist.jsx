import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const token = (localStorage.getItem('tok'));


const Wishlist = () => {
  const history = useNavigate()
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
      axios.post(`${process.env.REACT_APP_API}/customer/getWishlist`, {}, { headers: { "authtoken": `${token}` } })
          .then((res) => {
              setWishlist(res.data.data)
          }).catch((error) => {
              if (localStorage.tok == null || localStorage.tok == undefined) {
                  window.location.href="/login"
                  console.log(error)
              }
          })
  }, [])

  function delwishlist(id) {
      axios.post(`${process.env.REACT_APP_API}/customer/removeWishlist`, { product_id: id }, { headers: { "authtoken": `${token}` } })
          .then((res) => {
              axios.post(`${process.env.REACT_APP_API}/customer/getWishlist`, {}, { headers: { "authtoken": `${token}` } })
                  .then((res) => {
                      setWishlist(res.data.data);
                      toast.error("Remove from Wishlist!", { autoClose: 2000 })

                  })
          })
  }

  return (
    <div>
          <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
        <div class="page-title">
<h2>My Wishlist</h2>
</div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- BEGIN Main Container col2-right --> */}
  <section class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <section class="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div class="my-account">
            
            <div class="my-wishlist">
              <form id="wishlist-view-form" action="#" method="post">
                <fieldset>
                  <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
				  <div class="table-responsive">
                  <table class="clean-table linearize-table data-table table-striped" id="wishlist-table">
                    <thead>
                      <tr class="first last">
                        <th class="customer-wishlist-item-image">S.No</th>
                        <th class="customer-wishlist-item-info">Image</th>
                        <th class="customer-wishlist-item-quantity">Product</th>
                        <th class="customer-wishlist-item-price">Category</th>
                        <th class="customer-wishlist-item-cart">Action</th>
                        {/* <th class="customer-wishlist-item-remove"></th> */}
                      </tr>
                    </thead>
                    <tbody>
                    {wishlist.map((c, i) => (

                      <tr id="item_32" class="first odd">
                        <td>{++i}</td>
                        <td class="wishlist-cell0 customer-wishlist-item-image"><a class="product-image" href="product-detail.html" title="Slim Fit Casual Shirt"> <img src={c.product.product_image} width="80" height="80" alt={c.product.product_name}/> </a></td>
                        <td class="wishlist-cell1 customer-wishlist-item-info"><h3 class="product-name"><a href="product-detail.html" title="Slim Fit Casual Shirt">{c.product.product_name}</a></h3>
                          {/* <div class="description std">
                            <div class="inner">Full sleeve with buttoned cuffs, brand embroidery at the left side of the chest. Blue colour self design casual shirt, made with 100% cotton, slim fit, mandarin collar with a full buttoned chest placket, single chest patch pocket, full sleeve with buttoned cuffs, brand embroidery at the left side of the chest.</div>
                          </div>
                          <textarea style={{height: "120px", width: "96%"}} name="description[32]" rows="3" cols="5" onFocus="focusComment(this)" onBlur="focusComment(this)" title="Comment"></textarea> */}
                          </td>
                          <td class="wishlist-cell1 customer-wishlist-item-info"><h3 class="product-name"><a href="product-detail.html" title="Slim Fit Casual Shirt">{c.product.category_name}</a></h3>
                          {/* <div class="description std">
                            <div class="inner">Full sleeve with buttoned cuffs, brand embroidery at the left side of the chest. Blue colour self design casual shirt, made with 100% cotton, slim fit, mandarin collar with a full buttoned chest placket, single chest patch pocket, full sleeve with buttoned cuffs, brand embroidery at the left side of the chest.</div>
                          </div>
                          <textarea style={{height: "120px", width: "96%"}} name="description[32]" rows="3" cols="5" onFocus="focusComment(this)" onBlur="focusComment(this)" title="Comment"></textarea> */}
                          </td>
                   
                        <td class="wishlist-cell5 customer-wishlist-item-remove last"><a href="#" onClick={() => delwishlist(c.product_id)} title="Clear Cart" class="remove-item"><span><span></span></span></a></td>
                      </tr>
                         ))}             
                    </tbody>
                  </table>
				  </div>
                 
                  <div class="buttons-set buttons-set2">
                    <button type="submit" name="save_and_share" title="Share Wishlist" class="button btn-share"><span>Share Wishlist</span></button>
                    <button type="button" title="Add All to Cart" onClick="addAllWItemsToCart()" class="button btn-add"><span>Add All to Cart</span></button>
                    <button type="submit" name="do" title="Update Wishlist" class="button btn-update"><span>Update Wishlist</span></button>
                  </div>
                </fieldset>
              </form>
              <form id="wishlist-allcart-form" action="#" method="post">
                <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr"/>
                <div class="no-display">
                  <input type="hidden" name="wishlist_id" id="wishlist_id" value="1"/>
                  <input type="hidden" name="qty" id="qty" value=""/>
                </div>
              </form>
             
            </div>
           
          </div>
        </section>
        {/* <!--col-main col-sm-9 wow bounceInUp animated--> */}
        <aside class="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div class="block block-account">
            <div class="block-title"> My Account </div>
            <div class="block-content">
              <ul>
                <li><a href="#"><span> Account Dashboard</span></a></li>
                <li><a href="#"><span> Account Information</span></a></li>
                <li><a href="#"><span> Address Book</span></a></li>
                <li><a href="#"><span> My Orders</span></a></li>
                <li><a href="#"><span> Billing Agreements</span></a></li>
                <li><a href="#"><span> Recurring Profiles</span></a></li>
                <li><a href="#"><span> My Product Reviews</span></a></li>
                <li class="current"><a>My Wishlist</a></li>
                <li><a href="#"><span> My Applications</span></a></li>
                <li><a href="#"><span> Newsletter Subscriptions</span></a></li>
                <li class="last"><a href="#"><span> My Downloadable Products</span></a></li>
              </ul>
            </div>
            {/* <!--block-content-->  */}
          </div>
          {/* <!--block block-account--> */}
          
          <div class="custom-slider">
          <div>
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li class="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active"><img src="images/slide2.jpg" alt="slide3"/>
                  <div class="carousel-caption">
                  <h4>Fruit Shop</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Up to 70% Off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a class="link" href="#">Buy Now</a></div>
                </div>
                <div class="item"><img src="images/slide3.jpg" alt="slide1"/>
                  <div class="carousel-caption">
                   <h4>Black Grapes</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Mega Sale</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <a class="link" href="#">Buy Now</a>
                  </div>
                </div>
                <div class="item"><img src="images/slide1.jpg" alt="slide2"/>
                  <div class="carousel-caption">
                  <h4>Food Farm</h4>
                    <h3><a title=" Sample Product" href="product-detail.html">Up to 50% Off</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     <a class="link" href="#">Buy Now</a>
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span class="sr-only">Next</span> </a></div>
          </div>
        </div>
        </aside>
        {/* <!--col-right sidebar col-sm-3 wow bounceInUp animated-->  */}
      </div>
      {/* <!--row-->  */}
    </div>
    {/* <!--main container-->  */}
  </section>
  {/* <!--main-container col2-left-layout-->  */}
  
 
  <div class="container">
    <div class="row our-features-box">
      <ul>
        <li>
          <div class="feature-box">
            <div class="icon-truck"></div>
            <div class="content">FREE SHIPPING on order over $99</div>
          </div>
        </li>
        <li>
          <div class="feature-box">
            <div class="icon-support"></div>
            <div class="content">Have a question?<br/>
              +1 800 789 0000</div>
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
  {/* <!-- For version 1,2,3,4,6 --> */}

    </div>
  )
}

export default Wishlist