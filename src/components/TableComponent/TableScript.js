export default {
  props: {
    data: Array,
  },
  methods: {
    editRecord(index) {
      this.$emit('edit', index);
    },
    deleteRecord(index) {
      this.$emit('delete', index);
    },
  },
};