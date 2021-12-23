import AppRouter from "./routers/AppRouter";
import { TeamProvider } from "./contexts/TeamProvider";
import "./styles/App.scss";

function App() {
  return (
    <TeamProvider>
      <div className="App">
        <AppRouter />
      </div>
    </TeamProvider>
  );
}

export default App;
