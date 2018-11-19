<template>
    <nav class="wrapper" role="navigation">
        <ul class="nav-inline">
            <li class="logo"><a href=""><img src="../../src/assets/komodo.png" width="100px"></a></li>
            <div class="nav-right">
                <li><a href="">Our Work</a></li>
                <li><a href="">What We Do</a></li>
                <li><a href="">About</a></li>
                <li><a class="btn-contact" href="">Let's Chat</a></li>
            </div>
        </ul>
    </nav>
</template>

<style lang="scss">
    nav {
        height: 54px;
        padding-top: 20px;
    }
    ul.nav-inline {
        padding-inline-start: 0!important;
    }
    .nav-inline li {
            display: inline-block;
        > a {
            padding: 10px 20px;
            text-decoration: none;
            color: #333;
            font-weight: 600;
            &.btn-contact {
                margin: 20px auto;
                border: none;
                padding: 10px 44px;
                position: relative;
                &::before{
                    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    content: '';
                    width: 45%;
                    height: 100%;
                    background: rgba(178, 9, 220, .25);
                    background: rgba(89, 242, 193, .5);
    
                    position: absolute;
                    top: 0px;
                    left: 0;
                    z-index: -1;
                }
                &:hover, &:focus {
                    &::before{
                        width: 100%;
                        background: rgba(178, 9, 220, .5);
                        background: rgba(89, 242, 193, .5);


                    }
	            }
            }
        }
    }
    .logo {
        float: left;
        display: block;
        > a {
            padding: 0!important;
        }
    }
    .nav-right {
        float: right;
    }
    

    
</style>
