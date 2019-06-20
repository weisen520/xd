<template>
    <div class="container">
            <div id="banner" >
                <div id="btn-left"></div>
                <ul id="ul-img" :style="ulImg" :class="transition">
                    <li><img src="./image/carousel_item/carousel-7.jpg" alt=""></li>
                    <li><img src="./image/carousel_item/carousel-1.jpg" alt=""></li>
                    <li><img src="./image/carousel_item/carousel-2.jpg" alt=""></li>
                    <li><img src="./image/carousel_item/carousel-3.jpg" alt=""></li>
                    <li><img src="./image/carousel_item/carousel-7.jpg" alt=""></li>
                </ul>    
                <ul id="ul-idxs">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div id="btn-right"></div>     
        </div> 
    </div>
</template> 
<script>
export default {
    data() {
        return {
            i:0,
            width:"100%",
            count:4,
            time:500,
            transition:"transition",
            ulImg:"",

        }
    },
    methods: {
        moveTo(to){
            
            if(to==undefined){
                to=this.i
            }
            if(i==0){
                if(to>this.i){
                    this.transition="transition"
                }else{
                    this.transition="";
                    this.ulImg=-this.count*this.width;
                    setTimeout(function(){
                        moveTo(this.count-1)
                    },200)
                    return;
                }
            }
            this.i=to;
            this.ulImg={marginLeft:`${-this.i}*${this.width}px`}
            
        }
    },
    
}
</script>
<style scoped>
    /**{margin:0;padding:0;};*/
    .active{
        background:blue !important;
    }
    #ul-idxs{
        width:150px;
        display: flex;
        position:absolute;
        /*bottom:50px;*/
        bottom:50px;
        margin-bottom:0;
        left:50%;
        margin-left:-75px;
        justify-content: space-between;
    }
    #ul-idxs>li{
       width:15px;
        height:15px;
        display:flex;
        border-radius:50%;
        background:#fff;
        
    }
    #btn-left,#btn-right{
        width:5%;
        height:100%;
        position:absolute;
        top:0;
    }
    #btn-left:hover,#btn-right:hover{
        background-size:40px 70px;
    }
    #btn-left{
        background:url(./image/carousel_item/left_ar.png) no-repeat center;
        left:3%;
    }
     #btn-right{
        background:url(./image/carousel_item/right_ar.png) no-repeat center;
        right:3%;
    }
    .container{
        margin:0 auto !important;
    }
    #banner{
        width:100%;
        overflow:hidden;
        position:relative;
    }
    #ul-idxs,#ul-img{
       list-style: none;
       padding-left:0;
    }
    #ul-img{
        display:flex;
        width:500%;
        
    }
    #ul-img.transition{
        transition:all .5s linear;
    }
    #ul-img>li>img{
        width:100%;
        /*width:1000px;*/
    }
</style>
