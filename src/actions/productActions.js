import  { FILTER_PRODCUTS_BY_SIZE, FETCH_PRODUCTS} from './types';

export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:3000/products").then(res => res.json())
    .then(data => {
        return dispatch({ type: FETCH_PRODUCTS, payload: data});

    });
}

export const filterProducts = (products, size) => (dispatch) => {
     return dispatch({
         type: FILTER_PRODCUTS_BY_SIZE,
        payload: {
            size: size,
            items: size === '' ? products : products.filter(a=> a.availableSizes.indexOf(size.toUpperCase()>=0)) 
        }
     })
}