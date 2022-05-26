<template>
  <v-card outlined>
    <v-card-title class="text-h5 accent font-weight-bold white--text justify-space-between"
      >View Request
      <v-btn color="secondShade" :to="{ name: 'edit-customers' }">
        <v-icon size="18">
          {{ mdiPencil }}
        </v-icon>
        <span>Edit</span>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-form class="multi-col-validation">
        <v-row class="ml-2 mt-3">
          <v-col cols="12" md="4" class="border">
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">Customer name</div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ customerData.customer_name }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="border">
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">Email</div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ customerData.email }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="border">
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">Region</div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ customerData.region }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4" class="border">
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">Branch</div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  <!-- {{ customerData.branch }} -->
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPencil } from '@mdi/js'
import axios from 'axios'

export default {
  data() {
    return {
      customerData: {},
      mdiPencil,
    }
  },
  mounted() {
    let uri = `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
    axios.get(uri).then(response => {
      this.customerData = response.data
      console.log(response.data)
    })
  },
}
</script>


