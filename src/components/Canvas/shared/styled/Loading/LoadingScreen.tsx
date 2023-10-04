import styled from "styled-components";

const LoadingScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #14327b;
    z-index: 12;
    transition: opacity .65s ease-in-out .6s;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
`;

LoadingScreen.displayName = "LoadingScreen"

export default LoadingScreen;
