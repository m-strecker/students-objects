var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//parent class Studnets
var Students = /** @class */ (function () {
    function Students(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female"; //set gender as "female" for all instances
        this.nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        console.log(this.nationality);
    };
    return Students;
}());
//Child class UnderGraduates
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, gender, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, gender, nationality) || this;
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    return UnderGraduates;
}(Students));
//Instantiating a variable of class UnderGraduate and printing the nationality in the console  
var undergrad1 = new UnderGraduates("John Smith", 47, "male", "United Kingdom", 2023, 3.007);
console.log(undergrad1.nationality);
