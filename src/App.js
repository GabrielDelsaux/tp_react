import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="form">
        <h1 id="text">Bienvenue sur le site de connexion</h1>
        <input type="text" id="input" placeholder="Nom d'utilisateur" />
        <input type="text" id="input" placeholder="Mot de passe" />
        <button id="button">S'inscrire</button>
        <button id="button">Se connecter</button>
      </div>
    </div>
  );
}

export default App;
