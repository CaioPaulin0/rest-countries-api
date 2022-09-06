import React from "react";

import './main.css'
import CountryAll from "../../components/CountryAll"
import Header from "../../components/Header";

function Main() {
  return (
    <>
    <Header />
    <section className='section'>

    <CountryAll />
    </section>
    </>
  );
}

export default Main