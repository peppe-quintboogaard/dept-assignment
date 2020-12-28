import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import CaseList from "./components/CaseList/CaseList";
import ClientList from "./components/ClientList/ClientList";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <section className="cases">
        <Form />
        <CaseList />
      </section>
      <ClientList />
    </main>
    <Footer />
  </div>
);

export default App;
