import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: ${ props => props.theme.containers.lg};
    margin: auto;
    margin-bottom: 20px;
    overflow: hidden;

    .slick-list {margin: 0 -12px;}
    .slick-slide>div {padding: 0 12px;}
    .slick-prev{
        left: 30px;
        z-index: 9;
        background-color: transparent;
    }
    .slick-next{
        right: 20px;
        z-index: 9;
        background-color: transparent;
    }
    .slick-arrow{
        &::before{
            display: none;
        }
    }
`

export const Loading = styled.div`
    height : 500px;
    width: 100%;
    background: red;
`