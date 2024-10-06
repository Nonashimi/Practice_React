import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom'

import AuthContext from '../context/AuthContext'
import { privateRoute, publicRoute, routes } from '../../../router'

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    isAuth?
            <Routes>
              {privateRoute.map(i => 
                  <Route path = {i.path} element = {i.element} key = {i.path}></Route>
              )}
            </Routes> 
            :
            <Routes>
              {publicRoute.map(i => 
                  <Route path = {i.path} element = {i.element} key = {i.path}></Route>
              )}
            </Routes> 
  )
}

export default AppRouter