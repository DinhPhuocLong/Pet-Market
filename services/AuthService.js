const resource = 'http://localhost:8000/api/login';
export default ($axios) => ({
    login(payload) {
        return $axios.post(`${resource}`, payload)
    },
});

