import icon from "../assets/icon-view-image.svg";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../store/AppContext";

const StyledModalButton = styled.button`
  border: none;
  outline: none;
  font: inherit;
  font-size: 1.3rem;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  img {
    display: block;
    align-self: center;
  }
`;

const ModalButton = () => {
  const context = useContext(Context);

  const showModalHandler = () => context.toggleModal(true);

  return (
    <StyledModalButton onClick={showModalHandler}>
      <img src={icon} alt="modal button icon" />
      <span>view image</span>
    </StyledModalButton>
  );
};

export default ModalButton;
