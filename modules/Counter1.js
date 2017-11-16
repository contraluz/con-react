import React,{Component}  from 'react';
import {connect} from 'react-redux';
import { Button,Input,Layout,Notification,Rate} from "element-react";
import {increase,decrease,fetchList,addToCart} from '../actions/counter'


class Counter extends Component{
    componentWillMount(){
        this.props.fetchList();
    }

    changePage(e){
        const page = e.target.getAttribute('data-page');
        const params = {page: parseInt(page)}
        this.props.fetchList(params)
    }

    addCartkk(e){
        
        // console.log(this)
        
        const idx = e.target.getAttribute('data-idx');
        // console.log(idx)
        const addToCartProduct = this.props.lists[idx];
        this.props.addToCart(addToCartProduct)
        this.open()
    }
    open() {
        Notification({
            title: '操作提示',
            message: '添加成功，请到购物车查看你的商品哦!'
        });
       
    }
    render(){
        const {value,value1,lists,carts,fetchList,addToCart} = this.props;
        var output = [];
        // console.log(lists)
        if(!lists){
            return <div>
                        <div className='mag50'></div>
                        数据请求中...
                    </div>
        }

        var output = [];
        var outputPages = [];
        var pages = 1;
        pages = Math.ceil(lists.length/5);
        for(let i=1; i<=pages;i++){
            outputPages.push(
                <li><a href="javascript:void(0)" onClick={ (e)=>this.changePage(e) } data-page={i} key={i}>{i}</a></li>
            )
        }

        for(let i=0,len=lists.length;i<len;i++){
            output.push(<li key={i} style={{overflow:'hidden',margin:'.2rem'}}>
                <div className="f_left">
                <img width='300' height='256' src={lists[i].img} 
                style={{overflow:'hidden',margin:'3rem',marginTop:"0" ,border: "1px solid #ddd",borderRadius: ".5rem"}}/>
                </div>
                <div className="f_left">
                    <p style={{fontSize:'20px'}}>{lists[i].name}</p>
                    <p>单价￥ {lists[i].price}</p>
                    <p> {lists[i].content}</p>
                    <div className="block" style={{marginTop:"1rem",marginBottom:"1rem"}}>
                        <span className="wrapper">
                        <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </span>
                    </div>
                    <a type="btn btn-primary"
                    data-idx={i}
                    href='javascript:void(0)'
                    style={{color: "#5a5a5a",display: "block",width:"100px",textAlign: "center",
                    border:"1px solid #ccc",borderRadius: "5px",lineHeight:'36px'}} 
                    onClick={(e)=> {this.addCartkk(e)}}>加入购物车</a>
                   
                </div>  
                </li>)
        }


        return (
            <div>
                <div className='mag50'></div>
                
                <nav aria-label="...">
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </nav>
                <br/>
                <ul>
                {output} 
                </ul> 
            </div>
        )
    }
}

const getValue = (state)=>{
    return {
        value: state.reducer.count,
        value1: state.reducer.count1,
        lists: state.reducer.lists,
        carts: state.reducer.carts
    }
}
const CounterContext = connect(getValue,{fetchList,addToCart})(Counter)


module.exports = CounterContext;