	
	
	function availableInfo()
	{

		
var name = document.getElementById("name").value;
var mobile = document.getElementById("mobile").value;
var emailId = document.getElementById("email").value;
var info = document.getElementById("details").value;

if(name.length  === 0|| mobile.length  === 0|| emailId.length  === 0 || info.length  === 0)
{
alert("please enter all the filelds");
}

else
{
//this line is creating a new row in the table having id "firstTable"
	

	if(isNaN(mobile))
	{
		alert("please enter only numbers for mobile Number");
		document.getElementById("mobile").value = "";
	}
	else
	{
		if(emailId.indexOf("@") < 0)
		{
		alert("Please enter valid email id");	
		document.getElementById("email").value = "";

		return;
		}
		if(mobile.length > 10)
		{
		alert("Mobile number cant exceed 10 digits");
		document.getElementById("mobile").value = "";
		
		}
		else
		{
var newRow = document.getElementById('donorTable').insertRow();

//this line creates a new column in the newly created row
var newCell = newRow.insertCell();
//this line adds the content form name variable to the newly created column
newCell.innerHTML = name; 

var newCell = newRow.insertCell();
newCell.id = "info";
newCell.innerHTML = info;

var newCell = newRow.insertCell();
newCell.innerHTML = mobile;

var newCell = newRow.insertCell();
newCell.innerHTML=emailId;

document.getElementById("name").value = "";
document.getElementById("mobile").value = "";
document.getElementById("email").value = "";
document.getElementById("details").value="";
		}
	}
	}

}

	
	
	function requestInfo()
	{	
		//the four lines refers to the values entered in the 
		//Input text fields	
var name = document.getElementById("name").value;
var mobile = document.getElementById("mobile").value;
var emailId = document.getElementById("email").value;
var info = document.getElementById("details").value;

if(name.length  === 0|| mobile.length  === 0|| emailId.length  === 0 || info.length  === 0)
{
alert("please enter all the filelds");

}

else
{
	if(emailId.indexOf("@") < 0)
	{
	alert("Please enter valid email id");
	document.getElementById("email").value = "";

	return;
	}
	if(isNaN(mobile))
	{
		alert("please enter only numbers for mobile Number");
		document.getElementById("mobile").value = "";
		
	}
	else
	{
		if(mobile.length > 10 || mobile.length < 10)
		{
		alert("Mobile number cant exceed 10 digits");
		document.getElementById("mobile").value = "";
		}
		else
		{
var newRow = document.getElementById('recepientTable').insertRow();

var newCell = newRow.insertCell();

newCell.innerHTML = name; 

var newCell = newRow.insertCell();
newCell.innerHTML = info;

var newCell = newRow.insertCell();
newCell.innerHTML = mobile;

var newCell = newRow.insertCell();
newCell.innerHTML=emailId;

document.getElementById("name").value = "";
document.getElementById("mobile").value = "";
document.getElementById("email").value = "";
document.getElementById("details").value="";
		}
	}
	}	
	}

	
	function calculateCost() {
		
		
		
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var dob = document.getElementById("DOB").value;
	var emailId = document.getElementById("emailId").value;
	var mobile = document.getElementById("mobile").value;
	var credit = document.getElementById("credit").value;
	var selectedQualLevel1 = document.getElementById('gcourse').checked;
	var selectedQualLevel2 = document.getElementById('ugcourse').checked;
	var totalFee;
	if(fName.length == 0)
	{
		alert("Please enter the First Name");
		return;
	}
	if(lName.length == 0)
	{
		alert("Please enter the Last Name");
		return;
	}
	if(dob.length == 0)
	{
		alert("Please enter the Date of Birth");
		return;
	}
	if(emailId.length == 0)
	{
		alert("Please enter the Email");
		return;
	}
	if(mobile.length == 0)
	{
		alert("Please enter the mobile");
		rerurn;
	}
	if(credit.length == 0)
	{
		alert("Please enter the Credit");
		return;
	}
	if(selectedQualLevel1 == false && selectedQualLevel2 == false)
	{
		alert("Please select the Course Level");
		return;
	}

	if(emailId.indexOf("@") < 0)
		{
		alert("Please enter valid email id");	
		document.getElementById("emailId").value = "";

		return;
		}

	if(mobile.length > 10 || mobile.length < 10)
		{
		alert("Mobile number cant exceed 10 digits");
		document.getElementById("mobile").value = "";
		return;
		}
	
	var qualificationLevel;
	
	if(selectedQualLevel1 == true)
	{
		
		qualificationLevel = "Graduate";
		totalFee = Math.round(324.05*credit);
		
	}
	else
	{
		
		qualificationLevel = "UnderGraduate" ;
		totalFee = Math.round(429.70*credit);
	}
	


	document.getElementById("finalFee").innerHTML = "Mr. " +fName+" " +lName+" the fee for" +qualificationLevel+" is  $" +totalFee;
	
	}
	
	
	function handleClick()
	{
		
		if(document.getElementById("experience").checked)
		{
		document.getElementById("labelText").className =
			   document.getElementById("labelText").className.replace
			      ( /(?:^|\s)hide(?!\S)/g , '' );
		document.getElementById("labelText").className += " visible" ;
		
		
		document.getElementById("input").className =
			   document.getElementById("input").className.replace
			      ( /(?:^|\s)hide(?!\S)/g , '' );
		document.getElementById("input").className += " visible" ;
		}
		else
		{
			document.getElementById("labelText").className =
				   document.getElementById("labelText").className.replace
				      ( /(?:^|\s)visible(?!\S)/g , '' );
			document.getElementById("labelText").className += " hide" ;
			
			
			document.getElementById("input").className =
				   document.getElementById("input").className.replace
				      ( /(?:^|\s)visible(?!\S)/g , '' );
			document.getElementById("input").className += " hide" ;			
		}	
		
		
	}
	
	
	function eligibilityRequirements() {
		
		
		
		var greScore = document.getElementById("greScore").value;
		var ieltsScore = document.getElementById("ieltsScore").value;
		var gpaReport = document.getElementById("gpaReport").value;
		var experience;
		
		if(greScore.length == 0 || ieltsScore.length == 0 || gpaReport.length == 0)
		{
		alert("please select all fields");	
		}
		else
		{
			
			
			
			if(document.getElementById("experience").checked)
			{
			experience = document.getElementById("input").value;
			
			if(experience >= 3)
			{
				if(ieltsScore >= 6 && gpaReport >= 2.7)
				{
				
				document.getElementById("eligibility").innerHTML = "You have met all the requirements and eligible for getting the admission. As you have 3 Years of experience, the GRE requirement is waived off.";
				}
				else
				{
					document.getElementById("eligibility").innerHTML = "You have not met all the requirements and not eligible for getting the admission.";

				}
			}
			}
			else
			{
				if(greScore >= 290 && ieltsScore >= 6 && gpaReport >= 2.7)
				{
					document.getElementById("eligibility").innerHTML = "You have met all the requirements and eligible for getting the admission.";

				}
				else
				{
					document.getElementById("eligibility").innerHTML = "You have not met all the requirements and not eligible for getting the admission.";
				}
				
			}

		}
	}
	
	
	function busTimings()
	{
		var classTime = document.getElementById("classTime").value;
		
		if(classTime.length == 0)
		{
			alert("Please enter the class Timing");
			return;
		}
		
		
		
		var classTimeArray  = ["9:00", "1:00", "6:00"];
		var busArrivesArray = ["7:30", "11:30","4:30"];
		var busDepartsArray = ["12:30","5:30","10:00"];
		var arrayIndex = classTimeArray.indexOf(classTime);
		
		if(arrayIndex == -1)
		{
			document.getElementById("starts").innerHTML = "Sorry, we dont have any classes at the at time,Please make sure you have entered correct Class Time";
	
		}
		else
		{
		var arrivalTime = busArrivesArray[arrayIndex];
		
		var departureTime = busDepartsArray[arrayIndex];
		
		document.getElementById("starts").innerHTML = "The shuttle starts at " + arrivalTime + "";
		document.getElementById("ends").innerHTML = "The shuttle departs at " + departureTime + "";
		}
	
	}
	
	function rideFare() {
		
		
		var fuelRate = document.getElementById("rate").value;
		var mileage = document.getElementById("mileage").value;
		var miles = document.getElementById("miles").value;
		var noOfPeople = document.getElementById("people").value;
		if(fuelRate.length == 0 || mileage.length == 0|| miles.length == 0 || noOfPeople.length == 0)
		{
		alert("Please enter all the fields");
		
		}
		
		
		else
		{
			if(noOfPeople > 5)
			{
			document.getElementById("charge").innerHTML = "A ticket will be raised" ;

			}
			else
			{
			var costPerHead  = miles*2;
			document.getElementById("charge").innerHTML = "The Estimated Charge for ride is $" + (costPerHead * 2) ;
			}
			}
		
		
	}
	
	
	//Share Info
	var counter = 0;
	function changeShareContent(value){
		
		document.getElementById("shareContent").className += " visible" ;
		document.getElementById("available").innerHTML = "Available " +value+"'s " + "Info";
		document.getElementById("required").innerHTML = "Required " +value+"'s " + "Info";
		//counter = counter++;
		
		
		
		
		

		
		
	}