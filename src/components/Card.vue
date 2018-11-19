<template>
    <div id="project01" class="card " > 
        <div style="clear:both" v-for="item in items" :key="item.id">
            <div id="img-right" :class="item.cardStyle">
                <img :src="item.image" alt="">
            </div>
            <div  id="content-box" :class="item.style " >
                <h3 >{{ item.title }}.</h3>
                <p> {{ item.copy }} </p>
            </div>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'Card',
    data() {
        return {
            items: [
                { 
                    image:'https://images.unsplash.com/photo-1519331532361-861738cc31ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=901e1da436c4272c1ce8e7131832fffb&auto=format&fit=crop&w=500&q=80',
                    title: 'discover', 
                    copy:'We kick start communication with you to discuss your vision for the project',
                    style: 'card-content-right',
                    cardStyle: 'card-img-left'
                },
                {   
                    image:'http://localhost:8080/img/discover.8a1cc18c.png',
                    title: 'define', 
                    copy:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit, delectus culpa quisquam ipsum illum aspernatur commodi perspiciatis, quasi eos, recusandae inventore doloribus facilis soluta. Soluta reiciendis repellendus dolorum accusamus.',
                    style: 'card-content-left',
                    cardStyle: 'card-img-right'
                },
                {   
                    image:'http://localhost:8080/img/discover.8a1cc18c.png',
                    title: 'design', 
                    copy:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit, delectus culpa quisquam ipsum illum aspernatur commodi perspiciatis, quasi eos, recusandae inventore doloribus facilis soluta. Soluta reiciendis repellendus dolorum accusamus.',
                    style: 'card-content-right',
                    cardStyle: 'card-img-left'
                },
                {   
                    image:'http://localhost:8080/img/discover.8a1cc18c.png',
                    title: 'develop', 
                    copy:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit, delectus culpa quisquam ipsum illum aspernatur commodi perspiciatis, quasi eos, recusandae inventore doloribus facilis soluta. Soluta reiciendis repellendus dolorum accusamus.',
                    style: 'card-content-left',
                    cardStyle: 'card-img-right'
                },
                {   
                    image:'http://localhost:8080/img/discover.8a1cc18c.png',
                    title: 'deploy', 
                    copy:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit, delectus culpa quisquam ipsum illum aspernatur commodi perspiciatis, quasi eos, recusandae inventore doloribus facilis soluta. Soluta reiciendis repellendus dolorum accusamus.',
                    style: 'card-content-right',
                    cardStyle: 'card-img-left'
                }
                ]
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // init scrollmagic
    var controller = new ScrollMagic.Controller();

    //build a scene 
    var ourScene = new ScrollMagic.Scene ({
      triggerElement: '#project01'
    })
    .setClassToggle('#project01', 'fade-in')
    .addIndicators({
      name: 'fade',
      colorTrigger: 'red',
      colorStart: 'blue'
    })
    .addTo(controller);
    
    var ourScene = new ScrollMagic.Scene ({
      triggerElement: '#img-right'
    })
    .setClassToggle('#img-right', 'fade-in')
    .addIndicators({
      name: 'img fade',
      colorStart: 'green'
    })
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene ({
      triggerElement: '#img-right'
    })
    .setClassToggle('#content-box', 'fade-in')
    .addIndicators({
      name: 'text fade',
      colorStart: 'orange'
    })
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene ({
      triggerElement: '#content-box'
    })
    .setClassToggle('#content-box', 'move-up')
    .addIndicators({
      name: 'text fade',
      colorStart: 'orange'
    })
    .addTo(controller);
    });
</script>


<style lang="scss">


#project01 {
    background: #fff;
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease-out;
    &.fade-in {
        opacity: 1;
        transform: translateY(0px);
    }
}

#content-box {
    transition: all 2s ease-out;
    animation-delay: .3s; 
    transform: translateY(250px);
    &.fade-in {
        opacity: 1;
        transform: translateY(200px);
    }
    &.move-up {
        transform: translateY(150px)
    }
}

#Group {

}

.card {
    margin: 0 auto;
    width: 1000px;
    grid-template-columns: 430px 500px;
    grid-gap: 30px;

}
     .card-img-left {
            opacity: 0;
            transition: 1.5s;
            animation-delay: .3s; 
            transform: translateX(-250px);
            //background: url('https://images.unsplash.com/photo-1512324721642-d8c9cdbc7513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=640677f2975f8a787f1058a43a656020&auto=format&fit=crop&w=705&q=80');
            //width: 500px;
            //height: 350px;
            background-size: cover;
            background-position: center;
            display: inline-block;
            z-index: -1;
            float: left;
            position: absolute;
            &.fade-in {
                opacity: 1;
                transform: translateX(0px);
        }
    }

    .card-img-right {
            right: 0px;
            opacity: 0;
            transition: 1.5s;
            animation-delay: .3s; 
            transform: translateX(-250px);
            //background: url('https://images.unsplash.com/photo-1512324721642-d8c9cdbc7513?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=640677f2975f8a787f1058a43a656020&auto=format&fit=crop&w=705&q=80');
            //width: 500px;
            //height: 350px;
            background-size: cover;
            background-position: center;
            display: inline-block;
            z-index: -1;
            float: right;
            position: absolute;
            &.fade-in {
                opacity: 1;
                transform: translateX(0px);
        }
    }
         .card-content-right {
            display: inline-block;
            width: 400px;
            height: 360px;
            background: rgba(255, 255, 255, .9);
            //background: rgba(89, 242, 193, 0.5);
            padding: 40px 60px 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,.2);
            float: right;
            margin-bottom: 300px;
             & h3 {
                 font-size: 2rem;
                 letter-spacing: -.4px;
                 }
         }

         .card-content-left {
            display: inline-block;
            width: 400px;
            height: 360px;
            background: rgba(255, 255, 255, .9);
            //background: rgba(89, 242, 193, 0.5);
            padding: 40px 60px 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,.2);
            float: left;
            margin-bottom: 300px;
             & h3 {
                 font-size: 2rem;
                 letter-spacing: -.4px;
                 }
         }
         
</style>
