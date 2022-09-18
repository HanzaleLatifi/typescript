var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role[Role["author"] = 50] = "author";
    Role[Role["readOnly"] = 100] = "readOnly";
})(Role || (Role = {}));
var person = {
    name: "ali",
    role: Role.admin
};
if (person.role === Role.admin) {
    console.log('yees is  Admin');
}
else {
    console.log("nooo not Admin");
}
