// Enter Password

let password;
const correctPassword = "password1234"
do
{
	password = prompt("Enter password: ");
}
while(password !== correctPassword);
document.write("Access granted")