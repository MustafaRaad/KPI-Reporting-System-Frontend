<template>
  <v-card>
    <v-card-title>
      <div class="d-flex align-center pb-5">
        <!-- create request -->
        <v-btn
          color="primary"
          class="me-3"
          :to="{ name: 'add-requests' }"
        >
          <v-icon
            size="18"
            class="me-1"
          >
            {{ mdiPlus }}
          </v-icon>
          <span>Add a request</span>
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
      :items="requestsList"
      sort-by="request_date"
      sort-desc
      :search="search"
    >
      <template v-slot:item.request_date="{ item }">
        <v-chip
          color="teal"
          outlined
        >
          {{ item.request_date }}
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
                :to="{ name: 'view-requests', params: { id: item.id } }"
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
                :to="{ name: 'edit-requests', params: { id: item.id } }"
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
                @click.prevent="deleteRequest(item.id)"
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
    const actions = ['View', 'Edit', 'Delete']
    const requestsList = []

    return {
      search: '',
      actions,
      mdiDeleteOutline,
      mdiEyeOutline,
      mdiPencilOutline,
      mdiPlus,
      mdiMagnify,
      requestsList,
      headers: [
        {
          text: 'ID', align: 'start', sortable: false, value: 'id',
        },
        { text: 'request_no', value: 'request_no' },
        { text: 'request_date', value: 'request_date' },
        { text: 'Branch', value: 'branches' },
        { text: 'week_number', value: 'week_number' },
        { text: 'billing_date', value: 'billing_date' },
        { text: 'activition_date', value: 'activition_date' },
        { text: 'request_type', value: 'request_type' },
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
    axios.get('RequestsModels').then(res => {
      this.requestsList = res.data
      console.log(this.requestsList)
    })
  },
  methods: {
    async deleteRequest(id) {
      const uri = `RequestsModels/${id}`
      axios.delete(uri, this.requestsList)
      this.$router.go()
    },
  },
}
</script>
