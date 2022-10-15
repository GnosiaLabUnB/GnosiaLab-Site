import Home from './views/Home';
import About from './views/About';
import Search from './views/Search';

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home/>
    },
    {
      path: "/search",
      main: () => <Search/>
    },
    {
      path: "/about",
      main: () => <About/>
    }
]

export {routes}
