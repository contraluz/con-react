import React,{Component}  from 'react';
import {connect} from 'react-redux';
var _ = require('lodash');

class Carts extends Component{
    render(){
        const {carts} = this.props;
        var cartsList = _.uniqWith(carts,_.isEqual);

        var output = [];
        for(let i =0;i<cartsList.length;i++){
            output.push(
                <li key={i}>名称：{cartsList[i].title} 数量：{cartsList[i].quantity}</li>
            )
        }
        return (
            <div>
                <div className='mag50'></div>
                {output}
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        carts: state.carts
    }
}
const CartsContext = connect(getValue)(Carts)

module.exports = CartsContext;