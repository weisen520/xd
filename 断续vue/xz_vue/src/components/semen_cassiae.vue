<template>
    <div>

<div class="d1">
    <div class="container">
<div id="app">
    <my-head></my-head>
</div>
    <div class="row ">
        <div class="col-sm-5">
            <img src="img/p2/log.png" alt="" class="log"/>
        </div>
        <div class="col-sm-7 pp">
            <ul class="p2-nav">
                <li><router-link to="/">续断</router-link></li>
                <li><a href="#" class="p2-2">决明子</a></li>
                <li><a href="#">产品价格</a></li>
                 <li><a href="#">更新日志</a></li>
                <li><a href="#">API</a></li>
                <li> <router-link to="/login">注册/登录</router-link></li>
            </ul>
        </div>
    </div>
    <div class="row texthead ">
            <div class="col-12 simpleText ">
      <span >
        决明子
        </span>
            </div>
            <div class="col-12 simpleText2">
        <span>
           提供独享固定公网IP
        </span>
            </div>
        </div>
    <div class="row headdiv">
        <div class="col-6">
            <div class="headd1">
            <p>只要能上网就可以获得固定公网IP</p>
            <p>1台哲西云盒可支持10个独享带宽的固定公网IP</p>
            <p>公网地址支持多协议多服务访问内网业务</p>
            <img src="img/p2/ABUIABAEGAAgxd2E5wUogOD-9QUwuAI4LQ.png" alt=""/>
            </div>
        </div>
        <div class="col-6 heada">
            <div class="">
                <a href="javascript:;">马上试用，7天无理由退款</a>
            </div>
        </div>
    </div>
</div>
</div>
<div class="container">
    <div class="bodyd1">
        <span>部署方式</span>
    </div>
    <div class="bodyd2">
        <div>
        <span>旁路</span>
        <span>像普通电脑一样接入网络即可，</span>
        <span>不需要进机房，不改变任何网络拓扑</span>
        <p>1. DHCP网络环境</p>
        <p>2. 接上网线，插上电源线</p>
        <p>3. 云盒接入网络后可以访问互联网</p>
        </div>
    </div>
    <div class="bodyd3">
        <img src="img/p2/1.png" alt=""/>
    </div>
    <div class="bodyd4">
        <p>功能介绍</p>
        <p>——</p>
        <p>通过建立IP隧道，决明子为您提供独享的公网IP地址，黑白名单控制访问更安全</p>
    </div>
    <div class="bodyd5">
            <img src="img/p2/2.png" alt=""/>
            <span>一对一IP映射</span>
            <span>不限数量端<br>口映射</span>
            <span>决明子</span>
            <span>黑名单访问<br>控制</span>
            <span>白名单访问<br>控制</span>
    </div>
        <div class="bodyd6 row">
                <div class=" col-4">
                    <div class="d6-1">
                    <p>应用场景</p>
                    <p>———</p>
                    <p><span>一条</span>云专线可以做什么？</p>
                    <p>云专线可以广泛应用于各种外网连内
                        网的工作场景中。由于独享公网IP，
                        它更灵活，更稳定，更安全……</p>
                    </div>
             </div>
                <div class="d6-2 col-8">
                <div class="d6-2-1">
                    <div>
                    <img src="img/p2/3.png" alt=""/>
                    </div>
                    <p><span>研发型团队</span><br>
                        使用一条云专线可以同时：</p>
                    <p>【为开发部】映射Gitlab服务器，随时commit,push；</p>
                    <p>【为售前工程师】映射内部演示环境，与用户交流更方便；</p>
                    <p>【为售后工程师】映射Gitlab，在路上也可以提issue；</p>
                    <p>【为每个人】映射内网FTP服务器。</p>
                </div>
                <div class="d6-2-2">
                    <div>
                    <img src="img/p2/4.png" alt=""/>
                    </div>
                    <p><span>系统集成小微企业</span><br>
                        使用一条云专线可以同时：</p>
                    <p>【为实施工程师】映射数量<br>众多的服务器和网络设备，<br>远程实施，节省成本；</p>
                    <p>【为运维工程师】映射打印<br>机，pc，服务器，网络设<br>备，远程运维提高效率。</p>

                </div>
                <div class="d6-2-3">
                    <div>
                    <img src="img/p2/5.png" alt=""/>
                    </div>
                    <p><span>普通小微企业</span><br>
                        使用一条云专线可以同时：</p>
                    <p>【为老板】映射BI，OA系统，业绩数<br>据随时查看；</p>
                    <p>【为财务】远程开票，访问财务系<br>统；</p>
                    <p>【为普通员工】映射办公PC，OA，<br>方便随时处理公司业务。</p>
                </div>
             </div>
       </div>
