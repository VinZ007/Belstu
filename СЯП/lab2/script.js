'use strict'
//this – контекст вызова функции («текущий объект»).
function Gruppa(number, initialCount) {
        this.numb = number;
        this.count = initialCount;

        this.add_stud = function(n) {
            n = n;
            this.count += n;
            return this;
        };
        // Метод для исключения студентов
        this.sub_stud = function(k) {
            k = k;
            this.count = this.count - k;
            return this;
        };
    }
    function Student(name, surname, physics, mathim, informathics, course){
        this.name = name;
        this.surname = surname;
        this.physics = physics;
        this.mathim = mathim;
        this.informathics = informathics;
        this.course = course;

        this.stud = function(){            
           document.writeln(`<p class="last_p">${this.name} ${this.surname} - ${this.course} курс -</p>`);
           

        }

        this.average_sc = function(){
            let average = (this.physics + this.mathim + this.informathics)/3;
            document.writeln(`Средний балл: ${Math.round(average)}`);
            return this;
        }
    }

        
var gr2 = new Gruppa(2, 20);
var gr3 = new Gruppa(3, 25);
var gr4 = new Gruppa(4, 0);

        
gr2.add_stud(3).sub_stud(1);
gr3.add_stud(0).sub_stud(5);
gr4.add_stud(10).sub_stud(2);

var st1 = new Student("Stepan", "Viboshavich", 6, 8, 9, 1); 
st1.stud("Stepan", "Viboshavich", 1);    
st1.average_sc(6, 8, 9); 
document.writeln(`<br>`);
var st2 = new Student("Sonya", "Gram", 4, 6, 2, 3); 
st2.stud("Sonya", "Gram", 3);    
st2.average_sc(4, 6, 2); 
document.writeln(`<br>`);
var st3 = new Student("Danila", "Fabrilovich", 5, 1, 10, 4); 
st3.stud("Danila", "Fabrilovich", 4);    
st3.average_sc(5, 1, 10); 
document.writeln(`<br>`);
var st4 = new Student("Hannibal", "Lectorovich", 10, 9, 10, 3); 
st4.stud("Hannibal", "Lectorovich", 3);    
st4.average_sc(10, 9, 10); 
document.writeln(`<br>`);

document.writeln(`<h4>Информация о группах</h4>`)
document.writeln(`<p>Группа ${gr2.numb}: ${gr2.count} студента/ов</p>`);
document.writeln(`<p>Группа ${gr3.numb}: ${gr3.count} студента/ов</p>`);
document.writeln(`<p>Группа ${gr4.numb}: ${gr4.count} студента/ов</p>`);

document.writeln(`<h4>Подтверждение о наличии у объекта Student2 свойства "surname"</h4>`);
document.writeln( "surname" in st2 ); 
console.log( "surname" in st2 ); 
document.writeln(`<br>`);
document.writeln(`<h4>Подтверждение о наличии у объекта Group4 свойства "number"</h4>`);
document.writeln( "numb" in gr4 ); 
console.log( "numb" in gr4 ); 
document.writeln(`<br>`);
document.writeln(`<br>`);

document.writeln(`<h4>Название 3-го свойства Student1</h4>`);
var proparties_st = Object.keys(st1);
if(proparties_st.length >=3){
    document.writeln(`<p>${proparties_st[2]}</p>`);
}
else{
    document.writeln(`<p>It's nothing here</p>`);
}
document.writeln(`<h4>Название 3-го свойства Group3</h4>`);
var proparties_gr = Object.keys(gr3);
if(proparties_gr.length >=3){
    document.writeln(`<p>${proparties_gr[2]}</p>`);
}
else{
    document.writeln(`<p>It's nothing here</p>`);
}
document.writeln(`<h4>Представление работы оператора Delete</h4>`);
document.writeln(`<h4>До применения оператора</h4>`);
st1.stud("Stepan", "Viboshavich", 1); 
delete st1.name;
document.writeln(`<h4>После применения оператора</h4>`);
let last_p = st1.stud("Stepan", "Viboshavich", 1); 



