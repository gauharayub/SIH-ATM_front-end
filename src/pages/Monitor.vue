<template>
<div class="body">
    <div class="graphContainer">
      <iframe
        src="https://snapshot.raintank.io/dashboard/snapshot/9uEVbIDFc34TcnbGtFS87zOcYnGa2XAg?orgId=2&from=1578446449310&to=1578446489626&viewPanel=4"
        frameborder="0"
      ></iframe>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body{
  min-height:100vh;
  background-color: #0b0c0e;

}
.graphContainer{
  margin-bottom: 30px;
}
.graphContainer>iframe{
  height: 400px;
  width: 800px;
  margin: auto;
  display: block;
}
</style>