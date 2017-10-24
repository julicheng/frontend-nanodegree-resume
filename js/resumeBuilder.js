// header title
var name = "Juli Cheng";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// bio
var bio = {
	"name": "Juli Cheng",
	"role": "Web Developer",
	"contacts": {
		"mobile": "123-4567-8900",
		"email": "teachjuli@gmail.com",
		"github": "julicheng"
	},
	"welcomeMessage": "Welcome to my Resume!",
	"skills": ["Drawing", "HTML", "CSS", "JavaScript"],
	"location": "UK",
	"bioPic": "images/fry.jpg"
}

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);

// work
var work = {
	"jobs": [
		{
			"employer" = "Freelance",
			"title" = "Web Developer",
			"location" = "Edinburgh",
			"datesWorked" = "1 year",
			"description" = "Creating amazing responsive websites"
		},
		{
			"employer" = "Freelance",
			"title" = "Manga Artist",
			"location" = "Edinburgh",
			"datesWorked" = "1 year",
			"description" = "Creating amazing artwork"
		}
	]
};





// projects
var projects = {
	"projects": [
		{
			"title" = "Weather App",
			"datesWorked" = "1 week",
			"description" = "App showing the weather in users location",
			"images" = []
		},
		{
			"title" = "Tic Tac Toe",
			"datesWorked" = "1 week",
			"description" = "Tic Tac Toe game against computer",
			"images" = []
		}
	]
};


// education
var education = {
	"schools": [
		{
			"name": "Awesome University"
			"location": "UK",
			"degreeDates": "3 years",
			"url": "http://example.com",
			"majors": ["CS"]
		}
	];
	"onlineCourses": [
		{
			"title": "Intro to JS",
			"school": "Udacity",
			"datesAttended": "1 month",
			"url": "http://example.com"
		}
	];
};
