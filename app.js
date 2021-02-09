const app = Vue.createApp({
    // data, fucntions
    data() {  // creating a data function to output dynamic value
        return {
            showBooks: true,
            title: 'The Last Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: { // creating methods/fucntions to handle data
        changeTitle(title) {
            //this.title = 'Words of Radiance' // Access the properties using the 'this' instance
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks 
        },
        handleEvent(e) {
            console.log('mouse event triggered')
            console.log(e.type)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

    // template: '<h2>I am the template</h2>'

}) // Create app reference, and the root component inside the method.

app.mount('#app') // Mount to an element with an id as "app"