import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

function Routes() {
  return (
    <div>
     <Switch>

{/*        <Route path='/schedule' component={Schedule} />
        <Route path='/roster' component={() => <Roster />} />   */}

        <Route exact path='/' component={Home} />
     </Switch>
    </div>
  )
}

export default Routes
