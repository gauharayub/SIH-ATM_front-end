<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col cols="12" md="8" offset-md="2" id="main-box">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-jumbotron>
            <b-form-group label="Assignment Number:" label-for="input-1">
              <b-form-input id="input-1" v-model="form.assignmentNumber" type="number" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Equipment Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.equipmentName" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Description:" label-for="input-6">
              <b-form-input id="input-6" v-model="form.description" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Equipment Code" label-for="input-5">
              <b-form-input id="input-5" v-model="form.equipmentCode" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Status:" label-for="input-3">
              <b-form-input id="input-3" v-model="form.status" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Location:" label-for="input-4">
              <b-form-input id="input-4" v-model="form.location" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Cycle:" label-for="input-7">
              <b-form-input id="input-7" v-model="form.cycle" disabled></b-form-input>
            </b-form-group>
          </b-jumbotron>

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
            <div class="card">
              <div class="card-body">
                <label for="file" size="sm">File :</label>
                <b-form-file
                  name="file"
                  class="makeInLine"
                  v-model="fileName[index]"
                  @change="onFileChange(index, $event)"
                  :state="Boolean(file)"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  size="sm"
                  accept="image/*"
                ></b-form-file>
                <span
                  class="pull-right clickable close-icon"
                  data-effect="fadeOut"
                  @click="deleteFileItem(index)"
                >
                  <i class="fa fa-times"></i>
                </span>
                <div class="mt-3">
                  Selected file:
                  <p>{{ fileName[index] ? fileName[index].name : '' }}</p>
                </div>
                <div>
                  <img :src="image[index]" alt="">
                </div>
                <b-form-group id="input-group-8" label="Comments:" label-for="input-8">
                  <textarea cols="46" rows="2" id="input-8" v-model="capturedComment[index]"></textarea>
                </b-form-group>
              </div>
            </div>
            <br />
          </div>
          <p>
            To add more images
            <b>
              <a class="clickable" @click="addFile">click here</a>
            </b>
          </p>
          <div class="pull-right">
            <b-button class="mr-1" type="submit" id="submit">Submit</b-button>
            <b-button type="reset" >Reset</b-button>
          </div>
        </b-form>
        <br />
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
      capturedFile: [], //{file:file, text:comments}
      capturedComment: [],
      files: 1,
      fileName: [],
      image:[]
    }
  },
  async mounted() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/compliance/${this.$route.params.id}`
      )
      this.form = data
    } catch (error) {
      if(error.response && error.reponse.status === 401){
        this.$router.push({name:'login'})
      }
      console.log(error)
    }
  },
  methods: {
    deleteFileItem(index) {
      this.capturedFile.splice(index)
      this.capturedComment.splice(index)
      this.fileName.splice(index)
      this.files--
    },
    onFileChange(index, e) {
      console.log(this)
      const fileReader = new FileReader()
      fileReader.onload = event => {
        console.log(event.target.result)
        image[index] = event.target.result
      }
      fileReader.readAsDataURL(e.target.files[0])
      this.capturedFile[index] = e.target.files[0]
    },
    addFile() {
      this.files++
    },
    onSubmit(evt) {
      evt.preventDefault()
      const fd = new FormData()
      this.capturedFile.forEach(file => fd.append('workImage', file))
      fd.append('comments', JSON.stringify(this.capturedComment))
      fd.append('taskListValue', JSON.stringify(this.TaskListValue))

      axios
        .post(
          'http://localhost:3000/submit-compliance/5e664847463da44026e3be8b',
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
      this.capturedFile = []
      this.capturedComment = []
      this.fileName = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        //things changed and noticed by vue but showing changing status before rendering to dom
        this.show = true
      })
    }
  }
}
</script>
<style lang="css" scoped>
.makeInLine {
  width: 65% !important;
  margin: 0 20px;
}
.close {
  border: 1px solid grey !important;
  padding: 6px;
  position: relative;
  left: -5%;
  cursor: pointer;
}
#main-box {
  padding: 5px;
}

/*close icon*/
.clickable {
  cursor: pointer;
}

textarea {
  border: 1px solid grey;
  padding: 6px 10px;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
}
#submit{
  background-color: #2493e2;
  border:none;
  width: 100px;
}
</style>