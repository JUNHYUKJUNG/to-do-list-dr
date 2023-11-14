import { useState } from "react";

const ClearTodoList = () => {
  const [isCleared, setIsCleared] = useState(false);

  const onLoad = () => {
    localStorage.removeItem("todos");
    setIsCleared(true);
  };

  return <div>{isCleared && <div>할 일 목록이 모두 지워졌습니다.</div>}</div>;
};

export default ClearTodoList;

/* 얘는 나중에 고쳐보도록 하자*/
