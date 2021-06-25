<template>
  <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-2 rounded-xl shadow-md" v-for="(team,index) in teams" :key="index">
           <div class="hero-image rounded-xl" :style="{ backgroundImage: 'url(' + team.fields.Image[0].url + ')' }" alt="" ></div>
          <div>{{team.fields.TeamName}}</div>
          <div>Members : {{team.fields.TeamMembers.length}}</div>
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
    }
}
</script>

<style>

</style>