// bio
var bio = {
	"name": "Juli Cheng",
	"role": "Web Developer",
	"contacts": {
		"mobile": "123-4567-8900",
		"email": "teachjuli@gmail.com",
		"github": "julicheng",
		"twitter": "codingjuli"
	},
	"welcomeMessage": "Welcome to my Resume!",
	"skills": ["Drawing", "HTML", "CSS", "JavaScript"],
	"location": "UK",
	"bioPic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

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
		},
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

// 	for (school in education.schools) {
// 		//add heading
// 		$("#main").append(HTMLschoolStart);
// 		//work.jobs[job] is an array with objects inside
// 		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
// 		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].degreeDates);
// 		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
// 		//concatenating employer and work title
// 		var formattedSchoolEntry = formattedSchoolName + formattedSchoolDates + formattedSchoolLocation;
// 		//.work-entry is a class then :last to append the data to the bottom (at the end of last element)
// 		$(".school-entry:last").append(formattedSchoolEntry);

// 	}
// };

// 	for (onlineCourse in education.onlineCourses) {
// 		//add heading
// 		$("#workExperience").append(HTMLworkStart);
// 		//work.jobs[job] is an array with objects inside
// 		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 		var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
// 		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
// 		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
// 		//concatenating employer and work title
// 		var formattedWorkEntry = formattedEmployer + formattedWorkTitle + formattedLocation + formattedDatesWorked  + formattedDescription;
// 		//.work-entry is a class then :last to append the data to the bottom (at the end of last element)
// 		$(".work-entry:last").append(formattedWorkEntry);

// 	}
// };

var displayWork = function() {
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

	for (job in work.jobs) {
		//add heading
		$("#workExperience").append(HTMLworkStart);
		//work.jobs[job] is an array with objects inside
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		//concatenating employer and work title
		var formattedWorkEntry = formattedEmployer + formattedWorkTitle + formattedLocation + formattedDatesWorked  + formattedDescription;
		//.work-entry is a class then :last to append the data to the bottom (at the end of last element)
		$(".work-entry:last").append(formattedWorkEntry);

	}
};

displayWork();

$(document).click(function(loc) {
	//loc is location object 
	//new variable is generated each time user clicks
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

var inName = function(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


$("#mapDiv").append(googleMap);
