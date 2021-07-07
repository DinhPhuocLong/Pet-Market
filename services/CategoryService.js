const resource = process.env.BASE_URL + '/category';
export default ($axios) => ({
    all() {
        console.log(process.env.BASE_URL);
        return $axios.get(resource);
    },
    store(payload) {
        return $axios.post(resource, payload);
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
