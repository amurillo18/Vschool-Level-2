const submit = document.getElementById("submitButton");
const form = document.travelForm;


form.addEventListener("submit", function (e){
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;
    const location = form.elements["location"].value;

    let diet = [];

    if(form.elements['vegan'].checked) {
        diet.push(document.getElementById("dietVegan").value);
    } else if(form.elements['vegetarian'].checked) {
        diet.push(document.getElementById("dietVegetarian").value);
    } else if(form.elements['glutenFree'].checked) {
        diet.push(document.getElementById("dietGlutenFree").value);
    }
    alert("First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDiet: " + diet);
})