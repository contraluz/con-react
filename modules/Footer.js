
import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='container'>
                    <p className="pull-right"><a href="#app">Back to top</a></p>
                    <p style={{ textAlign: 'center' }}>Copyright ©2016 POPO.CN 潮流新闻网 All Rights Reserved 版权所有</p>
                </footer>
            </div>
        )
    }
}

module.exports = Footer;