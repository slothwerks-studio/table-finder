$(function() { 

	var tableNumber;
	var selectedTable;

	var table1 = {};
	var table2 = {};
	var table3 = {};
	var table4 = {};
	var table5 = {};
	var table6 = {};
	var table7 = {};
	var table8 = {};
	var table9 = {};

	// Clicking an available table

	$(".floor-plan").children("div").on("click", function(event) {

		console.log("A table got clicked");

		selectedTable = $(this);
		tableNumber = $(this).children("p").text();
		var selectedTableClass = $(selectedTable).attr("class");

		console.log(tableNumber);
		console.log(selectedTableClass);

		if (selectedTableClass == "available") {

			$("#guestName").val("");
			$("#phoneNumber").val("");
			$("#numberOfGuests").val("");

			tableNumberText = "Table Number: " + tableNumber;

			console.log(tableNumberText);

			$(".top-layer").css("display","block");
			$(".table-number").text(tableNumberText);

		} 

	});

	// mouse-over a reserved table

	$(".floor-plan").children("div").mouseover(function (event) {

		console.log("A table got moused over");

		selectedTable = $(this);
		tableNumber = $(this).children("p").text();
		var selectedTableClass = $(selectedTable).attr("class");

		console.log(tableNumber);
		console.log(selectedTableClass);

		if (selectedTableClass == "reserved") {

			console.log("A reserved table has been moused over");

			var reservationPopUp = $(event.target).children(".reservation-popup");
			var reservationName = $(reservationPopUp).children(".reservation-name");
			var partySize = $(reservationPopUp).children(".party-size");
			tableNumber = $(this).children("p").text();

			if (tableNumber == 1) {
				$(reservationName).text("Name: " + table1.guest);
				$(partySize).text("Size of party: " + table1.partySize);
			} else if (tableNumber == 2) {
				$(reservationName).text("Name: " + table2.guest);
				$(partySize).text("Size of party: " + table2.partySize);
			} else if (tableNumber == 3) {
				$(reservationName).text("Name: " + table3.guest);
				$(partySize).text("Size of party: " + table3.partySize);
			} else if (tableNumber == 4) {
				$(reservationName).text("Name: " + table4.guest);
				$(partySize).text("Size of party: " + table4.partySize);
			} else if (tableNumber == 5) {
				$(reservationName).text("Name: " + table5.guest);
				$(partySize).text("Size of party: " + table5.partySize);
			} else if (tableNumber == 6) {
				$(reservationName).text("Name: " + table6.guest);
				$(partySize).text("Size of party: " + table6.partySize);
			} else if (tableNumber == 7) {
				$(reservationName).text("Name: " + table7.guest);
				$(partySize).text("Size of party: " + table7.partySize);
			} else if (tableNumber == 8) {
				$(reservationName).text("Name: " + table8.guest);
				$(partySize).text("Size of party: " + table8.partySize);
			} else if (tableNumber == 9) {
				$(reservationName).text("Name: " + table9.guest);
				$(partySize).text("Size of party: " + table9.partySize);
			}

			$(reservationPopUp).css("display", "inline-block");

			$(selectedTable).mouseleave(function() {

				$(reservationPopUp).css("display", "none");

			});

		}

	});

	// Clicking the reservation form "X" button

	$(".close-form").on("click", function() {

		console.log("The close form X got clicked");

		$(".top-layer").css("display", "none");

	});

	// Clicking the reservation form "Save" button

	$(".save-button").on("click", function() {

		var guestName = $("#guestName").val();
		var phoneNumber = $("#phoneNumber").val();
		var numberOfGuests = $("#numberOfGuests").val();

		if (tableNumber == 1) {
			table1 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 2) {
			table2 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 3) {
			table3 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 4) {
			table4 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 5) {
			table5 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 6) {
			table6 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 7) {
			table7 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 8) {
			table8 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		} else if (tableNumber == 9) {
			table9 = {guest: guestName, phone: phoneNumber, partySize: numberOfGuests};
		}

		console.log(guestName);
		console.log(phoneNumber);
		console.log(numberOfGuests);

		$(".top-layer").css("display", "none");
		$(selectedTable).removeClass("available").addClass("reserved");

	});

});