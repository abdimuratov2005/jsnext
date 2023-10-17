import {createGlobalStyle} from "styled-components";
import {sharedValues} from "../shared/utils/sharedValues";

export const CanvasStylesStyled = createGlobalStyle`
  .testik {
    overscroll-behavior: none;
    font-family: ${sharedValues.typography.fontFamily};
  }

  canvas {
    display: block;
    z-index: -1;
    position: relative;
  }

  [data-animation=paragraph] {
    opacity: 0;
  }

  [data-animation=paragraph] .line {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
  }

  [data-animation=paragraph] .word {
    transform: translateY(100%);
  }

  [data-animation=paragraph] .word--active {
    transform: translateY(0);
  }
`