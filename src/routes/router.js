const Home = () => import('pages/Home')

const getRoutes = () => (
  [
    { path: '/', name: 'Home', Component: Home, exact: true },
  ]
)

export default getRoutes
