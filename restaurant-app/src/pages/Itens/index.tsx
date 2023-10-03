import itens from "./itens.json";
import Item from "./Item";
import { useState, useEffect } from "react";

interface ItemProps {
  search: string;
  filter: number | null;
  order: string;
}

function Itens({ search, filter, order }: ItemProps) {
  const [list, setList] = useState(itens);

  const testSearch = (title: string) => {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  };

  const testFilter = (id: number) => {
    return filter === null || filter === id;
  };

  const sortedList = (newList: typeof itens) => {
    switch (order) {
      case "":
        return newList;
      case "porcao":
        return newList.sort((a, b) => a.size - b.size);
      case "preco":
        return newList.sort((a, b) => a.price - b.price);
      case "qtd_pessoas":
        return newList.sort((a, b) => a.serving - b.serving);
      default:
        return newList;
    }
  };

  useEffect(() => {
    const newList = itens.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(sortedList(newList));
  }, [search, filter, order]);

  return (
    <div>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
export default Itens;
