import React, { Component } from 'react';
import { Button, Table, Icon, Tag, Input, Pagination } from 'element-react';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: [],
      posts: [],
      changePage:[],
      oldPost:[]

    }
  }
  changeBack(e){
    this.setState({
      posts:this.state.oldPost
      
    })
  }
  changePage(e) {
    this.setState({
      oldPost:this.state.posts
      
    })
    for (let i = 0, len = this.state.posts.length; i < len; i++){
      if(this.state.posts[i].title===e.target.innerHTML){
        this.setState({
          posts:[].concat(this.state.posts[i])
          
        })
      }
    }
    
   
  }

  componentDidMount() {
    axios.post(`http://localhost:3000/cate/list`, this.filter)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }
  render() {
    const { getData } = this.props
    let outputNews = [<li key={"most"} className="f_left" onClick={(e)=>{this.changeBack(e)}}><Button>全部新闻</Button></li>];
    let newsMain = [];
    let newArr = []
    
    if (this.state.posts) {
      for (let i = 0, len = this.state.posts.length; i < len; i++) {
        outputNews.push(
          <li key={i+"a"} className="f_left"  onClick={(e) => this.changePage(e)}>
            <Button key={i+"b"}>{this.state.posts[i].title}</Button>
          </li>
        )

        if (this.state.posts[i].children) {

          for (let j = 0, len = this.state.posts[i].children.length; j < len; j++) {
            newArr = newArr.concat(this.state.posts[i].children[j])
            
          }
        }
      }
    }
    for (let i = 0, len = newArr.length; i < len; i++) {
      newsMain.push(
        <li key={i+"c"}>
          <a href="javascript:void(0)"
            className="newsList"
            key={i+"d"}
            style={{ color: "#333", background: "url(https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/top_bg_f32315c.png) no-repeat left -275px" }}
            data-page={i} key={i}>
            &nbsp;
          &nbsp;
          {newArr[i].title} <span className="newsList" style={{ color: "#ccc", float: "right" }}>{newArr[i].date.slice(0, 10)}</span>
          </a>
        </li>
      )
    }

    return (
      <div>
        <div style={{ height: '71px' }}></div>
        <div>
          <h3>News Lists </h3>
         
          <ul style={{ overflow: " hidden" }}>{outputNews}</ul>

          <ul>{newsMain}</ul>
          <Pagination layout="total, prev, pager, next" total={newArr.length} pageSize={10}/>
          
        </div>

      </div>
    )
  }

}

module.exports = News;