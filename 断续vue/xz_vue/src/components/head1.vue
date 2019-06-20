<template>
    <div class="container">
        <div class="c1">
    <div class="row">
    <div class="col-12 content d-flex justify-content-end">
    <ul class=" ul-size p-0 m-0 ">
    <li class="p-0 ">
    <img class="ml-2" src="img/national_cn.png" alt=""/>&nbsp;
    <span class="text-info ">中文</span>
    <img class=" rotate" src="img/locater_Arrow3.png" alt=""/>
    </li>
    <li class="p-0 li-last">
    <img class="ml-2" src="img/national_en.png" alt=""/>&nbsp;
    <span class="text-info ">English</span>
        <!--<img class="ml-4" src="../img/locater_Arrow3.png" alt=""/>-->
    </li>
    </ul>
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
  .content{
    padding:0;
    margin-top:10px;
}
.c1{  height:50px;}
.ul-size{
    width:103px;
    /*height:70px;*/
    list-style: none;
    background:rgba(255,255,255,0.8);
    border-radius:4px;
    cursor:pointer;
}
.ul-size>li{height:27px;}
.ul-size>.li-last{height:0;overflow:hidden;transition:all .5s linear;}
.ul-size:hover>li>.rotate{
    transform:rotate(180deg);
}
.ul-size:hover>.li-last{
    height:27px;
}
.rotate{transition:transform .5s linear; margin-left:30px;}
.ul-size>li>span{
    font-size:12px;
}
.ul-size>li:last-child:hover{background:#fff;}
</style>