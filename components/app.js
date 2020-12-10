Vue.component('task-picker',{
    template:'#task-picker',
    data(){
        return{
            tasks:['Go to Gym','Prepare Breakfast','Go to work','rest'],
        }
    }
})

Vue.component('task',{
    template:'#add_task',
    props:{
        name:{
            type:String,
            required:true
        }
    }
})

new Vue({
    el:'#app',

    })