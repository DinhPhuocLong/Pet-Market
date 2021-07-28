const resource = process.env.BASE_URL + '/brand';
export default ($axios) => ({
    all(params) {
        return $axios.get(resource, {
            params
        });
    },
    productsByBrand(slug) {
        return $axios.get(resource + `/${slug}`);
    }
});
