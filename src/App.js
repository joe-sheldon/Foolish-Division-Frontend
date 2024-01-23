import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [isServerUp, setServerUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    handleRequest()
  }, [])

  const handleRequest = () => {
    setIsLoading(true)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.foolish-division.com/api/status/ok/')
    xhr.onload = () => {
      if(xhr.status === 200) {
        setServerUp(true)
      } else {
        setServerUp(false)
      }
      setIsLoading(false)
    }
    xhr.send()
  }

  const BackendStatus = (isBackendUp) => {
    if (isLoading) {
      return <p>Checking on Backend...</p>
    }
    else if (isBackendUp) {
      return (
          <p>Backend is UP!</p>
      )
    }

    return (<p>Backend is DOWN!</p>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          In our opinion, Splitwise got greedy. We're starting this to provide a free, open source alternative for shared expenses.
        </p>
        <a
          className="App-link"
          href="https://github.com/kb3vwt/Foolish-Division"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <BackendStatus isBackendUp={isServerUp}/>
      </header>
    </div>
  );
}

export default App;
