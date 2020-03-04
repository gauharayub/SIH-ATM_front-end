<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col cols="8" offset="2">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Assignment Number:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.assignmentnumber" type="number" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Equipment Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.equipmentname" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Description:" label-for="input-6">
            <b-form-input id="input-6" v-model="form.description" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Equipment Code" label-for="input-5">
            <b-form-input id="input-5" v-model="form.equipmentcode" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Status:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.status" :options="status" required></b-form-select>
          </b-form-group>

          <b-form-group label="Task List:">
            <div v-for="index in 3" :key="index">
              <br />
              <p>{{index}}</p>
              <br />
              <b-form-radio-group
                :id="`${index}`"
                v-model="TaskList[index]"
                :options="optionsTaskList"
                buttons
                button-variant="outline-primary"
                size="md"
                name="radio-btn-outline"
              ></b-form-radio-group>
            </div>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <br />
        <!-- //files to add -->
        <div v-for="(file,index) in formfiles" :key="index">
          <b-form-file
            v-model="file[index]"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>

          <div class="mt-3">Selected file: {{ file[index] ? file[index].name : '' }}</div>
        </div>
        <br />
        <b-button @click="addFile" variant="primary">+</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        assignmentnumber: 123,
        equipmentname: "Chesis of helicopter",
        equipmentcode: "23-124343-3434",
        status: null,
        description: "abra ke kldskhf klkdf vcve oiiopwq fyudsid"
      },
      status: [{ text: "Select One", value: null }, "Carrots"],
      selected: "radio1",
      optionsTaskList: [
        { text: "Pass", value: "1" },
        { text: "Fail", value: "2" }
      ],
      TaskList: [{ first: "" }, { second: "" }, { third: "" }],
      show: true,
      file: [],
      formfiles: [],
      filesnumber: 0
    };
  },
  
  methods: {
    addFile() {
      this.formfiles.push({ number: this.filesnumber });
      this.filesnumber++;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
