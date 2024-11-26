import { useContext, useState } from "react";
import { fetchCoinData } from "../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../context/CurrencyContext";
import currencyStore from '../zustand/store'
import { useNavigate } from "react-router-dom";

export default function CoinTable() {

  // const { currency } = useContext(CurrencyContext);
  const { currency } = currencyStore();

  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  }

    const { data, isLoading, isError, error, isFetching } = useQuery(
      ["coins", page, currency],
      () => fetchCoinData(page, currency),
      {
        retry: 10,
        retryDelay: 1000,
      }
    );

  return (
    <div>
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[20%]">Price</div>
        <div className="basis-[20%]">24 hr Change</div>
        <div className="basis-[25%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {data?.map((item, index) => {
          return (
            <div
              onClick={()=>handleNavigation(item?.id)}
              key={item?.id}
              className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between"
            >
              <div className="flex items-center justify-start gap-3 basis-[35%]">
                <div className="w-[5rem] h-[5rem]">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h
                   -full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl">{item.name}</div>
                  <div className="text-xl">{item.symbol}</div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 basis-[20%]">
                {item?.current_price}
              </div>
              <div className="flex items-center justify-start gap-3 basis-[20%]">
              {item?.price_change_24h}
              </div>
              <div className="flex items-center justify-start gap-3 basis-[25%]">
              {item?.market_cap}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="flex flex-row w-[80vw] mx-auto justify-center">
        <button onClick={()=>setPage(page-1)} disabled={page==1} className="btn-primary btn-wide text-white text-2xl">Previous</button>
        <button onClick={()=>setPage(page+1)} className="btn-secondary btn-wide text-white text-2xl">Next</button>
    </div>    
    </div>
  );
}
