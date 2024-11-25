import { axiosInstance } from "../helper/constant";

export async function fetchCoinData (page=1,currency='usd') {
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&per_page=10&page=${page}`);
        console.log(response.data);
        return response.data;
    
    } catch (error) {
        console.log(error)
    }
}