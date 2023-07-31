let searchbar = document.getElementById("searchbar-input");
let search_btn = document.getElementById("search-btn");
let item_table = document.getElementById("item_table");
let delete_button = document.getElementById("del-btn");
let items_searching = document.getElementById("items-searching");

// Number for id's on the buttons
let num = 1;

search_btn.addEventListener("click", () => {
  let input = searchbar.value;

  addItemToTable(input, num);

  num += 1;
});

// TODO: update code from commented function to this one
function addItemToTable(input, num) {
  const item_div = document.createElement("div");
  const item_element = document.createElement("p");

  item_element.innerText = input;

  const final = item_div.appendChild(item_element);
  items_searching.appendChild(final);
}

// function addItemToTable(item, num) {
//   // Elements
//   let delete_button_el = document.createElement("button");
//   let edit_button = document.createElement("button");

//   let del_btn_id = deleteButtonId();
//   // Element attributes
//   delete_button_el.className = "del-btn";
//   delete_button_el.id = del_btn_id;

//   delete_button_el.setAttribute(
//     "onclick",
//     `deleteItemFromTable("${del_btn_id}")`
//   );
//   edit_button.setAttribute("onclick", `editItemName("${del_btn_id}")`);

//   delete_button_el.innerText = "Del";
//   edit_button.innerText = "Edit";

//   // Create row
//   let row = item_table.insertRow(num);
//   row.className = "item-row";

//   // Create Cells
//   let item_cell = row.insertCell(0);
//   let quantity_cell = row.insertCell(1);
//   let signle_price_cell = row.insertCell(2);
//   let total_price_cell = row.insertCell(2);
//   let del_cell = row.insertCell(4);
//   let edit_cell = row.insertCell(5);

//   // Add Cells
//   item_cell.innerText = item;
//   del_cell.appendChild(delete_button_el);
//   edit_cell.appendChild(edit_button);
// }

// returns the ids for the delete button

function deleteButtonId() {
  const del_num = num - 1;
  const part_one = "del_btn_";
  const final_name = part_one + del_num;
  return final_name;
}

// If row === 0 add 1
function deleteItemFromTable(id) {
  let row_filter = id.split("_");
  let row_number = row_filter[2];
  if (row_number === 0) {
    item_table.deleteRow(1);
  } else {
    item_table.deleteRow(row_number);
  }
  num -= 1;
}

// function to change button attributes
function buttonOnOff(id) {
  let btn_value = search_btn.firstChild.nodeValue;

  if (btn_value === "Add") {
    search_btn.innerText = "Update";
  }
  if (btn_value === "Update") {
    search_btn.innerText = "Add";
  }
}

// TODO: make edit button id for this
function editItemName(id) {
  buttonOnOff(id);
  let ids_element = document.getElementById(id);
  console.log(ids_element);
}
