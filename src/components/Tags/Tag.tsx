import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addUserGenre } from "../../store/features/moviesSlice";

const TagItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #5241bf;
  border-radius: 25px;
  padding: 0 5px;
  margin-bottom: 5px;
`;

const TagText = styled.span`
  color: white;
  margin-right: 10px;
  font-size: 10px;
`;

const CloseIcon = styled.span`
  cursor: pointer;
  color: white;
  font-size: 10px;
`;

interface TagsProps {
  id?: number;
  text: string;
}

const Tag = (props: TagsProps) => {
  const dispatch = useDispatch();
  const { text, id } = props;
  const handleClose = () => {
    console.log(`Удалить тег: ${text}`);
  };

  const chooseGenre = () => {
    id ? dispatch(addUserGenre(id)) : console.log("Not id");
  };

  return (
    <TagItem onClick={() => chooseGenre()}>
      <TagText>{text}</TagText>
      <CloseIcon onClick={handleClose}>×</CloseIcon>
    </TagItem>
  );
};

export default Tag;
