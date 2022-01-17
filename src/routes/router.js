import OnlyHeaderLayout from '../layouts/onlyHeader'
import Home from '../pages/Home'
import LiveCasino from '../pages/LiveCasino'
// const Home = () => import('../pages/Home')

// const getRoutes = () => (
//   [
//     { path: '/', name: 'Home', Component: Home, exact: true  , layout : OnlyHeaderLayout},
//   ]
// )

// export default getRoutes

export const routesMap = [
  { path: '/', name: 'Home', component : Home, exact: true  , layout : OnlyHeaderLayout},
  { path: '/livecasino', name: 'livecasino', component : LiveCasino, exact: true  , layout : OnlyHeaderLayout},
  { path: '/sports', name: 'sports', component : Home, exact: true  , layout : OnlyHeaderLayout},
  { path: '/inplay', name: 'inplay', component : Home, exact: true  , layout : OnlyHeaderLayout},
  { path: '/casino', name: 'casino', component : Home, exact: true  , layout : OnlyHeaderLayout},
  { path: '/virtualsports', name: 'virtualsports', component : Home, exact: true  , layout : OnlyHeaderLayout},
]
