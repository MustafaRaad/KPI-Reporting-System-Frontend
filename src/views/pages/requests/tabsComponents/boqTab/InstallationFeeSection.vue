<template>
  <v-card class="app-invoice-editable mb-5" outlined>
    <v-card-title class="second pb-0"><p class="text--primary">Installation Fees</p> </v-card-title>
    <!-- Add purchased products -->
    <v-card-text class="add-products-form py-4 px-4">
      <div
        v-for="(installationFeeSectionItems, installationFeeSectionItemsIndex) in data.installationFeeSectionItems"
        :key="installationFeeSectionItemsIndex"
        class="single-product-form"
      >
        <v-card class="d-flex">
          <!-- Left Form -->
          <div class="pa-5 flex-grow-1">
            <v-row>
              <v-col cols="12" md="4">
                <v-autocomplete
                  v-model="installationFeeSectionItems.feeType"
                  outlined
                  dense
                  :items="itemsOptions"
                  item-text="feeType"
                  item-value="feeType"
                  :menu-props="{ offsetY: true }"
                  placeholder="Fee Type"
                  label="Fee Type"
                  hide-details="auto"
                  return-object
                  @input="obj => updateItemForm(installationFeeSectionItemsIndex, obj)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="4" sm="4">
                <v-text-field
                  v-model.number="installationFeeSectionItems.price"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Price"
                  placeholder="$"
                  @input="
                    val => {
                      installationFeeSectionItems.price = Math.abs(val)
                    }
                  "
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" sm="4">
                <v-textarea
                  v-model="installationFeeSectionItems.note"
                  outlined
                  label="Note"
                  rows="1"
                  hide-details="auto"
                  placeholder="Note"
                ></v-textarea>
              </v-col>
            </v-row>
          </div>
          <!-- Item Actions -->
          <div class="d-flex flex-column item-actions rounded-0 pa-1 justify-center">
            <v-btn icon small @click="data.installationFeeSectionItems.splice(installationFeeSectionItemsIndex, 1)">
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
    const itemsOptions = ['App Design', 'App Customization', 'ABC Template', 'App Development']

    const updateItemForm = (index, val) => {
      const { price } = val
      /* eslint-disable no-param-reassign */
      props.data.installationFeeSectionItems[index].price = price
      /* eslint-enable */
    }

    const addNewItem = () => {
      props.data.installationFeeSectionItems.push({
        feeType: '',
        price: 0,
        note: '',
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
