let playerScore = 0;
        let computerScore = 0;
        let playerInput = "";
        let rounds = 0;
        let message = "";

        document.getElementById("rock").addEventListener("click", function (){
            let playerInput = "rock";
            rounds = rounds + 1;    
            let computerselection = computerPlay();             
            playRound(playerInput, computerselection);
            if (rounds > 4) {
                compute_result(playerScore, computerScore);  // call function to compute final result after 5 rounds of game
            } 
        });

        document.getElementById("paper").addEventListener("click", function (){
            let playerInput = "paper";
            rounds = rounds + 1; 
            let computerselection = computerPlay();             
            playRound(playerInput, computerselection);
            if (rounds > 5) {
                compute_result(playerScore, computerScore);  // call function to compute final result after 5 rounds of game
            } 
        });

        document.getElementById("scissor").addEventListener("click", function (){
            let playerInput = "scissor";
            rounds = rounds + 1;
            let computerselection = computerPlay();             
            playRound(playerInput, computerselection);
            if (rounds > 4) {
                compute_result(playerScore, computerScore);  // call function to compute final result after 5 rounds of game
            } 
        });
        
     
        
/* Function generate computer's answer */
        function computerPlay(){
            let num = Math.floor(Math.random() * 3);   // this will return 3 random numbers
            switch (num) {
                case 0:
                    return "rock";
                    break;
                case 1:
                    return "paper";
                    break;
                case 2:
                    return "scissor";
                    break;
            }
        }

        function playRound(playerselection, computerselection) {
            if ((computerselection == "rock") && (playerselection == "paper")) {
                playerScore = playerScore + 1 ;
                let message = "You win! Paper beats rock";
                print_round_score(message);
            } else if ((computerselection == "rock") && (playerselection == "scissor")) {
                computerScore = computerScore + 1;
                let message = "You loose! Rock beats scissor";
                print_round_score(message);
            } else if ((computerselection == "rock") && (playerselection == "rock")) {
                let message = "it is a draw";
                print_round_score(message);
            } else if ((computerselection == "paper") && (playerselection == "rock")) {
                computerScore = computerScore + 1;
                let message = "You loose! Paper beats rock";
                print_round_score(message);
            } else if ((computerselection == "paper") && (playerselection == "scissor")) {
                playerScore = playerScore + 1 ;
                let message = "You win! Scissor beats paper";
                print_round_score(message);
            } else if ((computerselection == "paper") && (playerselection == "paper")) {
                let message = "it is a draw";
                print_round_score(message);
            } else if ((computerselection == "scissor") && (playerselection == "rock")) {
                playerScore = playerScore + 1 ;
                let message = "You win! Rock beats scissor";
                print_round_score(message);
            } else if ((computerselection == "scissor") && (playerselection == "paper")) {
                computerScore = computerScore + 1;
                let message = "You loose! Scissor beats paper";
                print_round_score(message);
            } 
        }

        function print_round_score(message){
            const msg = document.querySelector(".results");
            const line = document.createElement('p');
            line.textContent = message;
            msg.appendChild(line);
        }

        /* Function to show final results after five rounds of game play   */
        function compute_result(playerScore, computerScore) {
            if (playerScore > computerScore){
                const para = document.querySelector(".results");
                const res = document.createElement('h5');
                res.textContent = "You are the winner! Your Score :" + playerScore + " & Computer's Score :" + computerScore ;
                para.appendChild(res);
                
            } else if (playerScore == computerScore) {
                const para = document.querySelector(".results");
                const res = document.createElement('h5');
                res.textContent = "It is a draw! Your Score :" + playerScore + " & Computer's Score :" + computerScore;
                para.appendChild(res);
                
            } else {
                const para = document.querySelector(".results");
                const res = document.createElement('h5');
                res.textContent = "You are the looser! Your Score :" + playerScore + " & Computer's Score :" + computerScore;
                para.appendChild(res);
            }
            const para = document.querySelector(".results");
            const but = document.createElement('button');
            but.textContent = "Reset Scores";
            but.style.padding = '10px';
            but.style.fontSize ='14px';
            but.style.marginLeft = '550px';
            para.appendChild(but);
            but.addEventListener("click", reset_score);
        }

        function reset_score(){
            window.location.reload();
            
        }