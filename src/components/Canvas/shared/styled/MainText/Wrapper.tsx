import styled from "styled-components";

const WrapperSharedContent = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100%;
  user-select: none;
  z-index: 11;
`;

WrapperSharedContent.displayName = "Main Text Wrapper";

export default WrapperSharedContent;