import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import DefaultLayout from '../layouts/default'
import { routesMap } from './router'

const Routes = () => {
  const routes = routesMap
  return (
    <Suspense fallback={<div>Loading...</div>}>
          {routes.map(({ path, component, exact, layout }, key ) => {
            
              const Layout = layout ? layout : DefaultLayout
              const Component = component

              return (
                <Route exact={exact} path={path} key={key} render={ () => (
                    <Layout>
                      <Component />
                    </Layout>
                  )} 
                >
                    
                </Route>
              )
          })}
    </Suspense>
  )
}


export default Routes