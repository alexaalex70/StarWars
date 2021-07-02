import styled from "styled-components";

interface ICardInformation {
  label: string;
  content: string;
}

const Content = styled.p`
  color: #000000;
  font-weight: 300;
  text-align: center;
`;

const Label = styled.span`
  color: #000000;
  font-weight: 600;
  margin-right: 8px;
`;

const CardInformation = ({ label, content }: ICardInformation) => {
  return (
    <Content>
      <Label>{label}</Label>
      {content}
    </Content>
  );
};

export default CardInformation;
