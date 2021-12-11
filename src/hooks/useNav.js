import { useNavigate, useParams } from "react-router";

const MAX_INDEX = 14;

const useNav = () => {
  const navigate = useNavigate();
  const params = useParams();
  let btnPrevDisabled = false;
  let btnNextDisabled = false;

  const pageId = +params.id;
  if (pageId === 0) btnPrevDisabled = true;
  if (pageId === MAX_INDEX) btnNextDisabled = true;

  const prevPaintingHandler = () => {
    if (btnPrevDisabled) return;
    navigate(`/gallery/${pageId - 1}`);
  };

  const nextPaintingHandler = () => {
    if (btnNextDisabled) return;
    navigate(`/gallery/${pageId + 1}`);
  };

  return {
    btnPrevDisabled,
    btnNextDisabled,
    prevPaintingHandler,
    nextPaintingHandler,
  };
};

export default useNav;
