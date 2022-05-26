const pages = [
  //
  //* ——— Requests ——————————————————
  //
  {
    path: '/requests/list/',
    name: 'list-requests',
    component: () => import('@/views/pages/requests/RequestsList.vue'),
    meta: {
      layout: 'content',
    },
  },

  {
    path: '/requests/add/',
    name: 'add-requests',
    component: () => import('@/views/pages/requests/RequestsAdd.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/requests/view/:id',
    name: 'view-requests',
    component: () => import('@/views/pages/requests/RequestsView.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/requests/edit/:id',
    name: 'edit-requests',
    component: () => import('@/views/pages/requests/RequestsEdit.vue'),
    meta: {
      layout: 'content',
    },
  },

  // * ——— customers ——————————————————
  {
    path: '/customers/list/',
    name: 'list-customers',
    component: () => import('@/views/pages/customers/CustomersList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/customers/add/',
    name: 'add-customers',
    component: () => import('@/views/pages/customers/CustomersAdd.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/customers/preview/:id',
    name: 'view-customers',
    component: () => import('@/views/pages/customers/CustomersView.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/customers/edit/:id',
    name: 'edit-customers',
    component: () => import('@/views/pages/customers/CustomersEdit.vue'),
    meta: {
      layout: 'content',
    },
  },
  //
  // //* ——— Invoice ——————————————————
  // //

  // {
  //   path: '/apps/invoice/list',
  //   name: 'apps-invoice-list',
  //   component: () => import('@/views/pages/invoice/invoice-list/InvoiceList.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },
  // {
  //   path: '/apps/invoice/preview/:id',
  //   name: 'apps-invoice-preview',
  //   component: () => import('@/views/pages/invoice/invoice-preview/InvoicePreview.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },
  // {
  //   path: '/apps/invoice/add/',
  //   name: 'apps-invoice-add',
  //   component: () => import('@/views/pages/invoice/invoice-add/InvoiceAdd.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },
  // {
  //   path: '/apps/invoice/edit/:id',
  //   name: 'apps-invoice-edit',
  //   component: () => import('@/views/pages/invoice/invoice-edit/InvoiceEdit.vue'),
  //   meta: {
  //     layout: 'content',
  //   },
  // },

]

export default pages
