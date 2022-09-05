import { apiCalls } from "../Axios/Services";
import Swal from "sweetalert2";
import {
  authenticate,
  logout,
  register,
  categories,
  resetPassword,
  verifyPassword,
  categoryProducts,
  singleProduct,
  products,
  relatedProducts,
  fProducts,
  recommendProducts,
  getWishList,
  addWishList,
  addCart,
  getCart,
  getCartCount,
  updateCart,
  removeCart,
  productSpecification,
  searchProduct,
  hotDeal,
  buyNow,
  banner,
  getProfile,
  updateProfile,
  addAddress,
  getAddress,
  deleteAddresss,
  getOrder,
  getOrderDetail,
  addReview,
  deleteReview,
  myReview,
  getReview,
  checkOut,
  payNow,
  faq,
} from "../Redux/ActionType";

const Token = localStorage.getItem("AuthTok");

export function authenticateLogin(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "user/auth/email", data)
        .then((res) => {
          console.log("Success");
          localStorage.setItem("AuthTok", res.data.data.token);
          dispatch({
            type: authenticate.login.success,
            data: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          console.log("Failure");
          dispatch({
            type: authenticate.login.error,
            data: err,
          });
          reject(err);
        })
    );
}

//Registers
export function registerUser(data) {
  data = { ...data, gender: "male" };
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/customer/register", data)
        .then((res) => {
          console.log("res", res.data.data);
          if (
            res.data.data === "Verification Link Sent" ||
            res.data.data === "Verification Link Sent Again"
          ) {
            Swal.fire({
              icon: "success",
              timer: 4000,
              buttons: false,
              showConfirmButton: false,
              text: res.data.data,
            }).then(() => {
              window.location.href = "/login";
            });
          } else if (res.data.data === "Account Already Exists") {
            Swal.fire({
              icon: "error",
              timer: 4000,
              buttons: false,
              showConfirmButton: false,
              text: res.data.data,
            }).then(() => {
              window.location.href = "/login";
            });
          } else if (res.data.data === "You have been Terminated..!") {
            Swal.fire({
              icon: "error",
              timer: 4000,
              buttons: false,
              showConfirmButton: false,
              text: res.data.data,
            });
          }

          dispatch({
            type: register.registerUser.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            timer: 4000,
            buttons: false,
            showConfirmButton: false,
            text: err.response.data.error.message,
          });
          dispatch({
            type: register.registerUser.error,
            data: err,
          });
          reject(err);
        })
    );
}
// logout
export function logoutUser() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/auth/logout")
        .then((res) => {
          dispatch({
            type: logout.logoutUser.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: logout.logoutUser.error,
            data: err,
          });
          reject(err);
        })
    );
}
export function resetPasswords(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "user/auth/sendEmailCode", data)
        .then((res) => {
          dispatch({
            type: resetPassword.reset.success,
            data: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: resetPassword.reset.error,
            data: err,
          });
          reject(err);
        })
    );
}
export function verifyPasswords(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "user/auth/verifyEmailCode", data)
        .then((res) => {
          dispatch({
            type: verifyPassword.verify.success,
            data: res.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: verifyPassword.verify.error,
            data: err,
          });
          reject(err);
        })
    );
}

//All Categories
export function getCategories(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "user/shop/category")
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: categories.getCategories.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: categories.getCategories.error,
            data: err,
          });
          reject(err);
        })
    );
}

// Category Products
export function getCategoryProducts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/shop/categoryProducts", data)
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: categoryProducts.getProducts.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: categoryProducts.getProducts.error,
            data: err,
          });
          reject(err);
        })
    );
}

//fetch Single Product
export function getSingleProduct(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/product/variant", data)
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: singleProduct.getSingleProduct.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: singleProduct.getSingleProduct.error,
            data: err,
          });
          reject(err);
        })
    );
}

//fetch ALl Products

export function getProducts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/product")
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: products.getProducts.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: products.getProducts.error,
            data: err,
          });
          reject(err);
        })
    );
}

//get Related Products
export function getRelatedProducts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/shop/forYou")
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: relatedProducts.rProducts.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: relatedProducts.rProducts.error,
            data: err,
          });
          reject(err);
        })
    );
}

