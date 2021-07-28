const resource = process.env.BASE_URL;
export default ($axios) => ({
    login(payload) {
        return $axios.post(`${resource}/login`, payload);
    },
    register(payload) {
        return $axios.post(`${resource}/register`, payload);
    }
});

