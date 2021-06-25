<template>
    <div id="app">
        <div v-if="showConsole" @click.self="toggleModal" class="animated fadeIn fixed z-50 w-full h-full pin overflow-auto bg-smoke-dark flex">
            <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
                <h2>Cab9 Command</h2>
                <div>
                        <input ref="searchCommand" class="text-xl mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="commandSearch" />
                        <ul>
                            <li :class="{'bg-gray-200' : shortcut.title == activeSelection.title}" @mouseover="activeSelection = shortcut" @click="runCommand" v-on:keyup.enter="runCommand" class="text-xl flex justify-between p-2" v-for="(shortcut,index) in commandSearchResults" :key="index">
                                <div :class="{'active-selection' : shortcut.title == activeSelection.title}">{{shortcut.title}}</div>
                                <div class="text-sm bg-gray-600 text-white font-bold border-2 border-gray-600 px-2 rounded">{{shortcut.shortkey}}</div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>

        <div class="container mx-auto mb-6">
            <div class="flex">
                <router-link  to="/">Heroes</router-link>
                <router-link class="ml-5" to="/teams">Teams</router-link>
                <router-link class="ml-5" to="/missions">Missions</router-link>
            </div>
        </div>
        <router-view></router-view>
        <div
            v-if="$route.name !== 'Missions' && $route.name !== 'Teams' && $route.name !== 'Hero'"
            class="container mx-auto"
        >
            <div class="grid grid-cols-12 gap-4">
                <div :class="getGridClass(index)" v-for="(hero, index) in superheroes" :key="index">
                    <div class="rounded-xl shadow-md">
                        <img class="rounded-xl" height="50" :src="hero.fields.Image[0].url" alt="" />
                        <div class="text-lg">{{ hero.fields.Name }}</div>
                    </div>
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
import { shortcuts } from '@/utils/shortcuts';

export default {
    name: 'App',
    data() {
        return {
            showConsole: false,
            superheroes: [],
            colSpan: 2,
            focus: 0,
            shortcuts: [],
            commandSearch:'',
            activeSelection:{},
            activeSelectionIndex:0
        };
    },
    methods: {
        getGridClass(index) {
            let className = '';
            if (this.focus == index) {
                className = className + 'border-2 bg-gray-600 border-indigo-800 rounded-xl';
            }
            className = className + ' col-span-' + this.colSpan;
            return className;
        },
        toggleModal(){
            this.showConsole = !this.showConsole;
        },
        runCommand(){
            if(this.showConsole) this.showConsole = false;
            this.activeSelection.action({router:this.$router, selection: this.superheroes[this.focus]});
        }
    },
    mounted() {
        this.shortcuts = shortcuts;
        this.activeSelection = this.shortcuts[0];
    },
    async created() {
        window.addEventListener('keydown', (e) => {
            if(this.showConsole){
                if(e.key == 'Escape'){
                    this.showConsole = false;
                    this.searchCommand = '';
                }

                if(e.key == 'ArrowDown'){
                    if(this.activeSelectionIndex !== this.commandSearchResults.length-1){
                        this.activeSelection = this.commandSearchResults[++this.activeSelectionIndex]
                    }
                }

                if(e.key == 'ArrowUp'){
                     if(this.activeSelectionIndex !== 0){
                        this.activeSelection = this.commandSearchResults[--this.activeSelectionIndex]
                     }
                }

                if(e.key == 'Enter'){
                    this.runCommand();   
                }

                return;
            } 
            if (e.ctrlKey && e.key == 'k') {
                e.preventDefault();
                this.showConsole = true;
                this.$nextTick(()=>{
                    this.$refs.searchCommand.focus();
                    this.searchCommand = '';
                });
                return;
            }
            if (e.key == 'd') {
                if (this.focus == this.superheroes.length - 1) return;
                this.focus = this.focus + 1;
                return;
            }

            if (e.key == 'a') {
                if (this.focus == 0) return;
                this.focus = this.focus - 1;
                return;
            }

            if (e.key == 's') {
                if (this.focus == 0) return;
                this.focus = this.focus - 1;
                return;
            }

            let trigger = this.shortcuts.find((shortcut) => {
                return shortcut.shortkey == e.key;
            });

            trigger.action({
                router: this.$router,
                selection: this.superheroes[this.focus],
            });
        });

        const result = await $http.get('characters');
        this.superheroes = result.data.records;
    },
    computed:{
        commandSearchResults(){
            let searchResults = this.shortcuts;
            if (this.commandSearch != '') {
                    searchResults = searchResults.filter((item) => {
                    return item.title
                        .toUpperCase()
                        .includes(this.commandSearch.toUpperCase())
                    })
            }
            this.activeSelection = searchResults[0];
            return searchResults
        }
    }
};
</script>

<style lang="scss">
#app {
    font-family: Verdana;
    text-align: center;
    font-size: 32px;
    p {
        color: #8e8a8a;
    }
}
</style>
