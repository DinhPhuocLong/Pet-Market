const resource = 'http://localhost:8000/api/lien-he';
export default ($axios) => ({
    post(payload) {
        return $axios.post(`${resource}`, payload);
    },
});
