import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const token = (localStorage.getItem('tok'));


const Wishlist = () => {
  const history = useNavigate()
  const [load, setLoad] = useState(true);
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
      axios.post(`${process.env.REACT_APP_API}/customer/getWishlist`, {}, { headers: { "authtoken": `${token}` } })
          .then((res) => {
            setLoad(false)
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
            setLoad(false)
              axios.post(`${process.env.REACT_APP_API}/customer/getWishlist`, {}, { headers: { "authtoken": `${token}` } })
                  .then((res) => {
                      setWishlist(res.data.data);
                      toast.error("Remove from Wishlist!", { autoClose: 2000 })

                  })
          })
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
        <section class="" style={{visibility: "visible",marginTop:"20px"}}>
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
                    {wishlist?.map((c, i) => (

                      <tr id="item_32" class="first odd">
                        <td>{++i}</td>
                        <td class="wishlist-cell0 customer-wishlist-item-image"><a class="product-image" title="Slim Fit Casual Shirt"> <img src={c?.product?.product_image} width="80" height="80" alt={c?.product?.product_name}/> </a></td>
                        <td class="wishlist-cell1 customer-wishlist-item-info"><h3 class="product-name"><a title="Slim Fit Casual Shirt">{c?.product?.product_name}</a></h3>
                          {/* <div class="description std">
                            <div class="inner">Full sleeve with buttoned cuffs, brand embroidery at the left side of the chest. Blue colour self design casual shirt, made with 100% cotton, slim fit, mandarin collar with a full buttoned chest placket, single chest patch pocket, full sleeve with buttoned cuffs, brand embroidery at the left side of the chest.</div>
                          </div>
                          <textarea style={{height: "120px", width: "96%"}} name="description[32]" rows="3" cols="5" onFocus="focusComment(this)" onBlur="focusComment(this)" title="Comment"></textarea> */}
                          </td>
                          <td class="wishlist-cell1 customer-wishlist-item-info"><h3 class="product-name"><a title="Slim Fit Casual Shirt">{c?.product?.category_name}</a></h3>
                          {/* <div class="description std">
                            <div class="inner">Full sleeve with buttoned cuffs, brand embroidery at the left side of the chest. Blue colour self design casual shirt, made with 100% cotton, slim fit, mandarin collar with a full buttoned chest placket, single chest patch pocket, full sleeve with buttoned cuffs, brand embroidery at the left side of the chest.</div>
                          </div>
                          <textarea style={{height: "120px", width: "96%"}} name="description[32]" rows="3" cols="5" onFocus="focusComment(this)" onBlur="focusComment(this)" title="Comment"></textarea> */}
                          </td>
                   
                        <td class="wishlist-cell5 customer-wishlist-item-remove last"><a href="#" onClick={() => delwishlist(c?.product_id)} title="Clear Cart" class="remove-item"><span><span></span></span></a></td>
                      </tr>
                         ))}             
                    </tbody>
                  </table>
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

      </div>
    </div>
  </section>
  
 
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
  {/* <!-- For version 1,2,3,4,6 --> */}

    </div>
  )
}

export default Wishlist