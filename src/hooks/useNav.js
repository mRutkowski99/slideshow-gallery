import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import Context from "../store/AppContext";

const MAX_INDEX = 14;

const useNav = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  let btnPrevDisabled = false;
  let btnNextDisabled = false;

  const pageId = context.pageId;
  if (pageId === 0) btnPrevDisabled = true;
  if (pageId === MAX_INDEX) btnNextDisabled = true;

  const prevPaintingHandler = () => {
    if (btnPrevDisabled) return;
    navigate(`/gallery/${pageId - 1}`);
    context.setPageId(pageId - 1);
    context.toggleDirection(false);
  };

  const nextPaintingHandler = () => {
    if (btnNextDisabled) return;
    navigate(`/gallery/${pageId + 1}`);
    context.setPageId(pageId + 1);
    context.toggleDirection(true);
  };

  return {
    btnPrevDisabled,
    btnNextDisabled,
    prevPaintingHandler,
    nextPaintingHandler,
  };
};

export default useNav;
