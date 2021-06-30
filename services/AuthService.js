const resource = 'http://localhost:8000/api';
export default ($axios) => ({
    login(payload) {
        return $axios.post(`${resource}/login`, payload);
    },
    register(payload) {
        return $axios.post(`${resource}/register`, payload);
    }
});

