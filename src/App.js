import Nav from "./components/nav/Nav";
import Main from "./components/pages/Main";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <>
      <NavProvider>
        <Nav />

        <Main />
      </NavProvider>
    </>
  );
}

export default App;
