
import { handleError } from './../utils/errMsg';
import { Request, Response, response } from 'express';
import * as productsService from "../services/productsService"

//get all products
export const findAllProducts = async (req:Request, res:Response) => {
    try {
        const [products] = await productsService.findAll()
        console.log(products);
        if(!Array.isArray(products)) {
            throw new Error("Kiểu dữ liệu không hợp lệ")
        }
        return res.status(200).json({
            status:200,
            data: products[0]
        })
    } catch (error:any) {
       handleError(res ,error, 500)
        }
    }

    //get product by id
    export const findProductById = async (req:Request, res:Response) => {
        const id = Number(req.params.id)
        console.log(id);
        
        try {
            const [product] = await productsService.findProById(id)
            if (!Array.isArray(product)) {
                throw new Error("Kiểu dữ liệu không hợp lệ")
            }

            return res.status(200).json({
                status: 200,
                data: product[0]
            })
            
        } catch (error:any) {
           handleError(res ,error, 500)
            }
        }

    //create product
    
    export const createProduct = async (req:Request, res:Response) => {
        
        
        const {
            ProductName,
            CategoryId,
            Price,
            Descriptions,
            Image,
             Discount
          } = req.body;
           
        try {
            await productsService.createPro(ProductName,
                CategoryId,
                Price,
                Descriptions,
                Image,
                Discount)
           
            return res.status(201).json({
                status: 201,
                message: "Thêm mới thành công"
            })
            
        } catch (error:any) {
           handleError(res ,error, 500)
            }
        }