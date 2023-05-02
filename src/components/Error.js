import React from "react"
import styled from "styled-components"

const defaultTitle = "there was an error..."
const Error = ({ text, title = defaultTitle }) => {
  return (
    <Wrapper className="section section-center text-center">
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    color: var(--clr-red-light);
    font-style: italic;
  }
  p {
    text-transform: none;
    font-size: 0.75;
  }
`

export default Error
