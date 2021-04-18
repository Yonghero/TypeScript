import React from 'react'
import ChessType from '../../enums/ChessType'
import GamingStatus from '../../enums/GamingType'
import BoardCom from '../BoardCom/BoardCom'
import { GameWrap } from './style'
interface IState {
    chesses: ChessType[],
    nextState: ChessType.red | ChessType.black,
    gameStatus: GamingStatus,
    isOver: boolean
}

class GameCom extends React.Component<{}, IState>{

    state: IState = {
        chesses: [],
        nextState: ChessType.red,
        isOver: false,
        gameStatus: GamingStatus.gaming // 游戏状态
    }

    handleClick = (i: number) => {
        console.log(i);
        let chessesArr: ChessType[] = [...this.state.chesses]
        chessesArr[i] = this.state.nextState
        let isOver = false
        // 判断游戏状态
        const horMin = Math.floor(i / 3) * 3
        const verMin = i % 3
        if (
            (chessesArr[horMin] === chessesArr[horMin + 1] && chessesArr[horMin] === chessesArr[horMin + 2])
            ||
            (chessesArr[verMin] === chessesArr[verMin + 3] && chessesArr[verMin] === chessesArr[verMin + 6])
        ) {
            console.log(111);

            if (chessesArr[i] === ChessType.red) {
                console.log('hong fang sheng ');
            } else {
                console.log('lang fang sheng ');
            }
            isOver = true
        } else {
            console.log(222);

        }
        this.setState(prevState => ({
            chesses: chessesArr,
            nextState: prevState.nextState === ChessType.red ? ChessType.black : ChessType.red,
            isOver
        }))
    }

    init = () => {
        this.setState({
            chesses: [...Array.from({ length: 9 }, (x, i) => (ChessType.none))],
            nextState: ChessType.red,
            isOver: false
        })
    }

    componentDidMount() {
        this.init()
    }

    render() {
        return (
            <GameWrap>
                <BoardCom
                    chesses={this.state.chesses}
                    onClick={this.handleClick}
                    nextSate={this.state.nextState}
                    isOver={this.state.isOver}
                />
                <button onClick={this.init}>重置游戏</button>
            </GameWrap>
        )
    }
}

export default GameCom