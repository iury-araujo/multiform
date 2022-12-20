import { BrowserRouter, useRoutes } from 'react-router-dom'
import FormStep1 from './pages/FormStep1/index'
import FormStep2 from './pages/FormStep2/index'
import FormStep3 from './pages/FormStep3/index'

const RoutesDefined = () => {
  let routes = useRoutes([
    {path: "/", element: <FormStep1/>},
    {path: "/step2", element: <FormStep2/>},
    {path: "/step3", element: <FormStep3/>}
  ]);
  return routes
}

export const Router = () => {
  return (
    <BrowserRouter>
      <RoutesDefined/>
    </BrowserRouter>
  )
}
