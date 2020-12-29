import React, { useEffect, useState } from "react";
import { Cases, Clients, Footer, Header } from "./components";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async (res) => {
      if (res.status !== 200) {
        setData("Error");
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
};

const App = () => {
  const [data] = useFetch("/data");
  console.log(data);

  return (
    <>
      <Header />
      <main className="container">
        <Cases />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default App;
