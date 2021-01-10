import styled from 'styled-components';

export const Button = styled.div`
	background: rgba(0, 0, 0, 0.2);
	border: none;
    outline: none;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    font-size: max(1.5vw, 10px);
    margin-left:3px;
    width:20%;
    color:white;
    &:hover {
     background: rgba(0, 0, 0, 0.5);	
    }
`