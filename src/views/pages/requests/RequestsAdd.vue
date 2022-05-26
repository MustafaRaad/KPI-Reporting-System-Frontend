<template>
  <div>
    <v-card outlined>
      <v-card-title class="text-h5 teal font-weight-bold white--text">
        Add Request
      </v-card-title>
      <v-card-text>
        <v-form class="multi-col-validation">
          <v-row class="ml-2 mt-3">
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="requestData.contact_email"
                label="Contact Email"
                outlined
                dense
                placeholder="Contact Email"
                hide-details
                type="email"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
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
              md="3"
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

            <!-- <v-col cols="12" md="4">
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
              md="4"
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
              md="4"
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
              md="4"
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
              md="4"
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
              md="4"
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
              md="4"
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
              md="4"
            >
              <v-text-field
                v-model="requestData.notes"
                label="Notes"
                outlined
                dense
                placeholder="Notes"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
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
              md="4"
            >
              <v-text-field
                v-model="requestData.request_no"
                label="Request NO"
                outlined
                dense
                placeholder="Request NO"
                hide-details
                type="number"
                required
              ></v-text-field>
            </v-col>

            <v-card-text>
              <v-tabs>
                <v-tab href="#Services-tab">
                  Services
                </v-tab>
                <v-tab-item
                  class="pt-8"
                  value="Services-tab"
                >
                  <v-card-text>
                    <service-section :data="tabsData">
                    </service-section>
                    <ggc-section :data="tabsData"></ggc-section>
                    <fna-section :data="tabsData">
                    </fna-section>
                    <vodu-section :data="tabsData">
                    </vodu-section>
                    <public-ip-section :data="tabsData">
                    </public-ip-section>
                  </v-card-text>
                </v-tab-item>
                <v-tab href="#Boq-tab">
                  Boq
                </v-tab>
                <v-tab-item
                  class="pa-8"
                  value="Boq-tab"
                >
                  <boq-section :data="tabsData">
                  </boq-section>
                  <installation-fee-section :data="tabsData"></installation-fee-section>
                </v-tab-item>
              </v-tabs>
            </v-card-text>

            <v-col cols="12">
              <v-btn
                color="primary"
                type="submit"
                @click.prevent="addRequest"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiPlus } from '@mdi/js'
import axios from 'axios'
import { ref } from '@vue/composition-api'
import CustomerModel from '@/views/components/customers/CustomerModel.vue'

import ServiceSection from './tabsComponents/servicesTab/ServiceSection.vue'
import GgcSection from './tabsComponents/servicesTab/GgcSection.vue'
import FnaSection from './tabsComponents/servicesTab/FnaSection.vue'
import VoduSection from './tabsComponents/servicesTab/VoduSection.vue'
import PublicIpSection from './tabsComponents/servicesTab/PublicIpSection.vue'
import BoqSection from './tabsComponents/boqTab/BoqSection.vue'
import InstallationFeeSection from './tabsComponents/boqTab/InstallationFeeSection.vue'

export default {
  components: {
    CustomerModel,
    ServiceSection,
    GgcSection,
    FnaSection,
    VoduSection,
    PublicIpSection,
    BoqSection,
    InstallationFeeSection,
  },
  setup() {
    const tabsData = ref({
      servicesSectionItems: [
        // {
        // itemTitle: '',
        // unitPrice: 0,
        // quantity: 0,
        // },
      ],
      ggcSectionItems: [],
      fnaSectionItems: [],
      voduSectionItems: [],
      publicipSectionItems: [],
      boqSectionItems: [],
      installationFeeSectionItems: [],
    })

    return {
      requestData: {},
      accountManagers: ['first', 'bar'],

      // branches: ['first', 'bar'],
      customers: ['first', 'bar'],
      mdiPlus,
      tabsData,
    }
  },
  methods: {
    async addRequest() {
      // this.tabsData.servicesSectionItems.forEach(element => {
      //   console.log('ser->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/services', {
      //         service_type: element.serviceType,
      //         qty: element.quantity,
      //         unit_price: element.unitPrice,
      //         requests_form_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.ggcSectionItems.forEach(element => {
      //   console.log('ggc->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/ggc', {
      //         qty: element.quantity,
      //         unit_price: element.unitPrice,
      //         requests_form_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.fnaSectionItems.forEach(element => {
      //   console.log('fna->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/fna', {
      //         qty: element.quantity,
      //         unit_price: element.unitPrice,
      //         requests_form_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.voduSectionItems.forEach(element => {
      //   console.log('vodu->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/vodu', {
      //         qty: element.quantity,
      //         unit_price: element.unitPrice,
      //         requests_form_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.publicipSectionItems.forEach(element => {
      //   console.log('ip->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/ip', {
      //         qty: element.quantity,
      //         unit_price: element.unitPrice,
      //         requests_form_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.boqSectionItems.forEach(element => {
      //   console.log('boq->', element)
      //   if (element.unitPrice > 0 || element.quantity > 0) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/boq', {
      //         account_manager: element.accountMngr,
      //         price: element.price,
      //         qty: element.quantity,
      //         rev: element.revenue,
      //         task_no: element.odooTaskNo,
      //         activation_date: element.activationDate,
      //         request_date: element.requestDate,
      //         note: element.note,
      //         requests_form_id: 1,
      //         item_type_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // this.tabsData.installationFeeSectionItems.forEach(element => {
      //   console.log('installationFee->', element.note)
      //   console.log('installationFee->', element)
      //   if (element.unitPrice > 0 || element.note) {
      //     axios
      //       .post('http://127.0.0.1:8000/api/installfee', {
      //         // feeType: element.feeType,
      //         price: element.price,
      //         note: element.note,
      //         requests_form_id: 1,
      //         item_type_id: 1,
      //       })
      //       .then(res => {
      //         console.log(res)
      //       })
      //       .catch(error => {
      //         console.log(error)
      //       })
      //   }
      // })
      // axios
      // .post(`http://127.0.0.1:8000/api/fna`, {
      //   fna: { qty: 15, unit_price: 123456, requests_form_id: 1 },
      //   ggc: { qty: 15, unit_price: 123456, requests_form_id: 1 },
      //   vodu: { qty: 15, unit_price: 123456, requests_form_id: 1 },
      //   ip: { qty: 15, unit_price: 123456, requests_form_id: 1 },
      //   // request: {},
      // })
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
      // axios
      //   .all([
      //     axios.post(`http://127.0.0.1:8000/api/fna`, {
      //       qty: 15,
      //       unit_price: 123456,
      //       requests_form_id: 1,
      //     }),
      //     axios.post(`http://127.0.0.1:8000/api/ggc`, {
      //       qty: 15,
      //       unit_price: 123456,
      //       requests_form_id: 1,
      //     }),
      //     axios.post(`http://127.0.0.1:8000/api/vodu`, {
      //       qty: 15,
      //       unit_price: 123456,
      //       requests_form_id: 1,
      //     }),
      //     axios.post(`http://127.0.0.1:8000/api/ip`, {
      //       qty: 15,
      //       unit_price: 123456,
      //       requests_form_id: 1,
      //     }),
      //   ])
      //   .then(
      //     axios.spread((d1, d2, d3, d4) => {
      //       // output of req.
      //       console.log('d1', d1, 'd2', d2, 'd3', d3, 'd4', d4)
      //     }),
      //   )
      axios
        .post('http://127.0.0.1:8000/api/requestsForm', this.requestData)
        .then(res => {
          this.$router.push({ name: 'list-requests' })
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/preset/apps/invoice.scss';
</style>
