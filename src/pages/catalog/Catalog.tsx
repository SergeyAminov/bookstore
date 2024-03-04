import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "@/components/bookcard/BookCard";
import { TBook } from "@/types/types";

import s from "./Catalog.module.css";

export const Catalog = () => {
    const [catalog, setCatalog] = useState<TBook[]>([])

    useEffect(() => {
        const url = 'http://localhost:8080/api/books'
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