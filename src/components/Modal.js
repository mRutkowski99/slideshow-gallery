import { StyledModal } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useContext } from "react";
import Context from "../store/AppContext";
import { motion } from "framer-motion";

const portalElement = document.getElementById("overlays");

const modalVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const Modal = (props) => {
  const context = useContext(Context);

  const closeModalHandler = () => context.toggleModal(false);

  return (
    <>
      {createPortal(
        <StyledModal ratio={props.ratio}>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <button onClick={closeModalHandler}>close</button>
            <img src={props.src} />
          </motion.div>
        </StyledModal>,
        portalElement
      )}
    </>
  );
};

export default Modal;
