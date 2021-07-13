import React from "react";
// import Select from "react-select";

import {
  FiClock as ClockIcon,
  FiPlus as PlusIcon,
  FiEdit as EditIcon,
  FiTrash as TrashIcon,
} from "react-icons/fi";
import {
  NotifierContainer,
  NotifierHeaderContainer,
  NotifierTitleContainer,
  NotifierClock,
  NotifierTitle,
  NotifierMainContent,
  AddReminder,
  AddReminderInputs,
  TitleInput,
  DescriptionInput,
  ReminderType,
  ReminderTypes,
  ReminderTime,
  AddReminderButtonContainer,
  AddReminderButton,
  RemindersList,
  ReminderItem,
  ReminderItemTexts,
  ReminderItemTitle,
  ReminderTextInputsContainer,
  ReminderTimeInputsContainer,
  ReminderItemDescription,
  ReminderTimeContainer,
  ReminderItemTimeContainer,
  ReminderItemTime,
  ReminderTimeUnitOfTime,
  ReminderTimeUnitOfTimeContainer,
  ReminderItemTimePrefix,
  ReminderItemButtons,
  EditButton,
  DeleteButton,
} from "../styles/components/Notifier";

const NotifierConfig: React.FC = () => {
  return (
    <NotifierContainer>
      <NotifierHeaderContainer>
        <NotifierTitleContainer>
          <NotifierClock>
            <ClockIcon />
          </NotifierClock>
          <NotifierTitle>Alarms</NotifierTitle>
        </NotifierTitleContainer>
      </NotifierHeaderContainer>
      <NotifierMainContent>
        <AddReminder>
          <AddReminderInputs>
            <ReminderTextInputsContainer>
              <TitleInput placeholder="Title" />
              <DescriptionInput placeholder="Description" />
            </ReminderTextInputsContainer>
            <ReminderTimeInputsContainer>
              <ReminderType>
                <ReminderTypes value="time">Time</ReminderTypes>
                <ReminderTypes value="period">Period</ReminderTypes>
              </ReminderType>

              <ReminderTimeContainer>
                <ReminderTime placeholder="30" />
                <ReminderTimeUnitOfTimeContainer>
                  <ReminderTimeUnitOfTime>min</ReminderTimeUnitOfTime>
                </ReminderTimeUnitOfTimeContainer>
              </ReminderTimeContainer>
            </ReminderTimeInputsContainer>
          </AddReminderInputs>
          <AddReminderButtonContainer>
            <AddReminderButton>
              <PlusIcon />
            </AddReminderButton>
          </AddReminderButtonContainer>
        </AddReminder>
        <RemindersList>
          <ReminderItem>
            <ReminderItemTexts>
              <ReminderItemTitle>Almoço</ReminderItemTitle>
              <ReminderItemDescription>
                Vo almoçar na casa de vó hj kkk
              </ReminderItemDescription>
            </ReminderItemTexts>
            <ReminderItemTimeContainer>
              <ReminderItemTimePrefix>Hour</ReminderItemTimePrefix>
              <ReminderItemTime>12:00</ReminderItemTime>
            </ReminderItemTimeContainer>
            <ReminderItemButtons>
              <EditButton>
                <EditIcon />
              </EditButton>
              <DeleteButton>
                <TrashIcon />
              </DeleteButton>
            </ReminderItemButtons>
          </ReminderItem>
          <ReminderItem>
            <ReminderItemTexts>
              <ReminderItemTitle>Almoço</ReminderItemTitle>
              <ReminderItemDescription>
                Vo almoçar na casa de vó hj kkk
              </ReminderItemDescription>
            </ReminderItemTexts>
            <ReminderItemTimeContainer>
              <ReminderItemTimePrefix>Hour</ReminderItemTimePrefix>
              <ReminderItemTime>12:00</ReminderItemTime>
            </ReminderItemTimeContainer>
            <ReminderItemButtons>
              <EditButton>
                <EditIcon />
              </EditButton>
              <DeleteButton>
                <TrashIcon />
              </DeleteButton>
            </ReminderItemButtons>
          </ReminderItem>
          <ReminderItem>
            <ReminderItemTexts>
              <ReminderItemTitle>Almoço</ReminderItemTitle>
              <ReminderItemDescription>
                Vo almoçar na casa de vó hj kkk
              </ReminderItemDescription>
            </ReminderItemTexts>
            <ReminderItemTimeContainer>
              <ReminderItemTimePrefix>Hour</ReminderItemTimePrefix>
              <ReminderItemTime>12:00</ReminderItemTime>
            </ReminderItemTimeContainer>
            <ReminderItemButtons>
              <EditButton>
                <EditIcon />
              </EditButton>
              <DeleteButton>
                <TrashIcon />
              </DeleteButton>
            </ReminderItemButtons>
          </ReminderItem>
        </RemindersList>
      </NotifierMainContent>
    </NotifierContainer>
  );
};

export default NotifierConfig;
