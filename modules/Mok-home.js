import React,{Component}  from 'react';
import { Button,Carousel,Rate,Layout,Card } from 'element-react';

import 'element-theme-default';

class Home extends Component{
    toLink(url){
        window.open(url)
    }
    render(){
        return (
            <div>

                <h3>浪潮新闻，看你所看，享你所想</h3>

                {/* 轮播图 */}
                {/* <div className="demo-4 medium">
                    <Carousel interval="4000" type="card" height="200px">
                        {
                        [1,2,3,4,5,6].map((item, index) => {
                            return (
                            <Carousel.Item key={index}>
                                <h3>{item}</h3>
                            </Carousel.Item>
                            )
                        })
                        }
                    </Carousel>
                    </div> */}

                {/* 卡片 */}
                <Layout.Row>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/mao.jpg' className="image" />
                        <div style={{ padding: 14 }}>
                            <span>尴尬了！熊猫宝宝上树觅食被卡半空中</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 08:19</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://world.huanqiu.com/photo/2017-11/2887585.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/gugong2.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>6大学生用1个月时间按1:1000比例缩建“故宫”</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://xinwen.eastday.com/a/n171114005948251.html')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/he.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>西成高铁进入开通前的全面验收阶段</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 10:46</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://china.huanqiu.com/photo/2017-11/2887601.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12" lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/xi.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>习近平同老挝国家主席本扬举行会谈</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://news.xinhuanet.com/photo/2017-11/14/c_1121950008.htm')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/mao.jpg' className="image" />
                        <div style={{ padding: 14 }}>
                            <span>尴尬了！熊猫宝宝上树觅食被卡半空中</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 08:19</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://world.huanqiu.com/photo/2017-11/2887585.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/gugong2.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>6大学生用1个月时间按1:1000比例缩建“故宫”</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://xinwen.eastday.com/a/n171114005948251.html')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/he.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>西成高铁进入开通前的全面验收阶段</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 10:46</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://china.huanqiu.com/photo/2017-11/2887601.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12" lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/xi.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>习近平同老挝国家主席本扬举行会谈</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://news.xinhuanet.com/photo/2017-11/14/c_1121950008.htm')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/mao.jpg' className="image" />
                        <div style={{ padding: 14 }}>
                            <span>尴尬了！熊猫宝宝上树觅食被卡半空中</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 08:19</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://world.huanqiu.com/photo/2017-11/2887585.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/gugong2.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>6大学生用1个月时间按1:1000比例缩建“故宫”</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://xinwen.eastday.com/a/n171114005948251.html')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12"  lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/he.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>西成高铁进入开通前的全面验收阶段</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 10:46</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://china.huanqiu.com/photo/2017-11/2887601.html?from=bdtp#p=1')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                    <Layout.Col xs="22" sm="12" lg="8">
                        <Card bodyStyle={{ padding: 0 }}>
                        <img src='../img/xi.jpg' className="image"  />
                        <div style={{ padding: 14 }}>
                            <span>习近平同老挝国家主席本扬举行会谈</span>
                            <div className="bottom clearfix">
                            <time className="time" style={{color:'#aaa'}}>2017-11-14 09:40</time>
                            <Button type="text" className="button" style={{float:'right'}} onClick={ (e)=>this.toLink('http://news.xinhuanet.com/photo/2017-11/14/c_1121950008.htm')}>详情</Button>
                            </div>
                            <Rate colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
                        </div>
                        </Card>
                    </Layout.Col>
                </Layout.Row>

                <div style={{lineHeight:'30px',textAlign:'center'}}>Copyright ©1996-2017 LANGCHAO Corporation, All Rights Reserved</div>
             
            </div>
            
        )
    }
}

module.exports = Home;