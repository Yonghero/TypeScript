import { Color, Mark } from "./enums"

export type Deck = Poker[]
export type Poker = {
    color: Color
    mark: Mark
}