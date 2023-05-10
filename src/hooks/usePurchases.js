import axios from "axios"
import getConfigToken from "../components/utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slices"
import { useDispatch } from "react-redux"
import { useState } from "react"


const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
const usePurchases = () => {

    const [purchases, setPurchase] = useState()

    const dispatch = useDispatch()

    const buyThisCart = () => {

        axios.post(url, {}, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const getAllProductsPurchased = () => {
        axios.get(url, getConfigToken())
            .then(res => setPurchase(res.data))
            .catch(err => console.log(err))
    }

    return { purchases, getAllProductsPurchased, usePurchases, buyThisCart }
}

export default usePurchases