</div>
<my-foot></my-foot>
</div>
</template>
<script>
import head from "./head1"
import foot from "./foot"
export default {

    components:{"my-head":head,"my-foot":foot}
}
</script>
<style scoped>
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto{
    padding:0;
}
.container{
    padding:0;
}
.d1{
    background:url("../../public/img/p2/1.jpg") no-repeat center center;
    background-size:cover;
    height:1000px;
}
.log{
    width:61px;height:70px;
    margin-left:30px;
}
.pp{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
.p2-nav{
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding:0;
    /*margin-top:35px;*/
    margin-bottom:0px;
}
.p2-nav>li>a{
    text-decoration:none;
    display: block;
    color:#fff;
    width:100px;
    height:42px;
    text-align: center;
    line-height:42px;
    border-radius:20px;
}
.p2-2{
    background: -webkit-linear-gradient(top, #27b1f6 0%, #0aa1ed 100%);
}
.p2-nav>li>a:hover{
    background: -webkit-linear-gradient(top, #27b1f6 0%, #0aa1ed 100%);
}
.simpleText,.simpleText2{
    font-size:60px;
    color:#fff;
    font-weight:bold;
}
.simpleText2{
    font-size:120px;
}
.texthead{
    margin-top:50px;
}
p{
    margin:0;
}
.headd1{
    font-size:14px;
    color:rgb(75,75,75);
}
.headd1>p{
    margin-bottom:10px;
}
.headd1>img{
    margin-top:20px;
}
.headdiv{
    margin-top:60px;
}
.heada{
    /*color:#fff;*/
    font-size:30px;
    /*display: block;*/
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.heada>div>a{
    text-decoration:none;
    color:#fff;
    display: block;
    width:431px;
    height:60px;
    text-align: center;
    line-height:60px;
    border-radius: 50px;
    background: rgba(0,160,233,1);
}
.bodyd1{
    font-size:36px;
    font-weight:bold;
    text-align: center;
    margin-top:80px;
}
.bodyd2{
    display: flex;
    justify-content: center;
    margin-top:80px;
    margin-left:410px;
}
.bodyd2>div>span:first-child,.bodyd2>div>span:nth-child(2){
    font-weight:bold;
}
.bodyd2>div>span:first-child{
    color: rgb(31, 135, 232);
    font-size:36px;

}
.bodyd2>div>span:nth-child(2),.bodyd2>div>span:nth-child(3){
    font-size:13px;
}
.bodyd2>div>span:nth-child(3){
    color:red;
}
.bodyd2>div>p{
    color:rgb(102, 102, 102);

}
.bodyd3{
    text-align: center;
}
.bodyd3>img{
    transition:transform .3s linear;
}
.bodyd3>img:hover{
    transform:scale(1.1);
}
.bodyd4{
    text-align: center;
    margin-top:100px;
}
.bodyd4>p:first-child{
    font-size:36px;
    font-weight:bold;
}
.bodyd4>p:nth-child(2){
    font-size:26px;
}
.bodyd4>p:last-child{
    font-size:16px;
    color: rgb(150, 125, 125);
}
.bodyd5:after{content:"";display:block;clear:both;}
.bodyd5{
    position:relative;
    color: rgb(102, 102, 102);
    height:650px;
}
.bodyd5>img{
    /*text-align:right;*/
    left:168px;
}
.bodyd5>span,.bodyd5>img{
    position:absolute;
}
.bodyd5>span:nth-child(2){
    left:189px;
    top:78px;
}
.bodyd5>span:nth-child(3){
     left:813px;
     top:66px;
     text-align: center;
 }
.bodyd5>span:nth-child(4){
    left:545px;
    top:200px;
    text-align: center;
    color:#fff;
    font-weight:bold;
    display: block;
    background: rgba(0,160,233,1);
    width:146px;
    height:44px;
    line-height:44px;
    border-radius:30px;
}
.bodyd5>span:nth-child(5){
    top:482px;
    left:259px;
    text-align: center;
}
.bodyd5>span:last-child{
    left:848px;
    top:462px;
    text-align: center;
}
.bodyd6{
    clear:both;
    display:flex;
    justify-content: space-around;
    margin-bottom:50px;
}
.d6-1{
    width:224px;
    margin-left: 40px;
}
.d6-1>p:first-child{
    font-size:36px;
    color:rgb(75,75,75);
    font-weight: bold;
}
.d6-1>p:nth-child(3){
    font-size:20px;
}
.d6-1>p:nth-child(3)>span{
    color:red;
    font-weight:bold;
}
.d6-1>p:nth-child(4){
    font-size:14px;
    margin-top:20px;
    line-height:25px;
    color:rgb(75,75,75);
}
.d6-2{
    display:flex;
    /*justify-content: space-around;*/
}
.d6-2-1,.d6-2-2,.d6-2-3{
    width:216px;
    height:410px;
    border:1px solid #dddddd;
    margin-left: 20px;
    font-size:12px;
    color:rgb(102,102,102);
    line-height: 25px;
    padding:10px;
}
.d6-2-1>div>img{
    width:199px;
    height:113px;
}
.d6-2-1>p:nth-child(2)>span,.d6-2-2>p:nth-child(2)>span,.d6-2-3>p:nth-child(2)>span{
     font-size:16px;
 }
.d6-2-1>p:nth-child(2),.d6-2-2>p:nth-child(2),.d6-2-3>p:nth-child(2){
    color:#16181b;
    font-weight:bold;
}
.d6-2-1>p:nth-child(2),.d6-2-2>p:nth-child(2){
    margin-top:25px;
}
.d6-2-2>div>img{
    width:123px;
    height:113px;
}
.d6-2-3>div>img{
    width:204px;
    height:140px;
}
.d6-2-1>div,.d6-2-2>div,.d6-2-3>div{
    text-align: center;
}
</style>
