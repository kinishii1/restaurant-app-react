import { useState } from "react";
import options from "./options.json";
import { styled } from "styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const StyledOrdenator = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  padding: 20px 0;

  button {
    background: #d37d24;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) inset;
  }

  .activeBtn {
    background: #ffdcb8;
    color: #000;
  }
`;

const StyleOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    width: 100%;
    display: none;
    color: #000;
    background: #f9b165;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) inset;
    &.active {
      display: block;
    }

    &:hover {
      background: #d37d24;
      color: #fff;
    }
  }
`;

type OrdenatorProps = {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
};

function Ordenator({ order, setOrder }: OrdenatorProps) {
  const [open, setOpen] = useState(false);
  const nameOrder =
    order && options.find((opcao) => opcao.value === order)?.nome;
  return (
    <StyledOrdenator>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        onBlur={() => setOpen(false)}
        className={order !== "" ? "activeBtn" : ""}
      >
        <span>{order ? nameOrder : "Select an option"}</span>
        {open ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
        <StyleOptions>
          {options.map((option) => (
            <div
              className={open ? "active" : ""}
              key={option.value}
              onClick={() => setOrder(option.value)}
            >
              {option.nome}
            </div>
          ))}
        </StyleOptions>
      </button>
    </StyledOrdenator>
  );
}

export default Ordenator;
