import { BASE_URL } from "@/api/constants";
import { TBook } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useBook = (id: number) => {
    const [bookData, setBookData] = useState<TBook>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const url = BASE_URL + `/api/books/${id}`
        setIsLoading(isLoading)
        axios.get<TBook>(url)
            .then(({ data }) => {
                setBookData(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setIsError(true)
            })
    }, [])

    return { bookData, isLoading, isError }
}