import React, { Component } from 'react';
import { Button, Table, Icon, Tag ,Input,Pagination} from 'element-react';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: [],
      posts: [],
      columns: [
        {
          type: 'index'
        },
        {
          label: "日期",
          prop: "date",
          width: 140,
          render: function (data) {
            return (
              <span>
                <Icon name="time" />
                <span style={{ marginLeft: '10px' }}>{data.date}</span>
              </span>)
          }
        },
        {
          label: "姓名",
          prop: "name",
          // width: 160,
          render: function (data) {
            return <span>{data.name}</span>
          }
        },
        {
          label: "评论",
          prop: "words",
          width: 160,
          render: function (data) {
            return <span>{data.words}</span>
          }
        },
        {
          label: "评论数",
          prop: "comment",
          width: 160,
          render: function (data) {
            return <span>{data.comment}</span>
          }
        },
        {
          label: "操作",
          prop: "address",
          render: function (row, column, index) {
            return (
              <span>
                <Button plain={true} type="info" size="small">编辑</Button>
                <Button type="danger" size="small" >删除</Button>
              </span>
            )
          }
        }
      ]
    }
  }
  deleteRow(index) {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({
      data: [...data]
    })
  }
  componentDidMount() {
    axios.post(`http://localhost:3000/news/list`, this.filter)
      .then(res => {
        
        const posts = res.data;
        console.log(posts)
        this.setState({ posts });
      });
  }
  render() {
    const { getData } = this.props
    // console.log(this.state.posts)

    return (
      <div>
        <div className='mag50'></div>

        <div>
           
          <h3>News Management System </h3>
          
           
          <Table
            style={{ width: '100%' }}
            columns={this.state.columns}
            data={this.state.posts.rows}
            border={true}

            highlightCurrentRow={true}
            onCurrentChange={item => { console.log(item) }}
          />
          {/* <Input placeholder="请输入内容" key='search' append={<Button type="primary" icon="search">搜索</Button>} />  */}
          <Pagination layout="total, prev, pager, next" total={this.state.posts.total} pageSize={this.state.posts.limit}/>
        </div>

      </div>
    )
  }

}

module.exports = News;