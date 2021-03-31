import { Mark, Color } from "./enums"
import { Deck } from "./types"

export function createPoker(): Deck {
    const deck: Deck = []
    Object.values(Mark).forEach(mark => {
        Object.values(Color).forEach(color => {
            deck.push({ color, mark })
        })
    })
    return deck
}

export function printPoker(deck: Deck) {
    deck.forEach((deck) => {
        let str = deck.color + deck.mark
        console.log(str);
    })
}