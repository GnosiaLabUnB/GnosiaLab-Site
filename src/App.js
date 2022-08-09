import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main/>}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


