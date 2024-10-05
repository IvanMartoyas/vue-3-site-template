<template>
    <button class="setting_panel--button" v-if="!toogle" @click="toogle = !toogle"> Настроить </button>
    <div class="setting_panel--wrapper">
        <div class="setting_panel" v-if="toogle">
            <div class="setting_panel__top">
                <div class="setting_panel__title">Настройки</div>
                <button @click="toogle = !toogle">закрыть</button>
            </div>
            <div class="setting_panel__content">
                <div class="setting_panel__subtitle">Общие настройки отображения</div>
                <Tabs :data="active_them.elements"></Tabs>    
            </div>
        </div>
        
    </div>
</template>
<script>
import {_Utilits} from '@/assets/js/Utilits.js';
import {Them_settings_model} from '@/Them/Them_model'
import Tabs from '@/Them/Setting_Panel/Tabs/_Tabs.vue';

export default {
    components: {
        Tabs
    },
    data() {
        return {
            active_them: [],
            // setting panel
            position: 'right', // left, right
            padding: '2rem 1.5rem',
            width_panel: '40%',
            display_overlay_panel: 'none',
            // UI
            toogle: true
        }
    }, methods: {

    },
    mounted() {
        this.active_them = _Utilits.array_Find_By_Value(Them_settings_model, 'active', true);
    }

}
</script>
<style>
.setting_panel--button {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    padding: 1rem;
    background: #ccc;
    font-size: 1.3rem;
    cursor: pointer;
    padding: .5rem 1rem;
    border: 0;
    transition: .4s;
}
.setting_panel button {
    
    cursor: pointer;
    padding: .5rem 1rem;
    border: 0;
    transition: .4s;
}
.setting_panel button:hover, .setting_panel--button:hover {
    color: #fff;
    background: #2c3e50;
}
.setting_panel {
    overflow-y: auto;
    font-family: 'Roboto', Arial;
    font-weight: 300;
    color: #000;
    background: #fff;
    box-shadow: 0 0 10px 1px #b6b6b6;
    width: v-bind(width_panel);
    padding: v-bind(padding);
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;   
}
.setting_panel--wrapper::before {
    display: v-bind(display_overlay_panel);
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #00000059;
    z-index: 99998;
}
.setting_panel__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.3rem;
}
.setting_panel__title {
    font-size: 1.6rem;
    font-weight: 700;
}
.setting_panel__content {
    text-align: left;
}
.setting_panel__subtitle {
    font-size: 1.4rem;
    font-weight: 200;
    margin: .6rem 0;
}
</style>