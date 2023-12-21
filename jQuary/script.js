// document.getElementById('login').addEventListener('click',function(){
        //     document.querySelector('.black-bg').classList.add('.showModal')
        // })

        $('#login').on('click', function(){
            $('.black-bg').addClass('showModal');
        });

        $('#close').on('click', function(){
            $('.black-bg').removeClass('showModal');
        })

        // if(조건){
        //     조건이 참일 때 실행할 코드
        // } else {
        //     조건이 참이 아닐 때 실행할 코드
        // }