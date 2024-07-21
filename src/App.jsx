import "./App.css";
import LoginFormAction from "./components/login-form-action";
import LoginOld from "./components/login-old";
import LoginReact19 from "./components/login-use-action-state";

function App() {
  return (
    <main>
      <LoginOld />
      <hr />
      <LoginFormAction />
      <hr />
      <LoginReact19 />
    </main>
  );
}

export default App;