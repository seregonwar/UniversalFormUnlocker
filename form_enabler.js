(function() {
    // Function to enable a single element
    function enableElement(element) {
        element.removeAttribute('disabled');
        element.removeAttribute('readonly');
        element.style.pointerEvents = 'auto'; // Make the element interactive

        // Remove classes that visually indicate non-interactivity
        element.classList.remove('cursor-not-allowed', 'opacity-50');

        // Optionally, you can reset opacity and pointer-events directly
        element.style.opacity = '1';
        element.style.cursor = 'pointer';
        
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
        // Select all elements that might be disabled or non-interactive
        var disabledElements = document.querySelectorAll('input[disabled], button[disabled], select[disabled], textarea[disabled], input[readonly], textarea[readonly], .cursor-not-allowed, .opacity-50');
        
        // Iterate over all elements and enable them
        disabledElements.forEach(function(element) {
            enableElement(element);
            addEventListeners(element);
        });

        // Confirmation message
        console.log('All disabled and read-only fields have been enabled and enhanced.');
    }

    // Function to remove or hide popup elements
    function removePopups() {
        // Select popup elements by their common characteristics
        var popups = document.querySelectorAll('.absolute.right-0.z-10.mt-2.w-64.rounded-lg.border.bg-token-main-surface-primary.p-3.text-sm.shadow-lg, .btn-secondary.btn-small');

        // Iterate over all popup elements and remove them
        popups.forEach(function(popup) {
            popup.remove();
            console.log('Removed a popup element.');
        });

        // Confirmation message
        console.log('All interfering popups have been removed.');
    }
    // Rimuovi il blur da tutti gli elementi e ripristina la visibilità
document.querySelectorAll('*').forEach(element => {
    element.style.filter = 'none';
    element.style.webkitFilter = 'none';
    element.style.backdropFilter = 'none';
    element.style.visibility = 'visible';
    element.style.opacity = '1';
});

// Nascondi la limitazione popup
document.querySelectorAll('.limit-popup').forEach(element => {
    element.style.display = 'none';
});

// Rimuovi eventuali overlay che potrebbero impedire l'interazione con la pagina
document.querySelectorAll('div').forEach(element => {
    if (getComputedStyle(element).position === 'fixed' || getComputedStyle(element).position === 'absolute') {
        element.style.display = 'none';
    }
});

// Rimuovi classi specifiche che potrebbero applicare effetti di blur
document.querySelectorAll('[class]').forEach(element => {
    element.classList.forEach(className => {
        if (className.includes('blur')) {
            element.classList.remove(className);
        }
    });
});

    // Execute the functions to enable and enhance all disabled elements and remove popups
    enableAndEnhanceAllDisabledElements();
    removePopups();
})();
