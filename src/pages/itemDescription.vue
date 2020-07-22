<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <p>Assignment Code:</p>
            <p class="value">{{info.assignmentNumber}}</p>

            <p>Equipment ID:</p>
            <p class="value">{{equipmentId}}</p>

            <p>Equipment Code:</p>
            <p class="value">{{info.equipmentCode}}</p>

            <p>Equipment Name:</p>
            <p class="value">{{info.equipmentName}}</p>

            <p>Description:</p>
            <p class="value">{{info.description}}</p>

            <p>Location:</p>
            <p class="value">{{info.location}}</p>

            <div>
              <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Show Task List</b-button>

              <b-modal id="bv-modal-example" hide-footer>
                <template v-slot:modal-title>List of the tasks</template>
                <div class="d-block" id="tasklistBlock">
                  <h3>Tasks</h3>
                  <ul id="tasklist">
                    <li v-for="(task, index) in info.tasklist" :key="index">{{ task }}</li>
                  </ul>
                </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Done</b-button>
              </b-modal>
            </div>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <label for="engiSelect">Assign to:</label>
          <b-form-select
            name="engiSelect"
            v-model="selected"
            :options="engineers"
            size="sm"
            class="mt-3"
            value-field="engineerID"
            text-field="name"
          ></b-form-select>
          <b-form-textarea
            id="textarea-rows"
            v-model="remarks"
            placeholder="Additional Remarks"
            rows="5"
          ></b-form-textarea>
          <b-button @click="assignEngineer" variant="info">Assign</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  async mounted() {
    try {
      const { data: orderData } = await axios.get(
        `http://localhost:3000/order/${this.equipmentId}`
      )
      this.info = orderData

      const { data: engiData } = await axios.get(
        `http://localhost:3000/engineers`
      )
      this.engineers = engiData
    } catch (error) {
      if(error.response && error.response.status === 401){
        this.$route.push({name:'login'})
      }
      console.log(error)
    }
  },
  data() {
    return {
      info: {},
      equipmentId: this.$route.params.id,
      selected: null,
      engineers: [],
      remarks: null
    }
  },
  methods: {
    async assignEngineer() {
      try {
        const payLoad = {
          equipmentCode: this.info.equipmentCode,
          orderId: this.equipmentId,
          engineerID: this.selected,
          additionalRemarks: this.remarks ? this.remarks : 'No remarks'
        }

        const response = await axios.post(
          'http://localhost:3000/submit-form',
          payLoad
        )

        if (response.status === 200) {
          this.$router.push({ name: 'joblist' })
        }
        else{
          alert("Some Error Ocurred,Please submit again!")
        }
      }
      catch(error){
         if(error.response && error.response.status === 401){
        this.$router.push({name:'login'})
      }
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.btn {
  margin-top: 50px !important;
}
.row {
  width: 100% !important;
}
p {
  color: #3f4441;
}
.value {
  border-bottom: 1px solid #00000030;
  margin-left: 20px;
  color: #1b262c;
  font-size: 16px;
}
#tasklistBlock {
  width: fit-content;
  margin: auto;
}
#tasklistBlock > h3 {
  margin-left: 10px;
}

#textarea-rows {
  margin-top: 1.5rem;
}
#show-btn {
  display: block;
  margin: auto;
}
</style>
