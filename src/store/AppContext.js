import { createContext, useState } from "react";

const Context = createContext({
  inGallery: false,
  pageId: 0,
  slideshowForwardDirection: true,
  toggleInGallery: () => {},
  setPageId: () => {},
  toggleDirection: () => {},
});

export const ContextProvider = (props) => {
  const [inGallery, setInGallery] = useState(true);
  const [pageId, setPageId] = useState(0);
  const [forwardDirection, setForwardDirection] = useState(true);

  const inGalleryHandler = (value) => setInGallery(value);

  const pageIdHandler = (value) => setPageId(value);

  const forwardDirectionHandler = (value) => setForwardDirection(value);

  const context = {
    inGallery: inGallery,
    pageId: pageId,
    slideshowForwardDirection: forwardDirection,
    toggleInGallery: inGalleryHandler,
    setPageId: pageIdHandler,
    toggleDirection: forwardDirectionHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
