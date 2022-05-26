import {
  mdiFileDocument, mdiViewListOutline, mdiFileChart, mdiAccountGroup, mdiHome, mdiPlaylistPlus,
} from '@mdi/js'

export default [
  {
    title: 'Home',
    icon: mdiHome,
    to: 'home',
  },
  {
    title: 'Requests',
    icon: mdiFileChart,
    children: [
      {
        icon: mdiViewListOutline,
        title: 'Requests List',
        to: 'list-requests',
      },
      {
        icon: mdiPlaylistPlus,
        title: 'Add Request',
        to: 'add-requests',
      },
    ],
  },
  {
    title: 'Customers',
    icon: mdiAccountGroup,
    children: [
      {
        icon: mdiViewListOutline,
        title: 'Customers List',
        to: 'list-customers',
      },
      {
        icon: mdiPlaylistPlus,
        title: 'Add Customer',
        to: 'add-customers',
      },
    ],
  },
  {
    title: 'Invoice',
    icon: mdiFileDocument,
    children: [
      {
        icon: mdiViewListOutline,
        title: 'List',
        to: 'apps-invoice-list',
      },
      {
        icon: mdiPlaylistPlus,
        title: 'Add',
        to: { name: 'apps-invoice-add' },
      },
      {
        title: 'Preview',
        to: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Edit',
        to: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
    ],
  },
]
