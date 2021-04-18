import React from 'react'
import ChessType from '../../enums/ChessType'
import { ChessWrap } from './style'


interface IProps {
    type: ChessType,
    onClick?: () => void
}

const ChessCom: React.FC<IProps> = ({ type, onClick }) => {
    let chess = null
    if (type === ChessType.red) {
        chess = <div className="red item"></div>
    }
    if (type === ChessType.black) {
        chess = <div className="black item"></div>
    }
    return (
        <ChessWrap onClick={
            ()=>{
                if(type === ChessType.none && onClick){
                    onClick()
                }
            }
        }>
            {chess}
        </ChessWrap>
    )
}


export default ChessCom