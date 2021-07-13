import styled from "styled-components";

export const SaveContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveContent = styled.div`
  width: 42.1rem;
  height: 14.3rem;

  background: linear-gradient(
    180deg,
    rgba(52, 52, 52, 0.64) 0%,
    rgba(52, 52, 52, 0.5696) 100%
  );
  border-radius: 5px;
  padding: 1.5rem 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const SaveContentHeader = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Label = styled.label`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3.3rem;
  color: #ffffff;
`;

export const LiveNameInput = styled.input`
  outline: none;

  width: 19rem;
  height: 2.7rem;
  padding-left: 1rem;
  background: #454545;
  border-radius: 5px;
  align-self: center;

  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  color: #ffffff;
`;

export const SaveContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const OptionButtonSalvar = styled.button`
  width: 10.8rem;
  height: 3.6rem;

  background: #454545;
  border-radius: 5px;

  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  color: #ffffff;

  cursor: pointer;
`;

export const OptionButtonCancel = styled(OptionButtonSalvar)``;
