import React from "react";

import {
  WarningContainer,
  MessageContainer,
  Title,
  DescriptionContainer,
  DashEffect,
  DescriptionText,
  ButtonsContainer,
  SaveButton,
  CancelButton,
} from "../styles/components/WarningClipsMessage";

const WarningClipsMessage: React.FC = () => {
  return (
    <WarningContainer>
      <MessageContainer>
        <Title>Desejaste se f* no pretérito mais que perfeito?</Title>
        <DescriptionContainer>
          <DashEffect />
          <DescriptionText>
            Mano, ó, quer mermo perder esses clipe? Não vale chorar pra mãe.
          </DescriptionText>
        </DescriptionContainer>
        <ButtonsContainer>
          <SaveButton>SIM</SaveButton>
          <CancelButton>NÃO</CancelButton>
        </ButtonsContainer>
      </MessageContainer>
    </WarningContainer>
  );
};

export default WarningClipsMessage;
