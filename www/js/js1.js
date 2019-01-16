function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}



function vibrate1() {
    navigator.vibrate ([2000]);
}
function vibrate2() {
    navigator.vibrate ([1000, 1000, 2000]);
}
function vibrate3() {
    navigator.vibrate ([2000, 1000, 3000]);
}
function vibrate4() {
    navigator.vibrate ([3000, 1000, 4000]);
}
function vibrate5() {
    navigator.vibrate ([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]);
}

function IMC(n1, n2) {
	$imc = n1/(n2*n2);
	
	if ($imc<17) {
        navigator.notification.beep(1);
        vibrate1();
		alert('Seu IMC: ' + $imc + '. Voce esta muito abaixo do peso.');
	}
	if ($imc>17 && $imc<18.49) {
		alert('Seu IMC: ' + $imc + '. Voce esta abaixo do peso.');
	}
	if ($imc>18.5 && $imc<24.99) {
		alert('Seu IMC: ' + $imc + '. Voce esta com peso normal.');
	}
	if ($imc>25 && $imc<29.99) {
        navigator.notification.beep(2);
        vibrate2();
		alert('Seu IMC: ' + $imc + '. Voce esta acima do peso.');
	}
	if ($imc>30 && $imc<34.99) {
        navigator.notification.beep(3);
        vibrate3();
		alert('Seu IMC: ' + $imc + '. Voce esta com obesidade I.'); 
    }
	if ($imc>35 && $imc<39.99) {
        navigator.notification.beep(4);
        vibrate4();
		alert('Seu IMC: ' + $imc + '. Voce esta com obesidade II (severa).');
	}
	if ($imc>40) {
        navigator.notification.beep(5);
        vibrate5();
		alert('Seu IMC: ' + $imc + '. Voce esta com obesidade III (morbida).');
	}
}