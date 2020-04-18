import React from "react";
import StoreContext from "./StoreContext";
import { Results } from "./Results";
import "./App.css";

function App() {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Flandiulf, une expérience méta-astrologique.</h1>
          </header>
          <form id="signsForm" className="pure-form pure-form-aligned">
            <div className="pure-control-group">
              <label for="select_sign">Signe astrologique :</label>
              <select id="select_sign">
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
              <label for="select_cat">Cat&eacute;gorie :</label>
              <select id="select_cat">
                <option value="sante">Sant&eacute;</option>
                <option value="travail">Travail</option>
                <option value="argent">Argent</option>
                <option value="amour">Amour</option>
              </select>

              <div className="pure-controls">
                <button
                  id="formButton"
                  type="button"
                  className="pure-button pure-button-primary"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>

          <Results />

          <button id="cloud-button" onclick="go_cloud();" class="btn btn-info">
            Generate tag cloud
          </button>

          <div id="cloud-wrapper"></div>
        </div>
      )}
    </StoreContext.Consumer>
  );
}

export default App;
