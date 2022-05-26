<template>
  <v-card outlined>
    <v-card-title class="text-h5 teal font-weight-bold white--text">
      Add Customer
    </v-card-title>
    <v-card-text>
      <v-form class="multi-col-validation">
        <v-row class="ml-2 mt-3">
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="customerData.customer_name"
              label="customerName"
              outlined
              dense
              placeholder="customerName"
              hide-details
              type="text"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="customerData.email"
              label="Contact Email"
              outlined
              dense
              placeholder="Contact Email"
              hide-details
              type="email"
              required
            ></v-text-field>
          </v-col>

          <!-- <v-col cols="12" md="6">
            <v-text-field
              v-model="contactPhone"
              label="Contact Phone"
              outlined
              dense
              placeholder="Contact Phone"
              hide-details
              type="number"
              required
            ></v-text-field>
          </v-col> -->

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="customerData.region"
              label="region"
              outlined
              dense
              placeholder="region"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              type="submit"
              @click.prevent="addCustomer"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlus } from '@mdi/js'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      customerData: {},
      mdiPlus,
    }
  },
  methods: {
    async addCustomer() {
      console.log('customer Data', this.customerData)
      axios
        .post('http://a792-185-138-122-18.ngrok.io/api/CustomersModels', this.customerData)
        .then(res => {
          this.$router.push({ name: 'list-customers' })
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>
