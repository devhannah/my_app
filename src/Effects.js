//- import Button from "./Button";
import { useState, useEffect} from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);  
  const [keyword, setKeyword] = useState("");
  const onClick = ()=>{
    setValue((prev)=> prev+1);
  }
  const onChange = (e) => {
    setKeyword(e.target.value);
  }
  useEffect(()=>{
    console.log('I run only once.');
  }, [])
  // render가 2번 나타나는 현상이 있는데 index.js에서 React.StrictMode tag에 감싸져 있으면, 
  // 자손까지 검사하기 때문에 두 번 실행이 된다고 함 == create-react-app으로 설치했을 때 기본적으로 생성되는 태그
  useEffect(()=>{
    console.log("I run when 'counter' changes.")
  }, [counter]);
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  return (
   <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
   </div>
  );
}

export default App;
