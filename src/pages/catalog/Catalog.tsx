import { BookCard } from "@/components/bookcard/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";

import s from "./Catalog.module.css";

type TAuthor = {
    id: number,
    fullName: string
}

type TGenre = {
    id: number,
    genre: string,
}

export type TBook = {
    id: number,
    title: string,
    author: TAuthor,
    releaseDate: Date,
    genre: TGenre,
    cover: string,
    pages: number,
    price: number,
    amount: number,
}

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