import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 562px;
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