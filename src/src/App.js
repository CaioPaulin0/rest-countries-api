import './App.css'
import CountryAll from './components/CountryAll';
import SearchCountry from './components/SearchCountry';

function App() {
  return (
    <>
    <header className="header">
      <p>Where in the world?</p>
    </header>
    <section>

    <SearchCountry />
    <CountryAll />
    </section>
    </>
  );
}

export default App