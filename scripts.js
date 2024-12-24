// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const authSection = document.querySelector('.auth-section');
    const studentProfileFormContainer = document.getElementById('student-profile-form-container');
    const teacherProfileFormContainer = document.getElementById('teacher-profile-form-container');
    const schoolProfileFormContainer = document.getElementById('school-profile-form-container');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            document.querySelectorAll('.auth-section, .profile-section .form-container, .profile-section .profile-container').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'flex';
        });
    });

    // Handle Sign Up Form Submission
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sign Up form submitted!');
    });

    // Handle Login Form Submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login form submitted!');
    });

    // Handle Student Profile Form Submission
    document.getElementById('student-profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('student-profile-name').textContent = document.getElementById('student-name').value;
        document.getElementById('student-profile-current-school').textContent = document.getElementById('student-current-school').value;
        document.getElementById('student-profile-previous-schools').textContent = `${document.getElementById('student-previous-school1').value}, ${document.getElementById('student-previous-school2').value}`;
        document.getElementById('student-profile-interest').textContent = document.getElementById('student-interest').value;
        document.getElementById('student-profile-projects').textContent = document.getElementById('student-project').value;
        document.getElementById('student-profile-achievements').textContent = document.getElementById('student-achievement').value;
        document.getElementById('student-profile-contact').textContent = document.getElementById('student-contact').value;
        document.getElementById('student-profile-photo').src = URL.createObjectURL(document.getElementById('student-photo').files[0]);
        document.getElementById('student-profile-photo').style.display = 'block';
        document.getElementById('student-profile-container').style.display = 'block';
    });

    // Handle Teacher Profile Form Submission
    document.getElementById('teacher-profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('teacher-profile-name').textContent = document.getElementById('teacher-name').value;
        document.getElementById('teacher-profile-specialty').textContent = document.getElementById('teacher-specialty').value;
        document.getElementById('teacher-profile-description').textContent = document.getElementById('teacher-description').value;
        document.getElementById('teacher-profile-org-name').textContent = document.getElementById('teacher-org-name').value;
        document.getElementById('teacher-profile-certificate').textContent = document.getElementById('teacher-certificate').value;
        document.getElementById('teacher-profile-education').innerHTML = `<li>${document.getElementById('teacher-education').value}</li>`;
        document.getElementById('teacher-profile-experience').innerHTML = `<li>${document.getElementById('teacher-experience').value}</li>`;
        document.getElementById('teacher-profile-contact').textContent = document.getElementById('teacher-contact').value;
        document.getElementById('teacher-profile-container').style.display = 'block';
    });

    // Handle School Profile Form Submission
    document.getElementById('school-profile-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('school-profile-name').textContent = document.getElementById('school-name').value;
        document.getElementById('school-profile-about').textContent = document.getElementById('school-about').value;
        document.getElementById('school-profile-contact').textContent = document.getElementById('school-contact').value;
        document.getElementById('school-profile-affiliation').textContent = document.getElementById('school-affiliation').value;
        document.getElementById('school-profile-achievements').textContent = document.getElementById('school-achievement').value;
        document.getElementById('school-profile-container').style.display = 'block';
    });
});
