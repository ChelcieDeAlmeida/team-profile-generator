const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/htmlGenerator');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

class Prompt{
    constructor() {
        this.teamArray = [];
    }

    /**
     * @returns 
     */

    getTeamArray() {
        return this.teamArray;
    }


questions() {
    inquirer.prompt(
    {
     type: 'list',
     name: 'employeeType',
     message: "Which type of employee would you like to add to the team?",
     choices: ['Manager', 'Engineer', 'Intern', 'I have no other teammates']
    })
    .then(({employeeType}) => {
        if(employeeType === 'Manager'){
        inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "Please enter the manager's name",
     validate: nameInput => {
         if (nameInput) {
             return true;
         } else {
             console.log("Please enter the manager's name!");
             return false;
         }
     }
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's id",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("That's not correct, the id should be a number");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the correct manager's email!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("That's not correct, you entered alpha characters");
                return false;
            }
        }
    },
    ])

    
    .then( (inputData) => {
        const newManager = new Manager(inputData.name, inputData.id, inputData.email, inputData.officeNumber)
        this.teamArray.push(newManager);
        
        this.questions();
    });

    } else if (employeeType === 'Engineer') {
            inquirer.prompt([
                    {
                     type: 'input',
                     name: 'name',
                     message: "Please enter the engineer's name",
                     validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'number',
                     name: 'id',
                     message: "Please enter the engineer's employee id",
                     validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter a correct answer, the employee id should be a number!");
                            return false;
                        }
                    } 
                    },
                    {
                     type: 'input',
                     name: 'email',
                     message: "Please enter the engineer's email",
                     validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's email!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'input',
                     name: 'github',
                     message: "Please enter the engineer's github username",
                     validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's github username!");
                            return false;
                        }
                    }  
                    }


                ]).then( inputData => {
                    const newEngineer = new Engineer(inputData.name, inputData.id, inputData.email, inputData.github);
                    this.teamArray.push(newEngineer);

                    this.questions();
                });

        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                 type: 'input',
                 name: 'name',
                 message: "Please enter the intern's name",
                 validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
                },
                {
                 type: 'number',
                 name: 'id',
                 message: "Please enter the intern's employee id",
                 validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter a correct answer, the employee id should be a number!");
                        return false;
                    }
                } 
                },
                {
                 type: 'input',
                 name: 'email',
                 message: "Please enter the intern's email",
                 validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the correct intern's email!");
                        return false;
                    }
                }
                },
                {
                 type: 'input',
                 name: 'school',
                 message: "Please enter the intern's school name"
                }

            ]).then( inputData => {
                const newIntern = new Intern(inputData.name, inputData.id, inputData.email, inputData.school);
                this.teamArray.push(newIntern);

                this.questions();
            });

        } else if (employeeType === 'I have no other teammates') {
 
            const pagehtml = generateHTML(this.getTeamArray());
            fs.writeFile('./dist/index.html', pagehtml, err => {
                if (err) throw new Error(err);

                console.log('Your HTML has been generated and placed in the dist folder');
            });
        }
    });

}
};

// Activates prompts in CLI
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;