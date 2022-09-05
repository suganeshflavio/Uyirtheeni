import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, useLocation, useNavigate } from "react-router-dom";

const token = (localStorage.getItem('tok'));
const UpdateProfile = () => {
    const history = useNavigate()
    const [data, setData] = useState("")
    const [customername, setCustomername] = useState("")
    const [alaisname, setAlaisname] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [location, setLocation] = useState("")
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    // function update(){
    //     props.history.push("/Myprofile")
    // }
    let query = useQuery();
    const id = query.get("id");


    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}/customer/fetch`, {},
            { headers: { "authtoken": `${token}` } })
            .then((res) => {
                // res.data.data.forEach(element => {
                //     if (element.id == id) {
                //         setCustomername(element.customername);
                //         setAlaisname(element.alaisname);
                //         setDob(element.dob);
                //         setGender(element.gender);
                //         setLocation(element.location);
                //     }
                // }
                // );
            });
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault()
        const data = {
            customername,
            alaisname,
            dob,
            gender,
            location
        }
        console.log(data);
        axios.post(`${process.env.REACT_APP_API}/customer/update`, data, { headers: { "authtoken": `${token}` } })
            .then((res) => {
                setData(res.data);
                console.log(res.data);
                setCustomername("");
                setAlaisname("");
                setDob("");
                setGender("");
                setLocation("");
                history.push("/dashboard")
            });

    }


  return (
    <div>
        <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>Update Profile</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>

            {/* update profile */}

            <div class="main-container col1-layout wow bounceInUp animated animated" style={{ visibility: "visible" }}>

<div class="main" style={{ marginBottom: "30px" }}>
    <div class="account-login container">
        {/* <!--page-title--> */}

        <form action="#" method="post" id="login-form" onSubmit={handlesubmit}>
            <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
            <fieldset class="col2-set">
                
                {/* <!--col-2 registered-users--> */}
                <div class="col-2 registered-users">
                    <strong>Update User profile</strong>
                    <div class="content">

                        {/* <p>If you don't have an account with us, please add your address.</p> */}
                        <ul class="form-list">
                        <li>
                                <label for="pass">Name<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="customername" onChange={(e) => setCustomername(e.target.value)} value={customername} required="true"  class="input-text required-entry" placeholder='Enter name' id="pass" title="name" />
                                </div>
                            </li>
                            <li>
                                <label for="email">Alais Name<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="city" onChange={(e) => setAlaisname(e.target.value)} value={alaisname} required="true" id="email" class="input-text required-entry validate-email" placeholder='Enter alais name' title="city" />
                                </div>
                            </li>
                           
                            <li>
                                <label for="pass">Dob<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="date" name="Number" onChange={(e) => setDob(e.target.value)} value={dob} placeholder='Enter dob'  class="input-text required-entry" id="pass" title="street" />
                                </div>
                            </li>
                         
                            <li>
                                <label for="pass">Gender<em class="required">*</em></label>
                                <div class="input-box">
                                    {/* <input type="text" name="zipcode" onChange={(e) => setZipcode(e.target.value)} value={zipcode} required="true" class="input-text required-entry validate-password" placeholder="Enter Zipcode" id="pass" title="zipcode" /> */}
                                    <select value={gender} onChange={(e) => setGender(e.target.value)} class="input-text required-entry ">
                                            <option selected>Choose Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
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

                            <button type="submit" class="button login" name="send" id="send2"><span>update</span></button>

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

export default UpdateProfile