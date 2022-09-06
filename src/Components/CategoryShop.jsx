import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {apiCalls} from "../Axios/Services";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import {useParams} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link, useLocation,} from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';

const token = (localStorage.getItem('tok'));
const CategoryShop = (props) => {
  const history = useNavigate()
  const [add, setAdd] = useState(true)
  const [load, setLoad] = useState(true);
  function useQuery() {
      return new URLSearchParams(useLocation().search);
  }
  const { id } = useParams();
  const [product, setProduct] = useState([])
  useEffect(() => {
    apiCalls("post", "/customer/getall_Category_Products", { "cat_id": id }).then((res)=>{
      setLoad(false)
      console.log(res.data);
                  setProduct(res.data.data);
    })
    .catch((err)=>{
        
    })
      // if (localStorage.tok) {
       
      //     axios.post(`${process.env.REACT_APP_API}/customer/getall_Category_Product`, { "cat_id": id },
      //         { headers: { "authtoken": `${token}` } }).then((res) => {
      //             console.log(res.data);
      //             setProduct(res.data.data);
      //         });
      // }
      // else {
      //     axios.post(`${process.env.REACT_APP_API}/customer/getall_Category_Products`, { "cat_id": id })
      //         .then((res) => {
      //             console.log(res.data);
      //             setProduct(res.data.data);
      //         });
      // }
  }, []);
  function Update(id) {
      // props.history.push("/Product?id=" + id)
      window.location.href=`/shopdetails/`+id
  }

  function wishlistme(x) {
    if (localStorage.tok) {
      const product_id = x.id
      if (x.favourites == null) {
        axios.post(`${process.env.REACT_APP_API}/customer/addWishlist`, {
          "product_id": product_id,
        },
          { headers: { "authtoken": `${token}` } })
          .then((res) => {
            axios.post(`${process.env.REACT_APP_API}/customer/getallProduct`, {}, { headers: { "authtoken": `${token}` } })
              .then((res) => {
                setLoad(false)
                setProduct([])
                setProduct(res.data.data);
                console.log("addd");
                toast.success("Added to Wishlist !", { autoClose: 2000 })
              })
          })
      } else {
        const product_id = x.id
        axios.post(`${process.env.REACT_APP_API}/customer/removeWishlist`, {
          "product_id": product_id,
        },
          {
            headers: { "authtoken": `${token}` }
          }).then((res) => {
            setLoad(false)
            axios.post(`${process.env.REACT_APP_API}/customer/getallProduct`, {}, { headers: { "authtoken": `${token}` } }).then((res) => {
              setProduct([]);
              setProduct(res.data.data);
              console.log("removed");
              toast.error("Removed from Wishlist!", { autoClose: 2000 })
            });
          });
      }
    }
    else {
      // history.push("/Login")
      window.location.href="login"
      toast.success("Please Login", { autoClose: 2000 })
    }
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
                  <li class="category1601"> <strong>Category</strong> </li>
                </ul>
              </div>
              {/* <!--col-xs-12-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--container-->  */}
        </div>
        <div class="page-title">
          <h2>Category Products</h2>
        </div>
      </div>

      {/* category shop */}
      <section>
        {/* <!-- For version 1, 2, 3, 8 -->  */}
        {/* <!-- For version 1, 2, 3 --> */}
        <div class="container">
          <div class="row">
            <div >
              <div class="pro-coloumn" style={{marginTop:"30px",marginBottom:"30px"}}>
                <article>
                    <h1 style={{textAlign: 'center',fontSize: '20px',fontWeight: 'bold'}}>Products</h1>
                  
                  <div class="category-products" >
                    <ul class="products-grid">
                    {product?.map((x) => {
                                    { console.log(product) }
                                    return (
                      <li class="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                        <div class="item-inner">
                          <div class="item-img">
                            <div class="item-img-info"><a onClick={() => Update(x?.id)}  class="product-image"><img src={x?.product_image} alt="{x?.product_name}" /></a>

                            </div>
                            <div class="add_cart">
                              <button class="button " type="button" onClick={() => Update(x?.id)} ><span>View</span></button>
                            </div>
                          </div>
                          <div class="item-info">
                            <div class="info-inner">
                              <div class="item-title"><a onClick={() => Update(x?.id)} style={{textTransform:"capitalize",fontSize:"18px",cursor:"pointer"}}>{x?.product_name} </a> 
                              <div className="pt-3" onClick={() => wishlistme(x)} >
                                    <span style={{ fontSize: "30px", color: "green", }}>{x.favourites == null ? <AiOutlineHeart/> : <AiOutlineHeart/>}</span>
                                  </div>
                              </div>
                              <div class="item-title"><a style={{textTransform:"capitalize",fontSize:"18px"}}>( {x?.category_name} )</a> </div>
                      
                            </div>
                          </div>
                        </div>

                      </li>
                           )
                          })
                          }
                          <ToastContainer />
                    </ul>
                  </div>
                  
                </article>
              </div>
      </div>
           
            {/* // <!--col-right sidebar-->  */}
          </div>
    {/* // <!--row--> */}
        </div>
  {/* // <!--container--> */}
      </section>


    </div>
  )
}

export default CategoryShop