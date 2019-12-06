
new Vue({
    el: '#desafio',
    data:{
        nome: 'Mauricio',
        idade: 31,
        linkImagem: 'https://imagens.canaltech.com.br/171286.315334-Google-Logo.jpg'
    },
    methods:{
        idadeVezes3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }
    }
    
})