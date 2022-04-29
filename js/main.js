var app=new Vue({
    el:"#all",
    data:{
        photoname:"asd"
    },
    methods:{
        getfocus:function(){
            this.$refs.inputVal.focus();
        }
    },
})
app.photoname='./img/p'+String(parseInt(Math.random()*2)+1)+'.jpg'