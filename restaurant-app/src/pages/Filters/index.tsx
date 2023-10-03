import filters from "./filters.json";
import { styled } from "styled-components";

const StyledFilters = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
  background-color: #d37d24;
  padding: 20px 0;
  border-radius: 10px;
  button {
    background: #f9b165;
    border: none;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) inset;
    &.active {
      background: #5c2f00;
      color: #fff;
    }
  }
`;

type Filter = (typeof filters)[0];

interface FiltersProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filters({ filter, setFilter }: FiltersProps) {
  const clickHandler = (filterOption: Filter) => {
    if (filter === filterOption.id) {
      setFilter(null);
    } else {
      setFilter(filterOption.id);
    }
  };
  return (
    <StyledFilters>
      {filters.map((filterOption) => (
        <button
          className={filter === filterOption.id ? "active" : ""}
          key={filterOption.id}
          onClick={() => clickHandler(filterOption)}
        >
          {filterOption.label}
        </button>
      ))}
    </StyledFilters>
  );
}

export default Filters;
