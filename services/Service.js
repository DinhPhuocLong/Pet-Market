import AuthService from './AuthService';
import CategoryService from './CategoryService';
import ContactService from './ContactService';

export default ($axios) => ({
    Auth: AuthService($axios),
    Category: CategoryService($axios),
    Contact: ContactService($axios),
})