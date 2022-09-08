import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Link, useLocation, useNavigate, withRouter } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';


const token = (localStorage.getItem('tok'));
const Shop = (props) => {
  const [product, setProduct] = useState([])
  const [load, setLoad] = useState(true);
  const history = useNavigate()

  useEffect(() => {
    if (localStorage.tok) {
      axios.post(`https://api.uyirtheeni.com/customer/getallProduct`, {},
        { headers: { "authtoken": `${token}` } }).then((res) => {
          setLoad(false)
          if (res.data.data.length !== 0)
            setProduct(res.data.data)
          else {
            setProduct("No Product Found")
          }
        });
    }
    else {
      axios.get(`https://api.uyirtheeni.com/customer/getallProducts`).then((res) => {
        setLoad(false)
        console.log("response",res.data.data.length)
        if (res.data.data.length !== 0)
          setProduct(res.data.data)
        else {
          setProduct("No Product Found")
        }
      });
      console.log("without login");
    }
  }, []);

  function Update(id) {
    console.log("dtaa")
    window.location.href=`/shopdetails/`+id
    // props.history.push("/Product?id=" + id)
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
                // window.location.reload()

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
                  <li class="category1601"> <strong>Products</strong> </li>
                </ul>
              </div>
              {/* <!--col-xs-12-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--container-->  */}
        </div>
        <div class="page-title">
          <h2>Products</h2>
        </div>
      </div>

      <section>
        {/* <!-- For version 1, 2, 3, 8 -->  */}
        {/* <!-- For version 1, 2, 3 --> */}
        <div class="container">
          <div class="row">
            <div >
              <div class="pro-coloumn">
                <div class="category-description std">
                  <div class="slider-items-products">
                    <div id="category-desc-slider" class="product-flexslider hidden-buttons">
                      <div class="slider-items slider-width-col1 owl-carousel owl-theme">

                        {/* <!-- Item --> */}
                        <div class="item"> <a href="#"><img alt="" src="images/category-img1.jpg" /></a>
                          <div class="cat-img-title cat-bg cat-box">
                            <div class="small-tag">Season 2018</div>
                            <h2 class="cat-heading">Organic <span>World</span></h2>
                            <p>GET 40% OFF &sdot; Free Delivery </p>
                          </div>
                        </div>
                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div class="item"> <a href="#"><img alt="" src="images/category-img2.jpg" /></a>
                          <div class="cat-img-title cat-bg cat-box">
                            <div class="small-tag">Green World</div>
                            <h2 class="cat-heading">Vegetable <span>sale</span></h2>
                            <p>Save 70% on all items</p>
                          </div>
                          {/* <!-- End Item -->  */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <article>
                  <div class="toolbar">
                    <div class="sorter">
                      <div class="view-mode"> <span title="Grid" class="button button-active button-grid">&nbsp;</span>
                      {/* <a href="/shoplist" title="List" class="button-list">&nbsp;</a>  */}
                      </div>
                    </div>
                    {/* <div class="sort-by">
                      <label class="left">Sort By: </label>
                      <ul>
                        <li><a href="#">Position<span class="right-arrow"></span></a>
                          <ul>
                            <li><a href="#">Name</a></li>
                            <li><a href="#">Price</a></li>
                            <li><a href="#">Position</a></li>
                          </ul>
                        </li>
                      </ul>
                      <a class="button-asc left" href="#" title="Set Descending Direction"><span class="top_arrow"></span></a> </div>
                    <div class="pager">
                      <div class="limiter">
                        <label>View: </label>
                        <ul>
                          <li><a href="#">15<span class="right-arrow"></span></a>
                            <ul>
                              <li><a href="#">20</a></li>
                              <li><a href="#">30</a></li>
                              <li><a href="#">35</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="pages">
                        <label>Page:</label>
                        <ul class="pagination">
                          <li><a href="#">&laquo;</a></li>
                          <li class="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">&raquo;</a></li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                  <div class="category-products">
                    <ul class="products-grid">
                    {product.map((x) => {
                      return (
                      <li class="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
                        <div class="item-inner">
                          <div class="item-img">
                            <div class="item-img-info" style={{padding:"30px"}}>
                              <a onClick={() => Update(x.id)}  class="product-image"><img src={x.product_image} alt="{x.product_name} " /></a>

                            </div>
                            <div class="add_cart">
                              <button class="button " type="button" onClick={() => Update(x.id)} ><span>View</span></button>
                            </div>
                          </div>
                          <div class="item-info">
                            <div class="info-inner">
                              <div class="item-title"><a onClick={() => Update(x.id)} style={{textTransform:"capitalize",fontSize:"18px",cursor:"pointer"}}>{x.product_name} </a> 
                              <div className="pt-3" onClick={() => wishlistme(x)} >
                                    <span style={{ fontSize: "30px", color: "green", }}>{x.favourites == null ? <AiOutlineHeart/> : <AiOutlineHeart/>}</span>
                                  </div>
                                  </div>
                              <div class="item-title"><a style={{textTransform:"capitalize",fontSize:"18px"}}>( {x.category_name} ) </a> </div>
                      
                            </div>
                          </div>
                        </div>

                      </li>
                         )
                        })
                        }
                    </ul>
                  </div>
                  {/* <div class="toolbar bottom">
                    <div class="display-product-option">
                      <div class="pages">
                        <label>Page:</label>
                        <ul class="pagination">
                          <li><a href="#">«</a></li>
                          <li class="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">»</a></li>
                        </ul>
                      </div>
                      <div class="product-option-right">
                        <div class="sort-by">
                          <label class="left">Sort By: </label>
                          <ul>
                            <li><a href="#">Position<span class="right-arrow"></span></a>
                              <ul>
                                <li><a href="#">Name</a></li>
                                <li><a href="#">Price</a></li>
                                <li><a href="#">Position</a></li>
                              </ul>
                            </li>
                          </ul>
                          <a class="button-asc left" href="#" title="Set Descending Direction"><span class="top_arrow"></span></a> </div>
                        <div class="pager">
                          <div class="limiter">
                            <label>View: </label>
                            <ul>
                              <li><a href="#">15<span class="right-arrow"></span></a>
                                <ul>
                                  <li><a href="#">20</a></li>
                                  <li><a href="#">30</a></li>
                                  <li><a href="#">35</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </article>
              </div>
      </div>
           
            {/* // <!--col-right sidebar-->  */}
          </div>
    {/* // <!--row--> */}
        </div>
  {/* // <!--container--> */}
      </section>
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
            <div class="content">Have a question?<br/>
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
    </div>
  )
}

export default Shop