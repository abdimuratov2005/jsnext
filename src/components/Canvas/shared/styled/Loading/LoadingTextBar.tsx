import styled from "styled-components";

const LoadingTextBar = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: transform .3s ease-in-out,
              opacity .3s ease-in-out .3s;
  transform-origin: left;
  transform: scaleX(0);
`

LoadingTextBar.displayName = "LoadingTextBar"

export default LoadingTextBar;