//get Recommend Products
export function getRecommendProducts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "user/product/recommended", data)
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: recommendProducts.product.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: recommendProducts.product.error,
            data: err,
          });
          reject(err);
        })
    );
}

//Wishlist

export function getWishLists(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/customer/getWishlist")
        .then((res) => {
          dispatch({
            type: getWishList.getList.success,
            data: res?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: getWishList.getList.error,
            data: err.response.data.error.message,
          });
          reject(err);
        })
    );
}

export function addWishLists(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      Token
        ? apiCalls("post", "/user/customer/wishlist/", data)
            .then((res) => {
              Swal.fire("Product", res.data.data, "success");
              dispatch(getSingleProduct(data));
              dispatch({
                type: addWishList.wishList.success,
                data: res?.data?.data,
              });

              resolve(true);
            })
            .catch((err) => {
              Swal.fire("Product", " Added to Wishlist!", "success");
              dispatch({
                type: addWishList.wishList.error,
                data: err,
              });
              reject(err);
            })
        : (window.location.href = "/login")
    );
}

// Cart
export function addCarts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      Token
        ? apiCalls("post", "/user/cart/addCart", data)
            .then((res) => {
              Swal.fire("Product", " Added to Cart!", "success");

              dispatch(getCarts());
              dispatch(getCartCounts());
              dispatch({
                type: addCart.add.success,
                data: res?.data?.data,
              });
              resolve(true);
            })
            .catch((err) => {
              Swal.fire(err.response.data.error.message,  "", "error");

              dispatch({
                type: addCart.add.error,
                data: err.response.data.error.message,
              });
              reject(err);
            })
        : (window.location.href = "/login")
    );
}

export function getCarts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/cart")
        .then((res) => {
          dispatch(getCartCounts());
          dispatch({
            type: getCart.getCarts.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: getCart.getCarts.error,
            data: err.response.data.error.message,
          });
          reject(err);
        })
    );
}

export function getCartCounts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/cart/count")
        .then((res) => {
          dispatch({
            type: getCartCount.getCount.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: getCartCount.getCount.error,
            data: err.response.data.error.message,
          });
          reject(err);
        })
    );
}

export function updateCarts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/cart/updateCart", data)
        .then((res) => {
          dispatch(getCarts());
          dispatch(getCartCounts());
          dispatch({
            type: updateCart.update.success,
            data: res?.data?.data,
          });

          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: updateCart.update.error,
            data: err,
          });
          reject(err);
        })
    );
}
// RemoveCarts
export function removeCarts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/cart/removeCart", data)
        .then((res) => {
          dispatch(getCarts());
          dispatch(getCartCounts());
          dispatch({
            type: removeCart.remove.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: removeCart.remove.error,
            data: err,
          });
          reject(err);
        })
    );
}

//Products Specification

export function productSpecifications(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/product/specification", data)
        .then((res) => {
          dispatch({
            type: productSpecification.specifications.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: productSpecification.specifications.error,
            data: err,
          });
          reject(err);
        })
    );
}
// search
export function searchs(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/search/", data)
        .then((res) => {
          dispatch({
            type: searchProduct.search.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: searchProduct.search.error,
            data: err,
          });
          reject(err);
        })
    );
}

//Hot Deals

export function hotDeals(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/shop/hotDeals")
        .then((res) => {
          // console.log("hotdeals", res.data.data);
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: hotDeal.hot.success,
              data: res?.data?.data,
            });
          }
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: hotDeal.hot.error,
            data: err,
          });
          reject(err);
        })
    );
}

export function buyNows(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      Token
        ? apiCalls("post", "/user/cart/buy", data)
            .then((res) => {
              if (
                res.data.data === "Added to Cart" ||
                res.data.data === "Already Added to Cart"
              ) {
                window.location.href = "/cart";
              }

              // dispatch({
              //   type: buynow.buy.success,
              //   data: res?.data?.data,
              // });
              resolve(res);
            })
            .catch((err) => {
              Swal.fire( err.response.data.error.message,"", "error");
              dispatch({
                type: buyNow.buy.error,
                data: err,
              });
              reject(err);
            })
        : (window.location.href = "/login")
    );
}

export function getBanner(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "user/shop/banners")
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: banner.getBanner.success,
              data: res?.data?.data,
            });
          }
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: banner.getBanner.error,
            data: err,
          });
          reject(err);
        })
    );
}

