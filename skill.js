document.addEventListener("DOMContentLoaded", function () {
    // Initially hide all dropdown contents
    document.querySelectorAll('.dropdown-content').forEach(function(conft) {
        conft.style.display = 'none';
    });

    document.querySelectorAll('.dropdown-header').forEach(function(headss) {
        headss.addEventListener('click', function(eventsti) {
            eventsti.stopPropagation(); // Prevent event bubbling
            
            const conft = this.nextElementSibling; // Find the corresponding dropdown content
            
            // Close all dropdowns before opening the clicked one
            document.querySelectorAll('.dropdown-content').forEach(function(othconft) {
                if (othconft !== conft) {
                    othconft.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            conft.style.display = (conft.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(eventsti) {
        document.querySelectorAll('.dropdown-content').forEach(function(conft) {
            conft.style.display = 'none';
        });
    });

    // Prevent dropdown closing when clicking inside the content
    document.querySelectorAll('.dropdown-content').forEach(function(conft) {
        conft.addEventListener('click', function(eventsti) {
            eventsti.stopPropagation();
        });
    });
});
