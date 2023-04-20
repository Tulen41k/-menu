import React from 'react';
import  './css/list.css';
import MEALS from './Data';

const breacfastMeals = MEALS.filter(IFood => IFood.category === 'завтрак');

function Breacfast() {
  return (
    <body>
        <div className='cover'>
            <header className='co-header'></header>
            <h1 className='co-title'>Завтрак</h1>
        </div>
    </body>
  );
}

export default Breacfast;