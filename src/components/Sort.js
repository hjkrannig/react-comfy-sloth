import React from "react"
import { useFilterContext } from "../context/filter_context"
import { BsFillGridFill, BsList } from "react-icons/bs"
import styled from "styled-components"
import { sortCriterials } from "../utils/constants"

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" onClick={setGridView}>
          <BsFillGridFill className={`${grid_view && "active"}`} />
        </button>
        <button type="button" onClick={setListView}>
          <BsList className={`${!grid_view && "active"}`} />
        </button>
      </div>
      <p>{products.length} products match...</p>
      <hr></hr>
      <form>
        <label htmlFor="sort">sort by: </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value={sortCriterials.sortPriceLow}> Price (lowest)</option>
          <option value={sortCriterials.sortPriceHigh}> Price (highest)</option>
          <option value={sortCriterials.sortNameAZ}>Name (A-Z)</option>
          <option value={sortCriterials.sortNameZA}>Name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  label {
    margin-right: 0.75rem;
  }
  select option {
    border: solid 1px red;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.75rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
