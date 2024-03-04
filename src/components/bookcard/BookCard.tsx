import { TBook } from "@/types/types";
import s from "./BookCard.module.css";

type TBookCardProps = {
    book: TBook
}

export const BookCard = ({ book }: TBookCardProps) => {
    return (
        <div className={s.bookCard}>
            <img src={book.cover} className={s.cover} />
            <span className={s.author}>{book.author.fullName}</span>
            <span className={s.title}>{book.title}</span>
        </div>
    )
}