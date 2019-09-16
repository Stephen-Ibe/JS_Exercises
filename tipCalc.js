const tipCalculator = (bill) => {
    let percentage;
    if(bill<50){
        percentage = 0.2;
    } else if(bill>=50 && bill<200){
        percentage=.15;
    } else{
        percentage=.1;
    }
    return percentage*bill;
};

let bills = [124, 48, 268];
for (let i = 0; i < bills.length; i++) {
    let tip = tipCalculator(bills[i]);
    let finalBill = (bills[i] + tip) + ' dollars';

    console.log(finalBill);
}

// Using Objects and Methods
let john={
    fullName: 'John Doe',
    bills : [124, 48, 268, 180, 42],
    calcTip : function(){
        this.tips=[];
        this.finalBill=[];
        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            if (this.bills[i]<50) {
                percentage = .2;
            } else if(this.bills[i]>=50 && this.bills[i]<200){
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = this.bills[i]*percentage;
            this.finalBill[i] = this.bills[i]+this.tips[i];
        }   
    }
}

let mark={
    fullName: 'Mark Miller',
    bills : [77, 5, 110, 45],
    calcTip : function(){
        this.tips=[];
        this.finalBill=[];
        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            if (this.bills[i]<100) {
                percentage = .2;
            } else if(this.bills[i]>=100 && this.bills[i]<300){
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = this.bills[i]*percentage;
            this.finalBill[i] = this.bills[i]+this.tips[i];
        }   
    }
}

function calcAverage(tips){
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum = sum+tips[i];
    }
    return sum/tips.length;
}

john.calcTip();
mark.calcTip();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

// console.log(john, mark);


if(john.average > mark.average){
    console.log(john.fullName+'\'s family pays higher tips, with an average of $'+john.average);   
} else {
    console.log(mark.fullName+'\'s family pays higher tips, with an average of $'+mark.average);
}
