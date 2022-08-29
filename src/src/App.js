import './App.css'
import CountryAll from './components/CountryAll';
import SearchCountry from './components/SearchCountry';
import SelectCountry from './components/SelectCountry';


function App() {
  return (
    <>
    <header className="header">
      <p>Where in the world?</p>
    </header>
    <section className='section'>

    <SearchCountry />
    <CountryAll />
    </section>
    
    <SelectCountry />
    </>
  );
}

export default App