import React from 'react'
import ReactDom from 'react-dom'

import App from './conponents/app'

import "./css/index.css"

ReactDom.render(
    <App />,
    document.querySelector("#root")
)