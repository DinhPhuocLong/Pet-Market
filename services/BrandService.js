const resource = process.env.BASE_URL + '/brand';
export default ($axios) => ({
    all() {
        return $axios.get(resource);
    },
});