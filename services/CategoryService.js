const resource = process.env.BASE_URL;
export default ($axios) => ({
    all() {
        console.log(resource);
        return $axios.get(`${resource}/danh-muc`);
    },
    store(payload) {
        return $axios.post(resource, payload);
    }
    
});
