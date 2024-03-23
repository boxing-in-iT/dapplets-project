import styled from "styled-components";

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
  text: string;
}

const Tag = (props: TagsProps) => {
  const { text } = props;
  const handleClose = () => {
    // Добавьте здесь логику для удаления тега
    console.log(`Удалить тег: ${text}`);
  };

  return (
    <TagItem>
      <TagText>{text}</TagText>
      <CloseIcon onClick={handleClose}>×</CloseIcon>
    </TagItem>
  );
};

export default Tag;
