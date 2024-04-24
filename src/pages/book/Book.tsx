import { useBook } from "@/hooks/useBook"

import s from "./Book.module.css";
import { useParams } from "react-router-dom";

type TBookParams = {
    id: string
}

const Book = () => {
    const { id } = useParams<TBookParams>()
    const { bookData, isLoading, isError } = useBook(+id)

    return (
        <>
            {isLoading && <div>Загрузка</div>}
            {isError && <div>Ошибка сервера</div>}
            {
                !isLoading && !isError && bookData &&
                <div>
                    <img src={bookData.cover} className={s.cover} />
                </div>
            }
        </>

    )
}

export default Book
