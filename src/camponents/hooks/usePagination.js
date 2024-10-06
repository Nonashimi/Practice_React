import { useMemo } from "react";

export const usePagination = (totalPage) =>{
    const arr = useMemo(() =>{
        let array = [];
        for(let i = 0; i < totalPage; i++){
            array.push(i + 1);
        }
        return array;
    });
    return arr;
}