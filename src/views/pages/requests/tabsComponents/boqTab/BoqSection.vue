<template>
  <v-card class="app-invoice-editable mb-5" outlined>
    <v-card-title class="second pb-0"><p class="text--primary">BOQ</p> </v-card-title>
    <!-- Add purchased products -->
    <v-card-text class="add-products-form py-4 px-4">
      <div
        v-for="(boqSectionItems, boqSectionItemsIndex) in data.boqSectionItems"
        :key="boqSectionItemsIndex"
        class="single-product-form"
      >
        <v-card class="d-flex">
          <!-- Left Form -->
          <div class="pa-5 flex-grow-1">
            <v-row>
              <v-col cols="12" md="4">
                <v-autocomplete
                  v-model="boqSectionItems.itemType"
                  outlined
                  dense
                  :items="itemsOptions"
                  item-text="itemType"
                  item-value="itemType"
                  :menu-props="{ offsetY: true }"
                  placeholder="Item type"
                  label="Item type"
                  hide-details="auto"
                  return-object
                  @input="obj => updateItemForm(boqSectionItemsIndex, obj)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model.number="boqSectionItems.price"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Unit price"
                  placeholder="$"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model.number="boqSectionItems.quantity"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Quantity"
                  placeholder="Quantity"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="">
                <v-text-field
                  v-model.number="boqSectionItems.odooTaskNo"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Odoo Task No"
                  placeholder="Odoo Task No"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="">
                <v-text-field
                  v-model.number="boqSectionItems.revenue"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Revenue"
                  placeholder="Revenue"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-textarea
                  v-model="boqSectionItems.note"
                  outlined
                  label="Note"
                  rows="1"
                  hide-details="auto"
                  placeholder="Note"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="3">
                <v-autocomplete
                  v-model.number="boqSectionItems.accountMngr"
                  outlined
                  dense
                  :items="itemsOptions"
                  item-text="itemType"
                  item-value="itemType"
                  :menu-props="{ offsetY: true }"
                  placeholder="Account Manager"
                  label="Account Manager"
                  hide-details="auto"
                  return-object
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" md="3">
                <v-menu
                  v-model="isActivationDateMenuOpen"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  eager
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="boqSectionItems.activationDate"
                      class="header-inputs flex-grow-0"
                      readonly
                      outlined
                      dense
                      hide-details="auto"
                      v-bind="attrs"
                      v-on="on"
                      label="Activation Date"
                      placeholder="Activation Date"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="boqSectionItems.activationDate"
                    @input="isActivationDateMenuOpen = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="2">
                <v-menu
                  v-model="isRequestDateMenuOpen"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  eager
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="boqSectionItems.requestDate"
                      class="header-inputs flex-grow-0"
                      readonly
                      outlined
                      dense
                      hide-details="auto"
                      v-bind="attrs"
                      v-on="on"
                      label="Request Date"
                      placeholder="Request Date"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="boqSectionItems.requestDate"
                    @input="isRequestDateMenuOpen = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </div>
          <!-- Item Actions -->
          <div class="d-flex flex-column item-actions rounded-0 pa-1 justify-center">
            <v-btn icon small @click="data.boqSectionItems.splice(boqSectionItemsIndex, 1)">
              <v-icon size="20">
                {{ icons.mdiClose }}
              </v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
      <v-btn color="primary" class="mt-4" outlined @click="addNewItem">
        <v-icon> {{ icons.mdiPlus }} </v-icon>Add Item
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
import { mdiClose, mdiPlus } from '@mdi/js'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isRequestDateMenuOpen = false
    const isActivationDateMenuOpen = false

    const itemsOptions = ['App Design', 'App Customization', 'ABC Template', 'App Development']

    const updateItemForm = (index, val) => {
      const { price, quantity } = val
      /* eslint-disable no-param-reassign */
      props.data.boqSectionItems[index].price = price
      props.data.boqSectionItems[index].quantity = quantity
      /* eslint-enable */
    }
    const date = new Date()
    const addNewItem = () => {
      props.data.boqSectionItems.push({
        itemType: '',
        price: 0,
        quantity: 0,
        note: '',
        revenue: 0,
        odooTaskNo: 0,
        accountMngr: '',
        activationDate: '',
        requestDate: '',
      })
    }

    return {
      isRequestDateMenuOpen,
      isActivationDateMenuOpen,

      itemsOptions,
      updateItemForm,
      addNewItem,

      // Icons
      icons: {
        mdiClose,
        mdiPlus,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/preset/apps/invoice.scss';

.app-invoice-editable {
  .add-products-form {
    .single-product-form {
      &:not(:first-child) {
        margin-top: 2rem;
      }
    }

    .header-spacer {
      // This is according to item actions width
      width: 39px;
    }
    .item-actions {
      @at-root {
        @include theme--child(add-products-form) using ($material) {
          .item-actions {
            border-left: thin solid map-deep-get($material, 'dividers');
          }
        }
      }
    }
  }
}
</style>
