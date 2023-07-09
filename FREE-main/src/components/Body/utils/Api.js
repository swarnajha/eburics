import axios from 'axios';
const baseUrl ="http://localhost:8000"

const Swal = require('sweetalert2')
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
        
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`,{text})
        .then((data)=>{
            setText("")
            getAllToDo(setToDo)
            Swal.fire(
                'Great!',
                'New Task added!',
                'success'
              )
        })
}

const deleteToDo = (_id, setToDo) => {
   
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warn',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
            axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
          
              
          
        })
        .catch((err) => console.log(err))
          Swal.fire(
            'Deleted!',
            'finally.',
            'success'
          )
        }
      })
   

}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    Swal.fire({
        title: 'Do you want changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
             axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
          axios
          .post(`${baseUrl}/update`, { _id: toDoId, text })
          .then((data) => {
              setText("")
         
              getAllToDo(setToDo)
          })
        }
      })
 
}




export { getAllToDo, addToDo, updateToDo, deleteToDo }