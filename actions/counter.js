
export const getListData=(data)=>{
    return {
        type:'GETLISTS',
        data
    }
}

export const addToCartFunc = (data)=>{
    return {
        type: 'ADDTOCART',
        data
    }
}

export function addToCart(params){
    return dispatch=>{
        
        dispatch(addToCartFunc(params))
    }
}


export function fetchList(params={page:1}){
    return dispatch=>{

        const start = 20 * (params.page -1);
        var url = `http://localhost:3000/product/list?start=${start}`;

        return fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            // console.log(getListData(data).data)
            dispatch(getListData(data))
        })
    }
}