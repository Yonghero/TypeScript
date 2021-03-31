type Deck = Poker[]
enum Color {
    Spade = '♠️',
    Heart = '♥',
    Diamond = '♦️',
    Club = '♣️'
}
enum Mark {
    A = 'A',
    J = 'J',
    Q = 'Q',
    one = '1',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    sevent = '7',
    eight = '8',
    nine = '9',
    ten = '10'

}
// type Color = '♥' | '♦️' | '♣️' | '♠️'
type Poker = {
    color: Color
    mark: Mark
}

function createPoker(): Deck {
    const deck: Deck = []
    Object.values(Mark).forEach(mark => {
        Object.values(Color).forEach(color => {
            deck.push({ color, mark })
        })
    })
    return deck
}

function printPoker(deck: Deck) {
    deck.forEach((deck) => {
        let str = deck.color + deck.mark
        console.log(str);
    })
}
printPoker(createPoker())