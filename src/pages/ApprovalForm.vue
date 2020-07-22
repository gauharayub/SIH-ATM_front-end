<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <b-form-group label="Assignment Code:" label-for="input-1">
              <b-form-input id="input-1" type="number" v-model="info.assignmentNumber" disabled></b-form-input>
            </b-form-group>
            <b-form-group label="Equipment ID:" label-for="input-2">
              <b-form-input id="input-2" v-model="equipmentId" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Equipment Code:" label-for="input-4">
              <b-form-input id="input-4" v-model="info.equipmentCode" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Equipment Name:" label-for="input-6">
              <b-form-input id="input-6" v-model="info.equipmentName" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Description" label-for="input-5">
              <b-form-input id="input-5" v-model="info.description" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Location:" label-for="input-3">
              <b-form-input id="input-3" v-model="info.location" disabled></b-form-input>
            </b-form-group>
            <div>
              <b-button
                variant="primary"
                id="show-btn"
                @click="$bvModal.show('bv-modal-example')"
              >Show Task List</b-button>

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
    <b-container class="bv-example-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <b-form-group label="Department:" label-for="input-1">
              <b-form-input id="engi-1" type="text" v-model="info.engineerDepartment" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Engineer Id:" label-for="input-5">
              <b-form-input id="engi-5" type="number" v-model="info.engineerId" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Name:" label-for="input-2">
              <b-form-input id="engi-2" type="text" v-model="info.engineerName" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Email Id:" label-for="input-3">
              <b-form-input id="engi-3" type="text" v-model="info.engineerEmail" disabled></b-form-input>
            </b-form-group>

            <b-form-group label="Phone Number:" label-for="input-4">
              <b-form-input id="engi-4" type="number" v-model="info.engineerPhone" disabled></b-form-input>
            </b-form-group>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <div class="status blockquote">
            <h6 class="mb-0">
              Opened on
              <span class="pull-right">Closed on</span>
            </h6>
            <footer class="blockquote-footer" style="padding-top:0px">
              3/10/20
              <span class="pull-right">03/10/20</span>
            </footer>
          </div>

          <div class="justification card box">
            <h3 class="card-title" style="padding:5px">
              <i class="far fa-file-alt"></i> Justification
            </h3>
            <b-container class="bv-example-row">
              <div class="card-body">
                <b-row>
                  <b-col>
                    <div class="card">
                      <img
                        class="card-img-top"
                        height="50%"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Two_man_replace_a_main_landing_gear_tire_of_a_plane.jpg"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Description</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <b-button
                          variant="info"
                          id="view-btn"
                          @click="$bvModal.show('bv-more-info1')"
                        >View more</b-button>

                        <b-modal id="bv-more-info1" hide-footer>
                          <template v-slot:modal-title>Description</template>
                          <div class="d-block" id="moreInfoBlock">
                            <p>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                          <b-button class="mt-3" block @click="$bvModal.hide('bv-more-info1')">Done</b-button>
                        </b-modal>
                      </div>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="card">
                      <img
                        class="card-img-top"
                        height="50%"
                        src="https://www.telegraph.co.uk/content/dam/Travel/leadAssets/32/59/plane-undercarriag_3259724a.jpg?imwidth=450"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Description</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <b-button
                          variant="info"
                          id="view-btn"
                          @click="$bvModal.show('bv-more-info2')"
                        >View more</b-button>

                        <b-modal id="bv-more-info2" hide-footer>
                          <template v-slot:modal-title>Description</template>
                          <div class="d-block" id="moreInfoBlock">
                            <p>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                          <b-button class="mt-3" block @click="$bvModal.hide('bv-more-info2')">Done</b-button>
                        </b-modal>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-container>
          </div>

          <div class="approval card box">
            <h3 class="card-title content" style="padding:5px">
              <img :src="require(`@/assets/img/approval.png`)" /> Approval
            </h3>
            <b-container class="bv-example-row card-body content">
              <b-row>
                <b-col>
                  <div>
                    <b-form-checkbox
                      class="cb"
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Pass
                      <i class="fas fa-check-circle"></i>
                    </b-form-checkbox>
                  </div>
                </b-col>
                <b-col>
                  <div>
                    <b-form-checkbox
                      class="cb"
                      id="checkbox-2"
                      v-model="status"
                      name="checkbox-2"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Fail
                      <i class="fas fa-times-circle"></i>
                    </b-form-checkbox>
                  </div>
                </b-col>
                <b-col>
                  <div>
                    <b-form-checkbox
                      class="cb"
                      id="checkbox-3"
                      v-model="status"
                      name="checkbox-3"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Partially Pass
                      <i class="fas fa-exclamation-circle"></i>
                    </b-form-checkbox>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            <div class="remarks card-body">
              <b-form-textarea
                id="textarea"
                v-model="remarks"
                placeholder="Additional Remarks"
                rows="5"
                margin="5px"
              ></b-form-textarea>
            </div>
          </div>

          <!-- On clicking approveReport function is called -->
          <b-button class="pull-right mt-2 mb-2" @click="approveReport" variant="primary">Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const axios = require('axios')

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
  async mounted() {
    try {
      //first get request to fetch order details
      const { data: orderData } = await axios.get(
        `http://localhost:3000/order/${this.equipmentId}`,
        {headers: { authorization: this.$cookies.get('token') }}
      )
      this.info = orderData

      const { data: engiData } = await axios.get(
        'http://localhost:3000/engineers',
        {headers: { authorization: this.$cookies.get('token') }}
      )
      this.engineers = engiData
      this.engineers.unshift({
        engineerID: null,
        name: 'Select the engineer',
        disabled: true
      })
    } catch (error) {
      if(error.response && error.response.status === 401){
        this.$router.push({name:'login'})
      }
      console.log(error)
    }
  }
}
</script>

<style scoped>
jumbotron .btn {
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
.blockquote-footer::before {
  content: '';
}
.md-theme-default a:not(.md-button) {
  color: white;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.box {
  box-shadow: 5px 5px 10px #888888;
}
.approval {
  margin-top: 2rem;
}
.content {
  margin-bottom: 0px;
  padding-bottom: 0px;
}
</style>
