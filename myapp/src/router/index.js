import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../component/index'
import Hot from '../component/hot'

const List = [
    {
        path: "/index",
        component: Index
    },
    {
        path: "/hot",
        component: Hot
    },
    {
        path:"*",
        redirect:"/index"
    }
]
const Router = () => {
    return (
        <div>
            <Switch>
                {
                    List.map((item, i) => {
                        if (item.path === "*") {
                            return <Redirect to={item.redirect} key="i"></Redirect>
                        } else {
                            return <Route path={item.path} component={item.component} key={i}></Route>
                        }

                    })
                }

            </Switch>
        </div>
    )
}
export default Router