import AuthService from './AuthService';
import CategoryService from './CategoryService';
import ContactService from './ContactService';
import ProductService from './ProductService';

export default ($axios) => ({
    Auth: AuthService($axios),
    Category: CategoryService($axios),
    Contact: ContactService($axios),
    Product: ProductService($axios),
})