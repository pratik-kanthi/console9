<template>
    <Modal v-model="show" size="lg" centered >
            <template v-slot:title>
                <div class="p-3">Cab9 Command</div>
            </template>
            <template v-slot:body>
                <div class="p-3">
                    <input  class="text-xl mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="commandSearch" />
                    <div :class="{'bg-gray-200' : shortcut.title == activeSelection.title}" @mouseover="activeSelection = shortcut" @click="runCommand" class="text-xl flex justify-between p-2" v-for="(shortcut,index) in shortcuts" :key="index">
                        <div :class="{'active-selection' : shortcut.title == activeSelection.title}">{{shortcut.title}}</div>
                        <div class="text-sm bg-gray-600 text-white font-bold border-2 border-gray-600 px-2 rounded">{{shortcut.shortkey}}</div>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div></div>
            </template>
    </Modal>
</template>

<script>
import {Modal} from '@e9ine/vue_components';
import {shortcuts} from '@/utils/shortcuts';

export default {
    name: 'Console',
    components:{
        Modal
    },
    props:{
        show:{
            type: Boolean
        }
    },
    data(){
        return{
            commandSearch : '',
            shortcuts : [],
            activeSelection: {}
        }
    },
    methods:{
        runCommand(){
            this.activeSelection.action(this.$router);
        }
    },
    mounted(){
        this.shortcuts = shortcuts;
        this.activeSelection = this.shortcuts[0];
    }
}
</script>

<style lang="scss">
    .modal-footer{
        display: none!important;
    }
</style>