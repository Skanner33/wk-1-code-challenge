function calculateSalary(){
    const salary = window.prompt("Please Enter Salary", );
    
    let PAYE;
    let grossSalary = salary;
    let personalRelief = 2400;
    let NHIF, NSSF, netSalary;
    const insuranceRelief = NHIF * 0.15;
    const taxablePay = grossSalary - NSSF;



    if(taxablePay >= 0 && taxablePay <= 24000){
        PAYE = ((taxablePay * 0.1) - personalRelief - insuranceRelief);
    }else if(taxablePay > 24000 && taxablePay <= 32333){
        PAYE = ((taxablePay-24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief; 
    }else if(taxablePay > 32333){
        PAYE = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);
    }else{
        PAYE = "Enter a valid amount";
    }



if (PAYE < 0){
    PAYE = 0;
}

if(grossSalary >= 0 && grossSalary <= 5999){
    NHIF = 150;
}else if(grossSalary >= 6000 && grossSalary <= 7999){
    NHIF = 300;
}else if(grossSalary >= 8000 && grossSalary <= 11999){
    NHIF = 400;
}else if(grossSalary >= 12000 && grossSalary <= 14999){
    NHIF = 500;
}else if(grossSalary >= 15000 && grossSalary <= 19999){
    NHIF = 600;
}else if(grossSalary >= 20000 && grossSalary <= 24999){
    NHIF = 750;
}else if(grossSalary >= 25000 && grossSalary <= 29999){
    NHIF = 850;
}else if(grossSalary >= 30000 && grossSalary <= 34999){
    NHIF = 900;
}else if(grossSalary >= 35000 && grossSalary <= 39999){
    NHIF = 950;
}else if(grossSalary >= 40000 && grossSalary <= 44999){
    NHIF = 1000;
}else if(grossSalary >= 45000 && grossSalary <= 49999){
    NHIF = 1100;
}else if(grossSalary >= 50000 && grossSalary <= 59999){
    NHIF = 1200;
}else if(grossSalary >= 60000 && grossSalary <= 69999){
    NHIF = 1300;
}else if(grossSalary >= 70000 && grossSalary <= 79999){
    NHIF = 1400;
}else if(grossSalary >= 80000 && grossSalary <= 89999){
    NHIF = 1500;
}else if(grossSalary >= 90000 && grossSalary <= 99999){
    NHIF = 1600;
}else if(grossSalary >= 100000){
    NHIF = 1700;
}else{
    NHIF = "Enter a valid amount"
}


if(grossSalary > 0 && grossSalary <= 6000){
    NSSF = (grossSalary * 0.06);
}else if(grossSalary > 6000 && grossSalary <= 18000){
    NSSF = (360 + (grossSalary-6000) * 0.06);
}else if(grossSalary > 18000){
    NSSF = 1080;



}

netSalary = grossSalary - PAYE - NHIF - NSSF;


alert(`This is your Gross Salary :ksh${grossSalary}`);
alert(`This is your NHIF deduction :ksh ${NHIF}`);
alert(`This is your NSSF deduction :ksh ${NSSF}`);
alert(`This is your PAYE amount :ksh ${PAYE}`);
alert(`This is your netSalary amount :ksh ${netSalary}`);
}