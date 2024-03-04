export type TStoreUser = {
    id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    role: string,
    password: string,
    token: string
}

export type TAuthor = {
    id: number,
    fullName: string
}

export type TGenre = {
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
