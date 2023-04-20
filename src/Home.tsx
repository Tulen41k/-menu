import React from 'react';
import  './css/Home.css';

function Home() {
  return (
    <body className='home-body'>
    <div className="home">
      <header className="home-header">
      </header>
      <h1 className='home-title'>Наше меню</h1>
      <span className='home-category'>
        <span className='category'>
          <h2 className='category-title'>Завтраки</h2>
          <img src='https://i.pinimg.com/564x/32/b7/a8/32b7a8ac3f7f0f1c529c52538ecb9659.jpg' className='category-picture'></img>
        </span>
        <span className='category'>
          <h2 className='category-title'>Обеды</h2>
          <img src='https://i.pinimg.com/564x/0b/8b/c0/0b8bc0a25937f18f83224ba259bc6d5c.jpg' className='category-picture'></img>
        </span>
        <span className='category'>
          <h2 className='category-title'>Ужины</h2>
          <img src='https://i.pinimg.com/564x/24/89/63/2489636c1962cc2b2cf579e76b5311ea.jpg' className='category-picture'></img>
        </span>
      </span>
      <span className='home-category'>
        <span className='category'>
          <h2 className='category-title'>Напитки</h2>
          <img src='https://i.pinimg.com/564x/39/23/b9/3923b9472b849c5d7d9434151d33f373.jpg' className='category-picture'></img>
        </span>
        <span className='category'>
          <h2 className='category-title'>Выпечка</h2>
          <img src='https://i.pinimg.com/564x/4a/f1/a0/4af1a0d4e42d20078ab1d84005fee235.jpg' className='category-picture'></img>
        </span>
        <span className='category'>
          <h2 className='category-title'>Закуски</h2>
          <img src='https://i.pinimg.com/564x/f4/35/eb/f435eb1e8e936c58b3b1a7fa5aca5a4a.jpg' className='category-picture'></img>
        </span>
      </span>
    </div>
    </body>
  );
}

export default Home;
