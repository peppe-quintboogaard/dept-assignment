import Header from "./components/Header/HeaderSection";
import Form from "./components/Form/Form";
import CaseList from "./components/CaseList/CaseList";
import ClientList from "./components/ClientList/ClientList";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <main className="container">
      <section className="cases">
        <Form />
        <CaseList />
      </section>
      <section className="clients">
        <h1 className="setion-title">Clients</h1>
        <p className="section-paragraph">
          We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
        </p>
        <ClientList />
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
