'use strict';

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person{
  constructor(name, age, salary, department, hiredAt, maxSalaryMultiplier){
    super(name, age);

    this.salary = salary;
    this.department = department;
    this.hiredAt = hiredAt || new Date();
    this.leftAt = null;
    this.status = 'active'; // 'active' fired' 'quit'
    this.maxSalaryMultiplier = maxSalaryMultiplier || 1;

  }

  getInfo(){
    return this.name + " (" + this.age + ") works at " +
           this.department + " for " + this.salary + " usd since|from " + 
           this.hiredAt.toDateString() + (this.status === 'active' ? "." : 
           (" to " + this.leftAt.toDateString() + "."));
  }

  quit(isFired){
    if(this.leftAt !== null){
      throw new Error("This emplyee has already left the company");
      return false;
    }else if(isFired){
      this.status = 'fired';
      this.leftAt = new Date();
      return true;
    }else{
      this.leftAt = new Date();
      this.status = 'quit';
      return false;
    }
  }

  increaseSalaryBy(newSalary){
    if(newSalary > this.salary * this.maxSalaryMultiplier){
      throw new Error("Difference bigger than allowed");
    } else {
      this.salary = newSalary;
    }
    return this.salary;
  }

  setDepartment(newDepartment){
    if(['junior', 'medior', 'senior', 'architect'].indexOf(newDepartment) > -1){
      this.department = newDepartment;
      return true;
    }else{
      return false;
    }
  }
}

class Developer extends Employee{
  constructor(name, age, salary, department, hiredAt, level){
    super(name, age, salary, department, hiredAt, 1.05);
    this.level = level;
  }
  changeLevel(newLevel){
    if(this.level === newLevel){
      return false;
    }else{
      this.level = newLevel;
      return true;
    }
    
  }
}

class Director extends Employee{
  constructor(name, age, salary, department, hiredAt){
    super(name, age, salary, department, hiredAt, 1.1);
  }
  fireEmployee (employeeToFire){
    if(employeeToFire instanceof Employee){
      return employeeToFire.quit(true);
    } else{
      throw new Error("It is not an Employee");
      return false;
    }
  }
  promoteDeveloper(developerToPromote, newLevel){
    if(developerToPromote instanceof Developer){
      return developerToPromote.changeLevel(newLevel);
    }else{
      throw new Error("It is not an Developer");
      return false;
    }
  }
}


