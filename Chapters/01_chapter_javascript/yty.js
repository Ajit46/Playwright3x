class Rana_Family
{
    constructor(FamilyMembername)
    {
        this.name = FamilyMembername;
    }

    displayFamilyMemberName(){
        console.log(this.name);
    }

}
    let head = new Rana_Family("Rajendra");
    let son = new Rana_Family("Ajit");
    let daughter = new Rana_Family("Avi");
    let son_wife = new Rana_Family("Nikita");
    let mother = new Rana_Family("Mamta");


    console.log(head.name);
    console.log(son.name);
    console.log(daughter.name);
    console.log(son_wife.name);
    console.log(mother.name);
    son.displayFamilyMemberName();