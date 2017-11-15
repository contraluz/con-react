import React,{Component}  from 'react';
import { Button,Input,Layout, } from "element-react";
import axios from 'axios';

class NewsDetail extends Component{
    render(){
        return (
            <div className="container">
                <div className='mag50'></div>
                <div className="blog-header">
                    <h1 className="blog-title">NewsDetail</h1>
                   
                </div>
                <div className="blog-post" span='5'>
                    <h3 className="blog-post-title">国家统计局：全国商品房销售面积增速连跌4个月</h3>
                    <p className="blog-post-meta">September 14, 2017 by <a href="javascript:void(0)">Richard</a></p>
                    <p>　　新京报讯 国家统计局11月14日发布数据显示，1-10月份商品房销售面积同比增8.2%，续创2015年以来新低，增速比1-9月份回落2.1个百分点。这也是商品房销售面积增速连续第四个月下滑。</p>
                    <p>　　2017年以来，年内房地产调控政策已经接近180次。分析认为，楼市调控加码，房贷利率再创新高，令地产销售持续降温。有分析称，这已影响到开发商的资金面；房地产开发投资同比增幅已超过企业到位资金同比增幅，部分开发商资金面趋紧。</p>
                    <img alt="国家统计局：全国商品房销售面积增速连跌4个月" width='400' style={{margin:'0 auto',display: 'block'}} src="http://cms-bucket.nosdn.127.net/catchpic/b/bd/bdf40639b39afdb14c192ba733edd158.jpg?imageView&thumbnail=550x0"/>                   
                    <p style={{textAlign: 'center'}}>　　<strong>北京二手房成交面积同比降50%</strong></p>
                    <p>　　根据北京中原地产市场研究部的最新统计，今年1-10月北京新房市场成交1.7万套，二手房成交11.8万套。今年北京二手房市场月均成交1.2万套，成交面积107万 ，与去年同期相比下降50%。</p>
                    <p>　　中原地产研究中心统计数据显示：从3月开始，北京楼市成交全面萎缩。</p>
                    <p>　　根据统计局数据，1-10月份，房地产开发企业到位资金125941亿元，同比增长7.4%，增速比1-9月份回落0.6个百分点。其中，国内贷款20798亿元，增长20.2%；自筹资金41086亿元，增长0.8%；其他资金63932亿元，增长8.2%。在其他资金中，定金及预收款38632亿元，增长14.8%；个人按揭贷款19586亿元，下降1.0%。</p>
                    <p>　　房企到位资金增速回落，自筹资金占比有所上升。易居研究院分析报告显示，从开发企业资金来源的构成分析看，1-10月份企业自筹资金占比升至32.6%，较1-9月提高0.4个百分点；个人按揭与其余资金占比也有小幅下降，反映出房企资金压力不断上升。</p>
                    <p>　　从企业到位资金与房地产开发投资同比情况看，根据2013年及其前后年份两曲线对比情况，当企业到位资金增幅大于开发投资增幅时，预示着房地产市场步入较快发展通道。而当前，房地产开发投资同比增幅在9月份与企业到位资金同比增幅出现重合后，10月份进一步上升至企业到位资金同比增幅上方0.4个百分点。</p>
                </div>

                 {/* <div style={{ margin: '20px 0' }}>
                 <p style={{color:"darkcyan"}}>文明上网，不传谣言，从我做起</p> */}
                    <Input
                        type="textarea"
                        autosize={{ minRows: 2, maxRows: 4}}
                        placeholder="请输入内容"
                    />
                    {/* <Button type="text" className="button" style={{float:"right"}}>发表评论</Button> 
                </div>*/}



            </div>
        )
    }
}

module.exports = NewsDetail;