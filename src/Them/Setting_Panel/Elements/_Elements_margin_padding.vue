<template>

    <section v-if="type == 'margin'">
        <div class="setting_element__title">Оступ снаружи</div>
        <div class="setting_element__subtitle">Оступ снизу</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.margin.bottom.value+element.margin.bottom.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.margin.bottom.value" min="0" max="500" /></div>
            
            <select v-model="element.margin.bottom.vlues_type" @click.prevent.stop="1">
                <option value="">{{element.margin.top.vlues_type}}</option>
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>

        <div class="setting_element__subtitle">Оступ слева</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.margin.left.value+element.margin.left.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.margin.left.value" min="0" max="500" /></div>
            
            <select v-model="element.margin.left.vlues_type" @click.prevent.stop="1">
                <option value="">{{element.margin.top.vlues_type}}</option>
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>

        <div class="setting_element__subtitle">Оступ справа</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.margin.right.value+element.margin.right.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.margin.right.value" min="0" max="500" /></div>
            
            <select v-model="element.margin.right.vlues_type" @click.prevent.stop="1">
                <option value="">{{element.margin.top.vlues_type}}</option>
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
        
        </div>
        
        <div class="setting_element__subtitle">Оступ верху</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.margin.top.value+element.margin.top.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.margin.top.value" min="0" max="500" /></div>
            
            <select v-model="element.margin.top.vlues_type" @click.prevent.stop="1">
            
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>

    </section>
    <section v-if="type == 'padding'">
        <div class="setting_element__title">Оступ снаружи</div>
        <div class="setting_element__subtitle">Оступ снизу</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.padding.bottom.value+element.padding.bottom.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.padding.bottom.value" min="0" max="500" /></div>
            
            <select v-model="element.padding.bottom.vlues_type" @click.prevent.stop="1">
                <option value="">{{element.margin.top.vlues_type}}</option>
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>

        <div class="setting_element__subtitle">Оступ слева</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.padding.left.value+element.padding.left.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.padding.left.value" min="0" max="500" /></div>
            
            <select v-model="element.padding.left.vlues_type" @click.prevent.stop="1">
                <option value="">{{element.padding.top.vlues_type}}</option>
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>

        <div class="setting_element__subtitle">Оступ справа</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.padding.right.value+element.padding.right.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.padding.right.value" min="0" max="500" /></div>
            
            <select v-model="element.padding.right.vlues_type" @click.prevent.stop="1">
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
        
        </div>
        
        <div class="setting_element__subtitle">Оступ верху</div>
        <div class="setting_element__setData">
            <div class="setting_element__value">{{  element.padding.top.value+element.padding.top.vlues_type }}</div>
            <div class="setting_element__input"><input @click.prevent.stop="1" type="range" v-model="element.padding.top.value" min="0" max="500" /></div>
            
            <select v-model="element.padding.top.vlues_type" @click.prevent.stop="1">
                <option :value="vlues_type.REM">rem</option>
                <option :value="vlues_type.PX">px</option>
                <option :value="vlues_type.PROCENT">%</option>
            </select>
            
        </div>
    </section>
                

</template>
<script>
import {Vlues_type} from '@/Them/Enum_types.js'

export default {
    props: ['element', 'type'],
    data() {
        return {
          toogle: false,

          vlues_type: {},
         
        }
    },
    mounted() {
        this.vlues_type = Vlues_type
  
    }
}
</script>
<style>

.setting_element__setData {
    display: grid;
    grid-template-columns: 3rem 1fr 4rem;
    justify-content: space-between;
    align-items: center;
}
.setting_element__input {
    display: flex;
    justify-content: center;
}
.setting_element__input  input {
    width: 80%;
    margin: 0 1rem;
    display: block;
}
.setting_element__input input[type="range"] {
  accent-color: #3b3b3b;
}
.setting_element__setData  select {
  font-size: 1.1rem;
  padding: 2px 5px;
  color: #000;
  background: #ccc
}
.setting_element__setData hr {
    margin-top: 1rem;
}
</style>