import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="smile" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by DiJonnae and{" "}
            <a
              href="https://github.com/dijneal/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open sourced{" "}
            </a>{" "}
            on GitHub
          </small>
        </footer>
      </div>
    </div>
  );
}
