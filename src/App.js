import './App.css';

function App() {
  const title= "Welcome Again";
  const name= "Farid";
  const age= 25;
  const famiyMember=["Farnoosh","Freidoon","Maryam"]
  const googleLink='http://www.google.com';
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {title}
        </p>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{famiyMember}</p>
        <a href={googleLink}>Google</a>
      </header>
    </div>
  );
}

export default App;
