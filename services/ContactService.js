const resource = 'http://localhost:8000/api';
export default ($axios) => ({
    contactPost(payload) {
        return $axios.post(`${resource}/lien-he`, payload);
    }
});
