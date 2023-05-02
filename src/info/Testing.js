import React from 'react'
import styled from 'styled-components'

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello people</h3>
      <p>hello everybody everywhere</p>
      <article>
        <p>another paragraph with text</p>
      </article>

      <button>click me</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3 {
    text-align: center;
    color: blue;
  }
  button {
    background: lightblue;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
  article p {
    text-transform: capitalize;
    color: green;
    text-align: center;
    font-size: 1.5rem;
  }
`
export default Testing
