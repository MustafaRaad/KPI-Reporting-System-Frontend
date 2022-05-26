<template>
  <v-card outlined>
    <v-card-title class="text-h5 accent font-weight-bold white--text justify-space-between">
      <span> Edit Customer</span>
      <span class="second--text ml-1">#{{ customerData.customer_name }}</span>
    </v-card-title>

    <v-card-text>
      <v-form class="multi-col-validation" @submit.prevent="updateRequest">
        <v-row class="ml-2 mt-3">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="customerData.customer_name"
              label="Customer name"
              outlined
              dense
              placeholder="Customer name"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="customerData.email"
              label="Email"
              outlined
              dense
              placeholder="Email"
              hide-details
              type="email"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="customerData.region"
              label="Region"
              outlined
              dense
              placeholder="region"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <!-- <v-col cols="12" md="6">
            <v-autocomplete
              v-model="branch"
              label="Branch"
              outlined
              dense
              placeholder="Branch"
              hide-details
              :items="branches"
              required
            ></v-autocomplete>
          </v-col> -->

          <v-col cols="12">
            <v-btn color="primary" type="submit"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

// import CustomerModel from '@/components/requests/CustomerModel.vue'
export default {
  // components: {
  //   CustomerModel,
  // },
  data() {
    return {
      customerData: {},
      customers: ['first', 'bar'],
      accountManagers: ['first', 'bar'],
    }
  },
  created() {
    let uri = `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
    axios.get(uri).then(response => {
      this.customerData = response.data
    })
  },

  methods: {
    async updateRequest() {
      let uri = `http://127.0.0.1:8000/api/customers/${this.$route.params.id}`
      axios.put(uri, this.customerData).then(response => {
        this.$router.push({ name: 'list-customers' })
      })
    },
  },
}
</script>


