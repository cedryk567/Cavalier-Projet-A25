import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

const EventDot = styled.div`
  width: 0.4rem;
  height: 1.2rem;
  border-radius: 1rem;
  background-color: ${({ color }) => color || "#4CC9F0"};
  flex-shrink: 0;
`;

const EventText = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8rem;
`;

export const EventItem = ({ titre, color }) => {
  return (
    <EventContainer>
      <EventDot color={color} />
      <EventText>{titre}</EventText>
    </EventContainer>
  );
};
