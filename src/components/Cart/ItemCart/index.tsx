import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeItemCart } from "../../../store/reducers/cart";
import * as S from "../CartStyled";

type PropsItem = { title: string, price: string, cover: string, id: number };

const ItemCart = ({ id, title, cover, price }: PropsItem) => {
  const dispatch = useDispatch();
  const removeToCart = (foodID: number) => dispatch(removeItemCart(foodID));

  return (
    <S.Item>
      <img src={cover} alt={title} />
      <S.InfosItem>
        <h3>{title}</h3>
        <p>{price}</p>
      </S.InfosItem>
      <S.TrashIcon onClick={() => removeToCart(id)}>
        <FaRegTrashAlt />
      </S.TrashIcon>
    </S.Item>
  )
};

export default ItemCart;
