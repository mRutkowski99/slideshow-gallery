import { StyledDetailView } from "./DetailView.styled";
import ModalButton from "../../components/ModalButton";

const DetailView = (props) => {
  return (
    <StyledDetailView thumbnail={props.thumbnail} ratio={props.thumbRatio}>
      <div className="painting-container">
        <ModalButton />
      </div>
      <div className="title-container">
        <h4>{props.name}</h4>
        <h5>{props.artistName}</h5>
      </div>
      <img src={props.artistImage} alt={`${props.artistName} photo`} />
    </StyledDetailView>
  );
};

export default DetailView;
