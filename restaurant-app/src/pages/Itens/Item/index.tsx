import { styled } from "styled-components";
import itens from "../itens.json";

const StyledItem = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  border: 5px solid #fffb21;
  margin-bottom: 20px;
  background-color: #9c9a1e;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    background-color: #fffb21;
    padding: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-left: 20px;
  width: 100%;
  color: #fff;
  padding: 10px;

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #3c3c3c;
  }
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #9c9a1e;

  div {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const Category = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;

  &.massas {
    background-color: #ff0000;
  }
  &.carnes {
    background-color: #0011ff;
  }
  &.combos {
    background-color: #00ff08;
  }
  &.veganos {
    background-color: #ff16aa;
  }
`;

const Price = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 800;
`;

const Grams = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

const Serving = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

type ItemProps = (typeof itens)[0];

function Item(props: ItemProps) {
  const { category, id, photo, description, serving, price, title, size } =
    props;
  return (
    <StyledItem key={id}>
      <div>
        <img src={photo} alt="" />
      </div>
      <Info>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Tags>
          <Category className={category.label.toLowerCase()}>{category.label}</Category>
          <Grams>{`${size} G`}</Grams>
          <Serving>{`Serve ${serving} pessoa${
            serving > 1 ? "s" : ""
          }`}</Serving>
          <Price>R$ {price.toFixed(2)}</Price>
        </Tags>
      </Info>
    </StyledItem>
  );
}

export default Item;
