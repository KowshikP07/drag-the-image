var zindex=1;
        class Paper{
            holdingpaper=false;
            currentmoX=0;
            currentmoY=0;
            prevmoX=0;
            prevmoY=0;
            velx=0;
            velY=0;
            paperposX=0;
            paperposY=0;
            init(paper){
            paper.addEventListener('mousedown',(e)=>{
                this.holdingpaper=true;
                paper.style.zIndex=zindex;
                zindex+=1
                if(e.button===0){
                this.prevmoX=this.currentmoX;  
                this.prevmoY=this.currentmoY;
                }
            });  
            paper.addEventListener('mousemove',(e)=>{
                this.currentmoX=e.clientX;
                this.currentmoY=e.clientY;
                this.velX=this.currentmoX-this.prevmoX;
                this.velY=this.currentmoY-this.prevmoY;
                if(this.holdingpaper){
                this.paperposX+=this.velX;
                this.paperposY+=this.velY;
                paper.style.transform = `translate(${this.paperposX}px, ${this.paperposY}px)`;
                this.prevmoX = this.currentmoX;
                this.prevmoY = this.currentmoY;
                }
            });
            paper.addEventListener('mouseup',(e)=>{
                this.holdingpaper=false;
            });

        }
    }
        const p=Array.from(document.querySelectorAll(".box1"));
        p.forEach(paper=>{
            const letter=new Paper();
            letter.init(paper);
        })

        const heart = document.querySelector(".heart");
        const music = new Audio('song.mp3');
        let musicPlaying = false;
        
        
        function toggleMusic() {
          if (musicPlaying) {
            music.pause();
            musicPlaying = false;
          } else {
            music.play();
            musicPlaying = true;
          }
        }
        
        heart.addEventListener("click", toggleMusic);
        