import styled from "styled-components";
import { useParams } from "react-router";

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
    width: ${(props) => props.width}%;
    background-color: #666;
  }
`;

const ProgressBar = () => {
  const params = useParams();

  //With id = 0 show 1fr of progressbar
  const width = ((+params.id + 1) / (MAX_INDEX + 1)) * 100;

  return <StyledProgressBar width={width} />;
};

export default ProgressBar;
