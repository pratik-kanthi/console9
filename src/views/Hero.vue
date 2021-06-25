<template>
    <div class="container mx-auto">
        <div class="flex">
            <img :src="hero.fields.Image[0].url" alt="">
            <div class="text-xl">{{hero.fields.Name}}</div>
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

<style>

</style>