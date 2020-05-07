/*
1.Типи даних: string, boolean, number,symbol, NULL, underfined, object
2.a?
3.Методи масивів:sort, forEach, pop, push, indexOf, map, slice, shift, unshift
4.a

 */
/*5.
function clousers() {
    let i=0;
    return function() {
            i++;
           console.log(i);

       }

}
let counter= clousers();
counter()

 */
/*6
let number=[1,3,2,4,2,4];
let i=0;
function recursion(number) {
    if (i<number.length){
        console.log(number[i]);
        i++;
        recursion(number);
    }
}
recursion(number);
7.Arguments- це об'єкт, який міститься всередині функції і який приймає всі значення аргументів функції.
Перебирати циклом forEach не можнаб тому що це метод масиву, а Arguments не є масивом.
8. Hosting-підняття оголошення змінних або функцій(тобто якщо функція спочатку викликається, а потім оголошується,
то все буде працювати оскільки Hosting піднімає функцію наверх.
9. Різниці між звичайними і стрілочними функціями майже немає, лише на стрілочну не діє Hosting і якщо функція повертає
яке міститься в одному рядку, то можна скоротити.
10.Promise- це клас, який приймає колбек. Він має два стани: resolve(якщо функція виконується), reject(якщо помилка).
11.??
12.this зсилається на об'єкт. Але стрілочні функції не мають прив'язки до this.
13.??
14.В прототипі описується поведінка класу.прототип ствворюєьбся один для всіх класів.
15. ООП-об'єктно орієнтовне програмування. Наслідування:дочірній клас переймає властивості батьківського класу
 */
class Test {
    constructor(name, quantity, type ) {
        this.name=name;
        this.quantity=quantity;
        this.type=type;
    }
}
class Test1 extends Test{
    constructor(name,number, type) {
        super(name, type);
        this.number=number;
    }
    work(){
        console.log(`${this.name}, ${this.number}`);
    }
}
let test1=new Test1('Test', 10, 'listening' );
test1.work();





