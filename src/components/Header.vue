<template>
        <header role="banner">
            <div class="header-section-1 wrapper">
                <div class="grid two-third">
                    <h1>Atlanta's digital design agency offering brand strategy, web design, <span class="sr-only">web accessibility,</span> and user experience.</h1>
                </div>
                
            </div>
            <div class="header-section-2 ">
                <div class="wrapper">
                    <h2>Helping Atlanta small companies excel in their competitive market.</h2>
                </div>
            </div>
        </header>
</template>

<style lang="scss">
    header {
        width: 100%;
        height: auto;
        transition: 2s;
        color: #333;
        .header-section-1 {
            padding:140px 0 100px;
            &:after {
                content: '';
                width: 0; 
                height: 0; 
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-top: 20px solid #fff;
                position: absolute;
                margin-top: 100px;
                text-align: left;
                margin-left: 80px;
            }
        }
        .header-section-2 {
            background: linear-gradient(25deg, rgba(77, 131, 255, .8) , rgba(178, 9, 220, .8) 80%), url('https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4306ec4bfa5375e2483126ebbdd1171&auto=format&fit=crop&w=1357&q=80');
            background-size: cover;
            padding: 200px 0;
            color: #fff;

        }
    }
</style>
