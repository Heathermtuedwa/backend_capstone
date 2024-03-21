<template >
    <body>
 <div id="main" class="is-loading">
	<h1>Welcome <strong>To royalty</strong></h1>
</div>

    </body>
 
</template>
<script>

</script>
<style scoped >
body {
	background: #445;
	color: #FFF;

}

#main {
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.66) 0%, transparent), url(https://i.ibb.co/zhPZ0dP/5bdbfa5d-2e97-4f84-9a09-bcde5ef9a22c.webp);
	background-size:cover,80%;
	background-position: center, center;
    height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    background-repeat: no-repeat; 
  
}
/* body {
  background-color: #252527;
} */
h1 {
  font-family: Dosis;
  font-weight: 200;
  position: absolute;
  text-align: center;
  display: block;
  color: #f2f2f2;
  top: 50%;
  width: 100%;
  margin-top: -55px;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  opacity: 0;
  -webkit-animation: anim 3.2s ease-out forwards 1s;
  animation: anim 3.2s ease-out forwards 1s;
}
strong {
  display: block;
  font-weight: 400;
}


@-webkit-keyframes anim {
  0% {
    text-shadow: 0 0 50px #fff;
    letter-spacing: 80px;
    opacity: 0;
    -webkit-transform: rotateY(-90deg);
  }
  50% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    -webkit-transform: rotateY(0deg);
  }
  75% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    -webkit-transform: rotateY(0deg) translateZ(60px);
  }
  100% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    letter-spacing: 8px;
    -webkit-transform: rotateY(0deg) translateZ(100px);
  }

}
@keyframes anim {
  0% {
    text-shadow: 0 0 50px #fff;
    letter-spacing: 80px;
    opacity: 0;
    -moz-transform: rotateY(-90deg);
  }
  50% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    -moz-transform: rotateY(0deg);
  }
  75% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    -moz-transform: rotateY(0deg) translateZ(60px);
  }
  100% {
    text-shadow: 0 0 1px #fff;
    opacity: 0.8;
    letter-spacing: 8px;
    -moz-transform: rotateY(0deg) translateZ(100px);
  }

}



    
</style>