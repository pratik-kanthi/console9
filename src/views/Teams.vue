<template>
  <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2" v-for="(team,index) in teams" :key="index">
          <img :src="team.fields.Image[0].url" alt="">
          <div>{{team.fields.TeamName}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Teams',
    data(){
      return{
        teams:[]
      }
    },
    async created(){
        const result = await $http.get('teams');
        this.teams = result.data.records;
        debugger;
    }
}
</script>

<style>

</style>