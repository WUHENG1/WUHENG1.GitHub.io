// JavaScript Document

        var x,y
        var CanBool = 0

        function canMove() {
            x = document.body.scrollLeft + event.clientX
            y = document.body.scrollTop + event.clientY
            CanBool = 1
        }
	
        function move() {
            if (CanBool) {
                ball.style.posLeft = x 
                ball.style.posTop = y
				
               // x += 10 //减左加右
               // y -= 10 //减上加下
            }
            setTimeout('move()', 100)
        }
		
		 function move1() {
            alert("捉到虫子1")
            Insect1.style.display = "none"
        }
		function move2() {
            alert("捉到虫子2")
            Insect2.style.display = "none"
        }
		function move3() {
            alert("捉到虫子3")
            Insect3.style.display = "none"
        }
		
		function move4() {
			   
			   Insect1.style.left = Math.random() * 1500
               Insect1.style.top = Math.random() * 800
			   Insect2.style.left = Math.random() * 1500
               Insect2.style.top = Math.random() * 800
			   Insect3.style.left = x
               Insect3.style.top = y

                x += 10 //减左加右
                y -= 10 //减上加下
			   setTimeout('move4()', 1500)
            }
           



