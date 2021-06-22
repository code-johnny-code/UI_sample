import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [cultivoUserId, setCultivoUserId] = useState("bd995496-c475-4307-9efc-7ded22676e03")
  const [cultivoToken, setCultivoToken] = useState("84f5acde-10ad-4341-90b1-2f9e1821d106")
  const [paymentMethods, setPaymentMethods] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/methods', {
      headers: {
        "authorization": cultivoToken
      },
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(fetchedMethods => setPaymentMethods(fetchedMethods))
  }, [])

  return (
    <div className="App">
      {paymentMethods.map(method => {
        return <p>{method}</p>
      })}
    </div>
  );
}

export default App;
