import ChessType from '../../enums/ChessType'
import ChessCom from '../ChessCom/ChessCom'
import { BoardWrap } from './style'

interface IProps {
    chesses: ChessType[],
    isOver?: boolean,
    nextSate: ChessType,
    onClick?: (i: number) => void
}
const BoardCom: React.FC<IProps> = ({ chesses, onClick, isOver }) => {
    // 非空断言： 去除undefined，null等空值
    // const over = isOver!
    const chessesComps = chesses.map((chess, index) => {
        return (
            <ChessCom type={chess} key={index} onClick={() => {
                if (onClick && !isOver) {
                    onClick(index)
                }
            }} />
        )
    })
    return (
        <BoardWrap>
            {chessesComps}
        </BoardWrap>
    )
}
// 添加属性默认值
BoardCom.defaultProps = {
    isOver: false
}
export default BoardCom