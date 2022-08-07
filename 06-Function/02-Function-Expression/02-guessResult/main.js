const showModal1 = alert;
showModal1('Execute modal'); // *
// alert 'Execute modal' because it stores the alert function (which is a built-in function in JS).
// = No need to write () as it's already been declared.

const showModal2 = alert();
showModal2('Execute modal'); // **
// alert, but alert nothing because we didn't send any parameter to the alert function.
