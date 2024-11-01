# UniversalFormUnlocker
#### Overview

This script is designed to unlock and enhance all disabled fields on any website. It removes the `disabled` and `readonly` attributes from input fields, buttons, select elements, and text areas, making them interactive and functional. Additionally, it adds event listeners to ensure the elements respond to user interactions.

#### Functions

1. **enableElement(element)**
   - **Purpose**: Enable a single element by removing the `disabled` and `readonly` attributes and making it interactive.
   - **Parameters**:
     - `element` (HTMLElement): The element to be enabled.
   - **Behavior**: Removes `disabled` and `readonly` attributes from the element and sets `pointerEvents` to `auto` to ensure it is interactive. Logs the element's tag name and id to the console.

2. **addEventListeners(element)**
   - **Purpose**: Add event listeners to an element to handle user interactions.
   - **Parameters**:
     - `element` (HTMLElement): The element to which event listeners are added.
   - **Behavior**: Adds an `input` event listener that logs the element's new value whenever it changes. Additional listeners can be added as needed.

3. **enableAndEnhanceAllDisabledElements()**
   - **Purpose**: Enable and enhance all disabled elements on the page.
   - **Behavior**: Selects all elements with `disabled` or `readonly` attributes, iterates over them, enables each one, and adds necessary event listeners. Logs a confirmation message to the console when done.

4. **removePopups()**

   - **Purpose**: Remove or hide popup elements that interfere with user interaction.
   - **Behavior**: Selects popup elements based on their common CSS classes and removes them from the DOM. Logs a message for each removed popup and a confirmation message when done.

#### Usage

To use this script:

1. Open the website where you want to unlock and enhance all fields.
2. Open the browser console (press `F12` or `Ctrl+Shift+I` and select the "Console" tab).
3. Copy and paste the script into the console and press `Enter`.

The script will automatically find and enable all disabled and read-only fields on the page, making them interactive and functional. It also adds event listeners to handle user interactions, ensuring the fields work correctly.

#### Example

Suppose you have a form with disabled input fields, buttons, and a popup message like this:

```html
<form>
    <input type="text" id="name" disabled value="John Doe">
    <button id="submitBtn" disabled>Submit</button>
</form>
<div class="absolute right-0 z-10 mt-2 w-64 rounded-lg border bg-token-main-surface-primary p-3 text-sm shadow-lg">
    <p class="mb-2">Upgrade to ChatGPT Plus to create and share your GPTs</p>
    <button class="btn relative btn-secondary btn-small">Upgrade to Plus</button>
</div>

```

After running the script, these fields will be enabled and interactive, and the popup will be removed, allowing for smooth user interaction.

