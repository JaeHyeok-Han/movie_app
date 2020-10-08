import React from 'react';

function Food(props) {
  return <div>
      <h1>I love {props.fav}</h1>
      <h3>descript: {props.des}</h3>
    </div>
}

const myfood = [{name: "A", descript: "A is a"}, {name: "B", descript: "B is b"}, {name: "C", descript: "C is c"}];

function App() {
  return (
    <div>
      {myfood.map(function(current) {return <Food fav={current.name} des={current.descript}/>})}
    </div>
  );
}

export default App;
