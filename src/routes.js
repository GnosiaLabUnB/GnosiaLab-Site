import Home from './views/Home';

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home/>
    }
]

export {routes}
