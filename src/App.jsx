import { Header } from './components/Header'
import { BikeTypes } from './components/BikeTypes'
import { Home } from './components/Home'
import { ChooseYourBike } from './components/ChooseYourBike'
import { Route, Switch } from "wouter"
import { Footer } from './components/Footer'


function App() {
  return (
    <div className='relative'>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/bike-typs.jsx' component={BikeTypes} />
        <Route path='/choose-your-bike.jsx' component={ChooseYourBike} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
