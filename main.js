const bodyElement = document.querySelector('body')
let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
        return this.state
    },
    toString: function() {
        if (this.state == 0){
            return "Heads"
        }
        else {
            return "Tails"
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state == 0) {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/91dNxILkClL._AC_SL1500_.jpg"
        }
        else {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/914247Q%2BS6L._AC_SL1500_.jpg"
        }
        return image
    },
    display20Flips: function() {
        const flipString = document.createElement('h1')
        for (let index = 0; index < 20; index ++){
            this.flip(20)
            flipString.append(toString())
            bodyElement.append(flipString)
        }
        return 
    },
    display20Images: function() {
        const flipImage = bodyElement.append(image)
        return flipImage
    }
};