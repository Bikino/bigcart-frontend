import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const PendingProducts = React.lazy(() => import('./views/products/pending-products/PendingProducts'))
const ProductList = React.lazy(() => import('./views/products/product-list/ProductList'))
const CategoryList = React.lazy(() => import('./views/products/categories/CategoryList'))
const ProductDetail = React.lazy(() => import('./views/products/ProductDetail'))

const PendingVendors = React.lazy(() => import('./views/vendors/pending-vendors/PendingVendors'))
const VendorList = React.lazy(() => import('./views/vendors/vendor-list/VendorList'))
const VendorDetail = React.lazy(() => import('./views/vendors/VendorDetail'))

const BuyerList = React.lazy(() => import('./views/buyers/BuyerList'))
const VendorReport = React.lazy(() => import('./views/reports/VendorReport'))
const CategoryReport = React.lazy(() => import('./views/reports/CategoryReport'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/products/pending', exact: true, name: 'Pending Products', component: PendingProducts },
  { path: '/products', exact: true, name: 'Product List', component: ProductList },
  { path: '/products/:id', exact: true, name: 'Product Detail', component: ProductDetail },
  { path: '/categories', exact: true, name: 'Category List', component: CategoryList },
  { path: '/vendors/pending', exact: true, name: 'Pending Vendors', component: PendingVendors },
  { path: '/vendors', exact: true, name: 'Vendor List', component: VendorList },
  { path: '/vendors/:id', exact: true, name: 'Vendor Detail', component: VendorDetail },
  { path: '/buyers', exact: true, name: 'Buyer List', component: BuyerList },
  { path: '/reports/vendors', exact: true, name: 'Sales Report By Vendor', component: VendorReport },
  { path: '/reports/categories', exact: true, name: 'Sales Report By Category', component: CategoryReport },
];

export default routes;
