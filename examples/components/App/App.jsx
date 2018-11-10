import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import Nav from './Nav'

import FadeIn from '../FadeIn'
import SlideIn from '../SlideIn'
import GettingStarted from '../GettingStarted'
import VariousSpeeds from '../VariousSpeeds'
import VariousAnimations from '../VariousAnimations'
import Sophisticated from '../Sophisticated'
import CustomOrder from '../CustomOrder'
import Api from '../Api'

// import {
//   Contact,
//   Home,
//   Projects,
//   Skills,
//   About,
//   Contributions,
//   NaturalScript,
//   Vault,
//   NodeWifi,
//   Pm2Deployer,
//   Canvas,
//   AnimatedLightEffect,
//   Portfolio,
// } from './Routes'

import style from './App.style'

class App extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location !== prevProps.location) {
      this.app.scrollTo(0, 0)
    }
  }

  render() {
    const { location } = this.props
    return (
      <div className={style.App} ref={(e) => { this.app = e }} id="app">
        {/* location.pathname.indexOf('/projects/') === -1 ? <Nav /> : null */}
        <Nav />
        <div className={style.main}>
          <Switch location={location}>
            {/*
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contributions" component={Contributions} />
            <Route exact path="/projects/natural-script" component={NaturalScript} />
            <Route exact path="/projects/vault" component={Vault} />
            <Route exact path="/projects/node-wifi" component={NodeWifi} />
            <Route exact path="/projects/pm2-deployer" component={Pm2Deployer} />
            <Route exact path="/projects/canvas" component={Canvas} />
            <Route exact path="/projects/animated-light-effect" component={AnimatedLightEffect} />
            */}
            <Route exact path="/" component={GettingStarted} />
            <Route exact path="/fade-in" component={FadeIn} />
            <Route exact path="/slide-in" component={SlideIn} />
            <Route exact path="/various-speeds" component={VariousSpeeds} />
            <Route exact path="/various-animations" component={VariousAnimations} />
            <Route exact path="/sophisticated" component={Sophisticated} />
            <Route exact path="/custom-order" component={CustomOrder} />
            <Route exact path="/api" component={Api} />
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
}


export default withRouter(App)
