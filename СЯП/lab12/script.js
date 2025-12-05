function task1() {
    const proto = {
        Name_st: 'Антон',
        Surname: 'Демченко',
        Otchestvo: 'Дмитриевич',
        showDetails() {
            alert(`${this.Name_st} ${this.Otchestvo} ${this.Surname} `);
        }
    }

    const proto2 = Object.create(proto);
    proto2.Name_st = "Владимир";
    proto2.showDetails();
}

function task2() {
    const rpg = {
        Title: 'Привет, Шарлотта',
        Description: 'Hello Charlotte — серия игр, созданная и разработанная Etherane, используя RPG Maker VX Ace.В серии Hello Charlotte пять игр. Три из них повествуют каноническую историю о приключениях Шарлотты, а две происходят в альтернативных (неканонических) вселенных.',

    }
    alert(Object.values(rpg));
    alert(Object.keys(rpg));
}

function task3() {
    let numbers = ['1', '23', '456', '7890', '12345', '678901'];
    console.log('До выравнивания:');
    console.log(numbers.join('\n'));

    
    let aligned = numbers.map(num => {
        let left = '7'.repeat(7);  // 7 цифр в начале
        let right = '7'.repeat(15 - num.length - 7);  // остальные в конце
        return left + num + right;
    });

    console.log('\nПосле выравнивания:');
    console.log(aligned.join('\n'));
}

function task4() {
    let symbols = ['1', '23', '456', '7890', '99305', '6901', 'a', 'b', 'c', 'd', 'e', 'f', 'apple', 'bottle', 'cat', 'dog', 'elephant', 'frog'];
    symbols.forEach(symbol => {
         let new_symb = symbol.padStart(symbol.length + 1, '1').padEnd(symbol.length +  5).padEnd(symbol.length +  6, '0');
        
    console.log(new_symb);

    });
    

}
function task5() {
    const person = {
        Name_st: 'Антон',
        Surname: 'Демченко',
        Otchestvo: 'Дмитриевич',
        City: 'Москва'
    };
    
    // Получаем дескриптор существующего свойства
    let descriptor = Object.getOwnPropertyDescriptor(person, 'Name_st');
    console.log('Дескриптор свойства Name_st:', descriptor);
    
    // Добавляем новое свойство с геттером и сеттером
    Object.defineProperty(person, 'info', {
        get() {
            return `${this.Name_st}, ${this.City}`;
        },
        set(value) {
            const [name, city] = value.split(', ');
            this.Name_st = name;
            this.City = city;
        },
        
    });
    
    console.log('\nОбъект после добавления свойства:');
    console.log(person);
    console.log('info (геттер):', person.info);
    
    // Демонстрация сеттера
    person.info = 'Иван, Минск';
    console.log('\nПосле изменения через сеттер:');
    console.log('Name_st:', person.Name_st);
    console.log('City:', person.City);
    console.log('info:', person.info);
}

function task6(){
    const str1 = "Новый пользователь\n NEZUKO944";
    const rep1 = /пользователь. NEZUKO944/s;
    console.log(rep1.dotAll);

}

function task7(){
    const str1 = "Новый пользователь\n NEZUKO944";
    const rep1 = /NEZUKO944/s;
    const rep2 = /пользователь/s;
    console.log(str1.replace(rep1, "Лили228"));
    console.log(str1.replace(rep2, "игрок"));

}

function task8(){
    let obj ={
        Club: 'Днд',
        Role: 'Коллекционер',
        Persona: 'Наг',
        isAdmin: false
        
    }
    const { isAdmin, Club, ...newobj} = obj;
    console.log(newobj);
    const allinfo = {...obj, My_name: 'Софи', My_Surname: 'Бономо'}
    console.log(allinfo);


}