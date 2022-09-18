enum Role {admin="ADMIN" , author=50 , readOnly=100}

const person={
    name :"ali",
    role:Role.admin
}


if(person.role===Role.admin){
    console.log('yees is  Admin')
}else{
    console.log("nooo not Admin")
}