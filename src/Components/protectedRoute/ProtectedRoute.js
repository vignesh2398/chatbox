import React from 'react'
import { redirect, Route } from 'react-router-dom'

export const ProtectedRoute = (comp) => {
  return (
    <>
<Route render={auth?({comp}):navigate("/home")}/>
    </>
  )
}
