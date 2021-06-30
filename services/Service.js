import AuthService from './AuthService';
import CategoryService from './CategoryService';

export default ($axios) => ({
    Auth: AuthService($axios),
    Category: CategoryService($axios),
})