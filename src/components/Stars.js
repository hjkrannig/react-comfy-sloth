import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars, reviews }) => {
  const starCounter = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return <span key={index}>
      {stars >= index + 1 ?
        <BsStarFill /> :
        (stars >= number ? <BsStarHalf /> : <BsStar />)}
    </span >
  })
  // Alternative first approach by kg
  // const starCounter = new Array(5).fill(1).map((_, index) => {
  //   let actualStar = stars - index
  //   return <span key={index}>
  //     {actualStar >= 1 ?
  //       <BsStarFill /> :
  //       (actualStar >= 0.5 ? <BsStarHalf /> : <BsStar />)}
  //   </span >
  // })
  return <Wrapper>
    <div className="stars">
      {starCounter}

    </div>
    <p className="reviews">
      ({reviews} Customer reviews)
    </p>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
