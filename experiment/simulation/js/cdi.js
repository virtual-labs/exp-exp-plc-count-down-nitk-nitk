var count=-0;

function reset()
{
	document.getElementById("on6").style.visibility="visible";
	document.getElementById("bit5").style.backgroundColor="#009900";
	document.getElementById("bit3").style.backgroundColor="#009900";
	document.getElementById("on2").style.visibility="visible";
	document.getElementById("on4").style.visibility="visible";
	document.getElementById("on1").style.visibility="hidden";
	document.getElementById("on3").style.visibility="hidden";
	document.getElementById("on5").style.visibility="hidden";
	document.getElementById("cu").style.backgroundColor="#996600";
	document.getElementById("dc").style.backgroundColor="#996600";
	document.getElementById("dc").style.border="2px solid #996600";
	document.getElementById("bit4").style.backgroundColor="#FF0000";
	count=0;
	document.getElementById("accum").innerHTML=count;
}

function offReset()
{
	document.getElementById("on6").style.visibility="hidden";
	document.getElementById("bit5").style.backgroundColor="#ff0000";
}

function startCounter()
{
	count--;
	document.getElementById("accum").innerHTML=count;
	document.getElementById("cu").style.border="2px solid #FFFF00";
	document.getElementById("cu").style.backgroundColor="#FFFF00";
	document.getElementById("on1").style.visibility="visible";
	document.getElementById("on3").style.visibility="visible";
	document.getElementById("bit1").style.backgroundColor="#009900";
	document.getElementById("bit2").style.backgroundColor="#009900";
	if(count<=-10)
	{
		document.getElementById("dc").style.border="2px solid #FFFF00";
		document.getElementById("dc").style.backgroundColor="#FFFF00";
		document.getElementById("on2").style.visibility="hidden";
		document.getElementById("on4").style.visibility="hidden";
		document.getElementById("bit3").style.backgroundColor="#FF0000";
		document.getElementById("bit4").style.backgroundColor="#009900";
		document.getElementById("on5").style.visibility="visible";
	}
}

function stopCounter()
{
	document.getElementById("cu").style.borderColor="#996600";
	document.getElementById("cu").style.backgroundColor="#996600";
	
	document.getElementById("on1").style.visibility="hidden";
	document.getElementById("on3").style.visibility="hidden";
	document.getElementById("bit1").style.backgroundColor="#ff0000";
	document.getElementById("bit2").style.backgroundColor="#ff0000";
}