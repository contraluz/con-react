import React, { Component } from 'react';
import { Button, Table, Icon, Tag, Input, Pagination } from 'element-react';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: [],
      posts: [],



    }
  }
  changePage() {

  }

  componentDidMount() {
    axios.post(`http://localhost:3000/cate/list`, this.filter)
      .then(res => {

        const posts = res.data;
        // console.log(res)
        this.setState({ posts });
      });
  }
  render() {
    const { getData } = this.props
    // console.log(this.state.posts)

    let outputNews = [<li key={"most"} className="f_left"><Button>全部新闻</Button></li>];
    let newsMain = [];
    let newArr = []
    console.log(this.state.posts)
    if (this.state.posts) {
      // console.log(this.state.posts.rows.length)
      for (let i = 0, len = this.state.posts.length; i < len; i++) {
        outputNews.push(
          <li key={i} className="f_left">
            <Button>{this.state.posts[i].title}</Button>
          </li>
        )

        if (this.state.posts[i].children) {

          for (let j = 0, len = this.state.posts[i].children.length; j < len; j++) {
            console.log(123)
            newArr = newArr.concat(this.state.posts[i].children)
          }
        }
      }
      

      console.log(newArr)
    }
    for (let i = 0, len = newArr.length; i < len; i++) {
      console.log(1)
      newsMain.push(
        <li key={i}>
          <a href="javascript:void(0)"
            className="newsList"
            onClick={(e) => this.changePage(e)}
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
          {/* <Input placeholder="请输入内容" key='search' append={<Button type="primary" icon="search">搜索</Button>} />  */}

        </div>

      </div>
    )
  }

}

module.exports = News;