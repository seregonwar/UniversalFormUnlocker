(function() {
    // Function to enable a single element
    function enableElement(element) {
        element.removeAttribute('disabled');
        element.removeAttribute('readonly');
        element.style.pointerEvents = 'auto'; // Make the element interactive
        console.log(element.tagName + ' with id ' + (element.id || '(no id)') + ' has been enabled.');
    }

    // Function to add event listeners to elements
    function addEventListeners(element) {
        // Add an example listener for input validation
        element.addEventListener('input', function() {
            console.log('Value of ' + element.tagName + ' with id ' + (element.id || '(no id)') + ' has changed to: ' + element.value);
        });
        
        // You can add additional listeners specific to your needs
    }

    // Function to enable and enhance all disabled elements
    function enableAndEnhanceAllDisabledElements() {
        // Select all elements that might be disabled
        var disabledElements = document.querySelectorAll('input[disabled], button[disabled], select[disabled], textarea[disabled], input[readonly], textarea[readonly]');
        
        // Iterate over all elements and enable them
        disabledElements.forEach(function(element) {
            enableElement(element);
            addEventListeners(element);
        });

        // Confirmation message
        console.log('All disabled and read-only fields have been enabled and enhanced.');
    }

    // Execute the function to enable and enhance all disabled elements
    enableAndEnhanceAllDisabledElements();
})();
