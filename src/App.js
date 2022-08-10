import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time..");
  useEffect(() => {
    console.log("call the API ..");
  }, []);
  // 여기서는 리액트가 따로 지켜볼 코드가 없기때문에 한번만 실행된다.
  useEffect(() => {
    console.log("Search for", keyword);
  }, [keyword]);
  // if keyword change, console code execute
  // 특정 부분이 변화할때 이 코드를 실행하고 싶다면,
  // {} 부분에 실행시킬 코드를 적고, 변화하는 부분을 []안에 넣어주면 된다.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
