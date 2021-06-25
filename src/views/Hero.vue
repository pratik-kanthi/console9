<template>
    <div class="container mx-auto">

        <div class="grid grid-cols-12 gap-4">
             <div class="col-span-4 hero-image rounded-xl" :style="{ backgroundImage: 'url(' + hero.fields.Image[0].url + ')' }" alt="" ></div>
             <div class="col-span-4 ">
                 <div class="text-xxl">{{hero.fields.Name}}</div>
                 <div class="text-xl"><i>"{{hero.fields.Description}}"</i></div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data(){
        return{
            hero : null,
        }
    },
    async created(){
        const result = await $http.get('characters/' + this.$route.params.id);
        this.hero = result.data;
    }
}
</script>

<style lang="scss">
    .hero-image{
        height: 5   00px;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>