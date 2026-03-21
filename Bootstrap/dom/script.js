console.log('I am loading');

const form =  document.getElementById('form_with_id').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('some event is triggered');
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
})
