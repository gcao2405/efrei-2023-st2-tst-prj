exports.User = class User {
    constructor(name, email, address1, address2, city, zipCode, hiringDate, jobTitle) {
        this.name = name;
        this.email = email;
        this.address1 = address1;
        this.address2 = address2
        this.city = city;
        this.zipCode = zipCode;
        this.hiringDate = hiringDate;
        this.jobTitle = jobTitle;
    }
}