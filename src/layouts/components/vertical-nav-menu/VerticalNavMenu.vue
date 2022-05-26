<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo.svg')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">
            AWAL Telecom
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <nav-menu-link
        title="Home"
        :to="{ name: 'home' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>

      <nav-menu-group
        title="Requests"
        :icon="icons.mdiFileChart"
      >
        <nav-menu-link
          :icon="icons.mdiViewListOutline"
          title="List"
          :to="{ name: 'list-requests' }"
        ></nav-menu-link>
        <nav-menu-link
          :icon="icons.mdiPlaylistPlus"
          title="Add"
          :to="{ name: 'add-requests' }"
        ></nav-menu-link>
      </nav-menu-group>

      <nav-menu-group
        title="Customers"
        :icon="icons.mdiAccountGroup"
      >
        <nav-menu-link
          :icon="icons.mdiViewListOutline"
          title="List"
          :to="{ name: 'list-customers' }"
        ></nav-menu-link>
        <nav-menu-link
          :icon="icons.mdiPlaylistPlus"
          title="Add"
          :to="{ name: 'add-customers' }"
        ></nav-menu-link>
      </nav-menu-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiFileOutline,
  mdiFileChart,
  mdiAccountGroup,
  mdiViewListOutline,
  mdiPlaylistPlus,
} from '@mdi/js'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiFileOutline,
        mdiFileChart,
        mdiAccountGroup,
        mdiViewListOutline,
        mdiPlaylistPlus,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
}

// ? Handle bg of autocomplete for blured appBar
.v-app-bar.bg-blur {
  .expanded-search {
    ::v-deep .app-bar-autocomplete-box div[role='combobox'] {
      background-color: transparent;
    }

    > .d-flex > button.v-icon {
      display: none;
    }

    // ===

    & > .right-row {
      visibility: hidden;
      opacity: 0;
    }

    ::v-deep .app-bar-search-toggler {
      visibility: hidden;
    }
  }
}
</style>
