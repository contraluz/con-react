import React, { Component } from 'react';
import { Button, Table, Icon, Tag ,Input,Pagination} from 'element-react';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: [],
      posts: [],
      
           
      
    }
  }
  changePage(){

  }

  componentDidMount() {
    axios.post(`http://localhost:3000/news/list`, this.filter)
      .then(res => {
        
        const posts = res.data;
        // console.log(res)
        this.setState({ posts });
      });
  }
  render() {
    const { getData } = this.props
    // console.log(this.state.posts)

    let outputNews = [];
     
    console.log(this.state.posts.rows)
    if(this.state.posts.rows){
      // console.log(this.state.posts.rows.length)
      for (let i = 0 ,len = this.state.posts.rows.length ; i < len; i++) {
          if(this.state.posts.rows[i].name){
              outputNews.push(
                  <li key={i}>
                  
                    <a href="javascript:void(0)" 
                    className="newsList"
                    onClick={(e) => this.changePage(e)} 
                    style={{color:"#333" ,background: "url(https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/top_bg_f32315c.png) no-repeat left -275px"}}
                    data-page={i} key={i}>
                    &nbsp;
                    &nbsp;
                    {this.state.posts.rows[i].name} <span style={{color: "#ccc",float: "right"}}>{this.state.posts.rows[i].date.slice(0,10)}</span>
                    </a>
                  </li>
              )
          }
            
        }
    }
    
    return (
      <div>
        <div style={{height:'71px'}}></div>

        <div>
           
          <h3>News Lists </h3>
         
           <ul>{outputNews}</ul>
          
          {/* <Input placeholder="请输入内容" key='search' append={<Button type="primary" icon="search">搜索</Button>} />  */}
          
        </div>

      </div>
    )
  }

}

module.exports = News;