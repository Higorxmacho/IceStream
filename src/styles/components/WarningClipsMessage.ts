import styled from "styled-components";
import { OptionButtonSalvar } from "./Save";

export const WarningContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.9rem);
  width: 100vw;
  height: 100vh;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(52, 52, 52, 0.64) 0%,
    rgba(52, 52, 52, 0.2176) 100%
  );
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  max-width: 42rem;
  max-height: 20rem;
  padding: 1rem 2.5rem;
  justify-content: space-evenly;
`;
export const Title = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  max-width: 100%;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const DashEffect = styled.span`
  background: #ff2e00;
  box-shadow: 0px 0px 2.5rem 0.2rem #e30000;
  position: absolute;
  border-radius: 0.1rem;
  width: 0.5rem;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
export const DescriptionText = styled.p`
  font-family: Kanit;
  padding: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6em;
  width: 100%;
  line-height: 110%;
  color: #ff3124;
  max-width: 100%;
  overflow-wrap: break-word;
  background: linear-gradient(
    90deg,
    rgba(235, 18, 18, 0.16) 2.91%,
    rgba(235, 18, 18, 0.0496) 111.38%
  );
  border-radius: 0.4rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1.5rem;
  width: 100%;
`;
export const SaveButton = styled(OptionButtonSalvar)``;
export const CancelButton = styled(SaveButton)``;
