import { useState } from "react";
import { Button } from "../../styles/GlobalStyles";
import type { MenuItem } from "../../interfaces/IRestaurant";
import * as S from "./CardFood";
import { IoClose } from "react-icons/io5";

type PropsRestaurant = { menu: MenuItem[] };
const CardFood = ({ menu }: PropsRestaurant) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalState, setModalState] = useState<MenuItem>();

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(price)
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

      <S.Modal visible={isVisible}>
        <S.ModalContent>
          <header><IoClose size={25} onClick={() => closeModal()} /></header>
          <img src={modalState?.foto} alt="" />
          <div>
            <S.ModalFoodInfos>
              <h3>{modalState?.nome}</h3>
              <p>{modalState?.descricao}</p>
              <p>Serve: {modalState?.porcao}</p>
            </S.ModalFoodInfos>
            <Button colorbutton="white" type="button">Adiconar ao carrinho - {formatPrice(modalState?.preco)}</Button>
          </div>
        </S.ModalContent>
        <S.Overlay onClick={() => closeModal()} />
      </S.Modal>
    </>
  )
};

export default CardFood;
