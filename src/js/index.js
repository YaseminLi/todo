import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../sass/index.scss'

import Header from './component/header'
import Left from './component/left'

class Container extends React.Component {
    render() {
        return (
            <div className="root-container">
                <Header />
                <Left />
                {/* <Center />
                        <Right /> */}

            </div>

        )
    }
}
ReactDOM.render(
    <Container />, document.getElementById('root'))