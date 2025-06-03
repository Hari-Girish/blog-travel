import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My previous coding experiences include:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/inspirit.png'
              text='Inspirit AI Scholars Program where we developed a deployable text-based Chatbot '
              label='Artificial Intelligence'
              path='https://www.inspiritai.com/liveonline'
            />
          </ul>
        </div>
      </div>
      <h1>Highschool Programming Classes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/c.jpeg'
              text='Movie Sorting and Library Emulator Project'
              label='Programming Language'
              path='https://cplusplus.com/'
            />
            <CardItem
              src='images/java.png'
              text='Sorting Algorithms, Recursion, Basic knowledge of constructors and data structures'
              label='Programming Language'
              path='https://www.java.com/en/'
            />
            <CardItem
              src='images/react.png'
              text='Mock Instagram Project, Navbar Development, and CincyHacks Hackathon (StudyPlanner)'
              label='Programming Language'
              path='https://reactnative.dev/'
            />
            <CardItem
              src='images/js.png'
              text='Tic-Tac-Toe Project, Mouse and Window Listener Functions'
              label='Programming Language'
              path='https://www.javascript.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
