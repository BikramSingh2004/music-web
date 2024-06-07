const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MY_MUSIC</title>
      <link rel="stylesheet" href="music.css">
      <link rel="shortcut icon" href="favicon2.ico" type="image/x-icon">
  
  </head>
  
  <header>
    <nav class="nav">
      <h1 class="name">LoVe_MuZic</h1>
      <containeer class="con">
      <ul >
      <li class="list1"> <a href="#home">Home</a></li>
      <li class="list1"><a href="#music">Music</a></li>
      <li class="list1"><a href="#videos">Videos</a></li>
      <li class="list1"> <a href="#cards">Premium</a></li>
      <li id="login" class="list1"><a href="login.html">Login / Register</a></li>
      <!-- <li><a href="#music">Contact</a></li> -->
      </ul>
      </containeer>
    </nav>
  </header>
  <body>
  <style> 
  body{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    background-color: rgb(25, 23, 30);
}
header{
   margin: 0%;
}
 nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: rgb(33, 33, 178);
    color: aliceblue;
    margin:0px;
    /* position: fixed; */
 }
 .name{
   background: linear-gradient(#4AC29A #BDFFF3);
 }
 h1{
    margin:10px 20px;
    font-size: 30px;
    padding: 0%;
 }
 .con{
    display: flex;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: larger;
    margin-right: 40px;
    color: rgb(151, 64, 69);
 }
 ul{list-style: none;
    /* padding: 0; */
    margin: 20px;
    display: flex;
    /* justify-content:space-between; */
 }
 a{
   color: aliceblue;
 }
 li{color: aliceblue;
   /* background-color: rgb(84, 194, 143); */
   margin:0px 10px ;
   padding: 2px;
 }
 .list1:hover{
    color: aquamarine;
    background-color: rgb(66, 203, 185);
    border-radius: 10px;
 }
 .intro{
   display: flex;
   /* justify-content:space-between; */
   height: 700px;
  background-image: url(https://media.istockphoto.com/id/483495210/photo/concert-crowd.jpg?b=1&s=612x612&w=0&k=20&c=6qmVrs0wu4gwKm3aOKlz3sWjG46zFF-VfYyVaYJdp1g=);
 /* background-image: url(music1.jpg); */
  background-repeat: no-repeat;
  background-size: cover; 
}
  .text{
   color: rgb(224, 221, 37);
   font-size: 1.6rem;
   padding: 1.2rem 0px 0px 1rem;
   padding: 9rem 0rem 0rem 15rem;

   font-family: cursive;
  }
  .bold{
   display: inline-block;
   width: auto;
   /* padding: 9rem 0rem 0rem 15rem; */
   letter-spacing:0em;
   font-size: 5rem;
  }
section{
   padding: 0%;
   margin: 0px;
   flex-wrap: wrap;
   display: flexbox;
}
.section2{
   background-color: #c9503b;
   height: 800px;
   /* width: 800px; */
   background-image: url(music.jpg);
   background-position: center;
   background-repeat: no-repeat;
   background-size:contain ;
   width: 100%;
   display: flex;
   align-items: flex-end;
   background-attachment: fixed;

}
.section4{
      background-color: #ceedf2;
      height: 600px;
      background-image: url(card.jpeg);
      background-repeat: no-repeat;
      /* background-size: contain; */
      background-position: center;
   background-attachment: fixed;
}
footer{
   height: 250px;
   font-size:1.6rem;
   background-color: rgb(41, 40, 40);
}
.list2:hover{
   /* font-size: xx-large; */
   color: rgb(61, 206, 239);
}
.circle{
   display: flex;
   position: absolute;
   width: 20%;
   height: 200px;
   border-radius: 3.1rem;
   background-color: rgb(91, 124, 214);
  margin: 1.5rem;
  transition: all 1s  ease-in-out 0.5s ;
}

#CIRCLE1{
   background-image: url(SONG1.PNG);
   background-size: cover;
   align-items: center;
   justify-content: space-around;
   margin-left: 10%;
}
#CIRCLE2{
   background-image: url(tumtak.png);
   background-size: cover;
   align-items: center;
   justify-content: space-around;
   margin-left:33%;
}
#CIRCLE3{
   background-image: url(quafirana.png);
   background-size: cover;
   align-items: center;
   justify-content: space-around;
   margin-left: 54%;
}
audio{
   height:25px;
   width:8rem;
}
/* .section2:hower{
   display: flex;} */
