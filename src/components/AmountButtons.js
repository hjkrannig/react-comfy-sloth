import React from "react"
import styled from "styled-components"
import { FaPlus, FaMinus } from "react-icons/fa"

const AmountButtons = ({ amount, stock, decrease, increase }) => {
  const incClass = amount === stock ? "amount-btn inactive" : "amount-btn"
  const decClass = amount === 1 ? "amount-btn inactive" : "amount-btn"
  return (
    <Wrapper className="amount-btns">
      <button type="button" className={decClass} onClick={decrease}>
        <FaMinus />
      </button>
      <h3 className="amount">{amount} </h3>
      <button type="button" className={incClass} onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h3 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }
  .amount-btn.inactive {
    color: lightgrey;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
