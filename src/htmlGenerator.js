const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const generateManager = managerEmployee => { return managerEmployee.map(manager => { 
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body heading rounded-top">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                    <path
                        d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
                </svg> Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}
).join('');
};

const generateIntern = internEmployee => { return internEmployee.map( intern => {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body heading rounded-top">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg> Intern</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
    }
    ).join('');
};

const generateEngineer = engineerEmployee => { return engineerEmployee.map(engineer => {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body heading rounded-top">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
              </svg> Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${engineer.email}</a></li>
            <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}">${engineer.name}</a></li>
        </ul>
    </div>
</div>`
}).join('');
};

const generateProfile = teamArray => {
    let cardsArray = [];
    const managerEmployee= teamArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerEmployee = teamArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internEmployee = teamArray.filter(team => {
        return team.getRole() === 'Intern';
    });
    if (managerEmployee) {
        cardsArray.push(generateManager(managerEmployee));
    } 
    if (engineerEmployee) {
        cardsArray.push(generateEngineer(engineerEmployee));
    } 
    if (internEmployee) {
        cardsArray.push(generateIntern(internEmployee));
    }
    return cardsArray.join('');
    };

    module.exports = cardsArray => {
        return ` 
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>My Team</title>
    <style>
        header {
    background-color: rgb(255, 83, 83);
    color: white;
    text-align: center;
    padding: 40px;
}

header h1 {
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.heading {
    background-color: rgb(56, 125, 253);
    color: white;
}

.col {
    margin: 15px;
}
    </style>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container my-5">
        <div class="row">
        ${generateProfile(cardsArray)}
        </div>
    </main>

</body>

</html>
`;
};