import React, { useState } from "react";


let random = Math.round(Math.random() * 100);

const PickingNumber = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");

  const onClick = () => {
    const userNumber = parseInt(value, setValue);

   
    setResults(<div class="jumbotron jumbotron-fluid jtbg">
    <div class="container">
      <h1 class="display-4 text-secondary"><em>Pick a number</em></h1>
    </div>
  </div>);

    if (userNumber === random){
    setResults(<div class="jumbotron jumbotron-fluid jtbg">
    <div class="container">
      <h1 class="display-4 text-secondary"><em>You've Made It !</em></h1>
    </div>
  </div>);
    };

  if (userNumber > random && (userNumber-random) > 10){
    setResults(<div class="jumbotron jumbotron-fluid jtbg">
    <div class="container">
      <h1 class="display-4 text-secondary"><em>Your guess is too far </em></h1>
      <p class="lead text-secondary"><em>Try a lower number!</em></p>
    </div>
  </div>);
  };

if (userNumber > random && (userNumber-random) <= 10){
setResults(<div class="jumbotron jumbotron-fluid jtbg">
<div class="container">
<h1 class="display-4 text-secondary"><em>You're so close!</em></h1>
<p class="lead text-secondary"><em>Try a lower number</em></p>
</div>
</div>);
};

 
if (random > userNumber && (random-userNumber) > 10){
setResults(<div class="jumbotron jumbotron-fluid jtbg">
<div class="container">
<h1 class="display-4 text-secondary"><em>Your guess is too far</em> </h1>
<p class="lead text-secondary"><em>Try a higher number!</em></p>
</div>
</div>);
};

if (random > userNumber && (random-userNumber) <= 10){
setResults(<div class="jumbotron jumbotron-fluid jtbg">
<div class="container">
<h1 class="display-4 text-secondary"><em>You're so close!</em></h1>
<p class="lead text-secondary"><em>Try a higher number!</em></p>
</div>
</div>); 
};

  };

  return (
    <>
      <div className="container">
      <div  className="jumbotron m-5 jtbg" >
        <h1 className="mb-5 text-secondary"><em>Welcome To The Guessing Game</em></h1>
        <h6 class="text-secondary"><em>Guess a number between 1 and 100</em></h6>
        <input
        value={value}
        type="number"
        onChange={e => setValue(e.target.value)}
      />
      <br /><br />
      <button type="submit" class="btn btn-primary" onClick={onClick}>
        GUESS
      </button>
      </div>
    </div>
      
      <br />
      <br />
      {results}
    </>
  );
};

export default PickingNumber;