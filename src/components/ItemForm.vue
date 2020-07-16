<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>