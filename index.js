class Grooming {
    constructor(name,breed,time){
        this.name=name;
        this.breed=breed;
        this.time=time;
    }
    describe() {
        return `Welcome ${this.name}---please enter Dog's info .`;}

    }
    class Menu {
        constructor() {
            this.Grooming = [];
            this.selectedGrooming = null;
        }
        
start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.createAppointment();
                break;
            case '2':
                this.viewAppointment();
                break;
            case '3':
                this.deleteAppointment();
                break;
            case '4':
                this.displayAppointment();
                break;
            default:
                selection = 0;
        }

        selection=this.showMainMenuOptions ();
    }

alert ('Thanks for booking with us--see you soon!');
}
showMainMenuOptions() {
    return prompt(`
    0) Exit
    1) Create Appointment
    2) View Appointment
    3) Delete Appointment
    4) Display All`);
}

showGroomingMenuOptions(GroomingInfo) {
    return prompt(`
    0) Back
    1) Add Appointment
    2) Remove Appointment
    ~~~~~~~~~~~~~~~~~~~~~~~
    ${GroomingInfo}`);
}

displayGrooming() {
    let groomingString = '';
    for (let i = 0; i < this.groomings.length; i++) {
        groomingString += i + ') ' + this.grooming[i].name + '\n';
    }
    alert(groomingString);
}

createGroomingAppointment() {
    let name = prompt('Please enter dog name:');
    this.grooming.push(new Grooming(name));

}

viewAppointment() {
    let index = prompt('Please enter the index which you wish to view:');
    if (index > -1 && index < this.groomings.length) {
        this.selectedGrooming = this.groomings[index];
        let description = 'Appointment: ' + this.selectedGrooming.name + '\n';

        for (let i = 0; i < this.selectedAppointment.groomings.length; i++) {
            description += i + ') ' + this.selectedAppointment[i].name + '\n';
        }

        let selection = this.showGroomingMenuOptions(description);
        switch (selection) {
            case '1':
                this.createAppointment();
                break;
            case '2':
                this.deleteAppointment();}

            
        deleteAppointment() ;
        let index = prompt('Please enter the index of the appointment you wish to delete:');
        if (index > -1 && index < this.groomings.length) {
            this.groomings.splice(index, 1);
        }
    }
}

    createAppointment() {
        let name = prompt('Please enter dogs name:');
        this.selectedAppointment.grooming.push(new Grooming(name));
    }

    deleteAppointment() {
        let index = prompt('Please enter the index of the time you wish to delete:');
        if (index > -1 && index < this.selectedAppointment.groomings.length) {
            this.selectedAppointment.groomings.splice(index, 1);
        }
    }
}

let myMenu = new Menu();
myMenu.start();