const botoes = document.querySelectorAll("button");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () =>{
        if(index===0){
            const opcaoCorreta = document.querySelector('input[value="60 Anos"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            } else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";

                
            }
        }
        if(index===1){
            const opcaoCorreta = document.querySelector('input[value="Av Marechal deodoro"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            } else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";
            }
            
        }
        if(index===2){
            const opcaoCorreta = document.querySelector('input[value="Muito"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            } else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";

                
            }
        }
        if(index===3){
            const opcaoCorreta = document.querySelector('input[value="Janeiro"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            } else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";

                
            }
        }
        if(index===4){
            const opcaoCorreta = document.querySelector('input[value="20.554"]');

            if(opcaoCorreta.checked){
                let correto = document.querySelectorAll(".correct")[index];

                correto.style.display = "block";

                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "none";
            } else{
                let incorreto = document.querySelectorAll(".incorrect")[index];
                incorreto.style.display = "block";

                
            }
        }
    })
})