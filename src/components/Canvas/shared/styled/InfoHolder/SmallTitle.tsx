import styled from "styled-components";

const SmallTitle = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: clamp(11px, 2vw, 14px);
  font-weight: 400;
  width: 50%;
  letter-spacing: 4px;
  line-height: 1.2;
  margin-top: clamp(1.5rem, 5vw, 5rem);
`

SmallTitle.displayName = "SmallTitle"

export default SmallTitle;