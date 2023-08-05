import React from "react";
import NavSection from "./components/NavSection";
import Header from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import StatisticsSection from "./components/StatisticsSection";
import LinkSection from "./components/LinkSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <NavSection />
      <Header />
      <main>
        <InputSection />
        <StatisticsSection />
        <LinkSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
