<template>
  <v-card outlined>
    <v-card-title class="text-h5 accent font-weight-bold white--text justify-space-between">
      <span> Edit Request </span>
      <span class="second--text ml-1">#{{ requestData.request_no }}</span>
    </v-card-title>
    <v-card-text>
      <v-form
        class="multi-col-validation"
        @submit.prevent="updateRequest"
      >
        <v-row class="ml-2 mt-3">
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.contact_email"
              label="Contact Email"
              outlined
              dense
              :placeholder="requestData.contact_email"
              hide-details
              type="email"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.contact_phone"
              label="Contact Phone"
              outlined
              dense
              placeholder="Contact Phone"
              hide-details
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="10"
            md="5"
          >
            <v-autocomplete
              v-model="requestData.customer_name"
              label="Customer name"
              outlined
              dense
              placeholder="Customer name"
              hide-details
              :items="customers"
              required
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="2"
            md="1"
          >
            <v-btn
              color="primary"
              icon
            >
              <customer-model></customer-model>
            </v-btn>
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

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.week_number"
              label="Week Number"
              outlined
              dense
              placeholder="Week Number"
              hide-details
              required
              type="number"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.status"
              label="Status"
              outlined
              dense
              placeholder="Status"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.request_date"
              label="Request Date"
              outlined
              dense
              placeholder="Request Date"
              hide-details
              type="date"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.billing_date"
              label="Billing Date"
              outlined
              dense
              placeholder="Billing Date"
              hide-details
              type="date"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.activition_date"
              label="Activation Date"
              outlined
              dense
              placeholder="Activation Date"
              hide-details
              type="date"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-autocomplete
              v-model="requestData.account_manager"
              label="Account Manager"
              outlined
              dense
              placeholder="Account Manager"
              hide-details
              :items="accountManagers"
              required
            ></v-autocomplete>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.notes"
              label="Notes"
              outlined
              dense
              placeholder="Notes"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.request_type"
              label="Request Type"
              outlined
              dense
              placeholder="Request Type"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="requestData.request_no"
              label="Request NO"
              outlined
              dense
              placeholder="Request NO"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              type="submit"
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
import axios from 'axios'
import CustomerModel from '@/views/components/customers/CustomerModel.vue'

export default {
  components: {
    CustomerModel,
  },
  data() {
    return {
      requestData: {},
      customers: ['first', 'bar'],
      accountManagers: ['first', 'bar'],
    }
  },
  created() {
    const uri = `http://127.0.0.1:8000/api/requestsForm/${this.$route.params.id}`
    axios.get(uri).then(response => {
      this.requestData = response.data
    })
  },

  methods: {
    async updateRequest() {
      const uri = `http://127.0.0.1:8000/api/requestsForm/${this.$route.params.id}`
      axios.put(uri, this.requestData).then(response => {
        this.$router.push({ name: 'list-requests' })
      })
    },
  },
}
</script>
