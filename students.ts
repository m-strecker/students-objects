//parent class Studnets
class Students {

    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor (name:string, age:number, gender:string, nationality:string){
        this.name = name;
        this.age = age;
        this.gender = "female"; //set gender as "female" for all instances
        this.nationality=nationality;
    }

    getNationality(): void {
        console.log(this.nationality);
    }

}

//Child class UnderGraduates
class UnderGraduates extends Students implements IUndergrad{
    batch: number;
    GPA: number;
  
    constructor(name: string, age: number, gender: string, nationality: string, batch: number, GPA:number) {
      super(name, age, gender, nationality);
      this.batch = batch;
      this.GPA = GPA;
    }
  }
  
//Interface IUndergrad
  interface IUndergrad {

    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
  }
 
  
//Instantiating a variable of class UnderGraduate and printing the nationality in the console  
const undergrad1 = new UnderGraduates("John Smith", 47, "male", "United Kingdom", 2023, 3.007);
console.log (undergrad1.nationality);