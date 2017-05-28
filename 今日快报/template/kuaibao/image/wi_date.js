	var date = new Date();
    var weekDay = ["天", "一", "二", "三", "四", "五", "六"];
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var week = weekDay[date.getDay()];
	var str ="今天是"+year+"年"+month+"月"+day+"日  星期"+week;
	document.getElementById("dtime").innerHTML = str;
	


