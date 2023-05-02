import React, {useEffect, useState} from 'react';
import  './css/list.css';
import MEALS from './Data';
import {selectedCategory} from "./Home";
import {Link} from "react-router-dom";

const selectMeals = MEALS.filter(IFood => IFood.category === selectedCategory);
export let selectedMeal = '';
const [sMeal, setMeal] = useState('');

useEffect(() => {
    selectedMeal = sMeal;
}, [selectedMeal, sMeal]);

export default function CategoryMeal() {
    return (
        <body>
        <div className='cover'>
            <header className='co-header'></header>
            <h1 className='co-title'>{selectedCategory}</h1>
            {selectMeals.map((meal) => (
                <Link to="/meal" className='mealBlock'
                      onClick = { () => setMeal(meal.name)}>
                    <h3 className='mealName'>{meal.name}</h3>
                    <div className='mealHeader'>
                        <img src={meal.image} alt='изображение блюда'></img>
                        <div className='mealInfo'>
                             <p className='time'>{meal.time}</p>
                            <ul>
                            {meal.ingredients.map((ingr)=>(
                                <li>
                                    <p className='ingridient'>{ingr.ing}</p>
                                    <p className='coll'>{ingr.koll}</p>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </body>
    );
}