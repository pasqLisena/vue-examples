/* eslint object-shorthand: off */

const app = Vue.createApp({
  data() {
    return {
      searchText: '',
      users: [
        { name: 'John', age: 21 },
        { name: 'Joanna', age: 20 },
        { name: 'Benjamin', age: 29 },
        { name: 'Bill', age: 24 },
        { name: 'James', age: 21 },
        { name: 'Katherine', age: 23 },
        { name: 'Marc', age: 21 },
        { name: 'Donald', age: 22 },
      ],
    }
  },
  computed: {
    filteredUsers: function () {
      return this.users.filter((x) => x.name.toLowerCase().includes(this.searchText.toLowerCase()));
    },
  },

}).mount('#app')

