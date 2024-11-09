<template>
    <div class="page-form">
        <form class="page-form__container">
            <div class="page-form__item personal-data">
                <h2 class="page-form__title">Персональные данные</h2>

                <div class="page-form__field">
                    <label class="page-form__label" for="personalName">Имя</label>
                    <input
                        class="page-form__input"
                        type="text"
                        name="personalName"
                        v-model="personalName"
                    />
                </div>
                <div class="page-form__field">
                    <label class="page-form__label" for="personalAge">Возраст</label>
                    <input
                        class="page-form__input"
                        type="text"
                        name="personalAge"
                        v-model="personalAge"
                    />
                </div>
            </div>

            <div class="page-form__item2 children-data">
                <div class="page-form__header">
                    <h2 class="page-form__title">Дети (макс. 5)</h2>
                    <button
                        @click="addChild"
                        :class="{ hidden: children.length >= 5 }"
                        type="button"
                        class="page-form__button "
                    >
                        <img class="page-form__icon" :src="iconPlus" alt="icon-plus" />
                        <span>Добавить ребенка</span>
                    </button>
                </div>

                <div 
                    class="page-form__row children" 
                    v-for="(child, index) in children" :key="index"
                >
                    <div class="page-form__field page-form__field-short">
                        <label 
                            class="page-form__label" 
                            :for="'childName' + index"
                        >
                            Имя
                        </label>
                        <input
                            class="page-form__input"
                            type="text"
                            :name="'childName' + index"
                            v-model="child.name"
                        />
                    </div>
                    <div class="page-form__field page-form__field-short">
                        <label 
                            class="page-form__label" 
                            :for="'childAge' + index"
                        >
                            Возраст
                        </label>
                        <input 
                            class="page-form__input" 
                            type="text" 
                            :name="'childAge' + index"
                            v-model="child.age"
                        />
                    </div>
                    <button
                        @click.prevent="removeField(index)"
                        class="page-form__row-btn"
                    >
                        Удалить
                    </button>
                </div>
            </div>

            
            <button 
                type="button"
                class="page-form__button page-form__button-primary"
                @click="saveData"
            >
                Сохранить
            </button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import IconPlus from '../assets/plus.png'

export default {
    name: 'PageForm',
    data() {
        return {
            iconPlus: IconPlus,
            personalName: '',
            personalAge: '',
            children: [],
        }
    },
    methods: {
        ...mapMutations(['setPersonalDetails', 'setChildren']),
        addChild() {
            if(this.children.length < 5) {
                this.children.push({
                    name: '',
                    age: ''
                });
            }
        },
        removeField(index) {
            this.children.splice(index, 1); 
        },
        
        saveData() {

            this.setPersonalDetails({
                name: this.personalName,
                age: this.personalAge
            });
            this.setChildren(this.children);

            this.personalName = '';
            this.personalAge = '';
            this.children = '';

            alert('Данные успешно сохранены');
        }
    }

}
</script>

<style lang="less">
.page-form {
    &__container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    &__item {
        margin-bottom: 28px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__field {
        margin-bottom: 10PX;
        padding: 8px 16px 6px;
        border-radius: 4px;
        border: 1px solid @colors-gray-light;
        transition: all 0.2s ease-in-out;

        &:hover {
            box-shadow: 0px 4px 4px @box-shadow1, 0px 4px 10px @box-shadow2;
        }
    }
    &__label {
        margin-bottom: 10px;
        padding-bottom: 2px;
        color: @colors-gray;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
    }
    &__input {
        width: 100%;
        padding: 0;
        border: none;
        outline: none;
        color: @colors-black;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }
    &__title {
        margin-bottom: 16px;
        color: @colors-black;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__button {
        position: relative;
        top: -9px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 204px;
        padding: 10px 20px;
        border-radius: 100px;
        background-color: @colors-white;
        border: 2px solid @colors-primary;
        color: @colors-primary;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.71;
        outline: none;
        cursor: pointer;
        &:hover {
            background-color: @bg;
        }
    }
    &__icon {
        margin-right: 5px;
    }
    &__row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    &__field-short {
        width: 260px;
        margin-right: 18px;
    }
    &__row-btn {
        color: @colors-primary;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            box-shadow: inset 0px -2px 0px @colors-primary;
        }
    }
    &__button-primary {
        width: 100%;
        max-width: 118px;
        padding: 10px 20px;
        border: none;
        color: @colors-white;
        background-color: @colors-primary;
        &:hover {
            background-color: @primary;
        }
    }
}
.hidden {
    visibility: hidden;
    transition: visibility 1ms ease-in-out;
}
</style>
