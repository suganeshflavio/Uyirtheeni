import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiCalls } from "../Axios/Services";

const token = (localStorage.getItem('tok'));
const Cart = () => {
    const history = useNavigate();
    const [address, setAddress] = useState([])
    const [profilelist, setProfilelist] = useState([])
    const [load, setLoad] = useState(true);
    const [id, setId] = useState(1)
    const [cartlist, setCartlist] = useState([])
    const [state, setState] = useState({
        subtotal: 0,
        total: 0,
        gst: 0
    })

    function Update() {
        console.log("dtaa")
        window.location.href = `/checkout`
        // props.history.push("/Product?id=" + id)
    }
    function Updatee() {
        console.log("dtaa")
        window.location.href = `/checkout`
        // props.history.push("/Product?id=" + id)
    }

    function delcart(x) {
        axios.post(`${process.env.REACT_APP_API}/customer/removeCart`, { cart_id: x?.id, product_id: x?.product_id }, { headers: { "authtoken": `${token}` } })
            .then((res) => {
                setLoad(false)
                axios.post(`${process.env.REACT_APP_API}/customer/getCart`, {}, { headers: { "authtoken": `${token}` } })
                    .then((res) => {
                        setCartlist(res?.data?.data);
                        window.location.reload()
                        toast.error("Removed from Cart!", { autoClose: 2000 })
                    })
            })
    }

    useEffect(() => {
        // checkout()
        axios.post(`${process.env.REACT_APP_API}/customer/getCart`, {}, {
            headers: { "authtoken": `${token}` }
        }).then((res) => {
            setLoad(false)
            setCartlist(res?.data?.data)
        }).catch((error) => {
            if (localStorage.tok == null || localStorage.tok == undefined) {
                history.push("/login")
            }
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
                                <h2>Shopping Cart</h2>
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
                                        <tfoot>
                                            <tr class="first last">
                                                <td colspan="50" class="a-right last">
                                                    <button type="button" title="Checkout" class="button btn-continue" onClick={Update}><span>Proceed to Checkout</span></button>
                                                    {/* <a href='/shop'><button type="submit" value="empty_cart" class="button "><span>Continue Shopping </span></button></a> */}
                                                    {/* <button type="submit" name="update_cart_action" value="update_qty" title="Update Cart" class="button btn-update"><span><span>Update Cart</span></span></button> */}

                                                </td>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {Array.isArray(cartlist) && cartlist?.map((x, val) => (
                                                <tr class="first last odd">
                                                    <td>{++val}.</td>
                                                    <td class="image hidden-table"><a class="product-image">
                                                        <img src={x?.product.product_image} width="75" alt={x?.product?.product_name} /></a></td>
                                                    <td>
                                                        <h2 class="product-name">
                                                            <a style={{ textTransform: "capitalize" }}>{x?.product?.product_name}</a>
                                                        </h2>
                                                    </td>
                                                    <td class="a-center hidden-table">
                                                        <a href="#" class="edit" style={{ textTransform: "capitalize" }}>{x?.product?.category_name}</a>
                                                    </td>


                                                    <td class="a-right hidden-table">
                                                        <span class="cart-price">
                                                            <span class="price" style={{ textAlign: "center" }}>₹{x?.single_product_price}</span>
                                                        </span>


                                                    </td>
                                                    <td class="a-center movewishlist" style={{ textAlign: "center" }}>
                                                        {x?.no_of_products}                                                </td>
                                                    <td style={{ textAlign: "center" }}>₹{x?.total_price}</td>
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


                        {/* <div class="cart-collaterals container">
                            <div class="row">

                                <div class="col-sm-4">


                                    <div class="shipping">

                                        <h3>Estimate Shipping and Tax</h3>
                                        <div class="shipping-form">
                                            <form action="#" method="post" id="shipping-zip-form">
                                                <p>Enter your destination to get a shipping estimate.</p>
                                                <ul class="form-list">
                                                    <li>
                                                        <label for="country" class="required"><em>*</em>Country</label>
                                                        <div class="input-box">
                                                            <select name="country_id" id="country" class="validate-select" title="Country"><option value=""> </option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos [Keeling] Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo - Brazzaville</option><option value="CD">Congo - Kinshasa</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Côte d’Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong SAR China</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macau SAR China</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar [Burma]</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="KP">North Korea</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territories</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn Islands</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Réunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">São Tomé and Príncipe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US" selected="selected">United States</option><option value="UY">Uruguay</option><option value="UM">U.S. Minor Outlying Islands</option><option value="VI">U.S. Virgin Islands</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican City</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select>                    </div>
                                                    </li>
                                                    <li>
                                                        <label for="region_id">State/Province</label>
                                                        <div class="input-box">
                                                            <select id="region_id" name="region_id" title="State/Province" defaultvalue="" class="required-entry validate-select">
                                                                <option value="">Please select region, state or province</option>
                                                                <option value="1" title="Alabama">Alabama</option><option value="2" title="Alaska">Alaska</option><option value="3" title="American Samoa">American Samoa</option><option value="4" title="Arizona">Arizona</option><option value="5" title="Arkansas">Arkansas</option><option value="6" title="Armed Forces Africa">Armed Forces Africa</option><option value="7" title="Armed Forces Americas">Armed Forces Americas</option><option value="8" title="Armed Forces Canada">Armed Forces Canada</option><option value="9" title="Armed Forces Europe">Armed Forces Europe</option><option value="10" title="Armed Forces Middle East">Armed Forces Middle East</option><option value="11" title="Armed Forces Pacific">Armed Forces Pacific</option><option value="12" title="California">California</option><option value="13" title="Colorado">Colorado</option><option value="14" title="Connecticut">Connecticut</option><option value="15" title="Delaware">Delaware</option><option value="16" title="District of Columbia">District of Columbia</option><option value="17" title="Federated States Of Micronesia">Federated States Of Micronesia</option><option value="18" title="Florida">Florida</option><option value="19" title="Georgia">Georgia</option><option value="20" title="Guam">Guam</option><option value="21" title="Hawaii">Hawaii</option><option value="22" title="Idaho">Idaho</option><option value="23" title="Illinois">Illinois</option><option value="24" title="Indiana">Indiana</option><option value="25" title="Iowa">Iowa</option><option value="26" title="Kansas">Kansas</option><option value="27" title="Kentucky">Kentucky</option><option value="28" title="Louisiana">Louisiana</option><option value="29" title="Maine">Maine</option><option value="30" title="Marshall Islands">Marshall Islands</option><option value="31" title="Maryland">Maryland</option><option value="32" title="Massachusetts">Massachusetts</option><option value="33" title="Michigan">Michigan</option><option value="34" title="Minnesota">Minnesota</option><option value="35" title="Mississippi">Mississippi</option><option value="36" title="Missouri">Missouri</option><option value="37" title="Montana">Montana</option><option value="38" title="Nebraska">Nebraska</option><option value="39" title="Nevada">Nevada</option><option value="40" title="New Hampshire">New Hampshire</option><option value="41" title="New Jersey">New Jersey</option><option value="42" title="New Mexico">New Mexico</option><option value="43" title="New York">New York</option><option value="44" title="North Carolina">North Carolina</option><option value="45" title="North Dakota">North Dakota</option><option value="46" title="Northern Mariana Islands">Northern Mariana Islands</option><option value="47" title="Ohio">Ohio</option><option value="48" title="Oklahoma">Oklahoma</option><option value="49" title="Oregon">Oregon</option><option value="50" title="Palau">Palau</option><option value="51" title="Pennsylvania">Pennsylvania</option><option value="52" title="Puerto Rico">Puerto Rico</option><option value="53" title="Rhode Island">Rhode Island</option><option value="54" title="South Carolina">South Carolina</option><option value="55" title="South Dakota">South Dakota</option><option value="56" title="Tennessee">Tennessee</option><option value="57" title="Texas">Texas</option><option value="58" title="Utah">Utah</option><option value="59" title="Vermont">Vermont</option><option value="60" title="Virgin Islands">Virgin Islands</option><option value="61" title="Virginia">Virginia</option><option value="62" title="Washington">Washington</option><option value="63" title="West Virginia">West Virginia</option><option value="64" title="Wisconsin">Wisconsin</option><option value="65" title="Wyoming">Wyoming</option></select>

                                                            <input type="text" id="region" name="region" value="" title="State/Province" class="input-text required-entry" style={{ display: "none" }} />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label for="postcode">Zip/Postal Code</label>
                                                        <div class="input-box">
                                                            <input class="input-text validate-postcode" type="text" id="postcode" name="estimate_postcode" value="" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div class="buttons-set11">
                                                    <button type="button" title="Get a Quote" onClick="coShippingMethodForm.submit()" class="button get-quote"><span>Get a Quote</span></button>
                                                </div>
                                            </form>


                                        </div>
                                    </div>

                                </div>

                                <div class="col-sm-4">

                                    <div class="discount">
                                        <h3>Discount Codes</h3>
                                        <form id="discount-coupon-form" action="#" method="post">
                                            <label for="coupon_code">Enter your coupon code if you have one.</label>
                                            <input type="hidden" name="remove" id="remove-coupone" value="0" />
                                            <input class="input-text fullwidth" type="text" id="coupon_code" name="coupon_code" value="" />
                                            <button type="button" title="Apply Coupon" class="button coupon " onClick="discountForm.submit(false)" value="Apply Coupon"><span>Apply Coupon</span></button>

                                        </form>

                                    </div>
                                </div>

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
                                                            <strong><span class="price">$129.00</span></strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <td class="a-left" colspan="1">
                                                            Subtotal    </td>
                                                        <td class="a-right">
                                                            <span class="price">$129.00</span>    </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <ul class="checkout">
                                                <li>
                                                    <button type="button" title="Proceed to Checkout" class="button btn-proceed-checkout" onClick=""><span>Proceed to Checkout</span></button>
                                                </li><br />
                                                <li><a href="multiple-addresses.html" title="Checkout with Multiple Addresses">Checkout with Multiple Addresses</a>
                                                </li><br />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

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

export default Cart