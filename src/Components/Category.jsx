import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Category = (props) => {
  const history = useNavigate()
  const [getCategory, setGetCategory] = useState([])
  const [error, setError] = useState([])
  const [load, setLoad] = useState(true);


  useEffect(() => {
    axios.get(`http://192.168.0.169:4000/customer/getCategory`).then((res) => {
      setLoad(false)
      setGetCategory(res.data.data)
      console.log(res.data.data)
      // console.log(res.data.data);
    }).catch(function (error) {
      console.log('API CALL FAILS')
      setError('API CALL FAILS')
    })
  }, [])

  function Update(id) {
    console.log("datat");
    history("/categoryShop/" + id)
    // props.history.push("/CategoryShop?id=" + id)
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
        <div class="breadcrumbs">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <ul>
                  <li class="home"> <a href="/" title="Go to Home Page">Home</a> <span>&rsaquo; </span> </li>
                  <li class="category1601"> <strong>Categories</strong> </li>
                </ul>
              </div>
              {/* <!--col-xs-12-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--container-->  */}
        </div>
        <div class="page-title">
          <h2>categories</h2>
        </div>
      </div>

      {/* category */}
      <div class="best-pro slider-items-products container">
          <div class="new_title">
            <h2>All Categories</h2>
          </div>
        </div>
       <div className="container">
       <div class="row">
          <div class="hot-deal">
            <div class="box-timer">
              <div class="countbox_1 timer-grid"></div>
            </div>

            <ul class="products-grid">
              {getCategory.map((x) => {
                return (
                  <li class="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="item-inner">
                      <div class="item-img">
                        <div class="item-img-info">
                          <a onClick={() => Update(x.id)} class="product-image">
                            <img
                              src={x.category_image}
                              alt="{x.category_name}"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="item-info">
                        <div class="info-inner">
                          <div class="item-title" style={{paddingTop:"20px"}}>
                            <a
                              onClick={() => Update(x.id)}
                              style={{
                                textTransform: "capitalize",
                                cursor: "pointer",
                                fontSize: "18px",
                              }}
                            >
                              {x.category_name}
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
              <ToastContainer Transition="zoom" />
            </ul>
          </div>
          {/* </div> */}
        </div>
       </div>
    </div>
  )
}

export default Category