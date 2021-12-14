import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from 'layouts/default'
import getRoutes from './routes'

const Routes = () => {
  const routes = getRoutes()

  return (
    <Switch>
        {routes.map(({ path, Component, exact, layout }, key) => {
            const Layout = layout ? layout : DefaultLayout

            return (
            <Route exact={exact} path={path} key={key} render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
                )} 
            />
            )
        })}
    </Switch>
  )
}


export default Routes