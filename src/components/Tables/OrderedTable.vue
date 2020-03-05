<template>
  <div>
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
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(name)="data">
        <router-link :to="`/joblist/${data.item.assignmentCode}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch("http://localhost:3000/get-orders", {
      method: "get",
    })
      .then(response => {
        return response.json();
      })
      .then(jsondata => {
        this.items = jsondata
        console.log(this.items)
      })
      .catch(er => {
        console.log("Cant fetch the data:", er);
        prompt("Check internet connection");
      });
  },

  data() {
    return {
      list: "3 month",
      fields: [
        {
          key: "name",
          label: "Code",
          formatter(value, key, item) {
            return item.assignmentCode;
          }
        },
        "completed",
        "equipment",
        {
          key: "work",
          label:"description"
        },
        "status",
        "task",
        "location"
      ],
      items: []
    };
  }
};
</script>