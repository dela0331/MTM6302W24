/*** Event listener ***/

// 1.Display the ID of the last student in the list.
const $studentList = document.getElementById('studentList')

$studentList.innerHTML = `<div class="col-md-6">
    <div class="ac-card">
        <div class="ac-card-image d-flex justify-content-center align-items-center"><i class="bi bi-person-bounding-box display-1"></i></div>
        <div class="ac-card-info">
            <p>
            <strong>${students[0].name}</strong><br>
            <span>${students[0].studentNumber}</span>-
            <span>${students[0].userName}</span>
            </p>
            <p>${students[0].email}</p>
            <!-- here the button -->
            <button type="button" class="btn btn-primary">Update</button>
           
        </div>
        <div class="ac-card-footer">
            <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
        </div>
    </div>
    </div>
    `
// 2.Create a button in the student ID. Use the Bootstrap modal.

// 3.Add an event listener to the button.


/*** Form ***/
// 5.Add an event listener to the 'update form' to allow updating of the student's information.


/*** Filter ***/
// 6.Add an event listener to the 'Search' form. Test it with both 'submit' and 'input' events to display a filtered list based on the student's name.
