let Tasks ={
    template:'#add_task',
    props:{
        name:{
            type:String,
            required:true
        },
        selectedTask:{
            type:String
        }
    },
    computed:{
        isSelected(){
            return this.name === this.selectedTask
        }
    },
    methods:{
        select(){
            this.$emit('select',this.name)

        }
    }
}


let Taskpicker ={
    template:'#task-picker',
    components:{
        task:Tasks
    },
    data(){
        return{
            tasks:['Go to Gym','Prepare Breakfast','Go to work','rest'],

            selectedTask:null
        }
    },
    methods:{
        selectTask(task){
            this.selectedTask=task
        }
    }
}



new Vue({
    el:'#app',
    components:{
        'task-picker':Taskpicker
    }

    })