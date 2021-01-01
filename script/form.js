
var a = document.getElementById('aries-hor');
var b = document.getElementById('taurus-hor');
var c = document.getElementById('gemini-hor');
var d = document.getElementById('cancer-hor');
var e = document.getElementById('leo-hor');
var f = document.getElementById('virgo-hor');
var g = document.getElementById('libra-hor');
var h = document.getElementById('scorpio-hor');
var i = document.getElementById('sagittarius-hor');
var j = document.getElementById('capricorn-hor');
var k = document.getElementById('aquarius-hor');
var l = document.getElementById('pisces-hor');
var z = document.getElementById('hidespace');

a.style.display = "none";
b.style.display = "none";
c.style.display = "none";
d.style.display = "none";
e.style.display = "none";
f.style.display = 'none';
g.style.display = 'none';
h.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
k.style.display = 'none';
l.style.display = 'none';

function showPredection(){
	var x = document.getElementById("hor").value;

	if (x == 'aries') {a.style.display = "block";}
	else if (x != 'aries'){a.style.display = "none";}

	if (x == 'taurus'){b.style.display = "block";}
	else if (x != 'taurus'){b.style.display = "none";}

	if (x == 'gemini'){c.style.display = "block";}
	else if (x != 'gemini'){c.style.display = "none";}

	if (x == 'cancer'){d.style.display = "block";}
	else if (x != 'cancer'){d.style.display = "none";}

	if (x == 'leo'){e.style.display = "block";}
	else if (x != 'leo'){e.style.display = "none";}

	if (x == 'virgo'){f.style.display = "block";}
	else if (x != 'virgo'){f.style.display = "none";}

	if (x == 'libra'){g.style.display = "block";}
	else if (x != 'libra'){g.style.display = "none";}

	if (x == 'scorpio'){h.style.display = "block";}
	else if (x != 'scorpio'){h.style.display = "none";}

	if (x == 'sagittarius'){i.style.display = "block";}
	else if (x != 'sagittarius'){i.style.display = "none";}

	if (x == 'capricorn'){j.style.display = "block";}
	else if (x != 'capricorn'){j.style.display = "none";}

	if (x == 'aquarius'){k.style.display = "block";}
	else if (x != 'aquarius'){k.style.display = "none";}

	if (x == 'pisces'){l.style.display = 'block';}
	else if (x != 'pisces'){l.style.display = 'none';}
}


