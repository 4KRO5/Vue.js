export default {
    props: {
        data: Array,
    },
    methods: {
        deleteRecord(index) {
            this.$emit('delete', index);
        },
    },
};