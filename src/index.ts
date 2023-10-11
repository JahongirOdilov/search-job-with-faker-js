import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { faker } from "@faker-js/faker";

const input: HTMLInputElement = document.querySelector("#input")!;
const form: HTMLFormElement = document.querySelector("form")!;
const personName: HTMLParagraphElement = document.querySelector(".name")!;
const birthDate: HTMLParagraphElement = document.querySelector(".birth")!;
const jobTitle: HTMLParagraphElement = document.querySelector(".job")!;
const email: HTMLParagraphElement = document.querySelector(".email")!;
const phoneNumber: HTMLParagraphElement = document.querySelector(".number")!;
const jins: HTMLParagraphElement = document.querySelector(".jins")!;
const aboutPerson: HTMLParagraphElement = document.querySelector(".about-person")!;
const location: HTMLParagraphElement = document.querySelector(".location")!;
input.focus();

function search() {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const prototypes = {
			name: faker.person.fullName(),
			birthDate: faker.date.between({
				from: "1990-01-01",
				to: "2005-01-01",
			}),
			email: faker.internet.email(),
			phoneNumber: faker.phone.number("+1 ### ### ## ##"),
			jobTitle: faker.person.jobType(),
			sex: faker.person.sexType(),
			about: faker.lorem.paragraphs(),
			location: faker.location.state(),
		};
		personName.innerText = `  Fullname   :         				${prototypes.name}`;
		birthDate.innerText = `   Birth-Date :  ${prototypes.birthDate.toDateString()}`;
		email.innerText = `       Email      📧:  ${prototypes.email}`;
		phoneNumber.innerText = `  Phone-Number 🇺🇸:  ${prototypes.phoneNumber}`;
		location.innerText = `    Location  🇺🇸:  ${prototypes.location}`;
		jobTitle.innerText = `    JOB        :  ${input.value}`;
		jins.innerText = `        Gender     :  ${prototypes.sex}`;
		aboutPerson.innerText = ` About      :  ${prototypes.about}`;
		console.log(birthDate);
	});
}

// logical function

function init() {
	search();
}

init();
