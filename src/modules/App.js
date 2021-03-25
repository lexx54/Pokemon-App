import React from "react";
import Pokemon from "./pokemon/";
import Header from "./header";
import "./app.css";




const App = () =>
    (
      <div>
          <Header />
        <main className="principal-page">
          <Pokemon />
          <Pokemon />
        </main>
      </div>
    )

export default App;
