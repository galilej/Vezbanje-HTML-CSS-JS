let blog1 = {
    title: 'Prvi blog',
    likes: 30,
    dislikes: 3
};
let blog2 = {
    title: 'Drugi blog',
    likes: 25,
    dislikes: 26
};
let blog3 = {
    title: 'Treci blog',
    likes: 51,
    dislikes: 25
};

let user1 = {
    username: "Nikola",
    age: 28,
    blogs: [blog2, blog3]
};
let user2 = {
    username: "Spasa",
    age: 14,
    blogs: [blog1]
};
let users = [user1, user2];

users.forEach(elem => {
    if(elem.age < 18) {
        console.log(elem.username);
    }
});

users.forEach(user => {
    let userBlogs = user.blogs;
    userBlogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

users.forEach(el => {
    if(el.username == 'Nikola') {
        console.log(el.blogs);
    }
});

users.forEach(el => {
    let sum = 0;
    let b = el.blogs;
    b.forEach(blog => {
        sum += blog.likes;
    });
    if(sum >= 70) {
        console.log(el.username);
    }
});

let sum = 0;
let br = 0;
users.forEach(el => {
    let a = el.blogs;
    a.forEach(like => {
        sum += like.likes;
        br++;
    });
});
let avg = sum / br;
users.forEach(user => {
    let a = user.blogs;
    a.forEach(blog => {
        if(blog.likes > avg) {
            console.log(blog.title);
        }
    });
});

console.log('------------------------------------------');
let dan1 = {
    datum: "2020-08-10",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [9, 15, 20, 16, 12],
    prosek: function() {
        let sum = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            sum += this.temperature[i];
        }
        return sum / this.temperature.length;
    },
    nadprosecno: function() {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > this.prosek()) {
                br++;
            }
        }
        return br;
    }
};

let dan2 = {
    datum: "2020-08-11",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [7, 10, 14, 9],
    prosek: function() {
        let sum = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            sum += this.temperature[i];
        }
        return sum / this.temperature.length;
    },
    nadprosecno: function() {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > this.prosek()) {
                br++;
            }
        }
        return br;
    }   
};

let dan3 = {
    kisa: false,
    sunce: true,
    oblacno: false,
    datum: "2020-08-12",
    temperature: [20, 24, 27, 30, 25],
    prosek: function() {
        let sum = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            sum += this.temperature[i];
        }
        return sum / this.temperature.length;
    },
    nadprosecno: function() {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > this.prosek()) {
                br++;
            }
        }
        return br;
    }
};

let dan4 = {
    datum: "2020-08-13",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [20, 24, 19, 15],
    prosek: function() {
        let sum = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            sum += this.temperature[i];
        }
        return sum / this.temperature.length;
    },
    nadprosecno: function() {
        let br = 0;
        for(let i = 0; i < this.temperature.length; i++) {
            if(this.temperature[i] > this.prosek()) {
                br++;
            }
        }
        return br;
    }
};

let dani = [dan1, dan2, dan3, dan4];

console.log(`Prosecna temperatura prvog dana bila je: ${dan1.prosek()}.`);
console.log(`Broj merenja koja su bila iznad proseka je: ${dan1.nadprosecno()}.`);

console.log('-----------------------');
console.log(`Prosecna temperatura drugog dana bila je: ${dan2.prosek()}.`);
console.log(`Broj merenja koja su bila iznad proseka je: ${dan2.nadprosecno()}.`);

console.log('-----------------------');
console.log(`Prosecna temperatura treceg dana bila je: ${dan3.prosek()}.`);
console.log(`Broj merenja koja su bila iznad proseka je: ${dan3.nadprosecno()}.`);

console.log('-----------------------');
console.log(`Prosecna temperatura cetvrtog dana bila je: ${dan4.prosek()}.`);
console.log(`Broj merenja koja su bila iznad proseka je: ${dan4.nadprosecno()}.`);

let najviseMerenja = arr => {
    let najvise = arr[0].temperature.length;
    let d = arr[0].datum;
    arr.forEach(dan => {
        if(dan.temperature.length >= najvise) {
            najvise = dan.temperature.length;
            d = dan.datum;
        }
    });
    return d;
}
console.log(najviseMerenja(dani));

let kisniDani = arr => {
    let br = 0;
    arr.forEach(el => {
        if(el.kisa == true) {
            br++;
        }
    });
    return br;
}
console.log(`Bilo je ${kisniDani(dani)} kisnih dana.`);

let suncaniDani = arr => {
    let br = 0;
    arr.forEach(el => {
        if(el.sunce == true) {
            br++;
        }
    });
    return br;
}
console.log(`Bilo je ${suncaniDani(dani)} suncanih dana.`);

let oblacniDani = arr => {
    let br = 0;
    arr.forEach(el => {
        if(el.oblacno == true) {
            br++;
        }
    });
    return br;
}
console.log(`Bilo je ${oblacniDani(dani)} oblacnih dana.`);