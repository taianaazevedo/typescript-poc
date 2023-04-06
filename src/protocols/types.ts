export type Movie = {
    id?: number,
    name: string,
    plataform: string,
    genre: string,
    status: boolean
}

export type Review = {
    rate: number,
    comment: string
}

export type Query = {
    query: string
}