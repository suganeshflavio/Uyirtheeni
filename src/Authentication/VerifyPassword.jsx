import React, {useState,useEffect} from 'react'
import axios from 'axios'

const token = (localStorage.getItem("tok"));
const VerifyPassword = (props) => {
    console.log("email:", props.location.state.email);
    const email = props.location.state.email
    console.log(email);
    const [code, setCode] = useState("")
    const [err, setErr] = useState("")
    function handleclick(e) {
        e.preventDefault()
        axios.post(`http://192.168.0.169:4000/customer/verifyEmailCode`, { email, code }, { headers: { "authtoken": `${token}` } })
            .then((res) => {
                setCode("");
                if (res.data.data == "Code Invalid") {
                    setErr(res.data.data)
                }
                else if (res.data.data == "Code Verified") {
                    setErr(res.data.data)
                    props.history.push({
                        pathname: `/UpdatePassword`,
                        state: { email: email }
                    })
                }
                console.log(res.data);
            }
            )
    }

  return (
    <div>
        <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>Verify Password</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>

            <div class="main-container col1-layout wow bounceInUp animated animated" style={{ visibility: "visible" }}>

<div class="main" style={{ marginBottom: "30px" }}>
    <div class="account-login container">
        {/* <!--page-title--> */}

        <form action="#" method="post" id="login-form" onSubmit={handleclick}>
            <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
            <fieldset class="col2-set">
                
                {/* <!--col-2 registered-users--> */}
                <div class="col-2 registered-users">
                    {/* <strong>Registered Customers</strong> */}
                    <div class="content">

                        {/* <p>If you don't have an account with us, please register.</p> */}
                        <ul class="form-list">
                        
                            <li>
                                <label for="email">Enter Verification Code<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="code" id="code" class="input-text required-entry validate-email" placeholder='Enter verify code' title="verify code" />
                                </div>
                            </li>
                            <li>
                                <label for="email">Email New password<em class="required">*</em></label>
                                <div class="input-box">
                                                    <input type="password" name="login[password]" placeholder='Enter new password' class="input-text required-entry validate-password" id="pass" title="Password" />
                                                </div>
                            </li>
                            <li>
                                <label for="email">Enter verify Password<em class="required">*</em></label>
                                <div class="input-box">
                                                    <input type="password" name="login[password]" placeholder='Enter verify password' class="input-text required-entry validate-password" id="pass" title="Password" />
                                                </div>
                            </li>
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

                        {/* <p class="required">* Required Fields</p> */}



                        <div class="buttons-set">

                            <button type="submit" class="button login" name="send" id="send2"><span>Update</span></button>

                            {/* <a href="/forgotpassword" class="forgot-word">Already have an account ?</a> */}
                        </div>
                        {/* <!--buttons-set--> */}
                    </div>
                    {/* <!--content--> */}
                </div>

                {/* col-1 new user */}
                <div class="col-1 new-users">
                    <strong>New Customers</strong>
                    <div class="content">

                        <p>Kindly mention your email to verify the code,Set the new password and you can change your password..</p>
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

export default VerifyPassword