import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

const token = (localStorage.getItem("tok"));
const UpdateAddress = () => {
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [landmark, setLandmark] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [data, setData] = useState("")

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const id = query.get("id");
    console.log(id);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}/customer/getAddress`, { id },
            { headers: { "authtoken": `${token}` } })
            .then((res) => {
                res.data.data.forEach(element => {
                    if (element.id == id) {
                        setState(element.state);
                        setCity(element.city);
                        setStreet(element.street);
                        setLandmark(element.landmark);
                        setZipcode(element.zipcode);
                    }
                });
            });
    }, [])
    const handlesubmit = (e) => {

        e.preventDefault()
        const data = {
            id,
            state,
            city,
            street,
            landmark,
            zipcode,
        }
        {
            axios
                .post(`${process.env.REACT_APP_API}/customer/updateAddress`, data, { headers: { "authtoken": `${token}` } })
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                    setState("");
                    setCity("")
                    setStreet("");
                    setLandmark("");
                    setZipcode("")
                    console.log(res.data.status);
                })
        }
    }

  return (
    <div>
<div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>Update Address</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>

            {/* update address */}

        <div class="main-container col1-layout wow bounceInUp animated animated" style={{ visibility: "visible" }}>

<div class="main" style={{ marginBottom: "30px" }}>
    <div class="account-login container">
        {/* <!--page-title--> */}

        <form action="#" method="post" id="login-form" onSubmit={handlesubmit}>
            <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
            <fieldset class="col2-set">
                
                {/* <!--col-2 registered-users--> */}
                <div class="col-2 registered-users">
                    <strong>Update Your Address</strong>
                    <div class="content">

                        {/* <p>If you don't have an account with us, please add your address.</p> */}
                        <ul class="form-list">
                        <li>
                                <label for="pass">State<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="login[password]" onChange={(e) => setState(e.target.value)} value={state} required="true"  class="input-text required-entry" placeholder='Enter state' id="pass" title="name" />
                                </div>
                            </li>
                            <li>
                                <label for="email">City<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} required="true" id="email" class="input-text required-entry validate-email" placeholder='Enter city' title="city" />
                                </div>
                            </li>
                           
                            <li>
                                <label for="pass">Street<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="Number" onChange={(e) => setStreet(e.target.value)} value={street} placeholder='Enter Street'  class="input-text required-entry validate-password" id="pass" title="street" />
                                </div>
                            </li>
                            <li>
                                <label for="pass">Landmark<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="landmark" onChange={(e) => setLandmark(e.target.value)} value={landmark} required="true" class="input-text required-entry validate-password" placeholder='Enter Landmark' id="pass" title="landmark" />
                                </div>
                            </li>
                            <li>
                                <label for="pass">Zipcode<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="zipcode" onChange={(e) => setZipcode(e.target.value)} value={zipcode} required="true" class="input-text required-entry validate-password" placeholder="Enter Zipcode" id="pass" title="zipcode" />
                                </div>
                            </li>
                            {/* <li>
                                <label for="pass">Gender<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="password" name="login[password]"  class="input-text required-entry validate-password" id="pass" title="Password" />
                                </div>
                            </li> */}
                        </ul>
                        <div class="remember-me-popup">
                            <div class="remember-me-popup-head" style={{ display: "none" }}>
                                <h3 id="text2">What's this?</h3>
                                <a href="#" class="remember-me-popup-close" onClick="showDiv()" title="Close">Close</a>
                            </div>
                            <div class="remember-me-popup-body" style={{ display: "none" }}>
                                <p id="text1">Checking "Remember Me" will let you access your shopping cart on this computer when you are logged out</p>
                                <div class="remember-me-popup-close-button a-right">
                                    <a href="#" class="remember-me-popup-close button" title="Close" onClick="showDiv()"><span>Close</span></a>
                                </div>
                            </div>
                        </div>

                        <p class="required">* Required Fields</p>



                        <div class="buttons-set">

                            <button type="submit" class="button login" name="send" id="send2"><span>update Address</span></button>

                            {/* <a href="/login" class="forgot-word">Already have an account ?</a> */}
                        </div>
                        {/* <!--buttons-set--> */}
                    </div>
                    {/* <!--content--> */}
                </div>

                {/* col-1 new user */}
                <div class="col-1 new-users">
                    <strong>New Customers</strong>
                    <div class="content">

                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                        <div class="buttons-set">
                           {/* <a href='/register'> <button type="button" title="Create an Account" class="button create-account"><span><span>Create an Account</span></span></button></a> */}
                        </div>
                    </div>
                </div>
            </fieldset>
            {/* <!--col2-set--> */}
        </form>

    </div>
    {/* <!--account-login--> */}

</div>
{/* <!--main-container--> */}

</div>
    </div>
  )
}

export default UpdateAddress