<template>
  <v-card
    class="app-invoice-editable mb-5"
    outlined
  >
    <v-card-title class="second pb-0">
      <p class="text--primary">
        Services
      </p>
    </v-card-title>
    <!-- Add purchased products -->
    <v-card-text class="add-products-form py-4 px-4">
      <div
        v-for="(servicesSectionItems, servicesSectionItemsIndex) in data.servicesSectionItems"
        :key="servicesSectionItemsIndex"
        class="single-product-form"
      >
        <v-card class="d-flex">
          <!-- Left Form -->
          <div class="pa-5 flex-grow-1">
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-autocomplete
                  v-model="servicesSectionItems.serviceType"
                  outlined
                  dense
                  :items="itemsOptions"
                  item-text="serviceType"
                  item-value="serviceType"
                  :menu-props="{ offsetY: true }"
                  placeholder="Service Type"
                  label="Service Type"
                  hide-details="auto"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                md="2"
                sm="4"
              >
                <v-text-field
                  v-model.number="servicesSectionItems.unitPrice"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Unit price"
                  placeholder="$"
                  @input="
                    val => {
                      servicesSectionItems.unitPrice = Math.abs(val)
                    }
                  "
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                sm="4"
              >
                <v-text-field
                  v-model.number="servicesSectionItems.quantity"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Quantity"
                  placeholder="Quantity"
                  @input="
                    val => {
                      servicesSectionItems.quantity = Math.abs(val)
                    }
                  "
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="3"
                sm="4"
              >
                <p class="my-2">
                  <span class="d-inline d-md-none">Price: </span>
                  <span>${{ servicesSectionItems.unitPrice * servicesSectionItems.quantity }}</span>
                </p>
              </v-col>
            </v-row>
          </div>
          <!-- Item Actions -->
          <div class="d-flex flex-column item-actions rounded-0 pa-1 justify-center">
            <v-btn
              icon
              small
              @click="data.servicesSectionItems.splice(servicesSectionItemsIndex, 1)"
            >
              <v-icon size="20">
                {{ icons.mdiClose }}
              </v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
      <v-btn
        color="primary"
        class="mt-4"
        outlined
        @click="addNewItem"
      >
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
    const itemsOptions = ['App Design', 'App Customization', 'ABC Template', 'App Development']

    const updateItemForm = (index, val) => {
      const { unitPrice, quantity } = val
      /* eslint-disable no-param-reassign */
      props.data.servicesSectionItems[index].unitPrice = unitPrice
      props.data.servicesSectionItems[index].quantity = quantity
      /* eslint-enable */
    }

    const addNewItem = () => {
      props.data.servicesSectionItems.push({
        serviceType: '',
        unitPrice: 0,
        quantity: 0,
      })
    }

    return {
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
    background: #fafafa;
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
