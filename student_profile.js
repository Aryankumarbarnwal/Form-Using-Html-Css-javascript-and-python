// script.js
document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Gather input values
    const name = document.getElementById('name').value;
    const currentSchool = document.getElementById('current-school').value;
    const previousSchools = document.getElementById('previous-schools').value.split(',');
    const interests = document.getElementById('interests').value.split(',');
    const projects = document.getElementById('projects').value.split(',');
    const achievements = document.getElementById('achievements').value.split(',');
    const contact = document.getElementById('contact').value;

    // Handle photo upload
    const photoUpload = document.getElementById('photo-upload').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-photo').src = e.target.result;
    }
    if (photoUpload) {
        reader.readAsDataURL(photoUpload);
    }

    // Populate profile details
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-current-school').textContent = currentSchool;
    populateList('profile-previous-schools', previousSchools);
    populateList('profile-interests', interests);
    populateList('profile-projects', projects);
    populateList('profile-achievements', achievements);
    document.getElementById('profile-contact').textContent = contact;

    // Display the profile and hide the form
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('profile-container').style.display = 'block';
});

document.getElementById('edit-profile').addEventListener('click', function() {
    // Show the form and hide the profile
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('profile-container').style.display = 'none';
});

function populateList(elementId, items) {
    const ul = document.getElementById(elementId);
    ul.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.trim();
        ul.appendChild(li);
    });
}
