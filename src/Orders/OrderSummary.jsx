import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, useLocation, useNavigate } from "react-router-dom";

const token = (localStorage.getItem('tok'));
const OrderSummary = () => {
    const singleproduct = (id) => {
        // props.history.push("/product?id=" + id)
    }
    const history = useNavigate()
    const [list, setlist] = useState([])
    const [load, setLoad] = useState(true);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    useEffect(() => {
        const id = query.get("id");
        axios.post(`${process.env.REACT_APP_API}/customer/getSingleOrder`, { "id": id }, { headers: { "authtoken": `${token}` } })
            .then((res) => {
                setLoad(false)
                console.log(res.data.data)
                setlist(res?.data?.data)
            })
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
            <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>Order Summary</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>

            {/* order Summary */}
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
                                                {/* <th rowspan="1">S.No</th> */}
                                                <th rowspan="1"><span class="nobr">Image</span></th>
                                                <th rowspan="1">Product Name</th>
                                                <th class="a-center" colspan="1"><span class="nobr">Quantity</span></th>
                                                <th rowspan="1" class="a-center">Description</th>
                                                <th class="a-center" colspan="1">Price</th>
                                                {/* <th rowspan="1" class="a-center">Total</th>
                                                <th rowspan="1" class="a-center">Action</th> */}
                                            </tr>
                                        </thead>
                                        {/* <tfoot>
                                            <tr class="first last">
                                                <td colspan="50" class="a-right last">
                                                    <button type="button" title="Checkout" class="button btn-continue" onClick={Update}><span>Proceed to Checkout</span></button>
                                                    <a href='/shop'><button type="submit" value="empty_cart" class="button "><span>Continue Shopping </span></button></a>
                                                    <button type="submit" name="update_cart_action" value="update_qty" title="Update Cart" class="button btn-update"><span><span>Update Cart</span></span></button>

                                                </td>
                                            </tr>
                                        </tfoot> */}
                                        <tbody>
                                            {Array.isArray(list) && list?.map((c) => (
                                                <tr class="first last odd">
                                                    {/* <td>{++val}.</td> */}
                                                    <td class="image hidden-table"><a class="product-image">
                                                        <img src={c?.product?.product_image} width="75" alt={c?.product?.product_name} /></a></td>
                                                    <td>
                                                        <h2 class="product-name">
                                                            <a style={{ textTransform: "capitalize" }}>{c?.product?.product_name}</a>
                                                        </h2>
                                                    </td>
                                                    <td class="a-center hidden-table">
                                                        <a href="#" class="edit" style={{ textTransform: "capitalize" }}>{c?.quantity}</a>
                                                    </td>


                                                    <td class="a-right hidden-table">
                                                        <span class="cart-price">
                                                            <span class="price" style={{ textAlign: "center" }}>{c?.product?.product_description}</span>
                                                        </span>


                                                    </td>

                                                    <td style={{ textAlign: "center" }}>₹{c?.total_price}<span class="sr-only">(current)</span></td>
                                                    {/* <td class="a-center last">

                                                        <a onClick={() => delcart(x)} title="Remove item" class="button remove-item">
                                                            <span><span>Remove item</span></span></a>
                                                    </td> */}





                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>

                                </fieldset>
                            </form>
                        </div>

                        {/* <!-- BEGIN CART COLLATERALS --> */}

                        {/* <!--col1-layout--> */}

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
                                            <div class="content">Have a question?<br />
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
                        {/* <!-- For version 1,2,3,4,6 --> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary