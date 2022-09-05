import React,{useState,  useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {apiCalls} from "../Axios/Services";

const token = (localStorage.getItem('tok'));
const Checkout = (props) => {
  const history = useNavigate();
  const [address, setAddress] = useState([])
  const [profilelist, setProfilelist] = useState([])
  const [id, setId] = useState(1)
  const [cartlist, setCartlist] = useState([])
  const [state, setState] = useState({
    subtotal: 0,
    total: 0,
    gst: 0
  })

  function delcart(x) {
      axios.post(`${process.env.REACT_APP_API}/customer/removeCart`, { cart_id: x.id, product_id: x.product_id }, { headers: { "authtoken": `${token}` } })
        .then((res) => {
          axios.post(`${process.env.REACT_APP_API}/customer/getCart`, {}, { headers: { "authtoken": `${token}` } })
            .then((res) => {
              setCartlist(res.data.data);
              window.location.reload()
              toast.error("Removed from Cart!", { autoClose: 2000 })
            })
        })
    }

    function Update(id) {
      // props.history.push("/UpdateAddress?id=" + id)
      window.location.href="/updateaddress?id=" + id
  }

  useEffect(() => {
      // checkout()
      axios.post(`${process.env.REACT_APP_API}/customer/getCart`, {}, {
          headers: { "authtoken": `${token}` }
        }).then((res) => {
        setCartlist(res.data.data)
      }).catch((error) => {
        if (localStorage.tok == null || localStorage.tok == undefined) {
          history.push("/login")
        }
      })
  
      axios.post(`${process.env.REACT_APP_API}/customer/sumofproducts`, {}, {
        headers: { "authtoken": `${token}` }
      }).then((res) => {
        setState({
          total: res.data.data + res.data.data * 0.05,
          subtotal: res.data.data,
          gst: res.data.data * 0.05
        })
      })
    }, [])

    useEffect(() => {
      axios.post(`https://api.uyirtheeni.com/customer/getAddress`, {},
          { headers: { "authtoken": `${token}` } })
          .then((res) => {
              setAddress(res?.data?.data);
          });
  }, []);
  

      // payment 
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // var result = (data) => {
    //   axios.post(`${process.env.REACT_APP_API}/customer/addOrders`, data, {
    //     headers: { "authtoken": `${token}` }
    //   });
    // }
    axios.post(`${process.env.REACT_APP_API}/customer/checkout`, { address: id }, {
      headers: { "authtoken": `${token}` }
    }).then((res) => {
      console.log(res);
      const options = {
        key: "rzp_live_h0CS0SnVpA6Kcf",
        amount: state.total * 100,
        currency: "INR",
        name: "Uyirtheeni",
        description: "Buy Product",
        image: {},
        order_id: res.data.data.razor_order_id,
        handler: async function (response) {
          const data = {
            razor_order_id: response.razorpay_order_id,
            razor_payment_id: response.razorpay_payment_id,
            razor_signature: response.razorpay_signature,
            payment_status: "SUCCESS",
            reason: ""
          };
          props.history.push("/myprofile")
          result(data)
          console.log(data);
        },
        prefill: {
          name: profilelist.customername,
          email: profilelist.email,
          contact: profilelist.phone
        },
        notes: {
          address: "",
        },
      };
      var result = (data) => {
        axios.post(`${process.env.REACT_APP_API}/customer/addOrders`, data, {
          headers: { "authtoken": `${token}` }
        });
      }
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        toast.error(response.error.reason);
        const data = {
          razor_order_id: response.metadata.razorpay_order_id,
          razor_payment_id: response.metadata.razorpay_payment_id,
          razor_signature: response.metadata.razorpay_signature,
          payment_status: "FAILURE",
          reason: response.error.reason
        };

        result(data)
        console.log(result);
      });
      paymentObject.open();
    })

  }


  return (
    <div>
    <div class="page-heading">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-title">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- BEGIN Main Container -->   */}

    <div class="main-container col1-layout wow bounceInUp animated">

        <div class="main">
            <div class="cart wow bounceInUp animated">

                <div class="table-responsive shopping-cart-tbl  container">
                    <form action="#" method="post">
                        <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
                        <fieldset>
                            <table id="shopping-cart-table" class="data-table cart-table table-striped">
                                <colgroup><col width="1" />
                                    <col />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />
                                    <col width="1" />

                                </colgroup><thead>
                                    <tr class="first last">
                                        <th rowspan="1">S.No</th>
                                        <th rowspan="1"><span class="nobr">Image</span></th>
                                        <th rowspan="1">Product Name</th>
                                        <th class="a-center" colspan="1"><span class="nobr">Category</span></th>
                                        <th rowspan="1" class="a-center">Price</th>
                                        <th class="a-center" colspan="1">Quantity</th>
                                        <th rowspan="1" class="a-center">Total</th>
                                        <th rowspan="1" class="a-center">Action</th>

                                    </tr>
                                </thead>
                                {/* <tfoot>
                                    <tr class="first last">
                                        <td colspan="50" class="a-right last">
                                            <button type="button" title="Continue Shopping" class="button btn-continue" onClick=""><span>Continue Shopping</span></button>
                                            <button type="submit" name="update_cart_action" value="empty_cart" class="button " id="empty_cart_button"><span><span>Proceed to Checkout</span></span></button>
                                            <button type="submit" name="update_cart_action" value="update_qty" title="Update Cart" class="button btn-update"><span><span>Update Cart</span></span></button>

                                        </td>
                                    </tr>
                                </tfoot> */}
                                <tbody>
                                {cartlist.map((x, val) => (
                                    <tr class="first last odd">
                                        <td>{++val}</td>
                                        <td class="image hidden-table"><a href="product-detail.html" class="product-image">
                                            <img src={x.product.product_image} width="75" alt={x.product.product_name} /></a></td>
                                        <td>
                                            <h2 class="product-name">
                                                <a href="product-detail.html" style={{textTransform:"capitalize"}}>{x.product.product_name}</a>
                                            </h2>
                                        </td>
                                        <td class="a-center hidden-table">
                                            <a href="#" class="edit" >{x.product.category_name}</a>
                                        </td>


                                        <td class="a-right hidden-table">
                                            <span class="cart-price">
                                                <span class="price">₹{x.single_product_price}</span>
                                            </span>


                                        </td>
                                        <td class="a-center movewishlist">
                                        {x.no_of_products} </td>
                                        <td>₹{x.total_price}</td>
                                        <td class="a-center last">

                                            <a onClick={() => delcart(x)} title="Remove item" class="button remove-item">
                                                <span><span>Remove item</span></span></a>
                                                </td>

                                    </tr>
                                    ))}
                </tbody>
                            </table>

                        </fieldset>
                    </form>
                </div>

                {/* <!-- BEGIN CART COLLATERALS --> */}


                <div class="cart-collaterals container">
                    <div class="row">

                        <div class="col-sm-8" style={{paddingTop:"35px"}}>

                        <div class="recent-orders" id="liton_tab_1_2">
                <div class="title-buttons"> <strong>Address</strong> <a href="/addaddress">Add Address</a> </div>
                <div class="table-responsive">
                  <table class="data-table table-striped" id="my-orders-table">
                    <colgroup>
                    <col width=""/>
                    <col width=""/>
                    <col/>
                    <col width="1"/>
                    <col width="1/"/>
                    <col width="20%"/>
                    </colgroup>
                    <thead>
                      <tr class="first last">
                        <th>Select </th>
                        <th>State</th>
                        <th>City</th>
                        <th><span class="nobr">Street</span></th>
                        <th>Landmark</th>
                        <th>Zipcode</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {address !== null ? address?.map((x, val) => (
                      <tr class="first odd">
                        <td><input type="checkbox" checked={x.id == id} onChange={(e) => setId(e.target.value)} value={x.id} /></td>
                        <td><span class="nobr">{x?.state}</span></td>
                        <td>{x?.city}</td>
                        <td><span class="price">{x?.street}</span></td>
                        <td>{x?.landmark}</td>
                        <td class="a-center last"><span class="nobr">{x?.zipcode} </span></td>
                        <td>   <span className="badge badge-warning" type="submit" style={{ cursor: "pointer", color: "black",fontSize: "15px", padding: "10px" }} onClick={() => Update(x.id)}><i class='bx bxs-edit-alt' ></i> Update</span> </td>

                      </tr>
                        )) : false}
                    </tbody>
                  </table>
                </div>
              </div>

                        </div>

                        {/* <div class="col-sm-4">

                            <div class="discount">
                                <h3>Discount Codes</h3>
                                <form id="discount-coupon-form" action="#" method="post">
                                    <label for="coupon_code">Enter your coupon code if you have one.</label>
                                    <input type="hidden" name="remove" id="remove-coupone" value="0" />
                                    <input class="input-text fullwidth" type="text" id="coupon_code" name="coupon_code" value="" />
                                    <button type="button" title="Apply Coupon" class="button coupon " onClick="discountForm.submit(false)" value="Apply Coupon"><span>Apply Coupon</span></button>

                                </form>

                            </div>
                        </div> */}

                        <div class="col-sm-4">
                            <div class="totals">
                                <h3>Shopping Cart Total</h3>
                                <div class="inner">

                                    <table id="shopping-cart-totals-table" class="table shopping-cart-table-total">
                                        <colgroup><col />
                                            <col width="1" />
                                        </colgroup><tfoot>
                                            <tr>
                                                <td class="a-left" colspan="1">
                                                    <strong>Grand Total</strong>
                                                </td>
                                                <td class="a-right">
                                                    <strong><span class="price">₹{state.total}</span></strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td class="a-left" colspan="1">
                                                    Subtotal    </td>
                                                  
                                                <td class="a-right">
                                                    <span class="price">₹{state.subtotal}</span>    </td>
                                            </tr>
                                            <tr>
                                            <td class="a-left" colspan="1">
                                                    Tax    </td>
                                                <td class="a-right">
                                                    <span class="price">₹{state.gst} <span class="small">(5%)</span> </span>    </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <ul class="checkout">
                                        <li>
                                            <button type="button" title="Proceed to Checkout" class="button btn-proceed-checkout" onClick={displayRazorpay}><span>Place Order</span></button>
                                        </li><br />
                                        {/* <li><a href="multiple-addresses.html" title="Checkout with Multiple Addresses">Checkout with Multiple Addresses</a>
                                        </li> */}
                                        <br />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--col1-layout--> */}

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
                                    <div class="content">Have a question?<br />
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
        </div>
    </div>
</div>
  )
}

export default Checkout