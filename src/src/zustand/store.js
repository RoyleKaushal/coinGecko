import { create } from "zustand";

const store = create((set)=>{
    return{
        currency: 'usd',
        setCurrency: (newCurrency) => set((state)=>({
            ...state,
            currency: newCurrency
        }))
    }
});

export default store;