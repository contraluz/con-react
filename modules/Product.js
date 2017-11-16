import React,{Component}  from 'react';
import { Button,Input,Layout,Notification,Rate} from "element-react";
import axios from 'axios';
import {connect} from 'react-redux';
import {increase,decrease,fetchList,addToCart} from '../actions/counter'

class Product extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          filter: [

          ],
          posts: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/product/list`, this.filter)
          .then(res => {
            
            const posts = res.data;
            // console.log(posts)
            this.setState({ posts});
          });
      }
    addCart(e){
        // console.log(e.target)
        const idx = e.target.getAttribute('data')
        this.open()
        console.log(idx)
        

    }
    open() {
        Notification({
            title: '操作提示',
            message: '添加成功，请到购物车查看你的商品哦!'
          });
       
      }
    render(){
        const {carts,addToCart} = this.props;
        var output=[];
        for(let i=0 , len=this.state.posts.length;i<len;i++){
                output.push(<li key={i} style={{overflow:'hidden',margin:'2rem'}}>
                <div className="f_left">
                <img width='300' height='256' src={this.state.posts[i].img} 
                style={{overflow:'hidden',margin:'3rem',marginTop:"0" ,border: "1px solid #ddd",borderRadius: ".5rem"}}/>
                </div>
                <div className="f_left">
                    <p style={{fontSize:'20px'}}>{this.state.posts[i].name}</p>
                    <p>单价￥ {this.state.posts[i].price}</p>
                    <p> {this.state.posts[i].content}</p>
                    <div className="block" style={{marginTop:"1rem",marginBottom:"1rem"}}>
                        <span className="wrapper">
                        <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </span>
                    </div>
                    <a type="btn btn-primary"
                    data={this.state.posts[i]._id}
                    href='javascript:void(0)'
                    style={{color: "#5a5a5a",display: "block",width:"100px",textAlign: "center",
                    border:"1px solid #ccc",borderRadius: "5px",lineHeight:'36px'}} 
                    onClick={(e)=> {this.addCart(e)}}>加入购物车</a>
                   
                </div>   
                </li>)
            
        }
        return (
            <div>
                <div className='mag50'></div>
            
                <ul>{output}</ul>
            </div>
        )
    }
}


module.exports = Product;