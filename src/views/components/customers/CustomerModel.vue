<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" class="secondShade" v-bind="attrs" v-on="on" icon> + </v-btn>
      </template>
      <v-card>
        <v-form>
          <v-card-title class="text-h5 teal font-weight-bold white--text">Add Customer</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="customerName"
                    label="Customer Name"
                    outlined
                    dense
                    placeholder="Customer Name"
                    hide-details
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="customerEmail"
                    label="Customer Email"
                    outlined
                    dense
                    placeholder="Customer Email"
                    hide-details
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="customerRegion"
                    label="Customer Region"
                    outlined
                    dense
                    placeholder="Customer Region"
                    hide-details
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" md="12">
                  <v-select
                    v-model="customerBranch"
                    label="Customer Branch"
                    outlined
                    dense
                    placeholder="Customer Branch"
                    type="text"
                    :items="['1', '2', '3', '4']"
                    required
                  ></v-select>
                </v-col> -->
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
            <v-btn color="primary darken-1" text @click="dialog = false" type="submit" @click.prevent="addCustomer">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    let dialog = false
    let customerEmail = ''
    // let contactPhone = ''
    let customerName = ''
    let customerRegion = ''

    return {
      dialog,
      customerEmail,
      // contactPhone,
      customerName,
      customerRegion,
    }
  },
  methods: {
    async addCustomer() {
      axios
        .post('http://127.0.0.1:8000/api/customers', {
          customer_name: this.customerName,
          email: this.customerEmail,
          region: this.customerRegion,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>

<style>
</style>
