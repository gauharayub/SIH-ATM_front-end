<template>
  <md-card-content class="content" style="background-color:#e0e1dd;">
    <md-card-content class="md-layout">
      <md-card-content class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header style="background-color:#0d1b2a;">
            <h4 class="title">Work Orders</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>

          <md-card-content>
            
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </md-card-content>
    </md-card-content>
  </md-card-content>
</template>

<script>
//SimpleTable was here
import { OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable
  },
  data(){
    return{
      }
    }
};
</script>
<style>

</style>
