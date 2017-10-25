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
};

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
			"employer": "Freelance",
			"title": "Web Developer",
			"location": "Edinburgh",
			"datesWorked": "1 year",
			"description": "Creating amazing responsive websites"
		},
		{
			"employer": "Freelance",
			"title": "Manga Artist",
			"location": "Edinburgh",
			"datesWorked": "1 year",
			"description": "Creating amazing artwork"
		}
	]
};


// projects
var projects = {
	"projects": [
		{
			"title": "Weather App",
			"datesWorked": "1 week",
			"description": "App showing the weather in users location",
			"images": []
		},
		{
			"title": "Tic Tac Toe",
			"datesWorked": "1 week",
			"description": "Tic Tac Toe game against computer",
			"images": []
		}
	]
};


// education
var education = {
	"schools": [
		{
			"name": "Awesome University",
			"location": "UK",
			"degreeDates": "3 years",
			"url": "http://example.com",
			"majors": ["CS"]
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to JS",
			"school": "Udacity",
			"datesAttended": "1 month",
			"url": "http://example.com"
		}
	]
};

if (bio.skills.length > 0) {
	//add heading title on page if > 0
	$("#header").append(HTMLskillsStart);
	//create formatted variable so its easier to print on screen
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	//print on screen the skill
	$("#skills").append(formattedSkill);
	//assign next skill to the formattedSkill
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	//print 2nd skill on screen
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};
