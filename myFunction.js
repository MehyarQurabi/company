var some = window.location.search;
window.addEventListener('load', () => {
    const everyting = (new URL(document.location)).searchParams;
    const UsernameFull = everyting.get('full_name');
    const IdNumberofuser = everyting.get('numberid');
    const BIRTHofuser = everyting.get('Birth_date');
    const PHONENofuser = everyting.get('phone_number');
    const mailofuser = everyting.get('address');
    const LOANamount = everyting.get('loan_number');
    const tyoeofloan = everyting.get('TYPEOFLOAN');
    const loanyears = everyting.get('loanyears');
    const waysofloan = everyting.get('Loan_method');
    document.getElementById("Result-name").innerHTML = UsernameFull;
    document.getElementById("IDNOC").innerHTML = IdNumberofuser;
    document.getElementById("bOC").innerHTML = BIRTHofuser;
    document.getElementById("NPOC").innerHTML = PHONENofuser;
    document.getElementById("EE").innerHTML = mailofuser;
    document.getElementById("AM").innerHTML = LOANamount;
    document.getElementById("TL").innerHTML = tyoeofloan;
    document.getElementById("YS").innerHTML = loanyears;
    document.getElementById("WPB").innerHTML = waysofloan;
})

function checkName(input) {
    var r = (/[^a-zA-Z]*$/);
    input.value = input.value.replace(r, "");
}
function NationalID() {
    var id = document.getElementById("ID");

    if (id.value.length < 11 || id.value.length > 11) {
        alert("Natinal ID HAVE TO BE 11 NUMBERS!!");
        id.focus;
        return false;
    }
}
function LoanValue() {
    var Amont = document.getElementById('Payment');
    if (Amont.value < 1000000) {
        alert("Manimum Amont Is 1 Million");
        Loan.focus();
        Loan.select();
        return false;
    }
    if (Amont.value > 10000000) {
        alert("Maximum Amont Is 10 Million");
        Amont.focus();
        return false;
    }
    else {
        return true;
        document.getElementById('Payment').onchange = LoanAmont;
    }
}
function Mobail() {
    var mb = document.getElementById('Mobail')
    if (mb.value.length < 10 || mb.value.length > 10 && mb.value.charAt(0) != 0 && mb.value.charAt(1) != 9 && mb.value.charAt(2) != 4 && mb.value.charAt(2) != 5 && mb.value.charAt(2) != 6 && mb.value.charAt(2) != 3 && mb.value.charAt(2) != 8 && mb.value.charAt(2) != 9) {
        alert("Wrong !!!! \n Soulg be start : \n 09 \n 094 / 095 / 096 (For MTN Network) \n 093 / 098 / 099 (For Syriatel Network)");
        return false;
        mb.focus;
    }
    else {
        return true;
        document.getElementById("Mobail").onchange = Mobail;
    }
}
function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").value = code
}
function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
function removeSpaces(string) {
    return string.split(' ').join('');
}

