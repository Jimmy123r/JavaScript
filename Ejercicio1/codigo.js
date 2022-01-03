dinecofla 	= prompt(" cuanto dinero tiene cofla? ");
dineroberto = prompt(" cuanto dinero tiene roberto? ");
dinepedro 	= prompt(" cuanto dinero tiene pedro? ");

dinecofla = parseInt(dinecofla);

if (dinecofla >= 0.6 && dinecofla < 1){
	alert(" comprate el helado de agua");
    alert("tu vuelto es " + dinecofla - 0.6);
}
else if (dinecofla >= 1 && dinecofla < 1.6){
	alert(" comprate el helado de crema");
    alert("tu vuelto es " + (dinecofla - 1));
}
else if (dinecofla >= 1.6 && dinecofla < 1.7){
	alert("helado de marca heladix");
    alert("tu vuelto es " + (dinecofla - 1.6));
}
else if (dinecofla >= 1.7 && dinecofla < 1.8){
	alert("helado de marca heladivih");
	 alert("tu vuelto es " + (dinecofla - 1.7));
}
else if (dinecofla >= 1.8 && dinecofla < 2.9){
	alert("helado de marca helardo");
	 alert("tu vuelto es " + (dinecofla - 1.8));
}
else if (dinecofla >= 2.9){
	alert(" cofla ,helado de marca helado o pote 1/4Kg");
	 alert("tu vuelto es " + (dinecofla - 2.9))
}
else {
	alert(" no te alcanza pobre de mierda")
}
if (dineroberto >= 0.6 && dineroberto < 1){
	alert(" roberto, comprate el helado de agua");

}
else if (dineroberto >= 1 && dineroberto < 1.6){
	alert("roberto, comprate el helado de crema");

}
else if (dineroberto >= 1.6 && dineroberto < 1.7){
	alert("helado de marca heladix");

}
else if (dineroberto >= 1.7 && dineroberto < 1.8){
	alert("helado de marca heladivih");

}
else if (dineroberto >= 1.8 && dineroberto < 2.9){
	alert("helado de marca helardo");

}
else if (dineroberto >= 2.9){
	alert("helado de marca helado o pote 1/4Kg");

}
else {
	alert(" roberto ,no te alcanza pobre de mierda")
}
if (dinepedro >= 0.6 && dinepedro < 1){
	alert("  pedro ,comprate el helado de agua");

}
else if (dinepedro >= 1 && dinepedro < 1.6){
	alert(" comprate el helado de crema");

}
else if (dinepedro >= 1.6 && dinepedro < 1.7){
	alert(" pedro ,helado de marca heladix");

}
else if (dinepedro >= 1.7 && dinepedro < 1.8){
	alert(" pedro ,helado de marca heladivih");

}
else if (dinepedro >= 1.8 && dinepedro < 2.9){
	alert("helado de marca helardo");

}
else if (dinepedro >= 2.9){
	alert("pedro ,helado de marca helado o pote 1/4Kg");

}
else {
	alert(" no te alcanza pobre de mierda")
}
