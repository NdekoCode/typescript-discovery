function reverse<T>(arg: T[]): readonly T[] {
    return arg.slice();
}
class Person {
    private age = 18;
    public firstname = "Arick";
    protected username = "Ndekocode Username";


}
class GDAStudent extends Person {
    log() {
        console.log(this.username);
    }
}
const ndeko = new GDAStudent();
console.log(ndeko.log());