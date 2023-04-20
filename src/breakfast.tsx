import React from 'react';
import  './css/Breacfast.css';
import MEALS from './Data';

const breacfastMeals = MEALS.filter(IFood => IFood.category === 'завтрак');

function Breacfast() {
  return (
    <body>
        <div className='breacfast'>
            <header className='br-header'></header>
            <h1 className='br-title'>Завтрак</h1>
        </div>
    </body>
  );
}

export default Breacfast;