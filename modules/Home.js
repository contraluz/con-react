import React, { Component } from 'react';
import { Button, Carousel, Rate, Layout, Card } from 'element-react';

import 'element-theme-default';

class Home extends Component {

    render() {
        return (
            <div>
                <div className='mag50'></div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img className="first-slide" src="https://imgsa.baidu.com/news/q%3D100/sign=c3b2fdada018972ba53a04cad6cc7b9d/4bed2e738bd4b31c94a555028cd6277f9f2ff8ea.jpg" alt="panda"/>
                    <div className="container">
                      <div className="carousel-caption">
                        <h1>尴尬了！熊猫宝宝上树觅食被卡半空中</h1>
                        <p>2017年11月13日报道，奥地利维也纳动物园，一只熊猫宝宝上树觅食，但是不幸被卡在了半空中。</p>
                        <p><a className="btn btn-lg btn-primary" href="http://world.huanqiu.com/photo/2017-11/2887585.html?from=bdtp#p=1" role="button">了解更多</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img className="second-slide" src="https://imgsa.baidu.com/news/q%3D100/sign=5997b848761ed21b7fc92ae59d6eddae/8b82b9014a90f603ad8eb5fd3212b31bb051ed4a.jpg" alt="习近平"/>
                    <div className="container">
                      <div className="carousel-caption">
                        <h1>习近平同老挝国家主席本扬举行会谈</h1>
                        <p>11月13日，中共中央总书记、国家主席习近平在万象国家主席府同老挝人民革命党中央委员会总书记、国家主席本扬举行会谈。这是会谈前，本扬在主席府广场为习近平举行隆重欢迎仪式。</p>
                        <p><a className="btn btn-lg btn-primary" href="http://news.xinhuanet.com/photo/2017-11/14/c_1121950008.htm" role="button">了解更多</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <img className="third-slide" src="https://imgsa.baidu.com/news/q%3D100/sign=a920bd13a2014c081f3b2ca53a7b025b/500fd9f9d72a60596529d1a02334349b033bba4a.jpg" alt="故宫"/>
                    <div className="container">
                      <div className="carousel-caption">
                        <h1>6大学生用1个月时间按1:1000比例缩建“故宫”</h1>
                        <p>你能想象到，有人能把庞大的北京故宫建筑群 " 搬 " 到 1.8 平方米的木板上吗？大连民族大学 的 6 名学生就做到了。他们把故宫按 1:1000 的比例缩建成木质模型，细致程度令人叹为观止。</p>
                        <p><a className="btn btn-lg btn-primary" href="http://xinwen.eastday.com/a/n171114005948251-2.html" role="button">了解更多</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

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
                <footer>
                    <p className="pull-right"><a href="#">Back to top</a></p>
                    <p style={{textAlign:'center'}}>Copyright ©2016 POPO.CN 潮流新闻网 All Rights Reserved 版权所有</p>
                </footer>











            </div>

        )
    }
}

module.exports = Home;