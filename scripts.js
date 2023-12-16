// Sample issue data
let issues = [
    { id: 1, title: "Bug in Login Page", description: "Login button not working", priority: "High", assignedTo: "John Doe", files: [] },
    { id: 2, title: "Feature Request: Profile Picture Upload", description: "Add functionality for users to upload profile pictures", priority: "Medium", assignedTo: "Alice Smith", files: [] }
];

// Function to display issues
function displayIssues() {
    const issuesContainer = document.getElementById("issuesContainer");
    issuesContainer.innerHTML = '';

    issues.forEach(issue => {
        const issueCard = document.createElement("div");
        issueCard.classList.add("issue-card");
        issueCard.innerHTML = `
        <h2>${issue.title}</h2>
        <p><strong>Description:</strong> ${issue.description}</p>
        <p><strong>Priority:</strong> ${issue.priority}</p>
        <p><strong>Assigned To:</strong> ${issue.assignedTo}</p>
        <button onclick="editIssue(${issue.id})">Edit</button>
        <button onclick="deleteIssue(${issue.id})">Delete</button>
      `;
        issuesContainer.appendChild(issueCard);
    });
}

// Function to add a new issue
function createIssue() {
    // Implement logic to show modal for creating a new issue
    // You'll need form inputs for title, description, priority, assignment, and file attachment
}

// Function to edit an issue
function editIssue(id) {
    // Implement logic to show modal for editing an issue by id
}

// Function to delete an issue
function deleteIssue(id) {
    // Implement logic to delete an issue by id
}

// Display issues when the page loads
window.onload = displayIssues;
