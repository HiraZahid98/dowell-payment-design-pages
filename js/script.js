function disableinput() {
    document.getElementById("ordernumber").disabled = true;
    document.getElementById("currency").disabled = true;
    document.getElementById("qr-code").disabled = true;

}
function enableinput() {
    document.getElementById("ordernumber").disabled = false;
    document.getElementById("currency").disabled = false;
    document.getElementById("qr-code").disabled = false;
}

// cash counter 
function disablecashinput() {
    document.getElementById("usd").disabled = true;
    document.getElementById("aud").disabled = true;
    document.getElementById("euro").disabled = true;
    document.getElementById("cash-button").disabled = true;
}
function enablecashinput() {
    document.getElementById("usd").disabled = false;
    document.getElementById("aud").disabled = false;
    document.getElementById("euro").disabled = false;
    document.getElementById("cash-button").disabled = false;
}


// bank transfer 
function disablebankinput() {
    document.getElementById("bank-currency").disabled=true;
    document.getElementById("accountname").disabled = true;
    document.getElementById("accountnumber").disabled = true;
    document.getElementById("confirmaccountnumber").disabled = true;
    document.getElementById("routingcode").disabled = true;
    document.getElementById("tradenumber").disabled = true;
    document.getElementById("bank-transfer-button").disabled=true;
}
function enablebankinput() {
    document.getElementById("bank-currency").disabled=false;
    document.getElementById("accountname").disabled = false;
    document.getElementById("accountnumber").disabled = false;
    document.getElementById("confirmaccountnumber").disabled = false;
    document.getElementById("routingcode").disabled = false;
    document.getElementById("tradenumber").disabled = false;
    document.getElementById("bank-transfer-button").disabled=false;
}



// payment app settings 
function disablepaymentappinput() {
    document.getElementById("stripe-currency").disabled = true;
    document.getElementById("stripepaylink").disabled = true;
    document.getElementById("stripebutton").disabled = true;
}
function enablepaymentappinput() {
    document.getElementById("stripe-currency").disabled = false;
    document.getElementById("stripepaylink").disabled = false;
    document.getElementById("stripebutton").disabled = false;
}


// GPay Payment Settings 
function disablegpayinput() {
    document.getElementById("gpay-currency").disabled = true;
    document.getElementById("gpaylink").disabled = true;
    document.getElementById("gpay-button").disabled = true;
}
function enablegpayinput() {
    document.getElementById("gpay-currency").disabled = false;
    document.getElementById("gpaylink").disabled = false;
    document.getElementById("gpay-button").disabled = false;
}


// amazon Settings 
function disableamazoninput() {
    document.getElementById("amazon-currency").disabled = true;
    document.getElementById("amazonpaylink").disabled = true;
    document.getElementById("amazon-button").disabled = true;
}
function enableamazoninput() {
    document.getElementById("amazon-currency").disabled = false;
    document.getElementById("amazonpaylink").disabled = false;
    document.getElementById("amazon-button").disabled = false;
}


// paypal Settings 
function disablepaypalinput() {
    document.getElementById("paypal-currency").disabled = true;
    document.getElementById("paypallink").disabled = true;
    document.getElementById("paypal-button").disabled = true;
}
function enablepaypalinput() {
    document.getElementById("paypal-currency").disabled = false;
    document.getElementById("paypallink").disabled = false;
    document.getElementById("paypal-button").disabled = false;
}

// facebook Settings 
function disablefacebookinput() {
    document.getElementById("facebook-currency").disabled = true;
    document.getElementById("facebooklink").disabled = true;
    document.getElementById("facebook-button").disabled = true;
}
function enablefacebookinput() {
    document.getElementById("facebook-currency").disabled = false;
    document.getElementById("facebooklink").disabled = false;
    document.getElementById("facebook-button").disabled = false;
}


// payment Settings 
function disablepaymentinput() {
    document.getElementById("payment-currency").disabled = true;
    document.getElementById("paymentlink").disabled = true;
    document.getElementById("paymentlink-button").disabled = true;
}
function enablepaymentinput() {
    document.getElementById("payment-currency").disabled = false;
    document.getElementById("paymentlink").disabled = false;
    document.getElementById("paymentlink-button").disabled = false;
}



// membership Settings 
function disablemembershipinput() {
    document.getElementById("membership-currency").disabled = true;
    document.getElementById("membershipprovider").disabled = true;
    document.getElementById("reference-number").disabled = true;
    document.getElementById("fileupload").disabled = true;
    document.getElementById("member-detials-button").disabled = true;
}
function enablemembershipinput() {
    document.getElementById("membership-currency").disabled = false;
    document.getElementById("membershipprovider").disabled = false;
    document.getElementById("reference-number").disabled = false;
    document.getElementById("fileupload").disabled = false;
    document.getElementById("member-detials-button").disabled = false;
}
