const data = [
    {
        "id": 1,
        "name": "Apple",
        "category": "Fruits",
        "price": 0.5,
        "inStock": true,
        "description": "A crisp, sweet red apple.",
        "nutrition": {
            "calories": 52,
            "fat": 0.2,
            "carbohydrates": 14,
            "protein": 0.3
        }
    },
    {
        "id": 2,
        "name": "Banana",
        "category": "Fruits",
        "price": 0.3,
        "inStock": true,
        "description": "A ripe, yellow banana.",
        "nutrition": {
            "calories": 89,
            "fat": 0.3,
            "carbohydrates": 23,
            "protein": 1.1
        }
    },
    {
        "id": 3,
        "name": "Carrot",
        "category": "Vegetables",
        "price": 0.2,
        "inStock": true,
        "description": "A fresh, crunchy carrot.",
        "nutrition": {
            "calories": 41,
            "fat": 0.2,
            "carbohydrates": 10,
            "protein": 0.9
        }
    },
    {
        "id": 4,
        "name": "Bread",
        "category": "Bakery",
        "price": 2.5,
        "inStock": true,
        "description": "A loaf of freshly baked bread.",
        "nutrition": {
            "calories": 265,
            "fat": 3.2,
            "carbohydrates": 49,
            "protein": 9
        }
    }
];

function populateTable(data) {
    var tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var priceCell = document.createElement('td');
        var descriptionCell = document.createElement('td');
        
        nameCell.textContent = data[i].name;
        priceCell.textContent = data[i].price;
        descriptionCell.textContent = data[i].description;
        
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(descriptionCell);
        tableBody.appendChild(row);
    }
}

function sortTable() {
    var criteria = document.getElementById('sortCriteria').value;
    var sortedData = [...data];
    
    for (var i = 0; i < sortedData.length - 1; i++) {
        for (var j = 0; j < sortedData.length - 1 - i; j++) {
            if (sortedData[j][criteria] > sortedData[j + 1][criteria]) {
                var temp = sortedData[j];
                sortedData[j] = sortedData[j + 1];
                sortedData[j + 1] = temp;
            }
        }
    }
    populateTable(sortedData);
}

// Initial population of the table
populateTable(data);
