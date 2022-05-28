import React from 'react'
import RouterWaiter from "./RouterWaiter/index";
import routeBefore from './routeBefore'
import routes from './routes'
function RouterConfig() {
    return (
        <RouterWaiter routes={routes} onRouteBefore={routeBefore} />
    )
}
export default RouterConfig
