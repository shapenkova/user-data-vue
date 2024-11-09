<template>
    <div
        v-if="!personalDetails.name && !personalDetails.age && !children.length"
        class="page-preview"
    >
        <p class="page-preview__description">
            Нет данных для предварительного просмотра.
            Перейдите на страницу 
            <router-link to="/" class="page-preview__link">
                Форма
            </router-link> 
            и введите данные.
        </p>
    </div>

    <div v-else>
        <div class="page-preview__personal preview-personal">
            <p class="page-preview__title">Персональные данные</p>
            <p class="page-preview__desc">
                {{ personalDetails.name }}, {{ personalDetails.age }} лет
            </p>
        </div>

        <div 
            v-if="children.length"
            class="page-preview__children preview-children"
        >
            <p class="page-preview__title">Дети</p>
            <div 
                class="page-preview__row"
                v-for="(child, index) in children" :key="index"
            >
                <p class="page-preview__item">
                    <span class="page-preview__desc">
                        {{ child.name }}, {{ child.age }} лет</span>
                </p>
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'PagePreview',
    computed: {
        ...mapState(['personalDetails', 'children']),

        hasData() {
            const hasPersonalDetails = 
                this.personalDetails && 
                Object.keys(this.personalDetails).length > 0;
            const hasChildren = 
                Array.isArray(this.children) && 
                this.children.length > 0;
            return hasPersonalDetails || hasChildren;
        }
    },
};
</script>

<style lang="less">
.page-preview {
    &__description {
        padding: 0;
        margin-bottom: 20px;
        color: @colors-black;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }
    &__link {
        color:@colors-primary;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: inset 0px -2px 0px @colors-primary;
        }
    }
    &__personal {
        margin-bottom: 60px;
    }
    &__title,
    &__desc {
        font-family: @font;
        color: @colors-black;
        font-size: 16px;
        line-height: 1.5;
    }
    &__title {
        margin-bottom: 20px;
        font-weight: 500;
    }
    &__desc {
        font-weight: 700;
    }
    &__item {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: @colors-gray-light;
    }
    &__row {
        margin-bottom: 20px;
    }
}
</style>