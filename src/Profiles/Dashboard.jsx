import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate, useHistory, withRouter } from "react-router-dom";

const token = (localStorage.getItem('tok'));
const Dashboard = (props) => {
  const history = useNavigate();
  function logout() {
      window.localStorage.removeItem("logged");
      window.localStorage.removeItem("tok");
      localStorage.clear()
      window.location.href = "/Login"
  }
  const [address, setAddress] = useState([])
  const [orders, setOrders] = useState([])
  const [profilelist, setProfilelist] = useState([])

  useEffect(() => {
    axios.post(`https://api.uyirtheeni.com/customer/fetch`, {}, { headers: { "authtoken": `${token}` } })
        .then((res) => {

            setProfilelist(res?.data?.data);
        }).catch((error) => {
            if (localStorage.tok == null || localStorage.tok == undefined) {
                props.history.push("/Login")
            }
        })
}, []);
useEffect(() => {
    axios.post(`https://api.uyirtheeni.com/customer/getOrders`, {},
        { headers: { "authtoken": `${token}` } })
        .then((res) => {
            console.log(res.data.data);
            setOrders(res?.data?.data);
        });
}, []);

function Updateorder(id) {
    // props.history.push("/OrderSummary?id=" + id)
    window.location.href="/OrderSummary?id=" + id
}
function Update(id) {
    // props.history.push("/UpdateAddress?id=" + id)
    window.location.href="/updateaddress?id=" + id
}
useEffect(() => {
    axios.post(`https://api.uyirtheeni.com/customer/getAddress`, {},
        { headers: { "authtoken": `${token}` } })
        .then((res) => {
            setAddress(res?.data?.data);
        });
}, []);

  return (
    <div>
        <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
        <div class="page-title">
          <h2>My Profile</h2>
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
            
            {/* <!--page-title-->  */}
            {/* <!-- BEGIN DASHBOARD--> */}
            <div class="dashboard">
              <div class="welcome-msg">
                <p class="hello"><strong>Hello, {profilelist?.customername}!</strong></p>
                <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
              </div>
               {/* account information */}

              <div class="recent-orders" id="liton_tab_1_2">
                <div class="title-buttons"> <strong>My Accounts</strong>
                 <a href="/updateprofile">Update Profile</a> 
                 </div>
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
                        <th>User Name </th>
                        {/* <th>Alias Name</th> */}
                        <th>Email Address</th>
                        <th><span class="nobr">Phone Number</span></th>
                        {/* <th>DOB</th> */}
                        <th>Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="first odd">
                        <td>{profilelist?.customername}</td>
                        {/* <td><span class="nobr">{profilelist?.alaisname}</span></td> */}
                        <td>{profilelist?.email}</td>
                        <td><span class="price">{profilelist?.phone}</span></td>
                        {/* <td>{profilelist?.dob}</td> */}
                        <td class="a-center last"><span class="nobr"> {profilelist?.gender}</span></td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
              </div> <br /><br />

                {/* recent orders */}
              <div class="recent-orders" id="liton_tab_1_2">
                <div class="title-buttons"> <strong>Recent Orders</strong>
                 {/* <a href="#">View All</a>  */}
                 </div>
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
                        <th>S.No</th>
                        <th>Order Id</th>
                        <th>Total Amount</th>
                        <th><span class="nobr">Order Status</span></th>
                        <th>Payment Status</th>
                        <th>Address</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {orders[0]?.orders?.filter(data => data.order_status !== "DELIVERED")?.map((x, i) => (
                      <tr class="first odd">
                        <td>{++i}</td>
                        <td style={{cursor:"pointer"}}><span class="nobr"
                        //  onClick={() => Updateorder(x.id)}
                        >{x?.order_id}</span></td>
                        <td>Rs.{x?.total_payment / 100}/-</td>
                        <td><span class="price">{x?.order_status}</span></td>
                        <td>{x?.payment_status}</td>
                        <td>{orders[0]?.landmark},{orders[0]?.street},{orders[0]?.city},{orders[0]?.state}, {orders[0]?.zipcode}</td>
                        {/* <td class="a-center last"><span class="nobr"> <a onClick={() => Updateorder(x?.id)}>View Order</a> </span></td> */}
                        {/* <td>  <span onClick={() => Updateorder(x.id)}><span className="badge badge-pills badge-success" style={{fontSize: "15px",padding: "10px",cursor:"pointer"}}>view orders</span></span></td> */}
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> <br /><br />

                {/* <!--recent-address--> */}
              
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
                        <th>S.No </th>
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
                        <td>{++val}</td>
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
          </div>
        </section>
        
        {/* <!--col-main col-sm-9 wow bounceInUp animated--> */}
        <aside class="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated" style={{visibility: "visible"}}>
          <div class="block block-account">
            <div class="block-title"> DASHBOARD </div>
            <div class="block-content">
              <ul>
                <li><span><a data-bs-toggle="tab" href="#liton_tab_1_4">My Accounts</a></span></li>
                <li><span><a data-bs-toggle="tab" href="#liton_tab_1_2">Address</a></span></li>
                <li class="current"><a data-bs-toggle="tab" href="#liton_tab_1_2">Recent Orders</a></li>
                {/* <li><a href="#"><span> Billing Agreements</span></a></li>
                <li><a href="#"><span> Recurring Profiles</span></a></li>
                <li><a href="#"><span> My Product Reviews</span></a></li>
                <li><a href="#"><span> My Wishlist</span></a></li>
                <li><a href="#"><span> My Applications</span></a></li>
                <li><a href="#"><span> Newsletter Subscriptions</span></a></li>
                <li class="last"><a href="#"><span> My Downloadable Products</span></a></li> */}
              </ul>
            </div>
          </div>
        </aside>

      </div>
   </div>
  </section>

  
  
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
    </div>
  )
}

export default Dashboard