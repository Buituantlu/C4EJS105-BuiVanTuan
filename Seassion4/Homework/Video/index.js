// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };
//     for (let x in product) {
//     console.log(x);
// }
// Biến x trả về property của object product
// let productArr = [product];
// for(let i = 0;i<productArr.length;i++){
//     console.log('Name: '+productArr[i].name);
//     console.log('Price: '+productArr[i].price);
//     console.log('Brand: '+productArr[i].brand);
//     console.log('Color: '+productArr[i].color);
// }
// 2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let {subject,dueDate,assignTo} = task;
// console.log(subject);
// console.log(dueDate);
// console.log(assignTo);
// 3 
// the data type of the outermost layer is Object.
// The hits property is Object.
// 4
// let dictionary = {
//     debug: "The process of figuring out why your program has a certain error and how to fix it",
//     done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//     defect: "The formal word for ‘error’",
//     pm: "The short version of Project Manager, the person in charge of the final",
//     ui: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
//     ux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
// };
// 4.1
//     alert("Hi there,this is dev dictionary");
// while(true) {
//     let userInput = prompt("Enter a keyword");
//     userInput = userInput.toLowerCase();
//     if(userInput == false){
//         break;
//     }else if(dictionary[userInput] == undefined){
//         alert(`We could not find your work: ${userInput}`);
//     }else{
//         alert(`${userInput}\n ${dictionary[userInput]}`);
//     }
// }
// 4.2
// alert("Hi there,this is dev dictionary");
// while(true) {
//     let userInput = prompt("Enter a keyword");
//     userInput = userInput.toLowerCase();
//     if(userInput == false){
//         break;
//     }else if(dictionary[userInput] == undefined){
//         let notFind = prompt(`We could not find your work: ${userInput}, leave your explanation`);
//         alert('Done');
//         let addKeywork = prompt('Enter a keywork');
//         alert(`${addKeywork}\n ${notFind}`);
//     }else{
//         alert(`${userInput}\n ${dictionary[userInput]}`);
//     }
// }
// 5
let products = {
    Stt: [1,2,3,4],
    Name: ["Xiaomi portable charge 20000mah","VSmart Active 1","Iphone X","Samsung Galaxy A9"],
    Brand: ["Xiaomi","VSmart","Apple","Samsung"],
    Price: [428,5487,21490,8490],
    Color: ["White",'Black',"Gray","Blue"],
    Category: ["Charger","Phone","Phone","Phone"],
}
// 5.1
// let {Stt,Name,Brand,Price,Color,Category} = products;
// for(let i = 0;i<Stt.length;i++){
//     console.log("-----------------------------------------");
//     console.log(`Name: ${Name[i]}`);
//     console.log(`Price: ${Price[i]}`);
// }
// 5.2
// let {Stt,Name,Brand,Price,Color,Category} = products;
// for(let i = 0;i<Stt.length;i++){
//     console.log("-----------------------------------------");
//     console.log(`#${i+1}. ${Name[i]}`);
//     console.log(`\tPrice: ${Price[i]}`);
// }
// let productInput = prompt("Enter product position:");
// console.log("Console was cleared");
// console.log(`Name: ${Name[productInput-1]}`);
// console.log(`Brand: ${Brand[productInput-1]}`);
// console.log(`Price: ${Price[productInput-1]}`);
// console.log(`Color: ${Color[productInput-1]}`);
// console.log(`Category: ${Category[productInput-1]}`);
// 5.3
// let {Stt,Name,Brand,Price,Color,Category} = products;
// let yourCategory = prompt("Enter your Category");
// if(yourCategory == 'charge'){
//     console.log("-------------------------");
//     console.log(`Name: ${Name[0]}`);
//     console.log(`Price: ${Price[0]}`);
// }else{
//     console.log("-------------------------");
//     console.log(`Name: ${Name[1]}`);
//     console.log(`Price: ${Price[1]}`);
//     console.log("-------------------------");
//     console.log(`Name: ${Name[2]}`);
//     console.log(`Price: ${Price[2]}`);
//     console.log("-------------------------");
//     console.log(`Name: ${Name[3]}`);
//     console.log(`Price: ${Price[3]}`);
// }
// 5.4
// products.Proiders = ["Phukienzero Dientuccc","Tgdd Ddghn VhStore","Tgdd","Tgdd"];
// let {Stt,Name,Brand,Price,Color,Category,Proiders} = products;
// for(let i = 0;i<Stt.length;i++){
//     console.log("-----------------------------------------");
//     console.log(`#${i+1}. ${Name[i]}`);
//     console.log(`\tPrice: ${Price[i]}`);
//     console.log(`\tProiders: ${Proiders[i]}`);
// }
// 5.5
// products.Providers = ["Phukienzero Dientuccc","Tgdd Ddghn VhStore","Tgdd","Tgdd"];
// let {Stt,Name,Brand,Price,Color,Category,Providers} = products;
// let yourprovider = prompt("Enter provider");
//     if (yourprovider == 'tgdd'){
//         console.log('---------------------------------');
//         console.log(`Name: ${Name[1]}`);
//         console.log(`Brand: ${Brand[1]}`);
//         console.log(`Price: ${Price[1]}`);
//         console.log(`Color: ${Color[1]}`);
//         console.log(`Category: ${Category[1]}`);
//         console.log(`Providers: ${Providers[1]}`);
//         console.log('---------------------------------');
//         console.log(`Name: ${Name[2]}`);
//         console.log(`Brand: ${Brand[2]}`);
//         console.log(`Price: ${Price[2]}`);
//         console.log(`Color: ${Color[2]}`);
//         console.log(`Category: ${Category[2]}`);
//         console.log(`Providers: ${Providers[2]}`);
//         console.log('---------------------------------');
//         console.log(`Name: ${Name[3]}`);
//         console.log(`Brand: ${Brand[3]}`);
//         console.log(`Price: ${Price[3]}`);
//         console.log(`Color: ${Color[3]}`);
//         console.log(`Category: ${Category[3]}`);
//         console.log(`Providers: ${Providers[3]}`);
//     }  
// 6
let tasks = [
            {
                course: 'HTML',
                complete: false,
            },
            {
                course: 'CSS',
                complete: false,
            },
            {
                course: 'Basics of JavaScript',
                complete: false,
            },
            {
                course: 'Node Package Manager (nmp)',
                complete: false,
            },
            {
                course: 'Git',
                complete: false,
            }
        ];
        while(true) {
            //         console.clear();
            //         console.log('Hi there, this is your learning tasks to front-end developer career:');
            //         for(let index in tasks) {
            //             let {course: name, complete: status} = tasks[index];
            //             let isComplete = ' ';
            //             if(status == true) {
            //                 isComplete = 'x'; 
            //             }
            //             console.log(`${Number(index)+1}. [${isComplete}] ${name} \n`);
            //         }
            //         // command menu
            //         let userCommand = prompt('Enter your command(New, Delete, Update, Complete)');
            //         userCommand = userCommand.toUpperCase();
            //         let isQuit = false;
            //         switch(userCommand) {
            //             case 'NEW': {
            //                 let newCourse = prompt('Enter new task');
            //                 let newTask = {
            //                     course: newCourse,
            //                     complete: false,
            //                 }
            //                 tasks.push(newTask);
            //                 break;
            //             }
            //             case 'UPDATE': {
            //                 let coursePos = Number(prompt('Enter task position you want to update:'));
            //                 let newTitle = prompt('Enter new title:');
            //                 if(coursePos > tasks.length || coursePos < 1) {
            //                     alert('Task not exists');
            //                 } else {
            //                     tasks[coursePos - 1].course = newTitle;  
            //                 }
            //                 break;
            //             }
            //             case 'DELETE': {
            //                 let coursePos = Number(prompt('Enter task position you want to delete:'));
            //                 tasks.splice(coursePos - 1,1);
            //                 break;
            //             }
            //             case 'COMPLETE': {
            //                 let coursePos = Number(prompt('Enter task position you have completed:'));
            //                 tasks[coursePos - 1].complete = true;
            //                 break;
            //             }
            //             default:
            //                 isQuit = true;
            //                 break;
            //         }
            //         if(isQuit) {
            //             break;
            //         }
            //     }
            // }
            
            // {
            //     console.log('Job hits:');
            //     // get all the job hits
            //     console.log(jobData.hits);
            //     console.log('-------------------------');
            //     //get the first job hits
            //     console.log(jobData.hits[0]);
            //     console.log('-------------------------');
            //     // get jobTitle of the first job
            //     console.log('First job title:');
            //     console.log(jobData.hits[0].jobTitle);
            //     console.log('-------------------------');
            //     // get benefits of the first job hit
            //     console.log(jobData.hits[0].benefits);
            //     console.log('-------------------------');
            //     // log out jobTitle and benefitValue of all job hits
            //     for(let item of jobData.hits) {
            //         let {jobTitle} = item;
            //         console.log(jobTitle);
            //         let allBenefits = 'Benefits: ';
            //         for(let content of item.benefits) {
            //             allBenefits += '\n - ' + content.benefitValue;
            //         }
            //         console.log(allBenefits);
            //         console.log('-------------------------');
            //     }
            //     // log out jobTitle, locations, skills, jobSalary of all job hits
            //     for(let item of jobData.hits) {
            //         // log jobTitle, salary, locations
            //         let {jobTitle, jobSalary, locations} = item;
            //         console.log(`Title: ${jobTitle}`);
            //         console.log(`Salary: ${jobSalary}`);
            //         console.log(`Location: \n - ${locations}`);
            //         // log benefits
            //         let allBenefits = 'Benefits:';
            //         for(let content of item.benefits) {
            //             allBenefits += '\n - ' + content.benefitValue;
            //         }
            //         console.log(allBenefits);
            //         // log skill
            //         let allSkills = 'Skills:'
            //         for(let content of item.skills) {
            //             allSkills += '\n - ' + content;
            //         }
            //         console.log(allSkills);
            //         console.log('-------------------------');
            //     }
            
            // }
            
            {
                const oldData = {
                    firedRice: {
                    Price: 30,
                    vnName: 'Com rang dua bo',
                    },
                    noddle: {
                    price: 20,
                    vnName: 'My tom chanh',
                    },
                    pho: {
                    price: 35,
                    vnName: 'Pho bo tai chin',
                    },
                };
                console.log(oldData);
                let toDelete = "noddle";
                let {[toDelete]: deletedObj, ...newData} = oldData;
                console.log(newData);
            }