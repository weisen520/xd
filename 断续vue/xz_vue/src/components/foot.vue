<template>
  <footer class="foot">
    <div class="footerContent">
       <div>
         <h1>广州哲西信息科技有限公司</h1>
         <p>联系地址：广州市天河区元岗横路33号慧通产业广场B1栋</p>
         <p>联系电话：020-87571630</p>
         <p>邮箱：service@zhexi.tech</p>
         <p>技术支持QQ：1148342100</p>
       </div>
       <div>
         <div>
           <h4>加QQ，咨询技术问题</h4>
           <img src="img/ABUIABACGAAg9dKS3QUoiojqggQwnAQ41wQ!200x200.jpg" alt="">
        </div>
        <div>
          <h4>关注微信公众号，随时管理</h4>
          <img src="img/ABUIABAEGAAgm47p3AUo3Ir06QcwzgM4zgM!200x200.png" alt="">
        </div>
       </div>
    </div>
    <div class="footerContent2">
      <hr>
      <div>
        <span>Copyright © 哲西信科</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src="img/ABUIABAEGAAg4sqG3QUo3pyGcTAYOBw.png" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>粤ICP备18079630号-1</span>
      </div>
      <div>增值电信业务经营许可证：国内互联网虚拟专用网业务：B1-20184615</div>
    </div>
  </footer>
  </template>
<script>
export default {
  
}
</script>
<style scoped>
  body{
  margin:0;padding:0;
}
.foot{
  background:url(../../public/img/foot.jpg) no-repeat center center;
  height:420px;
  width:100%;
   
}
.footerContent{
  margin:0 auto;
  width:80%;
  display: flex;
  justify-content:space-between;
}
.footerContent>div:first-child p{
  font-size: 14px;
  font-family:"微软雅黑";
  color: #a9a9a9;
}
.footerContent>div:last-child{
  width:450px;
  display: flex;
  margin-right:8%;
  justify-content:     space-between;
}

.footerContent>div:last-child>div>img{
  width:165px;
  height:165px;
}
h4{
  margin-top:30px;
  color: #fff;
  font-size:14px;
  font-weight:normal;
}
h1{
  color:#fff;
  margin-top:30px;
}
.footerContent2{
  margin:0 auto;
  width:80%;
}
hr{
  border:0.5px solid #fff;
  background-color:#fff;
  border-collapse: collapse;
}
.footerContent2>div:nth-child(2),.footerContent2>div:nth-child(3){
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  font-size: 12px;
  margin-top:30px;
}

</style>
