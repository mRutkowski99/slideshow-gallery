import { createContext, useState } from "react";

const Context = createContext({
  inGallery: true,
  pageId: 0,
  slideshowForwardDirection: true,
  showModal: false,
  toggleInGallery: () => {},
  setPageId: () => {},
  toggleDirection: () => {},
  toggleModal: () => {},
});

export const ContextProvider = (props) => {
  const [inGallery, setInGallery] = useState(true);
  const [pageId, setPageId] = useState(0);
  const [forwardDirection, setForwardDirection] = useState(true);
  const [modal, setModal] = useState(false);

  const inGalleryHandler = (value) => setInGallery(value);

  const pageIdHandler = (value) => setPageId(value);

  const forwardDirectionHandler = (value) => setForwardDirection(value);

  const toggleModalHandler = (value) => setModal(value);

  const context = {
    inGallery: inGallery,
    pageId: pageId,
    slideshowForwardDirection: forwardDirection,
    showModal: modal,
    toggleInGallery: inGalleryHandler,
    setPageId: pageIdHandler,
    toggleDirection: forwardDirectionHandler,
    toggleModal: toggleModalHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
