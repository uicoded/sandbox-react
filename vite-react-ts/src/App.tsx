import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>React Demos</h2>
      <nav>
        <ul>
          {/* <li>
            <Link to="/use-state">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="/use-context">useContext</Link>
          </li>
          <li>
            <Link to="/use-reducer">useReducer</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li> */}
          <li>
            <Link to="/mutation-observers">Mutation Observers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App
