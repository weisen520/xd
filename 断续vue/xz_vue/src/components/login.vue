<template>
    <div>
<div class="cont">
    <div class="row ">
     <div class="col-12">
        <div class="head d-flex justify-content-between p-3">
            <img src="img/login/logo-word-alpha.3d9d8ba.png" alt="" class="logon"/>
            <a href="javascript:;" class="text-muted pr-4 h6">简体中文</a>
        </div>
     </div>
    </div>
    <div class="row">
        <div class="d-sm-none col-lg-5 d1 d-lg-block">
            <ul class="ul-1 ">
                <li class="li-1"><p class="h3">续断，稳定第一</p></li>
                <li><span></span>
                    <p class="">核心功能10倍测试代码，产品稳隧道才会稳 </p></li>
                <li><span></span>
                    <P class="">业界首次使用QUIC协议，更快更稳定</P></li>
                <li><span></span>
                    <P class="">一条隧道两个协议，双保险 </P></li>
            </ul>
            <ul class="ul-1 ul-2">
                <li class="li-1"><p class="h3">决明子，企业高性价比专线方案</p></li>
                <li><span></span>
                    <p class="">一台哲西云盒，独享10个公网IP </p></li>
                <li><span></span>
                    <P class="">每个公网IP不限制端口映射数量</P></li>
                <li><span></span>
                    <P class="">访问黑白名单控制，业务更安全 </P></li>
            </ul>
        </div>
        <div class="col-md-2 d-sm-none d-lg-block">
            <div>
                <div class="xian"></div>
            </div>
        </div>
        <div class="m-sm-4 m-lg-0 col-lg-5 col-sm-12 d-sm-flex justify-content-center justify-content-lg-start" >
            <div class="signin ">
                <table></table>
                <ul class="ul-3">
                    <li>微信登陆</li>
                    <li>账户登陆</li>
                </ul>
                <div>
                    <img src="img/login/061hOIChkMmzNAbq.jpg" alt=""/>
                </div>
                <a href="#">扫码无效？点击这里</a>
                <hr/>
                <span>首次扫码自动注册</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 text-lg-right text-sm-center">
            <img src="img/login/2.png" alt="" />
        </div>
        <div class="col-12">
            <div class="text-center text-muted size m-sm-4 m-lg-0">
                <span>Copyright © 哲西信科 服务协议</span>
            </div>
        </div>
    </div>
</div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
body{padding:0;margin:0;}
.cont{
    background:url("../../public/img/login/1.png") no-repeat center center ;
    width:100%;min-height: 100vh;;
    background-size:cover;
}
.logon{width:180px;height:55px;}
/*.d1{margin-left:100px;}*/
.head{margin-bottom:50px;}
.ul-1{margin-left:100px;margin-top:50px;}
.ul-1>li{
    list-style: none;
    display: flex;
    align-items: center;
}
.ul-1>li>p{
    margin:0;
    font-size:14px;
    color:#888888;
    padding:5px;
}
.ul-1>.li-1>p{
    color:#21b1ed;
    font-weight:bold;
    font-size: 16px !important;
    margin-bottom:25px;
}
.ul-1>li>span{
    display:inline-block;
    width:12px;
    height:12px;
    border-radius: 50%;
    background:#888888;
    margin-right:15px;
}
.ul-2{
    margin-top:100px;
}
.xian{
    width:1px;
    height:500px;
    background-image: linear-gradient(0deg,#222a41,#2f4f71,#222a41);
}
.signin{
  width:260px;
    height:376px;
    background:#fff;
}
.ul-3{
    display: flex;
    list-style:none;
    padding:0;margin-top:10px;
    justify-content: center;
}
.ul-3:before{content:"";display:table;}
.ul-3>li{
    width:110px;
    height:40px;
    text-align: center;
    line-height:40px;
    border-bottom:1px solid #ddd;
}
.signin>div>img{
    width:200px;
    height:200px;
}
.signin>div{
    margin-top:15px;
    width:200px;
    margin-left:30px;
    /*text-align: center;*/
    border:1px solid #E2E2E2;
}
.signin>a{
    display: inline-block;
    font-size:12px;
    text-decoration: none;
    margin-top:25px;
}
.signin{
    text-align: center;
    position:relative;
    border-radius: 3px;
}
.signin>hr{
    color:#ddd;
    width:200px;
    margin-top:35px;
}
.signin>span{
    position:absolute;
    font-size:12px;
    left: 84px;
    top:329px;
}
.signin{
    margin-top:50px;
}
.size{
    font-size:12px;
}

</style>
