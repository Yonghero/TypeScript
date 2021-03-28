type Deck = Poker[]
type Color = '♥' | '♦️' | '♣️' | '♠️'
type Poker = {
    color: Color
    mark: number
}

function createPoker(): Deck {
    const deck: Deck = []
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: '♠️',
            mark: i
        })
        deck.push({
            color: '♣️',
            mark: i
        })
        deck.push({
            color: '♥',
            mark: i
        })
        deck.push({
            color: '♦️',
            mark: i
        })
    }
    return deck
}

function printPoker(deck: Deck) {
    deck.forEach((p, i) => {
        let str = p.color
        if (p.mark <= 10) {
            str += p.mark
        }
        else if (p.mark === 11) {
            str += 'j'
        }
        else if (p.mark === 12) {
            str += 'Q'
        }
        else{
            str += 'k'
        }
        console.log(str);
    })
}
printPoker(createPoker())