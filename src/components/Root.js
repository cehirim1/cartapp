import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from './Navigation'
import {Provider} from 'react-redux'
import store from '../features/store'


const Root = () => {
  return (
    <>
    <Provider store={store}>
    <Navigation/>
      <main>
        <Outlet/>
      </main>
      </Provider>
    </>
  )
}

export default Root
