import OnlyHeaderLayout from '../layouts/onlyHeader'
import Home from '../pages/Home'
// const Home = () => import('../pages/Home')

// const getRoutes = () => (
//   [
//     { path: '/', name: 'Home', Component: Home, exact: true  , layout : OnlyHeaderLayout},
//   ]
// )

// export default getRoutes

export const routesMap = [
  { path: '/', name: 'Home', component : Home, exact: true  , layout : OnlyHeaderLayout},
]
