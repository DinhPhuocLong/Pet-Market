const resource = 'http://localhost:8000/api';
export default ($axios) => ({
    post(payload) {
        return $axios.post(`${resource}/lien-he`, payload);
    }
});
