<template>
  <v-card outlined>
    <v-card-title
      class="text-h5 accent font-weight-bold white--text justify-space-between"
    >
      View Request
      <v-btn
        color="secondShade"
        :to="{ name: 'edit-requests' }"
      >
        <v-icon size="18">
          {{ mdiPencil }}
        </v-icon>
        <span>Edit</span>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-form class="multi-col-validation">
        <v-row class="ml-2 mt-3">
          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Conatct Email
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.contact_email }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Conatct Phone
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.contact_phone }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Customer Name
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.customer_name }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Week Number
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.week_number }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Status
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.status }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Request Date
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.request_date }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Billing Date
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.billing_date }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Activation Date
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.activition_date }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Account Manager
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.account_manager }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Notes
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.notes }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Request Type
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.request_type }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="border"
          >
            <v-card outlined>
              <div class="pa-3 secondShade pa-2 rounded accent--text text-center">
                Request No
              </div>
              <v-card-text class="pa-3 text-center">
                <span class="blackShadow--text">
                  {{ requestData.request_no }}
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
import axios from '@/plugins/axios'

export default {
  data() {
    return {
      requestData: {},
      mdiPencil,
    }
  },
  mounted() {
    const uri = `RequestsModels/${this.$route.params.id}`
    axios.get(uri).then(response => {
      this.requestData = response.data
    })
  },
}
</script>
