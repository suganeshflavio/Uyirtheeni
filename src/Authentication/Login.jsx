import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")
    const [err, setErr] = useState("")
    function handleclick(e) {
      e.preventDefault()
      axios.post(`http://192.168.0.169:4000/customer/login/emailLogin`, { email, password })
        .then((res) => {
          console.log(res.data)
          setEmail("");
          setPassword("");
          setData(res.data)
          // props.history.push("/")
  
          if (res.data.data.token != undefined) {
            localStorage.setItem('logged', true)
            localStorage.setItem("tok", res.data.data.token)
            console.log(res.data.data);
            window.location.href = "/"
          }
          else {
            localStorage.setItem('logged', false)
            setErr(res.data.data);
  
          }
        }
        ).catch((error) => {
          console.log(error);
        })
    }
  
    return (
        <div>
            <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title">
                                <h2>Login or Create an Account</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>

            {/* <!-- BEGIN Main Container -->   */}

            <div class="main-container col1-layout wow bounceInUp animated animated" style={{ visibility: "visible" }}>

                <div class="main" style={{ marginBottom: "30px" }}>
                    <div class="account-login container">
                        {/* <!--page-title--> */}

                        <form action="#" method="post" id="login-form" onSubmit={handleclick}>
                            <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
                            <fieldset class="col2-set">
                                <div class="col-1 new-users">
                                    <strong>New Customers</strong>
                                    <div class="content">

                                        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                        <div class="buttons-set">
                                           <a href='/register'> <button type="button" title="Create an Account" class="button create-account"><span><span>Create an Account</span></span></button></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2 registered-users">
                                    <strong>Registered Customers</strong>
                                    <div class="content">

                                        <p>If you have an account with us, please log in.</p>
                                        <ul class="form-list">
                                            <li>
                                                <label for="email">Email Address<em class="required">*</em></label>
                                                <div class="input-box">
                                                    <input type="text" name="login[username]" onChange={(e) => setEmail(e.target.value)} required="true" value={email} id="email" class="input-text required-entry validate-email" title="Email Address" />
                                                </div>
                                            </li>
                                            <li>
                                                <label for="pass">Password<em class="required">*</em></label>
                                                <div class="input-box">
                                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="login[password]"  class="input-text required-entry validate-password" id="pass" title="Password" /><span className="ml-3" style={{ color: "red" }}> {err}</span>
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

                                        <p class="required">* Required Fields</p>



                                        <div class="buttons-set">

                                            <button type="submit" class="button login" title="Login" name="send" id="send2"><span>Login</span></button>

                                            <a href="/forgotpassword" class="forgot-word">Forgot Your Password?</a>
                                        </div>
                                        {/* <!--buttons-set--> */}
                                    </div>
                                    {/* <!--content--> */}
                                </div>
                                {/* <!--col-2 registered-users--> */}
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

export default Login