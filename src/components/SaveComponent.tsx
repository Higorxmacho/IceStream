import React from "react";
// import Select from "react-select";

import {} from "react-icons/fi";
import {
  SaveContainer,
  SaveContent,
  SaveContentHeader,
  Label,
  LiveNameInput,
  SaveContentFooter,
  OptionButtonSalvar,
  OptionButtonCancel,
} from "../styles/components/Save";

const SaveComponent: React.FC = () => {
  return (
    <SaveContainer>
      <SaveContent>
        <SaveContentHeader>
          <Label>Título da live</Label>
          <LiveNameInput id="liveNameInput" />
        </SaveContentHeader>
        <SaveContentFooter>
          <OptionButtonSalvar>Salvar</OptionButtonSalvar>
          <OptionButtonCancel>Cancelar</OptionButtonCancel>
        </SaveContentFooter>
      </SaveContent>
    </SaveContainer>
  );
};

export default SaveComponent;
