import React,{Component}  from 'react';
import { Button,Table,Icon,Tag } from 'element-react';

class News extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
          columns: [
            {
              type: 'index'
            },
            {
              label: "日期",
              prop: "date",
              width: 150,
              render: function(data){
                return (
                <span>
                  <Icon name="time"/>
                  <span style={{marginLeft: '10px'}}>{data.date}</span>
                </span>)
              }
            },
            {
              label: "姓名",
              prop: "name",
              width: 160,
              render: function(data){
                return <Tag>{data.name}</Tag>
              }
            },
            {
              label: "操作",
              prop: "address",
              render: function(){
                return (
                  <span>
                   <Button plain={true} type="info" size="small">编辑</Button>
                   <Button type="danger" size="small">删除</Button>
                  </span>
                )
              }
            }
          ],
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
           }]
        }
      }
      
      render() {
        return (
            <div>
                 <div className='mag50'></div>

                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    height={250}
                    style={{overflow:'auto'}}
                    highlightCurrentRow={true}
                    onCurrentChange={item=>{console.log(item)}}
                />
          </div>
        )
      }
      
}

module.exports = News;