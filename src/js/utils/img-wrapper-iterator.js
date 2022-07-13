// Handlebars.registerHelper("times", function (n, block) {
//   var accum = "";
//   for (var i = 0; i < n; ++i) {
//     block.data.index = i;
//     block.data.first = i === 0;
//     block.data.last = i === n - 1;
//     accum += block.fn(this);
//   }
//   return accum;
// });

// Handlebars.wrapperIterator () {
// let wrapperIterator = "";
//   if (i === 0) todo.innerHTML = "";
//   todoList.forEach(function (item, i) {
//     wrapperIterator += `
// 		<div class="img-wrapper">
//       <img
//         src="../../images/content/works/{{work-name}}/detail-photos/07.jpg"
//         alt="{{work-name}}"
//       />
//     </div>
// 		<input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
// 		<label for='item_${i}'class="${item.important ? "important" : ""}">${
//       item.todo
//     }</label>
// 		</li>
// 		`;
//     todo.innerHTML = wrapperIterator;
//   });
// }







// function displayMessages() {
//   let displayMessage = "";
//   if (todoList.length === 0) todo.innerHTML = "";
//   todoList.forEach(function (item, i) {
//     displayMessage += `
// 		<li>
// 		<input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
// 		<label for='item_${i}'class="${item.important ? "important" : ""}">${
//       item.todo
//     }</label>
// 		</li>
// 		`;
//     todo.innerHTML = displayMessage;
//   });
// }