.circle:hover{
   width: 50%;
   height: 400px;
   /* position:relative; */
   /* margin-left: 10%; */
   /* padding: 0%; */
   z-index: 3;
   float: left;
   /* display:flex; */
}
/* .sound{
   width: 120px;
   border-radius: 30px;
   height: 18px;
   background-color: rgb(215, 250, 234);
   margin:25px;
} */
 .logo{
   display: grid;
   height: 40px;
   /* margin-top: 180px; */
   color: #eea231;
   padding: 150px 0px  0px 10px  ;
   padding: 9.37rem 0rem 0rem 0.625rem;
 }

 .logo a{
   display: inline-block;
   width: fit-content;
   font-size: 3rem;
   transition: all 1s ease;
   /* animation: bounce 2s ease-in-out infinite ; */
   animation : bounce 1s; 
   animation-direction : alternate; 
   animation-iteration-count : infinite;
 }
 @keyframes bounce{
   from { 
      transform: translate3d(0, 0, 0); 
  } 
  to { 
      transform: translate3d(0, 50px, 0); 
  }
 }
 .neon{ display: inline;
   /* width: fit-content; */
   height: 80px;
   margin-bottom: 700px;
   font-size: xx-large;
   /* background-color: #0b0b0b; */
   color: #f5f8f9;
   text-shadow: 0 0 10px #fff,
   0 0  20px #fff,
   0 0 30px #00f,
   0 0 40px #00f,
   0 0 50px #00f,
   0 0 60px #00f;
 }

 .section3{
   background-color: #dfd8d8;
   height: 700px;
   background-image: url(vid1img.webp);
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
   background-attachment: fixed;
   display: flex;
   /* justify-content: space-around; */
   padding: 0%;
}
 .rect{
   /* display: flex; */
   width: 30%;
   height: 400px;
   background-color: #851c1c;
   position:absolute;
   /* float: left; */
   /* margin: 150px 40px 20px 50px; */
   margin: 9.4rem 2.5rem 1.25rem 3.12rem;
   
  transition: all 1s  ease-in-out 0.3s ;
 }
 #rect2{
   margin-left:35%;
 }
 #rect3{
   margin-left: 66%;
 }
 .rect:hover{
   width: 40%;
   height: 600px;
   z-index: 2;
   
   /* display: flex; */
   /* margin-left: 3rem; */

}
  </style>
      <section id="home" class="section1">
        <div  class="intro">
          <span class="logo" >
              <a id="facebook" href="https://www.facebook.com/karanraj.balsudarsun"> <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-facebook_545793-1680.jpg?w=740" width="40px" height="40px" alt=""></a>
              <a id="linkedin" href="https://www.linkedin.com/in/bikram-singh-62199a24b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPpzRmsvMSKeiiomotDVU0w%3D%3D" ><img src="https://tse3.mm.bing.net/th?id=OIP.ozDiSGJlUqI6815cRlJiNAHaHa&pid=Api&P=0&h=180" width="40px" height="40px" alt=""></a>
              <a id="insta" href="https://www.instagram.com/___bikram_singh___/#"> <img id="insta" src="https://www.eckxstudio.com/wp-content/uploads/2020/05/insta_logo_png-e1589911682726.png" width="40px" height="40px" alt="insta"></a>
              <a href="https://www.gmail.com/bikram.2201120cs@iiitbh.ac.in"> <img src=" https://img.freepik.com/premium-photo/email-address-icon-logo-communication-isolated-transparent-background-email-address-contact-3d-rendering_640106-1102.jpg?w=30" width="40px" height="40px" alt="gmail" data-content="gmail" ></a>
              <a href=""><img src="https://img.freepik.com/free-psd/youtube-logo-icon-isolated-3d-render-illustration_47987-9790.jpg?size=626&ext=jpg&ga=GA1.1.1410074874.1716443307&semt=ais_user_b" width="40px" height="40px" alt="twiter"></a>
          </span>
        <div class="text"> 
        <p class="bold">love_<span style="color:rgb(211 60 109);">Your</span>_<span style="color: rgb(76, 51, 235);">Music</span>. </p>
        <p>Hey Enjoy  your Music Daily</p>
         <p>try now</p>
        </div>
        </div> 
      </section>
      <hr>
      
      <!-- <audio src="09 Tumtak.mp3"></audio> -->
     <section id="music" class="section2">
      <p class="neon">MUSIC SECTION</p>
      <div  id="CIRCLE1" class="circle">theNight_wemet</div>
      <div  id="CIRCLE2"class="circle">
        <audio controls><source src="09 Tumtak.mp3" type="audio/ogg"></audio> 
      </div>
      <div id="CIRCLE3" class="circle">
        <audio controls> <source src="03 - Qaafirana.mp3"type="audio/ogg"> </audio>
      </div>
     
      <!-- <div class="sound">volume</div> -->
     </section>
     <hr>
     <section id="videos" class="section3">
      <P class="neon"> VIDEOS SECTION</P>
      <div  id="rect1"class="rect"> Machayenge
        <!-- <div style=" color: rgb(160, 228, 240); font-size:xx-large;">machayenge</div> -->
  
        <video controls src="Firse Machayenge.mp4" width="100%" height="100%"></video>
      </div>
      <div  id="rect2"class="rect"> Believer
        <video controls src="Believer.mp4" width="100%" height="100%"> </video>
      </div>
      <div  id="rect3" class="rect"> horn blow
        <video controls src="HORNN_BLOW.mp4" width="100%" height="100%" > </video>
      </div>
     </section>
  
     <!-- <section id="cards" class="section4">
      <P class="neon"> card SECTION</P>
     </section> -->
      
     <footer>
      <ul>
        <li class="list2">home</li>
        <li class="list2">contacts</li>
        <li class="list2">musuc</li>
        <li class="list2">cards</li>
        <li class="list2">videos</li>
        <li id="login" class="list2">Login</li>
      </ul>
      <!-- <div class="logo" >
        <hr>
          <a id="facebook" href="https://www.facebook.com/karanraj.balsudarsun"> <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-facebook_545793-1680.jpg?w=740" width="30px" height="30px" alt=""></a>
          <a id="linkedin" href="https://www.linkedin.com/in/bikram-singh-62199a24b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPpzRmsvMSKeiiomotDVU0w%3D%3D" ><img src="https://tse3.mm.bing.net/th?id=OIP.ozDiSGJlUqI6815cRlJiNAHaHa&pid=Api&P=0&h=180" width="30px" height="30px" alt=""></a>
          <a id="insta" href="https://www.instagram.com/___bikram_singh___/#"> <img id="insta" src="https://www.eckxstudio.com/wp-content/uploads/2020/05/insta_logo_png-e1589911682726.png" width="30px" height="30px" alt="insta"></a>
          <a href="https://www.gmail.com/bikram.2201120cs@iiitbh.ac.in"> <img src=" https://img.freepik.com/premium-photo/email-address-icon-logo-communication-isolated-transparent-background-email-address-contact-3d-rendering_640106-1102.jpg?w=30" alt="gmail" data-content="gmail" ></a>
          <a href=""><img src="https://img.freepik.com/free-psd/youtube-logo-icon-isolated-3d-render-illustration_47987-9790.jpg?size=626&ext=jpg&ga=GA1.1.1410074874.1716443307&semt=ais_user_b" width="30px" height="30px" alt="twiter"></a>
      </div> -->
      2026
     </footer>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
        