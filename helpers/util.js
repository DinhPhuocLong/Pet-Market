export default {
    recursiveCategory(tree, concatenatedString) {
        const flat = [];

        add(tree, '');

        return flat;

        function add(nodes, prefix) {
            nodes.forEach(node => {
                flat.push({
                    ...node,
                    name: prefix + node.name
                });

                add(node.children_categories  || [], prefix + concatenatedString);
            });
        }
    },
    
};
