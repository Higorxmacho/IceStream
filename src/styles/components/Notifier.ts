import styled, { keyframes } from "styled-components";

const openContainerAnimation = keyframes`
  0% {
    transform: translateX(-3%);
    opacity: 0;
  }

  100% {
    
    transform: translateX(0%);
    opacity: 1;

  }
`;

export const NotifierContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 108rem;
  align-items: center;
  margin-top: 5rem;
  animation: ${openContainerAnimation} 0.2s ease-in-out;
`;

export const NotifierHeaderContainer = styled.div`
  width: 100%;
`;
export const NotifierTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const NotifierClock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
`;
export const NotifierTitle = styled.div`
  margin-top: -1rem;
  font-family: Kanit, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5rem;
`;
export const NotifierMainContent = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  padding: 2rem 3rem;

  backdrop-filter: blur(12px);

  border-radius: 17px;
`;
export const AddReminder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;
export const AddReminderInputs = styled.div`
  width: 100%;
  display: flex;
`;
export const TitleInput = styled.input`
  background: #434343;
  border-radius: 7px;
  width: 100%;
  max-width: 25.1rem;
  height: 4.3rem;
  font-size: 2.1rem;
  padding: 0 1rem;
  font-weight: 700;
  color: white;
  outline: none;

  &::placeholder {
    font-size: 2.1rem;
    font-weight: 700;
  }
`;

export const ReminderTextInputsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 70rem;
  input + input {
    margin-left: 0.8rem;
  }
`;

export const ReminderTimeInputsContainer = styled.div`
  display: flex;
  align-items: center;
  select + div {
    margin-left: 0.5rem;
  }
`;

export const DescriptionInput = styled(TitleInput)`
  max-width: 40rem;
`;

export const ReminderType = styled.select`
  background: #434343;
  border-radius: 0.7rem;
  width: 11rem;
  height: 4.3rem;
  color: white;
  font-family: Kanit, sans-serif;
  font-size: 1.8rem;
  padding: 0 0.5rem;
  outline: none;
  padding-right: 1rem;
`;

export const ReminderTypes = styled.option`
  margin: 4rem;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  text-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.4);
`;

export const ReminderTimeContainer = styled.div`
  position: relative;
  display: flex;
  background: #434343;
  border-radius: 0.7rem;
  height: 4.3rem;
  width: 10rem;

  font-family: Kanit, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;
  line-height: 3.2rem;
`;

export const ReminderTime = styled.input`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 2.1rem;
  padding: 0 0 0 1rem;
  font-weight: 700;
  color: white;
  outline: none;
  height: 100%;
  width: 100%;
  line-height: 2.5rem;
`;

export const ReminderTimeUnitOfTimeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 1.5rem 0 0.1rem;
  align-items: center;
  justify-content: center;
`;

export const ReminderTimeUnitOfTime = styled.span`
  font-size: 2.1rem;
`;

export const AddReminderButtonContainer = styled.div`
  margin-left: 3rem;
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  min-height: 5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddReminderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  svg {
    color: #1bc47d;
    font-size: 3.5rem;
  }
`;
export const RemindersList = styled.ul`
  margin-top: 1rem;
  padding: 1rem 0;
  li + li {
    margin-top: 0.8rem;
  }
`;
export const ReminderItem = styled.li`
  list-style: none;
  display: flex;
  min-height: 4.3rem;
  justify-content: space-between;
  background: rgba(67, 67, 67, 0.2);
  padding: 1.5rem 0;
  border-radius: 0.5rem;
`;
export const ReminderItemTexts = styled.div`
  display: flex;
  width: 100%;
  max-width: 8 0rem;
  span + span {
    margin-left: 1rem;
  }
`;
export const ReminderItemTitle = styled.span`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 7px;
  height: 100%;
  font-family: Kanit, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  max-width: 25rem;
`;
export const ReminderItemDescription = styled(ReminderItemTitle)`
  max-width: 50rem;
`;
export const ReminderItemTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;
  line-height: 3.4rem;
  padding: 0 1rem;

  span + span {
    margin-left: 0.8rem;
  }
`;

export const ReminderItemTime = styled.span``;

export const ReminderItemTimePrefix = styled.span``;

export const ReminderItemButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 10rem;
  justify-content: flex-end;
  margin-right: 0.5rem;

  button + button {
    margin-left: 0.5rem;
  }
`;
export const EditButton = styled.button`
  min-height: 3.5rem;
  min-width: 3.5rem;
  background: rgba(67, 67, 67, 0.35);
  border-radius: 7px;
  cursor: pointer;

  svg {
    color: white;
    font-size: 2rem;
  }
`;
export const DeleteButton = styled(EditButton)``;
