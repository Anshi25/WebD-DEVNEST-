const student1 = {
    name: "ANSHIKA",
    wish(wishing, title) {
        console.log(wishing + title + this.name);
    },
};

const student2 = {
    name: "Harshi",
};

student1.wish.call(student2, "Hello ", "Ms ");
student1.wish.apply(student2, ["Hello ", "Ms "]);

const funcforall = student1.wish.bind(student2, "Good morning ", "Ms ");
funcforall();
