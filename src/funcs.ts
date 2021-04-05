import { Mark, Color } from "./enums"
import { Card, Deck } from "./interfaces"

export function createPoker(): Deck {
    let deck: Deck = []
    Object.values(Mark).forEach(mark => {
        Object.values(Color).forEach(color => {
            const card = {
                getString() {
                    return mark + color
                },
                color: color,
                mark: mark
            }
            deck.push(card)
        })
    })
    // 断言
    deck.push(<Card>{
        type: 'small',
        getString() {
            return 'jo'
        }
    })

    deck.push({
        type: 'big',
        getString() {
            return 'JO'
        }
    } as Card)
    return deck
}

export function printPoker(deck: Deck) {
    deck.forEach((deck) => {
        console.log(deck.getString());
        
    })
}