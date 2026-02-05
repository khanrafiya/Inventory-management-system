let inventory = [];
let id = 1;

// Add product
function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const quantity = document.getElementById('productQuantity').value.trim();

    if(name === "" || quantity === "") {
        alert("Please enter both name and quantity");
        return;
    }

    inventory.push({id: id++, name: name, quantity: parseInt(quantity)});
    document.getElementById('productName').value = "";
    document.getElementById('productQuantity').value = "";
    renderTable();
}

// Render inventory table
function renderTable() {
    const tbody = document.querySelector("#inventoryTable tbody");
    tbody.innerHTML = "";

    inventory.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td class="actions">
                <button onclick="editProduct(${product.id})">Edit</button>
                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// Edit product quantity
function editProduct(productId) {
    const product = inventory.find(p => p.id === productId);
    const newQuantity = prompt(`Update quantity for ${product.name}:`, product.quantity);

    if(newQuantity !== null && newQuantity !== "") {
        product.quantity = parseInt(newQuantity);
        renderTable();
    }
}

// Delete product
function deleteProduct(productId) {
    inventory = inventory.filter(p => p.id !== productId);
    renderTable();
}
