import { useState, useEffect } from "react";
// 작성한 코드에 한번만 쓰고 싶은 코드와 여러번 쓸 수 있는 코드가 있을 텐데
// useEffect를 이용하면 이를 구분해 줄 수 있다.

function AppPrac() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once.");
  }, []);
  // 여기서는 리액트가 따로 지켜볼 코드가 없기때문에 한번만 실행된다.
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  // if keyword changes, console code executed
  // 특정 부분이 변화할때 이 코드를 실행하고 싶다면,
  // {} 부분에 실행시킬 코드를 적고, 변화하는 부분을 []안에 넣어주면 된다.

  // [] = dependency
  // [] is empty, it will be execute once
  // if [] is [value] for example, it will be execute when value is change
  // if [] is [value, counter] for example, it will be execute when value, counter is change

  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.");
  }, [keyword, counter]);

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

export default AppPrac;
