import axios from "axios"
import getConfigToken from "../components/utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slices"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

    const dispatch = useDispatch()

    const addProductToCard = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const deleteProductFromCart = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const updateProductInmCart = (id, data) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    return { addProductToCard, deleteProductFromCart, updateProductInmCart }

}

export default useCrudCart