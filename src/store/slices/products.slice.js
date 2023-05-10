import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const productsSlice = createSlice({
<<<<<<< HEAD
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
=======
  name: 'products',
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload
  }
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
})

export const { setProductsGlobal } = productsSlice.actions

export default productsSlice.reducer

<<<<<<< HEAD
export const getAllProductsThunk = (url = "https://e-commerce-api-v2.academlo.tech/api/v1/products") => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setProductsGlobal(res.data)))
        .catch(err => console.log(err))
}

=======
export const getAllProductsThunk =
  (url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products') =>
  dispatch => {
    axios
      .get(url)
      .then(res => dispatch(setProductsGlobal(res.data)))
      .catch(err => console.log(err))
  }
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
