/*eslint-disable*/
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '부산 국밥 맛집']);
  let [like, likeChange] = useState(0);

  function titleBtn() {
    let newArray = [...title]; // deep copy [...stateName]
    newArray[0] = '여자 코트 추천'; // edit element
    titleChange(newArray); // update state
  }
  
  return (
    <div className="App">

      <div className='black-nav'>
        <div>Dev Blog</div>
      </div>
      <button onClick={ titleBtn }>버튼</button>
      <div className='list'>
        <h3> { title[0] } <span onClick={ ()=>{ likeChange(like+1) } }>👍</span> { like } </h3>
        <p>2022.03.25 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> { title[1] } </h3>
        <p>2022.03.26 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3> { title[2] } </h3>
        <p>2022.03.27 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;