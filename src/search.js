'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import './search.less'
import logo from './images/logo.png'

class Search extends React.Component {
    render() {
        return <div className="search-text">
            Search Text 111222ddd <img className="logo-img" src={ logo } />
        </div>;
    }
}

ReactDom.render(
    <Search></Search>,
    document.getElementById('root')
)