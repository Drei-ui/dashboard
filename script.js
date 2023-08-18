//Sidebar Open
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
}

function closeSB(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

function switchPage(pageUrl) {
    console.log('Switching to:', pageUrl);
    window.location.href = pageUrl;
  }

//Previous transaction time and date
function handleFileUpload() {
    // Get references to the file input, button, and transaction log div
    const fileInput = document.getElementById('fileInput');
    const submitButton = document.getElementById('submitButton');
    const transactionLog = document.getElementById('transactionLog');
  
    // Add a click event listener to the button
    submitButton.addEventListener('click', function() {
      // Get the selected file
      const selectedFile = fileInput.files[0];
      
      if (selectedFile) {
        // Get the current date and time
        const currentDate = new Date();
        
        // Format the date and time as a string
        const timestamp = currentDate.toLocaleString();
        
        // Create a new paragraph element to display the transaction
        const transactionInfo = document.createElement('p');
        transactionInfo.textContent = `File "${selectedFile.name}" submitted at: ${timestamp}`;
        
        // Append the transaction information to the transaction log div
        transactionLog.appendChild(transactionInfo);
      } else {
        alert("Please select a file to upload.");
      }
    });
  }
  
  // Call the function to set up the file upload functionality
  handleFileUpload();
  


