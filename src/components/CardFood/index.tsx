import { useDispatch } from "react-redux";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AddItemCart, openCart } from "../../store/reducers/cart";
import { formatPrice } from "../../utils";
import { Button, Overlay } from "../../styles/GlobalStyles";
import * as S from "./CardFood";

type PropsRestaurant = { menu: MenuItem[] };

const CardFood = ({ menu }: PropsRestaurant) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalState, setModalState] = useState<MenuItem>();

  const addToCart = () => {
    if (modalState) {
      dispatch(AddItemCart(modalState))
      dispatch(openCart())
    } else {
      alert("Erro ao adiciobar item ao carrinho.")
    }
  };

  const openModal = (item: MenuItem) => {
    setModalState(item);
    setIsVisible(true);
  };

  const closeModal = () => {
    setModalState(undefined);
    setIsVisible(false);
  };

  return (
    <>
      {menu.map((item) =>
        <S.CardFood key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <S.FoodInfos>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </S.FoodInfos>
          <Button colorbutton="white" type="button"
            onClick={() => openModal(item)}>
            Adicionar ao carrinho
          </Button>
        </S.CardFood>
      )}

      <S.Modal visible={isVisible.toString()}>
        <S.ModalContent>
          <header><IoClose size={25} onClick={() => closeModal()} /></header>
          <img src={modalState?.foto} alt="" />
          <div>
            <S.ModalFoodInfos>
              <h3>{modalState?.nome}</h3>
              <p>{modalState?.descricao}</p>
              <p>Serve: {modalState?.porcao}</p>
            </S.ModalFoodInfos>
            <Button colorbutton="white" type="button" onClick={addToCart}>
              Adiconar ao carrinho - {formatPrice(modalState?.preco)}
            </Button>
          </div>
        </S.ModalContent>
        <Overlay onClick={() => closeModal()} />
      </S.Modal>
    </>
  )
};

export default CardFood;
