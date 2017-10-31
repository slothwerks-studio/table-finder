$(function() { 

var tableNumber;
var selectedTable;

// Clicking an available table

$(".available").on("click", function(event) {

	console.log("A table got clicked");

	$("#guestName").val("");
	$("#phoneNumber").val("");
	$("#numberOfGuests").val("");

	tableNumber = $(event.target).text();
	selectedTable = $(event.target);

	console.log(tableNumber);

	tableNumberText = "Table Number: " + tableNumber;

	console.log(tableNumberText);

	$(".top-layer").css("display","block");
	$(".table-number").text(tableNumberText);

});

// Clicking the "X" button

$(".close-form").on("click", function() {

	console.log("The close form X got clicked");

	$(".top-layer").css("display", "none");

});

// Clicking the "Save" button

$(".save-button").on("click", function() {

	var guestName = $("#guestName").val();
	var phoneNumber = $("#phoneNumber").val();
	var numberOfGuests = $("#numberOfGuests").val();

	// The above likely should be added to an array of objects.

	console.log(guestName);
	console.log(phoneNumber);
	console.log(numberOfGuests);

	$(".top-layer").css("display", "none");
	$(selectedTable).removeClass("available").addClass("reserved");

});



}); 