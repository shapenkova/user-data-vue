<template>
    <div class="wrapper">
        <div class="page-header">
            <div class="page-header__container">
                <picture class="page-header__logo">
                    <img 
                        src="./assets/logo.png" 
                        alt="Логотип"  
                        class="page-header__logo-img"
                    />
                </picture>
                <div class="page-header__nav">
                    <router-link class="page-header__nav-item" to="/">Форма</router-link>
                    <router-link class="page-header__nav-item" to="/preview">Превью</router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="page-footer">
            <p class="page-footer__content">all rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,
html {
    font-size: 16px;
    font-family: @font;
}

button {
    font-family: @font;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
a {
    text-decoration: none;
}
.wrapper {
    position: relative;
    height: 100%;
    min-height: 100vh;
    overflow: auto;
}
.page-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 77px;
    margin-bottom: 30px;
    box-shadow: 0px 1px 0px #1111111A;
    &__container {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 1366px;

        margin: 0 auto;
    }
    &__logo {
        position: absolute;
        left: 0;
        padding: 0 41px 0 93px;
    }
    &__nav {
        margin-left: 85px;
    }
    &__nav > a:first-child {
        margin-right: 24px;
    }
    &__nav-item {
        padding-bottom: 30px;
        color: @colors-gray;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: inset 0px -2px 0px #1111117A;
        }
    }
}
.page-footer {
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 76px;
    margin-top: 20px;

    background-color: @colors-gray-medium;
    box-shadow: 0px 1px 0px #1111111A;
    
    &__content {
        color: #000000;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
    }
}
.main {
    width: 100%;
    max-width: 616px;
    margin: 0 auto;
    height: 100vh;
}
</style>
