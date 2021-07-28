const resource = process.env.BASE_URL + '/product';
export default ($axios) => ({
    all() {
        return $axios.get(resource);
    },
    getSaleProduct() {
        return $axios.get(resource, {
            params: {
                sale: true,
            }
        });
    },
    getProductByCategory(slug) {
        return $axios.get(`${resource}/${slug}`);
    },
    getTrendingProduct() {
        return $axios.get(resource, {
            params: {
                trending: true
            }
        })
    },
    store(payload) {
        return $axios.post(resource, payload, {
            headers: {
                'Content-Type': 'multipart/form-data;boundary=' + Math.random().toString().substr(2),
            }
        });
    },
    show(slug) {
        return $axios.get(`${resource}/${slug}`);
    },
    update(id, payload) {
        return $axios.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return $axios.delete(`${resource}/${id}`);
    }
});
