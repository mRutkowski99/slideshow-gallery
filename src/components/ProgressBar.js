import styled from "styled-components";
import { useParams } from "react-router";
import Context from "../store/AppContext";
import { useContext } from "react";

const MAX_INDEX = 14;

const StyledProgressBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #aaa;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: calc(100% - ${(props) => props.width}%);
    background-color: #000;
    transition: ease-out 1s;
  }
`;

const ProgressBar = () => {
  // const params = useParams();
  const context = useContext(Context);

  //With id = 0 show 1fr of progressbar
  const width = ((context.pageId + 1) / (MAX_INDEX + 1)) * 100;

  return <StyledProgressBar width={width} />;
};

export default ProgressBar;
