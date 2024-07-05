function showSection(sectionId){
	const sections = document.querySelectorAll(".section");
	sections.forEach(section=>{
		section.classList.remove('active');
	});

	const sectionToShow = document.getElementById(sectionId);
	sectionToShow.classList.add('active');
}

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('message');

var full_name = ' ';
let arr_name = [];
let arr_email = [];
let arr_msg = [];
function getMessage(){
	try{
		full_name = fname.value+lname.value;
		arr_name.push(full_name);
		arr_email.push(email.value);
		arr_msg.push(message.value);

		alert("Message Sent Successfully!!");

		fname.value = " ";
		lname.value = " ";
		email.value = " ";
		message.value = " ";

		console.log(arr_name);
		console.log(arr_email);
		console.log(arr_msg);

	}
	catch(error){
		alert(error);
	}

}