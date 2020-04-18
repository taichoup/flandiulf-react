import React, { useState } from "react";
import { Results } from "./Results";
import "./App.css";
import data from "./data/astrodump.json";

function App() {
  const [sign, setSign] = useState("balance");
  const [category, setCategory] = useState("sante");
  const [showResults, setShowResults] = useState(false);

  // function handleSignChange(event) {
  //   setSign(event.target.value);
  // }

  // function handleCategoryChange(event) {
  //   setCategory(event.target.value);
  // }

  function handleUserInputChange(event) {
    setShowResults(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur Flandiulf, une expérience méta-astrologique.</h1>
      </header>
      <form id="signsForm" className="pure-form pure-form-aligned">
        <div className="pure-control-group">
          <label for="select_sign">Signe astrologique :</label>
          <select id="select_sign" onChange={handleUserInputChange}>
            <option value="balance">Balance</option>
            <option value="scorpion">Scorpion</option>
            <option value="gemeaux">G&eacute;meaux</option>
            <option value="verseau">Verseau</option>
            <option value="belier">B&eacute;lier</option>
            <option value="taureau">Taureau</option>
            <option value="lion">Lion</option>
            <option value="cancer">Cancer</option>
            <option value="sagittaire">Sagittaire</option>
            <option value="capricorne">Capricorne</option>
            <option value="poissons">Poissons</option>
            <option value="vierge">Vierge</option>
          </select>
        </div>

        <div className="pure-control-group">
          <label for="select_cat">Catégorie :</label>
          <select id="select_cat" onChange={handleUserInputChange}>
            <option value="sante">Sant&eacute;</option>
            <option value="travail">Travail</option>
            <option value="argent">Argent</option>
            <option value="amour">Amour</option>
          </select>
        </div>

        <div className="pure-controls">
          <button
            id="formButton"
            type="button"
            className="pure-button pure-button-primary"
            onClick={() => {
              setSign(document.getElementById("select_sign").value);
              setCategory(document.getElementById("select_cat").value);
              setShowResults(true);
            }}
          >
            Envoyer
          </button>
        </div>
      </form>

      {showResults ? (
        <Results
          crawl={data.filter(
            (item) => item.sign === sign && item.category === category
          )}
          sign={sign}
          category={category}
        />
      ) : null}

      {/* <button id="cloud-button" onclick="go_cloud();" class="btn btn-info">
            Generate tag cloud
          </button> */}

      {/* <div id="cloud-wrapper"></div> */}
    </div>
  );
}

export default App;
