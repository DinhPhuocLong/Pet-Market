const resource = process.env.BASE_URL;
export default ($axios) => ({
    all() {
        console.log(process.env.BASE_URL);
        return $axios.get(`${resource}/danh-muc`);
    },
    store(payload) {
        return $axios.post(`${resource}/danh-muc`, payload);
    }
    
});
