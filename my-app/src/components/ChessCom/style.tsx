import styled from 'styled-components'

export const ChessWrap = styled.div`
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    outline:2px solid lightblue;

    .item{
        height:40px;
        width:40px;
        border-radius:50%;
        &.red{
            background:radial-gradient(#fff, #f40);
        }
        &.black{
            background: radial-gradient(#fff, #000)
        }
    }
    
`