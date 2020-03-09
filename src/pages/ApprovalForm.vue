<template>
    <div>
        <b-container class="bv-example-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <b-form-group
              id="input-group-1"
              label="Assignment Code:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="number"
                v-model="info.assignmentNumber"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Equipment ID:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="equipmentId"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Equipment Code:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="info.equipmentCode"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Equipment Name:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model="info.equipmentName"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Description"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="info.description"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Location:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="info.location"
                disabled
              ></b-form-input>
            </b-form-group>
            <div>
              <b-button
                variant="primary"
                id="show-btn"
                @click="$bvModal.show('bv-modal-example')"
                >Show Task List</b-button
              >

              <b-modal id="bv-modal-example" hide-footer>
                <template v-slot:modal-title>List of the tasks</template>
                <div class="d-block" id="tasklistBlock">
                  <h3>Tasks</h3>
                  <ul id="tasklist">
                    <li v-for="(task, index) in info.tasklist" :key="index">
                      {{ task }}
                    </li>
                  </ul>
                </div>
                <b-button
                  class="mt-3"
                  block
                  @click="$bvModal.hide('bv-modal-example')"
                  >Done</b-button
                >
              </b-modal>
            </div>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <b-form-group
              id="engi-group-1"
              label="Department:"
              label-for="input-1"
            >
              <b-form-input
                id="engi-1"
                type="text"
                v-model="info.engineerDepartment"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="engi-group-5"
              label="Engineer Id:"
              label-for="input-5"
            >
              <b-form-input
                id="engi-5"
                type="number"
                v-model="info.engineerId"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="engi-group-2"
              label="Name:"
              label-for="input-2"
            >
              <b-form-input
                id="engi-2"
                type="text"
                v-model="info.engineerName"
                disabled
              ></b-form-input>
            </b-form-group>
            
            <b-form-group
              id="engi-group-3"
              label="Email Id:"
              label-for="input-3"
            >
              <b-form-input
                id="engi-3"
                type="text"
                v-model="info.engineerEmail"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="engi-group-4"
              label="Phone Number:"
              label-for="input-4"
            >
              <b-form-input
                id="engi-4"
                type="number"
                v-model="info.engineerPhone"
                disabled
              ></b-form-input>
            </b-form-group>

            </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <div class="status">
        <h3>Opened on </h3>
        <h3>Closed on </h3>
    </div>

    <div class="justification">
    <h1>Justification</h1>
    <b-container class="bv-example-row">
  <b-row>
    <b-col>
        <div>
        <img src="https://blog.hartleybrody.com/wp-content/uploads/2015/01/logomark-orange@2x.png">
        <h4>Description</h4>
        </div>
    </b-col>
    <b-col>
        <div>
        <img src="https://blog.hartleybrody.com/wp-content/uploads/2015/01/logomark-orange@2x.png">
        <h4>Description</h4>
        </div>
    </b-col>
  </b-row>
</b-container>
</div>

<div class="approval">
<h2>Approval</h2>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
    <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Pass
    </b-form-checkbox>
    </div>
    </b-col>
    <b-col>
    <div>
    <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Fail
    </b-form-checkbox>
    </div>
    </b-col>
    <b-col>
        <div>
    <b-form-checkbox
      id="checkbox-3"
      v-model="status"
      name="checkbox-3"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Partially Pass
    </b-form-checkbox>
    </div>
    </b-col>
  </b-row>
</b-container>
</div>


<div class="remarks">
<b-form-textarea
            id="textarea"
            v-model="remarks"
            placeholder="Additional Remarks"
            rows="5"
          ></b-form-textarea>
</div>

<!-- On clicking approveReport function is called -->
<b-button @click="approveReport" variant="info">Submit</b-button>


</div>
</template>

<script>
const axios=require('axios')

export default {
    data() {
    return {
      info: {},
      equipmentId: this.$route.params.id,
      selected: null,
      engineers: [],
      remarks: null
    }
  },
   mounted() {
    //first get request to fetch order details
    axios
      .get('http://localhost:3000/order/' + this.equipmentId)
      .then(response => (this.info = response.data))
      .catch(er => console.log('Error :', er))
      axios
      .get('http://localhost:3000/engineers')
      .then(response => (this.engineers = response.data))
      .catch(er => console.log('Cant fetch the engineers data:', er))
      .finally(() => {
        this.engineers.unshift({
          engineerID: null,
          name: 'Select the engineer',
          disabled: true
        })
      })
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