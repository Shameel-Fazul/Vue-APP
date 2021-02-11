const app = Vue.createApp({
    // data, fucntions
    data() {  // creating a data function to output dynamic value
        return {
            url: 'https://shameel-fazul.tech',
            showBooks: true,
            title: 'The Last Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/book-1.jpg', isFav: true },
                { title: 'cosmos', author: 'carl sagan', img: 'assets/book-2.jpg', isFav: false },
                { title: 'black holes', author: 'neil degrasse tyson', img: 'assets/book-3.jpg', isFav: true }
            ]
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
    },
    computed: { // computed properties; it depends on other values to do tasks like filtering
        filteredBooks() {
            return this.books.filter((book) => book.isFav == true)
        }

    }

    // template: '<h2>I am the template</h2>'

}) // Create app reference, and the root component inside the method.

app.mount('#app') // Mount to an element with an id as "app"