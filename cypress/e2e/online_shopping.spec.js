import { makeAnOrder } from "../support/adding_shirt_shoes_makeup_objects"

describe ('online shopping', () => {
    it('add a t-shirt, shoes and some makeup product to the cart and complete the order', () => {
        makeAnOrder.addTshirtShoes()
        makeAnOrder.addMakeUp()
        makeAnOrder.checkOut()
    })

    it.only ('validate the text fields', () => {
        makeAnOrder.addMakeUp()
        makeAnOrder.validation()
    })
})