/*jQuery(document).ready(($)=>{
	$('.grid').fslightbox()
});*/
function filterTable(agency, y_release, sales) {

	let table, tr, agency_t, i, y_release_t, sales_t;
	agency = agency.toLowerCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("TR");
  
	for (i = 1; i < tr.length; i++) {

	  agency_t = tr[i].getElementsByTagName("TD")[1];
	  y_release_t = tr[i].getElementsByTagName("TD")[3];
	  sales_t = tr[i].getElementsByTagName("TD")[5];

		if (agency_t.innerHTML.toLowerCase().indexOf(agency) > -1 && y_release_t.innerHTML.toLowerCase().indexOf(y_release) > -1 && Number(sales_t.innerHTML)>sales) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }
  }

  function showTable(tableId) {
	let table, tr, i;
	table = document.getElementById(tableId);
	tr = table.getElementsByTagName("TR");
	for (i = 1; i < tr.length; i++) {
	  tr[i].style.display = "";
	}
  }

  //let tag_but_s = document.getElementsByTagName('button');
  //alert(`${tag_but_s}`);
  //Убрать выбор из списка сделать потом 
  let table = document.getElementsByTagName('table');
  table = table[0].children[0];
	  let res = [];
	  for(let i = 1; i < table.children.length; i++){
		  let tmp = {}
		  tmp['Исполнитель'] = table.children[i].children[0].innerHTML;
		  tmp['Лэйбл'] = table.children[i].children[1].innerHTML;
		  tmp['Название песни'] = table.children[i].children[2].innerHTML;
		  tmp['Год релиза'] = table.children[i].children[3].innerHTML;
		  tmp['Позиция в чартах'] = table.children[i].children[4].innerHTML;
		  tmp['Продажи'] = table.children[i].children[5].innerHTML;
		  res.push(tmp);
	  }
	
	  let select = document.getElementsByTagName('select');

	  select[1].onclick = function(){
		let option = select[2].getElementsByTagName('option');
		for(let i = 0; i < option.length; i++){
			if(option[i].hidden == true){
				option[i].hidden = false;
			}
		}
	}

	select[2].onclick = function(){
		let option = select[2].getElementsByTagName('option');
		let l = select[1].value; 
		for(let i = 0; i < option.length; i++){
			if(option[i].innerHTML == select[2].children[l].innerHTML){
				option[i].hidden = true;
			}
		}
	}
