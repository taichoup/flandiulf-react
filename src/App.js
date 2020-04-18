import React from "react";
import { _Store } from "./Store";
import StoreContext from "./StoreContext";
import { Results } from "./Results";
import "./App.css";
import data from "./data/astrodump.json";

function handleSignChange(event) {
  _Store.dispatch({ type: "SIGN", payload: event.target.value });
}

function handleCategoryChange(event) {
  _Store.dispatch({ type: "CATEGORY", payload: event.target.value });
}

function handleTest(event) {
  _Store.dispatch({ type: "TEST", payload: event.target.value });
}

// _Store.getState().crawl = data;
_Store.dispatch({ type: "CRAWL_RESULTS", payload: data });

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
              <select id="select_sign" onChange={handleSignChange}>
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
              <select id="select_cat" onChange={handleCategoryChange}>
                <option value="sante">Sant&eacute;</option>
                <option value="travail">Travail</option>
                <option value="argent">Argent</option>
                <option value="amour">Amour</option>
              </select>
            </div>

            <div className="pure-control-group">
              <label for="test">Test input :</label>
              <input type="text" id="test" onChange={handleTest} />
            </div>

            <div className="pure-controls">
              <button
                id="formButton"
                type="button"
                className="pure-button pure-button-primary"
                onClick={() =>
                  console.log(
                    "Sign is %s and Cat is %s",
                    _Store.getState().sign,
                    _Store.getState().category
                  )
                }
              >
                Envoyer
              </button>
            </div>
          </form>

          <Results
            crawl={_Store
              .getState()
              .crawl.filter(
                (item) =>
                  item.sign === _Store.getState().sign &&
                  item.category === _Store.getState().category
              )}
            sign={_Store.getState().sign}
            category={_Store.getState().category}
          />

          {/* <button id="cloud-button" onclick="go_cloud();" class="btn btn-info">
            Generate tag cloud
          </button> */}

          {/* <div id="cloud-wrapper"></div> */}
        </div>
      )}
    </StoreContext.Consumer>
  );
}

export default App;
