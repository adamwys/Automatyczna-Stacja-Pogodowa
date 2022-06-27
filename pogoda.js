var obrazki = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg','img/06.jpg'];

window.onload = fSetImg();

function fSetImg(){
	
	$.getJSON('https://danepubliczne.imgw.pl/api/data/synop/id/12155', function(data) {

        var temperatura = `${data.temperatura}`;
		var wiatr = `${data.predkosc_wiatru}`;
		var wilgotnosc = `${data.wilgotnosc_wzgledna}`;
		temperatura = Number(temperatura);
		wiatr = Number(wiatr);
		wilgotnosc = Number(wilgotnosc);
		
		document.getElementById('01').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Westerplatte');});
		document.getElementById('02').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/D%C5%82ugie_Pobrze%C5%BCe');});
		document.getElementById('03').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Molo_w_Gda%C5%84sku_Brze%C5%BAnie');});
	
    if (temperatura<=25){
        document.getElementById('01').src = obrazki[0];
		document.getElementById('01').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Westerplatte');});
		
		if (wiatr>=6){
			document.getElementById('02').src = obrazki[4];
			document.getElementById('02').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Europejskie_Centrum_Solidarno%C5%9Bci');});
		}
		if (wilgotnosc>=35){
			document.getElementById('03').src = obrazki[3];
			document.getElementById('03').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Muzeum_II_Wojny_%C5%9Awiatowej_w_Gda%C5%84sku');});
			
		}
    }
    
    else {
        document.getElementById('01').src = obrazki[3];
		document.getElementById('01').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Muzeum_II_Wojny_%C5%9Awiatowej_w_Gda%C5%84sku');});
		
		if (wiatr>=6){
			document.getElementById('02').src = obrazki[4];
			document.getElementById('02').addEventListener('click', function handleClick() {window.location.assign('https://pl.wikipedia.org/wiki/Europejskie_Centrum_Solidarno%C5%9Bci');});
		}
		if (wilgotnosc>=35){
			document.getElementById('03').src = obrazki[5];
			document.getElementById('03').addEventListener('click', function handleClick() {window.location.assign("https://pl.wikipedia.org/wiki/Bazylika_archikatedralna_w_Gda%C5%84sku-Oliwie");});
		}
    }
	
    });	
}
