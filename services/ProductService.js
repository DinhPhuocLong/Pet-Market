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
    store(payload) {
        return $axios.post(resource, payload, {
            headers: {
                'Content-Type': 'multipart/form-data;boundary=' + Math.random().toString().substr(2),
            }
        });
    },
    show(id) {
        return $axios.get(`${resource}/${id}`);
    },
    update(id, payload) {
        return $axios.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return $axios.delete(`${resource}/${id}`);
    }
});
