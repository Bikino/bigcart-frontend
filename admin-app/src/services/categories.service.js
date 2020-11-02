import axios from 'axios'
import { getToken } from '../helper/authentication'

export const getCategoryList = async () => {
    let token = getToken()
    let url = `http://localhost:8001/Category/`
    const response = await axios.get(url)
    return response
}

export const createCategory = async (cateName) => {
    const response = await fakeCreateCate(cateName)
    return response
}

export const createSubCategory = async (cateName, parentId) => {
    const response = await fakeCreateSubCate(cateName, parentId)
    return response
}

export const renameCategory = async (newName, category) => {
    const response = await fakeRenameCate(newName, category)
    return response
}

const fakeCreateCate = (cateName) => {
    return new Promise((resolve) => setTimeout(() => {
        resolve({ data: { id: uuidv4(), name: cateName, parent: '' } })
    }, 1000))
}

const fakeCreateSubCate = (cateName, parentId) => {
    return new Promise((resolve) => setTimeout(() => {
        resolve({ data: { id: uuidv4(), name: cateName, parentId } })
    }, 1000))
}

const fakeRenameCate = (newName, category) => {
    return new Promise((resolve) => setTimeout(() => {
        resolve({ data: { id: category.cateId, name: newName, parentId: category.parentId } })
    }, 1000))
}

const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}