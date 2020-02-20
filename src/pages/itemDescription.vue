<template>
  <div>
    <b-container class="bv-example-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="8" offset="2">
          <b-jumbotron>
            <b-row>
              <b-col cols="4">Assignment-code:</b-col>
              <b-col cols="8">{{info.assignmentcode}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="4">Equipment-id:</b-col>
              <b-col cols="8">{{$route.params.id}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="4">Equipment-Name:</b-col>
              <b-col cols="8">{{info.equipmentname}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="4">Description:</b-col>
              <b-col cols="8">{{info.description}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="4">Location:</b-col>
              <b-col cols="8">{{info.location}}</b-col>
            </b-row>
            <b-row>
              <b-col cols="4">Maintenance task description:</b-col>
              <b-col cols="8">{{info.taskdescription}}</b-col>
            </b-row>
            <div>
              <b-button variant="primary" id="show-btn" @click="$bvModal.show('bv-modal-example')">Show Task List</b-button>

              <b-modal id="bv-modal-example" hide-footer>
                <template v-slot:modal-title>
                  list of the tasks
                </template>
                <div class="d-block text-center">
                  <h3>Tasks</h3>
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
            :options="options"
            size="sm"
            class="mt-3"
          ></b-form-select>
          <!-- <div class="mt-3">
            Selected:
            <strong>{{ selected }}</strong>
          </div>-->
          <b-form-textarea id="textarea-rows" placeholder="Additional remarks" rows="5"></b-form-textarea>
          <b-button variant="info">Ok</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        assignmentcode: "5641821350148600",
        equipmentname: "Sales",
        description:
          "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        location: "7 Loftsgordon Road",
        taskdescription: "lorem ipsum thedarh yffy hkjhjkfgj hjh"
      },
      selected: "a",
      options: [
        { value: "a", text: "Md scientist" },
        { value: "b", text: "Gako aka 4 star" },
        { value: "c", text: "Ms in Cs in Us" },
        { value: { C: "d" }, text: "Vietnam talks" }
      ]
    };
  }
};
</script>
<style scoped>
.btn {
  color: white !important;
  margin-top: 50px !important;
}
.row {
  width: 100% !important;
}
.jumbotron {
  color: white;
  background-color: #42b983;
}
#textarea-rows {
  margin-top: 1.5rem;
}
#show-btn{
    display: block;
    margin: auto;
}

</style>