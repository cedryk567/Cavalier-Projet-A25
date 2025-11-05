import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 0.8rem;
  color: #f1f1f1;
`;

const EventDot = styled.div`
  width: 0.4rem;
  height: 1.2rem;
  border-radius: 1rem;
  background-color: ${({ color }) => color || "#4CC9F0"};
  flex-shrink: 0;
`;

const EventText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EventItem = ({ titre, color }) => {
  return (
    <EventContainer>
      <EventDot color={color} />
      <EventText>{titre}</EventText>
    </EventContainer>
  );
};
