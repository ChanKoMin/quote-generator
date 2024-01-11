import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState({});
  useEffect(() => {
    getAdvice();
  }, []);
  const getAdvice = async () => {
    const api = await fetch("https://dummyjson.com/quotes/random");
    const data = await api.json();
    setAdvice(data);
  };
  return (
    <div className="container-fluid background vh-100 position-relative">
      <div className="card bgcolor w-25 p-5 position-absolute top-50 start-50 translate-middle">
        <blockquote className="blockquote">
          <h1>{`" ${advice.quote} "`}</h1>
          <h5 className="blockquote-footer text-end my-4">{advice.author}</h5>
        </blockquote>
        <button className="btn btn-primary w-50 mx-auto" onClick={getAdvice}>
          New Quote
        </button>
      </div>
    </div>
  );
};
export default App;
