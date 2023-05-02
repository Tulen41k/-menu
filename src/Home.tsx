import React, { useCallback, useEffect, useState } from 'react';
import  './css/Home.css';
import {Link} from "react-router-dom";

const categoryTipes = {
  Breakfast: 'breakfast',
  Dinner: 'dinner',
  Lunch: 'lunch',
  Drinks: 'drink',
  Snacks: 'snack',
  Bakery: 'bakery'
};

const Category = {
  breakfast: 'завтрак',
  dinner: 'ужин',
  lunch: 'обед',
  drinks: 'напитки',
  snacks: 'снеки',
  bakery: 'выпечка'
};

export let selectedCategory = '';
useEffect(() => {
  switch (category) {
    case categoryTipes.Breakfast:
      selectedCategory = Category.breakfast;
      break;
    case categoryTipes.Dinner:
      selectedCategory = Category.dinner;
      break;
    case categoryTipes.Lunch:
      selectedCategory = Category.lunch;
      break;
    case categoryTipes.Drinks:
      selectedCategory = Category.drinks;
      break;
    case categoryTipes.Snacks:
      selectedCategory = Category.snacks;
      break;
    case categoryTipes.Bakery:
      selectedCategory = Category.bakery;
      break;
    default:
      break;
  }
}, [categoryTipes, selectedCategory, Category]);


const [category, setCategory] = useState('');
function Home() {
  return (
    <body className='home-body'>
    <div className="home">
      <header className="home-header">
      </header>
      <h1 className='home-title'>Наше меню</h1>
      <span className='home-category'>
        <Link to="/breakfast" className='category'
              onClick = { () => setCategory(categoryTipes.Breakfast)}
        >
          <h2 className='category-title'>Завтраки</h2>
          <img src='https://i.pinimg.com/564x/32/b7/a8/32b7a8ac3f7f0f1c529c52538ecb9659.jpg' className='category-picture' alt='Изображение завтрака'></img>
        </Link>
        <Link to="/lunch" className='category'
          onClick = { () => setCategory(categoryTipes.Lunch)}
        >
          <h2 className='category-title'>Обеды</h2>
          <img src='https://i.pinimg.com/564x/0b/8b/c0/0b8bc0a25937f18f83224ba259bc6d5c.jpg' className='category-picture' alt='Изображение обеда'></img>
        </Link>
        <Link to="/dinner" className='category'
              onClick = { () => setCategory(categoryTipes.Dinner)}
        >
          <h2 className='category-title'>Ужины</h2>
          <img src='https://i.pinimg.com/564x/24/89/63/2489636c1962cc2b2cf579e76b5311ea.jpg' className='category-picture' alt='Изобржение ужина'></img>
        </Link>
      </span>
      <span className='home-category'>
        <Link to="/drink" className='category'
              onClick = { () => setCategory(categoryTipes.Drinks)}
        >
          <h2 className='category-title'>Напитки</h2>
          <img src='https://i.pinimg.com/564x/39/23/b9/3923b9472b849c5d7d9434151d33f373.jpg' className='category-picture' alt='Изображение напитков'></img>
        </Link>
        <Link to="/bakery" className='category'
              onClick = { () => setCategory(categoryTipes.Bakery)}
        >
          <h2 className='category-title'>Выпечка</h2>
          <img src='https://i.pinimg.com/564x/4a/f1/a0/4af1a0d4e42d20078ab1d84005fee235.jpg' className='category-picture' alt='Изображение выпечки'></img>
        </Link>
        <Link to="/snacks" className='category'
              onClick = { () => setCategory(categoryTipes.Snacks)}
        >
          <h2 className='category-title'>Закуски</h2>
          <img src='https://i.pinimg.com/564x/f4/35/eb/f435eb1e8e936c58b3b1a7fa5aca5a4a.jpg' className='category-picture' alt='Изображение закусок'></img>
        </Link>
      </span>
    </div>
    </body>
  );
}

export default Home;
