import { CgSearch } from "react-icons/cg";
import { styled } from "styled-components";

// Types for the Search component
type Props = {
  search: string;
  handleSearch: (value: string) => void;
};

// Styles for the Search component
const StyledSearch = styled.div`
background-color: #cc3d3d;
  width: 50%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px #a2a0a0;

  input {
    width: 95%;
    border: none;
    padding: 10px;
    font-size: 16px;
    outline: none;
    background-color: #cc3d3d;
    color: #fff;
  }

  svg {
    margin-left: 10px;
    color: #fff;
  }


`;

// The Search component
function Search({ search, handleSearch }: Props) {
  return (
    <StyledSearch>
      <input
        type="text"
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <CgSearch size={20} />
    </StyledSearch>
  );
}

export default Search;