let b = document.body.children[0].children[2].children[3].children[0].children[1].children[2];
	b.onclick = function(){
		//alert('heyay');
		let tag_select = document.getElementsByTagName('select');
		let l1 = tag_select[1].value;
		let l2 = tag_select[2].value;
		
		
			res.sort(compare = function(a, b){
			if (tag_select[1].children[l1].innerHTML != 'Год релиза' && tag_select[1].children[l1].innerHTML != 'Позиция в чартах' && 
			tag_select[1].children[l1].innerHTML != 'Продажи' &&
			 a[tag_select[1].children[l1].innerHTML] > b[tag_select[1].children[l1].innerHTML]) return 1;
			else if(tag_select[1].children[l1].innerHTML != 'Год релиза' && tag_select[1].children[l1].innerHTML != 'Позиция в чартах' && 
			tag_select[1].children[l1].innerHTML != 'Продажи' &&
			 a[tag_select[1].children[l1].innerHTML] < b[tag_select[1].children[l1].innerHTML]) return -1;
			else if((tag_select[1].children[l1].innerHTML == 'Год релиза' || tag_select[1].children[l1].innerHTML == 'Позиция в чартах'|| 
			tag_select[1].children[l1].innerHTML == 'Продажи') &&
			 +(a[tag_select[1].children[l1].innerHTML]) > +(b[tag_select[1].children[l1].innerHTML])) return 1;
			else if((tag_select[1].children[l1].innerHTML == 'Год релиза' || tag_select[1].children[l1].innerHTML == 'Позиция в чартах'|| 
			tag_select[1].children[l1].innerHTML == 'Продажи') &&
			 +(a[tag_select[1].children[l1].innerHTML]) < +(b[tag_select[1].children[l1].innerHTML])) return -1;
			else if(tag_select[2].children[l2].innerHTML != 'Год релиза' && tag_select[2].children[l2].innerHTML != 'Позиция в чартах' &&
			 tag_select[2].children[l2].innerHTML != "Продажи" && 
			 a[tag_select[2].children[l2].innerHTML] > b[tag_select[2].children[l2].innerHTML]) return 1;
			else if(tag_select[2].children[l2].innerHTML != 'Год релиза' && tag_select[2].children[l2].innerHTML != 'Позиция в чартах' &&
			tag_select[2].children[l2].innerHTML != "Продажи" && 
			a[tag_select[2].children[l2].innerHTML] < b[tag_select[2].children[l2].innerHTML]) return -1;
			else if((tag_select[2].children[l2].innerHTML == 'Год релиза' || tag_select[2].children[l2].innerHTML == 'Позиция в чартах'||
			 tag_select[2].children[l2].innerHTML != "Продажи" )&&
			  +(a[tag_select[2].children[l2].innerHTML]) > +(b[tag_select[2].children[l2].innerHTML])) return 1;
			else return -1;
			return 0;
		} );

		let tmp = Object.keys(res[0]);
    	for(let i = 1; i < table.children.length; i++){
        	for (let j = 0; j < 6; j++) {
            	table.children[i].children[j].innerHTML = res[i-1][tmp[j]];
        	}
    	}
    
    }
    
	let tag_select1 = document.getElementsByTagName('select');
	
			res.sort(compare = function(a, b){
			if ((tag_select1[1].children[3].innerHTML == 'Год релиза') &&
			 +(a[tag_select1[1].children[3].innerHTML]) > +(b[tag_select1[1].children[3].innerHTML])) return 1;
			else return -1;
		} );

		let tmp = Object.keys(res[0]);
    	for(let i = 1; i < table.children.length; i++){
        	for (let j = 0; j < 6; j++) {
            	table.children[i].children[j].innerHTML = res[i-1][tmp[j]];
        	}
    	}
    

	function getArrGraph(arrObject, fieldX, fieldY) {
		// сформируем список меток по оси OX (различные элементы поля fieldX)
		// группируем по полю fieldX
		let groupObj = d3.group(arrObject, d=>d[fieldX]);//take an element from array d
		arrGroup = []; // массив объектов для построения графика
		for(let entry of groupObj) {
		//выделяем минимальное и максимальное значения поля fieldY in only two elements as min and max
		//для очередной метки по оси ОХ
		let minMax = d3.extent(entry[1].map(d => d[fieldY]));
		let elementGroup = {};
	
		elementGroup.labelX = entry[0];
		elementGroup.valueMin = minMax[0];
		elementGroup.valueMax = minMax[1];
	
		arrGroup.push(elementGroup);
		}
		return arrGroup;
	}
	//alert(Object.keys(res[0]));
	//let sales = table.children[i].children[5].innerHTML;

	

	function drawGraph(data) {
        // формируем массив для построения диаграммы year or country
        let arrGraph = getArrGraph(res, data.ox.value, "Продажи")
        let marginX = 65;
        let marginY = 95;
        let height = 600;
        let width = 1000;
		
		/*res.sort(compare = function(a, b){
			if (a[form[0].children[0].children[1].innerHTML] > b[form[0].children[0].children[1].innerHTML]) return 1;
			else return -1;
		} );*/
		//res.sort((a, b) => a.data.ox.value > b.data.ox.value ? 1 : -1);
        let svg = d3.select("svg")
            .attr("height", height)
            .attr("width", width);
        // очищаем svg перед построением
        svg.selectAll("*").remove();

        // определяем минимальное и максимальное значение по оси OY
        let min = d3.min(arrGraph.map(d => d.valueMin)) * 0.95;
        let max = d3.max(arrGraph.map(d => d.valueMax)) * 1.05;
        let xAxisLen = width - 2 * marginX;
        let yAxisLen = height - 2 * marginY;

        // определяем шкалы для осей//сопоставляем оси с текстовыми значениями
        let scaleX = d3.scaleBand()
        .domain(arrGraph.map(function(d) {
        return d.labelX;
        })
        )
        .range([0, xAxisLen],1);
        let scaleY = d3.scaleLinear()
        .domain([min, max])
        .range([yAxisLen, 0]);
        // создаем оси
        let axisX = d3.axisBottom(scaleX); // горизонтальная
        let axisY = d3.axisLeft(scaleY);// вертикальная

        // отображаем ось OX, устанавливаем подписи оси ОX и угол их наклона
        svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .attr("class", "x-axis")
        .selectAll("text")
        .style("text-anchor", "end")
		.style("font-size", "15px")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function (d) {
        return "rotate(-45)";
        });
        // отображаем ось OY
        svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .attr("class", "y-axis")
        .call(axisY)
		.selectAll("text")
        .style("text-anchor", "end")
		.style("font-size", "11px");
        // создаем набор вертикальных линий для сетки
        d3.selectAll("g.x-axis g.tick")
        .append("line") // добавляем линию
        .classed("grid-line", true) // добавляем класс
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", - (yAxisLen));
        // создаем горизонтальные линии сетки
        d3.selectAll("g.y-axis g.tick")
        .append("line")
        .classed("grid-line", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", xAxisLen)
        .attr("y2", 0);
        
        //по умолчанию выбраны обе высоты и точечная диаграмма
	if (!(data.ox.value==="Исполнитель")&&!(data.ox.value==="Год релиза")){
		alert('Значения по оси OX отсутствуют!');
	}else{
        if ((data.sales_max.checked)&&(data.sales_min.checked)){
            if (!(data.ox.value==="Исполнитель")&&!(data.ox.value==="Год релиза")){alert('Значения по оси OX отсутствуют!');}
                svg.selectAll(".dot")//для максимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMax); })
                .attr("transform",
                `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#a21212")

                svg.selectAll(".dot")//для минимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMin); })
                .attr("transform",
                `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#646161")
            
        } else if ((data.sales_max.checked)&&!(data.sales_min.checked)){
            
                svg.selectAll(".dot")//для максимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMax); })
                .attr("transform",
                `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#a21212")
            
        } else if (!(data.sales_max.checked)&&(data.sales_min.checked)){
            
                svg.selectAll(".dot")//для минимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMin); })
                .attr("transform",
                `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#646161")
            
        } else if (!(data.sales_max.checked)&&!(data.sales_min.checked)){ 
            alert('Значения по оси OY отсутствуют!');
        } 
	}	         
    }


	
		
  /*function sortTable() {

	let table, tr, agency_t, i, y_release_t, sales_t;
	
	table = document.getElementById("table");
	tr = table.getElementsByTagName("TR");
  
	for (i = 1; i < tr.length; i++) {

	  agency_t = tr[i].getElementsByTagName("TD")[1];
	  y_release_t = tr[i].getElementsByTagName("TD")[3];
	  sales_t = tr[i].getElementsByTagName("TD")[5];

	}
  }
function sortTableAlphabetUp(data) {

	let table, rows, switching, i, x, y, shouldSwitch;

	table = document.getElementById("table");
	switching = true;
	data = Number(data);

	while (switching) {

	  switching = false;
	  rows = table.getElementsByTagName("TR");

	  for (i = 1; i < (rows.length - 1); i++) {

		shouldSwitch = false;
		x = rows[i].getElementsByTagName("TD")[data];
		y = rows[i + 1].getElementsByTagName("TD")[data];
		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
		  shouldSwitch = true;
		  break;
		}
	  }
	  if (shouldSwitch) {
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
	  }
	}
  }
  


  function commonSort(n) {
	
	  if (n == 0 || n == 1 || n == 2) {
		sortTableAlphabetUp(n);
	  }
	  if (n == 3 || n == 4 || n == 5) {
		let sortedRows = Array.from(table.rows)
		.slice(1)
		.sort((rowA,rowB) => {
		return rowA.cells[n].innerHTML - rowB.cells[n].innerHTML
		})
		table.tBodies[0].append(...sortedRows)
		sortTable(n);
	  }
	}  */