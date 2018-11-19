<template>
    <div id="examples-section" class=" wrapper"> 
        <div >
            <h2 class="text-large">{{ message }} </h2>
            <p class="text-lead">{{ paragraph }}</p>
        </div>
        <div class="grid four-up" >
            <div class="example-card" v-for="example in examples" :key="example.id">
                <div class="example-img">

                </div>
                <div class="example-copy">
                    <h3 example-title>{{example.title}}.</h3>
                    <p>{{example.paragraph}}</p>
                    <a href="" class="secondary">{{ example.btnText }}</a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Examples',
    data() {
        return{
            message: 'What we do',
            paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',

            examples: [
                { 
                    imageSrc:'img/src/...',
                    title: 'branding',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More'
                },
                { 
                    imageSrc:'img/src/...',
                    title: 'digital marketing',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More' 

                },
                { 
                    imageSrc:'img/src/...',
                    title: 'web design',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More' 

                },
                { 
                    imageSrc:'img/src/...',
                    title: 'video',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More'

                },
                { 
                    imageSrc:'img/src/...',
                    title: 'virtual tours',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More'

                },
                { 
                    imageSrc:'img/src/...',
                    title: 'web accessibility',
                    paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, sit.',
                    btnText: 'Learn More' 

                }
            ],

        }
    }
}
</script>

<style lang="scss">
@import '../../src/assets/settings.scss';
    #examples-section {
        margin-top: 140px;
        margin-bottom: 140px;
    }
    .four-up {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    }
    .text-large {
        font-size: 2.5rem;
    }
    .text-lead {
        font-size: 1.25rem;
    }
    .example-card {
        width: 100%;
        box-shadow: $shadow;
        .example-img {
            width: 100%;
            height: 260px;
            background: #eee;
        }
        .example-copy {
            padding: 10px 30px 40px;
            > a {
                color: $link-color;
                text-decoration: none;
                font-weight: bold;
                &:hover {
                    border-bottom: 3px solid $purple80;
                }
            }
        }
    }
</style>
