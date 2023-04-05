import Joi from "joi";

export const movieSchema = Joi.object({
    name: Joi.string().required(),
    plataform: Joi.string().required(),
    genre: Joi.string().required()
})

export const reviewSchema = Joi.object({
    comment: Joi.string().min(2).max(200).required(),
    rate: Joi.number().min(1).max(5).required()   
})