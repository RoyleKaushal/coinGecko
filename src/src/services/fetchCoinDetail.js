import { axiosInstance } from "../helper/constant";

export async function fetchCoinDetail (id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log(response.data);
        return response.data;
    
    } catch (error) {
        console.log(error)
    }
}