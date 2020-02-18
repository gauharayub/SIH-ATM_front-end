<template>
  <md-card-content class="content">
    <md-card-content class="md-layout">
      <md-card-content class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Work Orders</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>

          <md-card-content>
            <div class="md-layout-item">
              <md-field>
                <label for="list">List</label>
                <md-select v-model="list" name="list" id="list">
                  <md-option value="3 month">3 month</md-option>
                  <md-option value="6 month">6 month</md-option>
                  <md-option value="yearly">yearly</md-option>
                  
                </md-select>
              </md-field>
            </div>
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
    // SimpleTable,
  },
  data(){
      list:'3 month'
    }
};
</script>
