import "./App.css";
import Useeffect from "./Useeffect";
import Usestate from "./Usestate";

function App() {
  // HOOKS:  Hooks in react enable functional components to use state and lifecycle fetures.
  // LIFECYCLE: Mount, Updating, Unmount.

  return (
    <>
      <h1>Recat Hooks : </h1>
      <Usestate />
      <Useeffect />
    </>
  );
}

export default App;
