import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  flex-flow: row nowrap;
  color: white;
  li {
    padding: 18px 30px;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 10px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#events">Upcoming Events</a>
          </li>
          <li>
            <a href="#pastev">Past Events</a>
          </li>
          
          <li>
            <a href="#team">Team</a>
          </li>
          
          <li>
            <a href="#faq">FAQ</a>
          </li>
          
          <li>
            <a href="#queries">Queries</a>
          </li>
        
    </Ul>
  )
}

export default RightNav