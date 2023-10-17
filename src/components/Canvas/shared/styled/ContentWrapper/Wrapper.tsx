import styled from "styled-components"
import {media} from "../../utils/breakpoints";

const ContentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 60%;
  height: 80%;
  display: flex;
  ${media.tablet} {
    top: 40%;
    left: 60%;
  }
`

ContentWrapper.displayName = "ContentWrapper"

export default ContentWrapper