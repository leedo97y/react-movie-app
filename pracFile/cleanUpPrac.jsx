import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created!");
    return () => {
      console.log("destroyed!");
    };
  }, []);
  return <h1>Hello</h1>;
}
// CleanUp function 이라고 하며,
// useEffect에서 부분적으로 반복될 코드를 작성한 뒤, return 뒤에 함수를 작성해서 만들어준다.

// 위의 경우는 hello 함수의 showing state가 true이면 created!라는 텍스트를 출력해주며,
// hello 함수의 showing state가 false이면 destroyed!라는 텍스트를 출력해준다.
// 크게 많이 쓰이는 편은 아니지만, 실행방식을 이해하는 것이 중요함.

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;
