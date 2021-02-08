const app = Vue.createApp({
    // data, fucntions
    data() {  // creating a data function to output dynamic value
        return {
            showBooks: true,
            title: 'The Last Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: { // creating methods/fucntions to handle data
        changeTitle(title) {
            //this.title = 'Words of Radiance' // Access the properties using the 'this' instance
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks 
        }
    }

    // template: '<h2>I am the template</h2>'

}) // Create app reference, and the root component inside the method.

app.mount('#app') // Mount to an element with an id as "app"