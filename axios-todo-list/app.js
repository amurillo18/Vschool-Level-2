

const input = document.todo
const list = document.getElementById("todoList");
const submitButton = document.getElementById("submitButton");

const completeUpdate = {
    completed: true
}

const notCompletedUpdate = {
    completed: false
}
// get data
function currentList() {
    axios.get("https://api.vschool.io/aprilmurillo/todo")
    .then(response => displayList(response.data))
    .catch(error => console.log(error))
}
// show data
currentList();

function clearList () {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

function displayList(todoList){
    clearList();

    for(let i = 0; i < todoList.length;i++) {
        const
        newItemDiv = document.createElement("div");

        const itemTitle = document.createElement("h2");
        itemTitle.textContent =`${todoList[i].title}`
        itemTitle.setAttribute("class", "title");

        const itemDescription = document.createElement("p");
        itemDescription.textContent =`${todoList[i].description}`
        itemDescription.setAttribute("class","description");

        const itemPrice = document.createElement("p");
        itemPrice.textContent =`${todoList[i].price}`
        itemPrice.setAttribute("class","price");

        const itemImg = document.createElement("img");
        itemImg.src = todoList[i].imgUrl;

        list.appendChild(newItemDiv);
        newItemDiv.appendChild(itemTitle);
        newItemDiv.appendChild(itemDescription);
        newItemDiv.appendChild(itemPrice);
        newItemDiv.appendChild(itemImg);
        
        // create and add checkbox to mark as completed
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkbox")

        newItemDiv.prepend(checkBox);
        // marks line through item if marked as complete
        if(todoList[i].completed == true) {
            itemTitle.style.textDecoration = "line-through";
            itemDescription.style.textDecoration = "line-through";
            itemPrice.style.textDecoration = "line-through";
            checkBox.checked = true;
            itemImg.remove(this)
        }

        // create and add delete button to delete each item
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "Delete";
         newItemDiv.append(deleteButton);
         deleteButton.setAttribute("class", "deleteButton")

        //  create edit button 
        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        newItemDiv.append(editButton)
        

        checkBox.addEventListener("change", function(e) {
           
            if(checkBox.checked == true) {
                axios.put("https://api.vschool.io/aprilmurillo/todo/" + todoList[i]._id, completeUpdate) .then(response => currentList(response.data)). catch(err => console.log(err))
            } else if(checkBox.checked == false) {
                axios.put("https://api.vschool.io/aprilmurillo/todo/" + todoList[i]._id, notCompletedUpdate) .then(response => currentList(response.data)). catch(err => console.log(err))
            }
        })

        deleteButton.addEventListener("click", function(e){
            axios.delete("https://api.vschool.io/aprilmurillo/todo/" + todoList[i]._id) .then(response => currentList(response.data)). catch(err => console.log(err))
        })

        editButton.addEventListener("click", function(){
            itemTitle.remove(this);
            itemDescription.remove(this)
            itemPrice.remove(this)
            itemImg.remove(this)

            const editTitle = document.createElement("input")
            editTitle.value = itemTitle.textContent
            newItemDiv.append(editTitle)

            const editDescription = document.createElement("input")
            editDescription.value = itemDescription.textContent
            newItemDiv.append(editDescription)

            const editPrice = document.createElement("input")
            editPrice.value = itemPrice.textContent
            newItemDiv.append(editPrice)
            
            const editImg = document.createElement("input")
            editImg.value = itemImg.src
            newItemDiv.append(editImg)

            editButton.remove(this)

            const saveButton = document.createElement("button")
            saveButton.textContent = "Save"
            newItemDiv.appendChild(saveButton)

            saveButton.addEventListener("click", function() {
                const updateInfo = {
                    title: editTitle.value,
                    description: editDescription.value,
                    price: editPrice.value,
                    imgUrl: editImg.value
                }

                axios.put("https://api.vschool.io/aprilmurillo/todo/" + todoList[i]._id, updateInfo) .then(response => currentList(response.data)). catch(err => console.log(err))

                editTitle.remove(this)
                editDescription.remove(this)
                editPrice.remove(this)
                editImg.remove(this)
                saveButton.remove(this)

                itemTitle.prepend(editButton)
                
            })
        })
    }
}

// checkbox to mark completed, checkboz must update the database

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    const newListItem = {
        title: input.title.value,
        description: input.description.value,
        price: input.price.value,
        imgUrl: input.imageURL.value
    }

    input.title.value = "";
    input.description.value = "";
    input.price.value = "";
    input.imageURL.value = "";

    axios.post("https://api.vschool.io/aprilmurillo/todo",newListItem )
                .then(response => currentList(response.data))
                .catch(error => console.log(error))
})