import React,{Component}  from 'react';
import NavLink from './NavLink';
import Footer from './Footer';

class App extends Component{
    render(){
        return (
            <div>
                <div className="navbar-wrapper">
                  <div className="container">
                    <nav className="navbar navbar-inverse navbar-static-top">
                      <div className="container">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">langchao.net</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                          <ul className="nav navbar-nav">
                          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                          <li><NavLink to="/news">News</NavLink></li>
                          <li><NavLink to="/newsdetail">NewsDetail</NavLink></li>
                          
                            <li><NavLink to="/counter">Counter</NavLink></li>
                            <li><NavLink to="/carts">Carts</NavLink></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li className="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="container" role="main">
                     {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

module.exports = App;