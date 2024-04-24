import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "@/components/bookcard/BookCard";
import { TBook } from "@/types/types";
import { BASE_URL } from "@/api/constants";

import s from "./Catalog.module.css";

export const Catalog = () => {
    const [catalog, setCatalog] = useState<TBook[]>([])

    useEffect(() => {
        const url = BASE_URL + '/api/books'
        axios.get<TBook[]>(url)
            .then(({ data }) => {
                setCatalog(data)
            }).catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div className={s.catalog}>
            {catalog.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}