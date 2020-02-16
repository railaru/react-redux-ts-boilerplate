import React from "react";

interface Props {
  age: number;
  onClick(): void;
}

const App: React.FC<Props> = ({ age, onClick }) => {
  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export { App };
