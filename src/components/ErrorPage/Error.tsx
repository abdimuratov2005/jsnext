import { memo } from "react";
import { Code } from "./styled/Code";
import { Wrapper } from "./styled/Wrapper";

interface ErrorPageProps {
  statusCode: number
}

const ErrorPage = memo<ErrorPageProps>((props) => {
  const { statusCode } = props;

  return (
    <>
      <Wrapper>
        <Code>Error | {statusCode || '404'}</Code>
      </Wrapper>
    </>
  )
})
ErrorPage.displayName = "ErrorPage"

export default ErrorPage