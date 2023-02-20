import { makeAnOrder } from "../support/adding_shirt_shoes_makeup_objects"

describe ('online shopping', () => {
    it.only ('add a t-shirt, shoes and some makeup product to the cart and complete the order', () => {
        makeAnOrder.addTshirtShoes()
        makeAnOrder.addMakeUp()
        makeAnOrder.checkOut()
    })

    it ('validate the text fields', () => {
        makeAnOrder.addMakeUp()
        makeAnOrder.validation()
    })

    it ('add a review', () => {
        makeAnOrder.addReview()
    })
})