import axios from 'axios'
import getConfigToken from '../components/utils/getConfigToken'
import { getAllProductsCartThunk } from '../store/slices/cart.slices'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const useCrudCart = () => {
  const dispatch = useDispatch()

  const addProductToCard = data => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
    axios
      .post(url, data, getConfigToken())
      .then(res => {
        //console.log(res.data)
        dispatch(getAllProductsCartThunk())
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'Product successfully added to cart',
          showConfirmButton: false,
          timer: 1200
        })
      })
      .catch(err => {
        if (err?.response?.data?.error === 'Product already added to cart') {
          Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Product already added to cart',
            showConfirmButton: false,
            timer: 1200
          })
        }
      })
  }

  const deleteProductFromCart = id => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios
      .delete(url, getConfigToken())
      .then(res => {
        //console.log(res.data)
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(getAllProductsCartThunk())
      })
      .catch(err => console.log(err))
  }

  const updateProductInmCart = (id, data) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios
      .put(url, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCartThunk())
      })
      .catch(err => console.log(err))
  }

  return { addProductToCard, deleteProductFromCart, updateProductInmCart }
}

export default useCrudCart
