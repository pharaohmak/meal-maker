const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizer) {
        this._courses.appetizers.push(appetizer);
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        this._courses.mains.push(main);
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        this._courses.desserts.push(dessert);
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    }
};

document.getElementById('addDish').addEventListener('click', () => {
    const course = document.getElementById('course').value;
    const dish = document.getElementById('dish').value;
    const price = parseFloat(document.getElementById('price').value);

    menu.addDishToCourse(course, dish, price);
    renderMenu();
});

const renderMenu = () => {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    Object.keys(menu.courses).forEach(course => {
        menu.courses[course].forEach(dish => {
            const listItem = document.createElement('li');
            listItem.textContent = `${dish.name} - $${dish.price.toFixed(2)}`;
            menuList.appendChild(listItem);
        });
    });
};