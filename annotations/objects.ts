// DESTRUCTURING OBJECT ANNOTATIONS
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number): void {
        this.age = age
    }
}

// DESTRUCTING AGE FIELD
const {age}: {age: number} = profile

// DESTRUCTING COORDS
const {coords: { lat,lng}}: {coords: {lat:number; lng:number}} = profile