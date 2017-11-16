import React,{Component}  from 'react';
import {connect} from 'react-redux';
import { Button, Input, Layout, Rate ,MessageBox } from "element-react";
var _ = require('lodash');

class Carts extends Component{
    aiPay(e){
        MessageBox.msgbox({
            title:'请扫描二维码完成支付',
            message:<img style={{display:"block",margin:"0 auto "}} width="180"  height="180" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58"/>
        });
        // 
    }
    render(){
        const {carts} = this.props;
        var cartsList = _.uniqWith(carts,_.isEqual);

        var output = [], sum=0;
        for(let i =0;i<cartsList.length;i++){
            
            sum+=parseInt(cartsList[i].quantity*cartsList[i].price)   
            output.push(
                <li key={i} style={{ overflow: "hidden" }}>
                    
                    <div className="f_left">
                        <img 
                            width='120' height='120' src={cartsList[i].img}
                            style={{ overflow: 'hidden', margin: '3rem', marginTop: "0", border: "1px solid #ddd", borderRadius: ".5rem" }} />
                    </div>
                    <div className="f_left">
                        <p style={{ fontSize: '20px', color: " #000", fontWeight: "600" }}>{cartsList[i].name}</p>
                        <p>单价 ￥ {cartsList[i].price} 数量：{cartsList[i].quantity} 总价 {cartsList[i].quantity*cartsList[i].price} </p>
                        
                    </div>
                </li>

            )
        }
        return (
            <div>
                <div className='mag50'></div>
                <div className='mag50'></div>
                <ul>{output}</ul>
                <p>
                    小计: {sum}
                    <a type="btn btn-primary"
                        href='javascript:void(0)'
                        style={{
                            color: "#5a5a5a", display: "block", width: "100px", textAlign: "center",
                            border: "1px solid #ccc", borderRadius: "5px", lineHeight: '36px'
                        }}
                        onClick={(e) => { this.aiPay(e) }}>立即购买</a> 
                </p>
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        carts: state.reducer.carts
        
    }
}
const CartsContext = connect(getValue)(Carts)

module.exports = CartsContext;