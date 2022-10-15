// Create variables to store Input and Output.
const user_input = document.querySelector("input");
const submit = document.querySelector("button");
const output_list = document.querySelector('.list');

// Add an event listener to detect when the Button is clicked.
submit.addEventListener("click", add_to_list);

// Add the user's input to the unordered list as a list element.
function add_to_list() {
	
	// Create the display text from the user's input.
	const input_value = user_input.value;
	const display_text = document.createElement("span");
	display_text.innerText = input_value;


	// Create a delete button to add to each list element.
	const del_button = document.createElement("button");
	del_button.innerText = "❌";
	
	// Append the display text and delete button to the unordered list as a list element.
	const new_list_item = document.createElement("li");
	new_list_item.append(display_text);
	new_list_item.append(del_button);
	output_list.append(new_list_item);
	
	// Clear the input box.
	user_input.value = " ";


	// Detect when the delete button is clicked, remove the parent element of the button.
	del_button.addEventListener("click", remove_from_list);
	function remove_from_list() {
	del_button.parentElement.remove(new_list_item);

	// Focus the cursor back to the input box.
	user_input.focus();
	}

	
}