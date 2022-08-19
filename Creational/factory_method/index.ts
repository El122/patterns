class User {
    name: string;
    surname: string;
    type: string;

    constructor(name: string, surname: string, type: string) {
        this.name = name;
        this.surname = surname;
        this.type = type;
    }
}

class UserFactory {
    create(type) {
        if (type == "admin") {
            return new User("Admin", "Admin", type);
        } else {
            return new User("User", "User", "user");
        }
    }
}

const factory = new UserFactory();
console.log(factory.create("admin"));
console.log(factory.create(""));
