import Dashboard from '../views/Dashboard/Dashboard'
import ProductPage from '../views/Product/Product'
import Promotion from '../views/Promotion/Promotion'
import {AllProduct, ProductType, AddProduct, AddProductType} from '../views/Product/pages'

const MainRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        parent: '/main',
        child: false
    },
    {
        path: '/product',
        name: 'Product',
        component: ProductPage,
        parent: '/main',
        children: [{
            path: '/table',
            name: 'All Product',
            component: AllProduct,
            parent: '/main/product',
            child: true,
            visible: true
        },
            {
                path: '/add',
                name: 'Add Product',
                component: AddProduct,
                parent: '/main/product',
                child: true,
                visible: true
            },
            {
                path: '/type',
                name: 'Product Types',
                component: ProductType,
                parent: '/main/product',
                child: true,
                visible: true
            },
            {
                path: 'addtype',
                name: 'Add Product Type',
                component: AddProductType,
                parent: '/main/product',
                child: true,
                visible: false
            }
        ]
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion,
        parent: '/main',
        children: [{
            path: '/table',
            name: 'All Product',
            component: {},
            parent: '/product'
        },
            {
                path: '/add',
                name: 'Add Product',
                component: {},
                parent: '/product'
            }
        ]
    }
]
export default MainRoutes;