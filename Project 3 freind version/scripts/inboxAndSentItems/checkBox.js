/*
 * Andrew Coakley (A00398990)
 * Kinshuk Chadha (A00431288)
 * Alexander Lamey (A00410007)
 * Priya Lollmun (A00430148)
 *
 * CheckBox.js:
 * js file that is used by the inbox and sent items screens.
 * It describes what happens when the check box is clicked
 */

/*
 * Function read when checkbox is clicked.
 *
 * i = index of the email.
 * encoding = encoding for the collection name.
 *
 * returns N/A
 */
function clickCheckBox(i, encoding) {
  var name = getNameFromEncoding(encoding);
  $.post(
    SERVER_URL + "/clickCheckBox",
    createNameIndexReq(name, i),
    runOnCheckBoxSuccess
  ).fail(runOnCheckBoxError);

  function runOnCheckBoxSuccess(data) {
    if (DEBUG) alert(data.message);
  }

  function runOnCheckBoxError(err) {
    alert("Server error in clicking checkbox");
  }
}
