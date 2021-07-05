const resource = process.env.BASE_URL + '/danh-muc';
export default ($axios) => ({
    all() {
        console.log(process.env.BASE_URL);
        return $axios.get(resource);
    },
    store(payload) {
        return $axios.post(resource, payload);
    }
    
});
