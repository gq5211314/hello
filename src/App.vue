<template>
  <div id="app">
  <header>
  	<div class="top-container">
        <div id="top" data-spy="affix" data-offset-top="60" class="affix-top">
  			<div class="container">
    			<div class="clearfix">
	      			<div id="logo" class="fl">
		      			<a href="/">
		      				<img src="./assets/img/logo.png">
		      			</a>
	      			</div>      
      				<div class="right-stuff clearfix">
        				<div class="top-link fr">
					        <ul class="clearfix">
								<li>
									<a href="/" class="ic ic-cart">
										<span class="">购物车</span>
										<span class="bagde" id="goodsnum">0</span>
									</a>
								</li>
					            <li>
						            <a href="/" class="ic ic-note">
						            	<span class="">我的订单</span>
						            </a>
					            </li>
					            <li>
						            <a href="/" class="ic ic-register">
						            	<span class="">注册</span>
						            </a>
					            </li>
					            <li>
						            <a href="/" class="ic ic-login">
						            	<span class="">登录</span>
						            </a>
					            </li>
					        </ul>
        				</div>
				        <div class="search fr">
				        	<form action="/index.php?act=goods.goods">
					          <input type="text" placeholder="搜索行业或模板号... " class="ipt" name="searchcon" value="">
					          <button type="submit" data-ripple="rgba(255,255,255,0.2)" class="btn btn-ripple green"><i class="glyphicon glyphicon-search"></i></button>
					       	</form>
				        </div>
				    </div>
				</div>
			</div>
		</div>
	</div>
  </header>
  <div id="header">
	<nav role="navigation" class="navbar">
          <div class="container">
            <ul class="nav">
<li class="active">
<router-link class="btn-ripple" to="/">
<span class="ripple move" style="background: rgba(255, 255, 255, 0.2); height: 143px; width: 143px; top: -30.5px; left: 15px;"></span>网站首页</router-link></li>
<li class="">
<router-link class="btn-ripple" to="/product">
<span class="ripple move" style="background: rgba(255, 255, 255, 0.2); height: 143px; width: 143px; top: -21.5px; left: 1.75px;"></span>产品展示</router-link></li>
			  <li class=""><router-link class="btn-ripple" to="/service">售后服务</router-link></li>
			  <li class=""><router-link class="btn-ripple" to="/madeOrder">定制流程</router-link></li>
			  <li class=""><router-link class="btn-ripple" to="/aboutUS">关于我们</router-link></li>
			  <li class=""><router-link class="btn-ripple" to="/contactUS">联系我们</router-link></li>
           </ul>
          </div>
        </nav>
  </div>
    <router-view></router-view>
    <footer>
      <div class="ef fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-7 col-md-6 col-lg-7">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6">
                        <h3>关于我们</h3>
                        <ul>
                          <li><a href="/">企业介绍</a></li>
                          <li><a href="/">加入我们</a></li>
                          <li><a href="/">我们的优势</a></li>

                        </ul>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-6">
                        <h3>选购</h3>
                        <ul>
                          <li><a href="/">传统PC网站</a></li>
                          <li><a href="/">无线站/移动站</a></li>
                          <li><a href="/">响应式网站</a></li>
                          <li><a href="/">企业级服务</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6">
                        <h3>常用信息</h3>
                        <ul>
                          <li><a href="/">常见问题</a></li>
                          <li><a href="/">联系方式</a></li>
                          <li><a href="/">域名查询</a></li>
                          <li><a href="/">文件下载</a></li>
                        </ul>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-6">
                        <h3>会员中心</h3>
                        <ul>
                          <li><a href="/">我的订单</a></li>
                          <li><a href="/">订单查询</a></li>
                          <li><a href="/">付款方式</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-5 col-md-6 col-lg-5">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-7">
                    <h3>联系方式</h3>
                    <ul class="contact-detail">
                    <li>
                    	<i class="ic ic-phone"></i>全国统一客服热线<br><a class="tel">400-696-1100</a>
                    </li>
                    <li>
                       <i class="ic ic-location"></i>北京市朝阳区建国路93号院<br>万达广场6号楼1103室<span id="smap"><em></em><img src="./assets/img/small-map.png" style="display: none"></span></li>
                      <li><i class="ic ic-mail"></i>咨询邮箱<br><a href="mailto:sales@bbctop.com">Sales@bbctop.com</a></li>
                    </ul>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-5">
                    <div class="qrcode">
                      <div class="img"><img src="./assets/img/qrcode.png"></div>
                      <h4>扫一扫更多惊喜！</h4>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
          	<a href="/">
          		<i class="ic ic-logo"></i>
          	</a>
          	<span>© 2017 北京超越无限信息技术有限公司</span>
          	<a target="_blank" href="http://www.miitbeian.gov.cn/">京ICP备12004109号</a>
          	<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033282"><img style="vertical-align:sub;width:16px;" src="./assets/img/beian.png">&nbsp;京公网安备 11010502033282号</a><a href="/">Powered by BBCtop.com</a></div>
        </div>
      </div>
    </div>
    </footer>
  </div>
</template>
<script src="../static/js/appVue.js"></script>
<style scoped>
@import url('./app.css');
</style>
