export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',    
  },

  /*Product menu*/
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Product']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pending Products',
    to: '/products/pending',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Product List',
    to: '/products',
    icon: 'cil-grid',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Categories',
    to: '/categories',
    icon: 'cil-calculator',
  },
  /*Vendor menu*/
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Vendor & Buyer']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pending Vendors',
    to: '/vendors/pending',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vendor List',
    to: '/vendors',
    icon: 'cil-grid',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Buyer List',
    to: '/buyers',
    icon: 'cil-calculator',
  },
  /*Report menu*/
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Sales Report']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vendor Report',
    to: '/reports/vendors',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Category Report',
    to: '/reports/categories',
    icon: 'cil-chart-pie',
  },
]

