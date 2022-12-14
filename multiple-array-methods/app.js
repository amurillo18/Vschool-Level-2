var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
   arr.sort(function(a,b) {
     return a.lastName.localeCompare(b.lastName)
    })
    let filteredByAge = arr.filter(function(person) {
        if(person.age > 18) {
            return person;
        }
    }) 
    let liArray = filteredByAge.reduce(function(final, person) {
        final.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age +"</li>")
        return final
    },[])
    return liArray
   }


   
 
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
// extra credit collaborated with Adeeb Ogaili
//  1
function addPerson(arr){
    return arr.push({
        firstName: "Will",
        lastName: "Smith",
        age: 35

    })
    
 }
 
 console.log(addPerson(peopleArray));
console.log(peopleArray);
// 2
function lastNameFilter(arr){
    
     return arr.filter((people) => {
      let str = people.lastName;
      let res = str.charAt(str.length-1);
      if (res == "y" || res == "a") {
       return people
      }
     })
  }
 console.log(lastNameFilter(peopleArray));
 
