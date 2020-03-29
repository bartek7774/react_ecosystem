import React from "react";
import styled from 'styled-components';



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
  font-size: ${props => props.theme.fontSizes.sm}
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

const TodoListItem = ({ className, todo, onRemovePressed, onTogglePressed }) => (
  <div className={className}>
    <BodyText as='h1' style={{textDecoration:todo.isCompleted?'line-through':''}}>{todo.text}</BodyText>
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
  </div>
);

const TodoListItemStyled=styled(TodoListItem)`
  color: ${props=>!props.isCompleted?'red':'blue'}
`;

export default TodoListItemStyled;
