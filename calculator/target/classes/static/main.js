new Vue({
    el: '#app',
    data(){
        return {
            string: '0',
            temp: 'n',
            oper: 'n'
        }
    },
    methods:{
        updateLabel(cha){
            if(this.string == "0")
                this.string=String(cha)
            else
                this.string=this.string+String(cha)
            if(this.string.length>11)
                this.string=this.string.substring(0,11)

        },
        clearLabel() {
            this.string='0'
            this.temp='n'
            this.oper='n'
        },
        putPoint() {
            if(this.string=="-")
                this.string+="0."
            if(!this.string.includes("."))
                this.string+="."
        },
        putNeg() {
            if(this.string=="0")
                this.string="-"
        },
        del() {
            if(this.string.length==1)
                this.string="0"
            else
                this.string=this.string.substring(0,this.string.length-1)
        },
        equal() {
            if(this.temp!='n' && this.oper != 'n'){
                axios.post('http://localhost:8095/calc',{
                    num1:this.string,
                    num2:this.temp,
                    op:this.oper
                }).then(Response=> this.string=Response.data);
                this.temp='n'
            }
        },
        add() {
            this.oper='+'
            if(this.temp!='n'){
                axios.post('http://localhost:8095/calc',{
                    num1:this.string,
                    num2:this.temp,
                    op:this.oper
                }).then(Response=> this.string=Response.data);
                this.temp='n'
            }
            else{
                if(this.string!='-'){
                    this.temp=this.string
                    this.string='0'
                }
            }

        },
        sub() {
            this.oper='-'
            if(this.temp!='n'){
                axios.post('http://localhost:8095/calc',{
                    num1:this.string,
                    num2:this.temp,
                    op:this.oper
                }).then(Response=> this.string=Response.data);
                this.temp='n'
            }
            else{
                if(this.string!='-'){
                    this.temp=this.string
                    this.string='0'
                }
            }
        },
        mult(){
            this.oper='*'
            if(this.temp!='n'){
                axios.post('http://localhost:8095/calc',{
                    num1:this.string,
                    num2:this.temp,
                    op:this.oper
                }).then(Response=> this.string=Response.data);
                this.temp='n'
            }
            else{
                if(this.string!='-'){
                    this.temp=this.string
                    this.string='0'
                }
            }
        },
        div(){
            this.oper='/'
            if(this.temp!='n'){
                axios.post('http://localhost:8095/calc',{
                    num1:this.string,
                    num2:this.temp,
                    op:this.oper
                }).then(Response=> this.string=Response.data);
                this.temp='n'
            }
            else{
                if(this.string!='-'){
                    this.temp=this.string
                    this.string='0'
                }
            }
        },
        root() {
            this.oper='r'
            axios.post('http://localhost:8095/calc',{
                num1:this.string,
                num2:0,
                op:this.oper
            }).then(Response=> this.string=Response.data);
            this.temp='n'
        },
        oneOver() {
            this.oper='/'
            this.temp=this.string
            axios.post('http://localhost:8095/calc',{
                num1:this.temp,
                num2:1,
                op:this.oper
            }).then(Response=> this.string=Response.data);
            this.temp='n'
        },
        percent() {
            this.oper='/'
            axios.post('http://localhost:8095/calc',{
                num1:100,
                num2:this.string,
                op:this.oper
            }).then(Response=> this.string=Response.data);
            this.temp='n'
        },
        power2() {
            this.oper='*'
            axios.post('http://localhost:8095/calc',{
                num1:this.string,
                num2:this.string,
                op:this.oper
            }).then(Response=> this.string=Response.data);
            this.temp='n'
        },
    },
    
})
