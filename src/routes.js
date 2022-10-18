import Home from './views/Home';
import About from './views/About';
import Search from './views/Search';
import Publications from './views/Publications';

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
      path: "/publications",
      main: () => <Publications/>
    },
    {
      path: "/about",
      main: () => <About/>
    }
]

export {routes}
