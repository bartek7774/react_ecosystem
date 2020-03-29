import React from "react";
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
    (startingDate > new Date(currentDate - 86400000 * 5)
    ? 'none'
    : '2px solid red');

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '6px solid red')};
`;

const DefaultButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 15px;
  background-color: orange; 
  &:hover{
    cursor: pointer;
  }
`;

const FancyButton = styled(DefaultButton)`
  background-color: red; 
`

const BodyText = styled.p`
  color:${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  border:${props => /\s+/ig.test(props.text)?'1px solid red':'none'};
`;

const Link = styled.a`
  color: purple;
`;
  
const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ghostwhite;
  ${Link}:hover & {
    background-color: red;
  }
`;

const TodoListItem = ({ todo, onRemovePressed, onTogglePressed }) =>{ 
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
    <BodyText as='h1' text={todo.text} style={{textDecoration:todo.isCompleted?'line-through':''}}>{todo.text}</BodyText>
    <Link>{todo.id}    <Icon/></Link>
    <div className="buttons-container">
        <DefaultButton isCompleted={todo.isCompleted}
          onClick={() => onTogglePressed(todo.id)}
        >
          {!todo.isCompleted?"Mark As Completed":"Mark as uncompleted"}
        </DefaultButton>
      <FancyButton 
        onClick={() => onRemovePressed(todo.id)}
      >
        Remove
      </FancyButton>
    </div>
  </Container>
)};

const TodoListItemStyled=styled(TodoListItem)`
  color: ${props=>!props.isCompleted?'red':'blue'}
`;

export default TodoListItemStyled;
