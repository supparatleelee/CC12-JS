let ask = (question, yes, no) => {
    if (confirm(question) === yes()) {
        return true;
    } else {
        return false;
    }
}

ask('Do you agree?', 
    function () { alert('You agreed.'); },
    function () { alert('You canceled the execution.'); }
  );