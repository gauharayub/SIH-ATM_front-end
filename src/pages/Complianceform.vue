<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col cols="8" offset="2">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Assignment Number:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.assignmentNumber" type="number" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Equipment Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.equipmentName" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Description:" label-for="input-6">
            <b-form-input id="input-6" v-model="form.description" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Equipment Code" label-for="input-5">
            <b-form-input id="input-5" v-model="form.equipmentCode" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Status:" label-for="input-3">
            <b-form-input id="input-3" v-model="form.status" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Location:" label-for="input-4">
            <b-form-input id="input-4" v-model="form.location" disabled></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Cycle:" label-for="input-7">
            <b-form-input id="input-7" v-model="form.cycle" disabled></b-form-input>
          </b-form-group>
          <!-- for tasklist generation  -->
          <b-form-group label="Task List:">
            <div v-for="(task, index) in form.tasklist" :key="index">
              <br />
              <p># {{ task }}</p>
              <b-form-radio-group
                :id="`${index}`"
                v-model="TaskListValue[index]"
                :options="optionsTaskList"
                buttons
                button-variant="outline-primary"
                size="md"
                name="radio-btn-outline"
              ></b-form-radio-group>
            </div>
          </b-form-group>

          <!-- for files -->
          <div id="fileSelector" v-for="(file, index) in files" :key="index">
            <label for="file">File :</label>
            <b-form-file
              name="file"
              class="makeInLine"
              v-model="fileName[index]"
              @change="onFileChange(index, $event)"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <span class="close" @click="deleteFileItem(index)">X</span>
            <div class="mt-3">
              Selected file:
              <p>{{ fileName[index] ? fileName[index].name : '' }}</p>
            </div>
            <b-form-group id="input-group-8" label="Comments:" label-for="input-8">
              <b-form-input id="input-8" v-model="capturedFile[index].comment"></b-form-input>
            </b-form-group>

            <br />
          </div>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <br />
        <!-- //files to add -->
        <br />
        <p>To add more images click here</p>
        <b-button @click="addFile" variant="primary">+</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {},
      optionsTaskList: [
        { text: 'Completed', value: 'done' },
        { text: 'Not Completed', value: 'not done' }
      ],
      TaskListValue: [],
      show: true,
      capturedFile: [{ file: null, comment: null }], //{file:file, text:comments}
      files: 1,
      fileName: []
    }
  },
  mounted() {
    //hard coded  id of task
    axios
      .get('http://localhost:3000/compliance/' + '5e6234fad4ab2a322d9798ea')
      .then(res => (this.form = res.data))
      .catch(er => console.log('Error :', er))
  },
  methods: {
    deleteFileItem(index) {
      this.capturedFile.splice(index)
      this.fileName.splice(index)
      this.files--
    },
    onFileChange(index, e) {
      this.capturedFile[index].file = e.target.files[0]
      console.log(this.capturedFile[index].file)
    },
    addFile() {
      this.files++
      this.capturedFile.push({ file: null, comment: null })
    },
    onSubmit(evt) {
      evt.preventDefault()

      const fd = new FormData()
      fd.append('workImage', this.capturedFile[0].file)
      console.log(fd)
      axios
        .post(
          'http://localhost:3000/uploadphoto/5e6234fad4ab2a322d9798ea',
          fd
        )
        .then(res => console.log(res.data))
        .catch(e => console.log('Error :', e))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.TaskListValue = []
      this.files = 1
      this.capturedFile = [{ file: null, comment: null }]
      this.filename = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style lang="css" scoped>
.makeInLine {
  width: 70% !important;
  margin: 0 20px;
}
.close {
  border: 1px solid grey !important;
  padding: 6px;
  position: relative;
  left: -5%;
  cursor: pointer;
}
</style>