import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: #14327b;
  opacity: 0;
  transition: background-color .85s ease-out;
`;

Wrapper.displayName = "Wrapper"

export default Wrapper