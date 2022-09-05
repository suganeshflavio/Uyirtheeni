import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Register = (props) => {
    const [customername, setCustomername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profile_pic, setProfile_pic] = useState("profile_pic")
    const [alaisname, setAlaisname] = useState("alaisname")
    const [confirm_password, setConfirm_password] = useState("")
    const [dob, setDob] = useState("dob")
    const [gender, setGender] = useState("MALE")
    const [location, setLocation] = useState("Location")
    const [deviceId, setDeviceId] = useState("DeviceId")
    const [user_type, setUser_type] = useState("User Type")
    const [errPass, setErrPass] = useState("")
    const [errConfirm, setErrConfirm] = useState("")
    const [errPhone, setErrPhone] = useState("")
    const [data, setData] = useState("")
  
    const handlesubmit = (e) => {
  
      e.preventDefault()
      const data = {
        profile_pic,
        customername,
        alaisname,
        email,
        password,
        phone,
        dob,
        gender,
        location,
        deviceId,
        user_type
      }
  
      console.log(phone.length);
      if (phone.length != 10) {
        setErrPhone("Phone number must be in 10");
        setErrPass("");
        setErrConfirm("");
        return false;
      }
      if (password.length < 8) {
        setErrPass("Password length should be minimum 8 charater");
        setErrPhone("");
        setErrConfirm("");
        return false;
      }
      if (password !== confirm_password) {
        setErrConfirm("Password doesn't match");
        setErrPhone("");
        setErrPass("");
      } else {
        axios
          .post(`https://api.uyirtheeni.com/customer/add`, data)
          .then((res) => {
            setData(res.data);
            console.log(res.data);
            setCustomername("");
            setProfile_pic("")
            setAlaisname("");
            setEmail("");
            setPassword("")
            setPhone("")
            setDob("")
            setGender("")
            setLocation("")
            setDeviceId("")
            setUser_type("")
            console.log(res.data.status);
            if (res.data.data == "Verification Link Sent") {
              props.history.push({
                pathname: `/VerifyEmail`,
                state: phone,
              })
            }
            else {
              props.history.push({
                pathname: `/Emailfailed`,
              })
            }
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
                                <h2>Register</h2>
                            </div>
                        </div>
                        {/* <!--col-xs-12--> */}
                    </div>
                    {/* <!--row--> */}
                </div>
                {/* <!--container--> */}
            </div>
        {/* register */}
        <div class="main-container col1-layout wow bounceInUp animated animated" style={{ visibility: "visible" }}>

<div class="main" style={{ marginBottom: "30px" }}>
    <div class="account-login container">
        {/* <!--page-title--> */}

        <form action="#" method="post" id="login-form" onSubmit={handlesubmit}>
            <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
            <fieldset class="col2-set">
                
                {/* <!--col-2 registered-users--> */}
                <div class="col-2 registered-users">
                    <strong>Registered Customers</strong>
                    <div class="content">

                        <p>If you don't have an account with us, please register.</p>
                        <ul class="form-list">
                        <li>
                                <label for="pass">Username<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="login[password]" onChange={(e) => setCustomername(e.target.value)} value={customername.toLowerCase()} required="true"  class="input-text required-entry" placeholder='Enter your name' id="pass" title="name" />
                                </div>
                            </li>
                            <li>
                                <label for="email">Email Address<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="text" name="login[username]" onChange={(e) => setEmail(e.target.value)} value={email} required="true" id="email" class="input-text required-entry validate-email" placeholder='Enter your email' title="Email Address" />
                                </div>
                            </li>
                           
                            <li>
                                <label for="pass">Mobile Number<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="password" name="Number" maxlength="10" minlength="10" onChange={(e) => setPhone(e.target.value)}value={phone} placeholder='Enter your number'  class="input-text required-entry validate-password" id="pass" title="mobile number" /><span style={{ color: "red" }}>{errPhone}</span>
                                </div>
                            </li>
                            <li>
                                <label for="pass">Password<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="password" name="login[password]" onChange={(e) => setPassword(e.target.value)}value={password} required="true" class="input-text required-entry validate-password" placeholder='Enter Password' id="pass" title="Password" /><span style={{ color: "red" }}>{errPass}</span>
                                </div>
                            </li>
                            <li>
                                <label for="pass">Confirm Password<em class="required">*</em></label>
                                <div class="input-box">
                                    <input type="password" name="login[password]" onChange={(e) => setConfirm_password(e.target.value)}value={confirm_password} required="true" class="input-text required-entry validate-password" placeholder='Enter Password' id="pass" title="Password" /><span style={{ color: "red" }}>{errConfirm}</span>
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

                            <button type="submit" class="button login" name="send" id="send2"><span>Create Account</span></button>

                            <a href="/login" class="forgot-word">Already have an account ?</a>
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

export default Register