export const fetchData = () => {
    return (wrapPromise(fetchCategories()))
}


export const fetchCategories = () => {
    let URL = 'https://opentdb.com/api_category.php'
    let pr = new Promise( (res,rej) => {
        res( fetch(URL).then(response=>response.json()))
    })
    
    return pr
    
}


export const wrapPromise = (promise) => {
let status = 'pending'
let result = ''
const suspender = promise.then(
    res => {
        status = 'success'
        result = res
    },
    err => {
        status = 'error'
        result = err
    }
)

function read() {
    console.log('f')
    switch(status){
        case 'pending':
            throw suspender
        case 'error':
            throw result
        default:
            return result
    
    }

    }
    return { read }
}
