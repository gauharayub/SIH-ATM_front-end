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
        <router-link :to="`/joblist/${data.item.code}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "3 month",
      fields: [
        "id",
        {
          key: "name",
          label: "Code",
          formatter(value, key, item) {
            return item.code;
          }
        },
        "Type",
        "Description",
        "Site",
        "Status",
        "Assets"
      ],
      items: [],
      
      methods: {
        fullName(value, key, item) {
          return `${item.first_name} ${item.last_name}`;
        }
      }
    };
  }
};
</script>