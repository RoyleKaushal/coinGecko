import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetail } from "../src/services/fetchCoinDetail";
import { useEffect } from "react";
import parse from 'html-react-parser';

function CoinDetailScreen () {
    const {coinId} = useParams();
    const {data, isError, isLoading, error} = useQuery(['coinDetail',coinId],()=>fetchCoinDetail(coinId),{
        cacheTime : 1000 * 60 * 2
    });

    useEffect(()=>{
        console.log(data);
    },[data])

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error: {error.message}</div>
    return(
        <>
            <div className="flex flex-row mid:flex-col">
                <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
                    <img
                        src={data?.image?.large}
                        alt={data?.name}
                        className="h-52 w-52 mb-5"
                    />
                    <h1 className="text-4xl font-bold mb-5">{data?.name}</h1>
                    <p className="w-full text-justify px-6 py-4">{parse(data?.description?.en)}</p>
                    <div className="w-full flex flex-col md:flex-row md:justify-around">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">
                                Rank
                            </h2>
                            <span className="ml-3 text-xl">
                                {data?.market_cap_rank}
                            </span>
                        </div>  
                        
                    </div>
                    <div className="w-full flex flex-col md:flex-row md:justify-around">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold text-yellow-400">
                                Current Price
                            </h2>
                            <span className="ml-3 text-xl">
                                {data?.market_data?.current_price["usd"]}
                            </span>
                        </div>  
                        
                    </div>
                </div>
                <div className="md:w-2/3 w-full">
                    <div>
                        Coin Information
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinDetailScreen;