import React, { useEffect, useState } from "react";
import { Cases, Clients, Footer, Header } from "./components";

const App = () => {
  const url = "./data";
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        {data && <Cases data={data} />}

        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default App;
