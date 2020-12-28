import { Cases, Clients, Footer, Header } from "./components";

const App = () => (
  <>
    <Header />
    <main classNam="container">
      <Cases />
      <Clients />
    </main>
    <Footer />
  </>
);

export default App;
