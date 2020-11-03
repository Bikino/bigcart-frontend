import axios from 'axios'
//import { getToken } from '../helper/authentication'

export const getCategoryList = async () => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_PRODUCT_API}/category/`
    const response = await axios.get(url)
    return response
}

export const createCategory = async (cateName) => {
    let url = `${process.env.REACT_APP_PRODUCT_API}/category/`
    const response = await axios.post(url, { name: cateName })
    return response
}

export const createSubCategory = async (cateName, parentId) => {
    let url = `${process.env.REACT_APP_PRODUCT_API}/category/`
    const response = await axios.post(url, { name: cateName, parentCategoryId: parentId })
    return response
}

export const renameCategory = async (newName, categoryId) => {
    let url = `${process.env.REACT_APP_PRODUCT_API}/category/`
    const response = await axios.patch(url, { name: newName, categoryId: categoryId })
    return response
}

export const deleteCategory = async (categoryId) => {
    let url = `${process.env.REACT_APP_PRODUCT_API}/category/${categoryId}`
    const response = await axios.delete(url)
    return response
}