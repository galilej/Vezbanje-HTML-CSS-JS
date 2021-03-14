let blog = {
    title: "Moj blog",
    content: "Tekst...",
    author: "Pera"
};
console.log(blog);
console.log(typeof blog);
console.log(blog.title);
console.log(blog['content']);
blog.content = "Neki tekst.";
console.log(blog.content);
blog['content'] = 'Neki novi tekst';
console.log(blog.content);

let user = {
    username: 'JohnDoe',
    age: 30,
    blogs: ['Naslov 1', 'Naslov 2', 'Naslov 3'],
    login: function() {
        console.log('Ulogovani ste');
    },
    logBlogs: function() {
        console.log(this.blogs);
    }
};
user.login();
user.logBlogs();
console.log(this);

console.log('---------------------------------------');
let dan = {
    datum: '2020/09/12',
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [12, 14, 16, 20, 18, 15, 10],
    prosekTemperature: function() {
        let sr = 0;
        let sum = 0;
        let br = 0;
        this.temperature.forEach(el => {
            br++;
            sum += el;
        });
        sr = sum / br;
        return sr;
    },
    koliko: function() {
        let prosek = this.prosekTemperature();
        let br = 0;
        this.temperature.forEach(temp => {
            if(temp > prosek) {
                br++;
            }
        });
        return br;
    },
    max: function() {
        let maksimalna = this.temperature[0];
        let br = 0;
        this.temperature.forEach(temp => {
            if(temp > maksimalna) {
                maksimalna = temp;
                br++;
            }
        });
        return br;
    },
    odDo: function() {
        let prvi = 14;
        let drugi = 20;
        let br = 0;
        this.temperature.forEach(t => {
            if(t >= prvi && t <= drugi) {
                br++;
            }
        });
        return br;
    },
    vecina: function() {
        let prosek = this.prosekTemperature();
        let pola = this.temperature.length / 2;
        let br = 0;
        this.temperature.forEach(t => {
            if(t >= prosek) {
                br++;
            }
        });
        if(br > pola) {
            console.log('U vecini dana temperatura je bila iznad proseka.');
        }else {
            console.log('U vecini dana temperatura nije bila iznad proseka.');
        }
    },
    ledeniDan: function() {
        let temp = this.temperature;
        let br = 0;
        temp.forEach(t => {
            if(t >= 0) {
                br++;
            }
        });
        if(br > 0) {
            return false;
        } else {
            return true;
        }
    },
    tropskiDan: function() {
        let temp = this.temperature;
        let br = 0;
        temp.forEach(t => {
            if(t >= 24) {
                br++;
            }
        });
        if(br == temp.length) {
            return true;
        } else {
            return false;
        }
    },
    meteropate: function() {
        let temp = this.temperature;
        let broj = this.temperature[0];
        let raz = 0;
        let br = 0;
        for(let i = 1; i < temp.length; i++) {
                raz = temp[i] - broj;
                broj = temp[i];
            if(raz >= 8) {
                br++;
            }
        }
        if(br > 0) {
            console.log('Dan je bio nepovoljan za meteropate.');
        } else {
            console.log('Dan je bio povoljan za meteropate.');
        }
    },
    neoubicajen: function() {
        let temp = this.temperature;
        let kisno = this.kisa;
        let oblaci = this.oblacno;
        let suncano = this.sunce;
        let minus;
        let plus;
        let br1 = 0;
        let br2 = 0;
        for(let i = 0; i < temp.length; i++) {
            if(temp[i] <= -5) {
                br1++;
            }
            if(br1 > 0) {
                minus = true;
            } else {
                minus = false;
            }

            if(temp[i] > 25) {
                br2++;
            }
            if(br2 > 0) {
                plus = true;
            } else {
                plus= false;
            }
        }
        if(((kisno == true && minus === true) || (oblaci == true && plus === true)) || ((kisno == true && oblaci == true) && suncano == true)) {
            console.log('Dan je bio neuobicajen.');
        } else {
            console.log('Dan je bio uobicajen.');
        }
    }
}
console.log(`Prosecna temperatura tog dana je bila ${dan.prosekTemperature()} stepeni.`);
console.log(`Tog dana imali smo ${dan.koliko()} merenja koja su bila iznad proseka.`);
console.log(`Imali smo ${dan.max()} merenja sa maksimalnom temperaturom.`);
console.log(`Imali smo ${dan. odDo()} merenja od 14 do 20 stepeni.`);
dan.vecina();
console.log(`Da li je dan bio leden: ${dan.ledeniDan()}.`);
console.log(`Da li je dan bio tropski: ${dan.tropskiDan()}.`);
dan.meteropate();
dan.neoubicajen();

let arrObjBlogs = [
    {title:'AAA', likes:30, dislikes:3},
    {title:'BBB', likes:25, dislikes:26},
    {title:'CCC', likes:50, dislikes:2}
];
console.log(arrObjBlogs);

console.log('---------------------------------');
let blog1 = {
    title: 'AAA',
    likes: 30,
    dislikes: 3
};
let blog2 = {
    title: 'BBB',
    likes: 25,
    dislikes: 26
};
let blog3 = {
    title: 'CCC',
    likes: 50,
    dislikes: 25
};
let arrBlogs = [blog1, blog2, blog3];
arrBlogs.forEach(blog => {
    console.log(blog);
});
console.log(arrBlogs[0]);
console.log(arrBlogs[0].title);
console.log(arrBlogs[0]['title']);
console.log(blog1.title);
console.log(blog1['title']);

blog2.title = 'Juhu!';
console.log(arrBlogs);
arrBlogs[0].title = "Blabla";
console.log(arrBlogs);

arrBlogs.forEach(blog => {
    console.log(blog.title);
});

arrBlogs.forEach(blog => {
    console.log(blog.likes);
});

let prosek = arr => {
    let sum = 0;
    let sr = 0;
    let br = 0;
    arr.forEach(lik => {
        sum += lik. likes;
        br++;
    });
    sr = sum / br;
    return sr;
}
console.log(`Prosek lajkova je: ${prosek(arrBlogs)}.`);

let visePozi = arr => {
    arr.forEach(blog => {
        if(blog.likes > blog.dislikes) {
            console.log(blog.title);
        }
    });
}
visePozi(arrBlogs);

let duploVise = arr => {
    arr.forEach(blog => {
        if(blog.likes > 2 * blog.dislikes) {
            console.log(blog.title);
        }
    });
}
duploVise(arrBlogs);

let uzvicnik = arr => {
    arr.forEach(blogovi => {
        if(blogovi.title.includes("!")) {
            console.log(blogovi.title);
        }
    });
}
uzvicnik(arrBlogs);

let user1 = {
    username: 'JohnDoe',
    age: 30,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(obj => {
            console.log(obj.title);
        });
    }
};
console.log(user1.blogs);
console.log(user1.blogs[0].title);
user1.logBlogs();