// Getuser
export function getProfiles() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/customer/getUser")
        .then((res) => {
          dispatch({
            type: getProfile.get.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: getProfile.get.error,
            data: err,
          });
          reject(err);
        })
    );
}
// Update Profile
export function updateProfiles(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/customer/updateUser", data)
        .then((res) => {
          dispatch({
            type: updateProfile.update.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: updateProfile.update.error,
            data: err,
          });
          reject(err);
        })
    );
}

// addAddress
export function addUserAddress(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/customer/addAddress", data)
        .then((res) => {
          dispatch({
            type: addAddress.add.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: addAddress.add.error,
            data: err,
          });
          reject(err);
        })
    );
}

// UpdateAddress
export function deleteUserAddress(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/customer/updateAddress", data)
        .then((res) => {
          dispatch({
            type: deleteAddresss.delete.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: deleteAddresss.delete.error,
            data: err,
          });
          reject(err);
        })
    );
}
// getaAddress
export function getUserAddress(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/customer/getAddress")
        .then((res) => {
          dispatch({
            type: getAddress.get.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: getAddress.get.error,
            data: err,
          });
          reject(err);
        })
    );
}


//orders
export function getOrders(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/orders")
        .then((res) => {
          dispatch({
            type: getOrder.get.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: getOrder.get.error,
            data: err,
          });
          reject(err);
        })
    );
}
//ordersdetails
export function getOrdersDetails(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/orders/getOrder", data)
        .then((res) => {
          dispatch({
            type: getOrderDetail.details.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: getOrderDetail.details.error,
            data: err,
          });
          reject(err);
        })
    );
}
// addreviews
export function addReviews(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/review/addReview", data)
        .then((res) => {
          Swal.fire({
            icon: "success",
            timer: 4000,
            buttons: false,
            showConfirmButton: false,
            text: res.data.data,
          }).then((res) => {
            setTimeout(() => {
              window.location.href = "/reviewtotal";
            }, 1000);
          });

          dispatch({
            type: addReview.add.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            timer: 4000,
            buttons: false,
            showConfirmButton: false,
            text: err.response.data.error.message,
          });
          dispatch({
            type: addReview.add.error,
            data: err,
          });
          reject(err);
        })
    );
}

// My Reviews
export function myReviews() {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/review/MyReview")
        .then((res) => {
          dispatch({
            type: myReview.review.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: myReview.review.error,
            data: err,
          });
          reject(err);
        })
    );
}
// Delete Reviews
export function deleteReviews(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/review/removeReview", data)
        .then((res) => {
          dispatch({
            type: deleteReview.delete.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: deleteReview.delete.error,
            data: err,
          });
          reject(err);
        })
    );
}

// getreviews
export function getReviews(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "user/review", data)
        .then((res) => {
          dispatch({
            type: getReview.get.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: getReview.get.error,
            data: err,
          });
          reject(err);
        })
    );
}

// checkout
export function checkOuts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/orders/checkout")
        .then((res) => {
          dispatch({
            type: checkOut.check.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: checkOut.check.error,
            data: err,
          });
          reject(err);
        })
    );
}
// payNow
export function payNows(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/orders/payment", data)
        .then((res) => {
          dispatch({
            type: payNow.pay.success,
            data: res?.data?.data,
          });
          resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: payNow.pay.error,
            data: err,
          });
          reject(err);
        })
    );
}

export function faqs(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("get", "/user/shop/faq")
        .then((res) => {
          dispatch({
            type: faq.quest.success,
            data: res?.data?.data,
          });
          resolve(true);
        })
        .catch((err) => {
          dispatch({
            type: faq.quest.error,
            data: err,
          });
          reject(err);
        })
    );
}

//Filter Products

export function FilterProducts(data) {
  return (dispatch) =>
    new Promise((resolve, reject) =>
      apiCalls("post", "/user/product", data)
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            dispatch({
              type: fProducts.fProduct.success,
              data: res?.data?.data,
            });
            resolve(res);
          } else {
            dispatch({
              type: fProducts.fProduct.success,
              data: res?.data?.data,
            });
            resolve(res);
          }
        })
        .catch((err) => {
          dispatch({
            type: fProducts.fProduct.error,
            data: err,
          });
          reject(err);
        })
    );
}
