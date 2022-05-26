<template>
  <v-card>
    <v-card-title>
      <div class="d-flex align-center pb-5">
        <!-- create request -->
        <v-btn
          color="primary"
          class="me-3"
          :to="{ name: 'add-customers' }"
        >
          <v-icon
            size="18"
            class="me-1"
          >
            {{ mdiPlus }}
          </v-icon>
          <span>Add a customer</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        dense
        outlined
        hide-details
        class="request-list-search me-3"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="customersList"
      sort-by="customer_Name"
      :search="search"
    >
      <template v-slot:item.customer_Name="{ item }">
        <v-chip
          color="teal"
          outlined
        >
          {{ item.customer_Name }}
        </v-chip>
      </template>
      <template #[`item.actions`]="{ item }">
        <div class="d-flex align-center justify-center">
          <!-- view  -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                :to="{ name: 'view-customers', params: { id: item.id } }"
                class="info--text mx-1"
                v-on="on"
              >
                <v-icon size="18">
                  {{ mdiEyeOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>View</span>
          </v-tooltip>
          <!-- edit -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                :to="{ name: 'edit-customers', params: { id: item.id } }"
                class="info--text mx-1"
                v-on="on"
              >
                <v-icon size="18">
                  {{ mdiPencilOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>

          <!-- delete -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                class="error--text mx-1"
                v-on="on"
                @click.prevent="deleteCustomer(item.id)"
              >
                <v-icon size="18">
                  {{ mdiDeleteOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {
  mdiPlus, mdiMagnify, mdiDeleteOutline, mdiEyeOutline, mdiPencilOutline,
} from '@mdi/js'
import axios from '@/plugins/axios'

export default {
  data() {
    const actions = ['View', 'Delete', 'Edit']
    const customersList = []

    return {
      search: '',
      actions,
      mdiDeleteOutline,
      mdiEyeOutline,
      mdiPencilOutline,
      mdiPlus,
      mdiMagnify,
      customersList,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'customer_Name', value: 'customer_Name' },
        { text: 'email', value: 'email' },
        { text: 'region', value: 'region' },
        { text: 'branches', value: 'branches' },
        {
          text: 'ACTIONS',
          value: 'actions',
          align: 'center',
          sortable: false,
        },
      ],
    }
  },
  mounted() {
    axios
      .get('CustomersModels')
      .then(res => {
        this.customersList = res.data
        console.log('List', this.customersList)
        console.log(res.data)
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
      })
  },
  methods: {
    async deleteCustomer(id) {
      const uri = `CustomersModels/${id}`
      axios.delete(uri, this.requestsList)
      this.$router.go()
    },
  },
}
</script>
