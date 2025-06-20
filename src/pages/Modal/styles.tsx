import styled from "styled-components";

const StyledDivIcon = styled.div`
    background-color: #FAFBFC;
    width: 40px;
    display: grid;
    place-items: center;
    border-radius: 8px 0px 0px 8px;
    padding: 8px; 
`; 

const StyledDivBody = styled.div`
    background-color: #091E42;
    width: 480px;
    color: #FAFBFC; 
    display: grid;
    align-items: start;
    justify-content: start;
    border-radius: 0px 8px 8px 0px;
    padding: 8px; 
`; 

export { StyledDivIcon, StyledDivBody };