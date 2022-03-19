import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '리엑트로 블로그 만들기';
  function 함수() {
    return 100;
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>Dev Blog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;