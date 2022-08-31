import React from "react";

import './main.css'
import SearchCountry from "../../components/SearchCountry"
import CountryAll from "../../components/CountryAll"
import Header from "../../components/Header";

function Main() {
  return (
    <>
    <Header />
    <section className='section'>

    <SearchCountry />
    <CountryAll />
    </section>
    </>
  );
}

export default Main