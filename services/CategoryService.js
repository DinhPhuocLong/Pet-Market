const resource = 'http://localhost:8000/api/danh-muc';
export default ($axios) => ({
    all() {
        return $axios.get(resource);
    }
});
