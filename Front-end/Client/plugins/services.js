import createService from '../services/Service';

export default (ctx, inject) => {
    inject('services', createService(ctx.$axios))
}   