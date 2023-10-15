import instance from "./instans"

export const getAllProducts = ()=>{
    instance.get("/api/v1/products")
    .then((pro)=>console.log(pro))
    .catch(err=>console.log(err)
    )
}

export const getOneProducts = async (id:number)=>{
    const product = await  instance.get(`/api/v1/products/${id}`)
    .then((pro)=>pro.data)
    .catch(err=>console.log(err)
    )
    return product.data
}