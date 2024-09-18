<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px auto","flexDirection":"column","display":"flex"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"80px 240px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231019/e0ce21cc553046bdbb960e829d636b76.png) no-repeat center center","display":"flex","width":"100%","height":"800px","order":"1"}'>
		  <div :style='{"margin":"0 10px 0 0","color":"#333","textAlign":"center","width":"auto","lineHeight":"40px","fontSize":"40px","minWidth":"25%"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"left","width":"25%","lineHeight":"40px","fontSize":"20px","height":"40px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"width":"50%","margin":"50px 0 0 0","position":"relative","flexWrap":"wrap","display":"flex","height":"auto"}'>
		    <img :style='{"width":"400px","objectFit":"cover","display":"block","height":"550px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"position":"absolute","objectFit":"cover","left":"400px","bottom":"15px","display":"block","height":"300px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0","margin":"80px 0 10px 80px","overflow":"hidden","color":"rgb(102, 102, 102)","background":"#fff","width":"40%","lineHeight":"30px","fontSize":"16px","height":"360px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"95px 280px","margin":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231020/df2f5dbd20434442bc23efc0b9e9612e.png)","display":"flex","width":"100%","position":"relative","height":"635px","order":"6"}'>
		  <div :style='{"padding":"0 50px","color":"#333","textAlign":"left","width":"calc(50% - 0px)","lineHeight":"1.5","fontSize":"40px","order":"2"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"calc(100% - 660px)","lineHeight":"1.5","fontSize":"20px","order":"3"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"width":"50%","padding":"0 10px","flexWrap":"wrap","display":"flex","height":"auto","order":"1"}'>
		    <img :style='{"width":"45%","margin":"187px 0 0 0","objectFit":"cover","display":"block","height":"215px"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"width":"55%","objectFit":"cover","display":"block","height":"402px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0","margin":"0 0 10px 0","color":"rgb(102, 102, 102)","top":"200px","width":"40%","lineHeight":"2","fontSize":"16px","position":"absolute","right":"140px","order":"4"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","top":"100px","textAlign":"center","display":"block","width":"80px","lineHeight":"32px","position":"absolute","right":"140px","order":"5"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#333333","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#333333","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"width":"100%","padding":"20px 280px","margin":"0 0 10px","background":"#efefef","order":"3"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"left"}'>
			<span :style='{"color":"#333333","fontSize":"36px"}'>公告信息</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
			<!-- 样式十 -->
		<div v-if="newsList.length" class="list list10 index-pv1" :style='{"width":"100%","padding":"10px","display":"flex","height":"auto"}'>
		  <div v-if="newsList.length>0" @click="toDetail('newsDetail', newsList[0])" :style='{"width":"430px","margin":"0","position":"relative","background":"#f5f5f5","height":"525px"}' class="new10-list-item animation-box">
		    <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + newsList[0].picture" alt="">
			<div :style='{"padding":"0 10px","fontSize":"16px","lineHeight":"28px","color":"#333","display":"none"}' class="new9-list-item-title line1">{{newsList[0].title}}</div>
		    <div :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"24px","color":"#666","display":"none"}' class="new9-list-item-descript line2">{{newsList[0].introduction}}</div>
			<div :style='{"padding":"0 10px","display":"none"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666","display":"none"}'></span>
			  <span class="text" :style='{"lineHeight":"1.5","fontSize":"12px","color":"#666","display":"none"}'>{{newsList[0].addtime}}</span>
			</div>
			<div :style='{"padding":"0 10px","display":"none"}'>
			  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].name}}</span>
			</div>
			<div :style='{"padding":"0 10px","display":"none"}'>
			  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].thumbsupnum}}</span>
			</div>
			<div :style='{"padding":"0 10px","display":"none"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].storeupnum}}</span>
			</div>
			<div :style='{"padding":"0 10px","display":"none"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
			  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].clicknum}}</span>
			</div>
			<div :style='{"padding":"0 10px","margin":"0 10px 10px","color":"#999","background":"#fff","display":"none","fontSize":"12px","lineHeight":"24px"}' class="new9-list-item-identification">新闻动态</div>
		  </div>
		  <div v-if="newsList.length>1" :style='{"margin":"0","position":"relative","flexDirection":"column","flex":"1","display":"flex","height":"auto"}'>
		    <div v-for="(item,index) in newsList" v-if="index<4 && index>0" :key="index" @click="toDetail('newsDetail', item)" :style='{"padding":"10px","borderColor":"#D8D8D8","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 1px","display":"flex","width":"100%","position":"relative","borderStyle":"solid","height":"175px"}' class="new10-list-item animation-box">
		        <div :style='{"width":"80%","padding":"0 10px","fontSize":"16px","lineHeight":"28px","color":"#769589"}' class="new9-list-item-title line1">{{ item.title }}</div>
				<div :style='{"padding":"0 20% 0 10px","overflow":"hidden","color":"#769589","width":"100%","fontSize":"14px","lineHeight":"25px","height":"75px"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
				<div :style='{"padding":"0 10px","top":"0","alignItems":"center","background":"#769589","display":"flex","width":"20%","position":"absolute","right":"0","justifyContent":"center","height":"100%"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
				  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
				  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","fontSize":"12px","lineHeight":"24px","color":"#999","background":"#fff","display":"none"}' class="new9-list-item-identification">新闻动态</div>
		    </div>
		  </div>
		</div>
		











		<div @click="moreBtn('news')" :style='{"border":"0","boxShadow":"0 2px 0 #769589","margin":"10px auto","textAlign":"center","display":"block","width":"80px","lineHeight":"32px"}'>
			<span :style='{"color":"#769589","fontSize":"12px"}'>更多</span>
			<i :style='{"color":"#769589","fontSize":"12px"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendremenshipin" class="recommend animate__animated" :style='{"padding":"50px 280px","margin":"0 0 10px","background":"#fff","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"left"}'>
		<span :style='{"color":"#333333","fontSize":"36px"}'>热门视频推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="remenshipinRecommend.length" class="list list12 index-pv1 list12remenshipin" :style='{"width":"100%","padding":"10px","background":"#fff","height":"auto"}'>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"width":"22%","margin":"10px 1.5%","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in remenshipinRecommend" :key="index" @click="toDetail('remenshipinDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>{{item.biaoti}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>up主:{{item.up}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>播放量:{{item.bofangliang}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>点赞量:{{item.dianzanliang}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>投币量:{{item.toubiliang}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"40px","fontSize":"18px","color":"#769589"}'>收藏量:{{item.shoucangliang}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('remenshipin')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"auto","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        remenshipinRecommend: [],





      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {




































			setTimeout(()=>{


















			},250)
		},
		recommendIndexClick12(index, name) {
			this['recommendIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		listClick14(index, name) {
			this['listIndex14' + name] = index
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__bounce'},
				{id:'about',css:'animate__fadeInLeft'},
				{id:'system',css:'animate__bounceInLeft'},
				{id:'animate_recommendremenshipin',css:'animate__fadeInLeft'},
				{id:'animate_newsnews',css:'animate__bounceInLeft'},
				{id:'msgs',css:'animate__bounce'},
				{id:'friendly',css:'animate__bounce'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 5,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "remenshipin/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.remenshipinRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 6px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 44px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 6px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 44px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	







	.home-preview .recommend .list12 .tab .item {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				margin: 0;
				color: #BBC1C4;
				display: flex;
				width: 150px;
				font-size: 16px;
				line-height: 44px;
			}
	
	.home-preview .recommend .list12 .tab .item:hover {
				color: #769589;
			}
	
	.home-preview .recommend .list12 .tab .item.active {
				box-shadow: 0 3px 0 #769589;
				color: #769589;
				border-color: #769589;
				border-width: 0;
				border-style: solid;
			}
	
	.home-preview .recommend .list12 .tab .more {
				cursor: pointer;
				padding: 0px 10px;
				margin: 0 10px;
				color: #BBC1C4;
				background: #fff;
				display: flex;
				line-height: 44px;
				align-items: center;
				min-width: 68px;
			}
	
	.home-preview .recommend .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .recommend .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}



</style>
