/**
 * 무단 변경, 복제‧배포, 개작 등의 이용은 금지되며 비정상적으로 이용할 경우 저작권 침해로 민형사상 책임을 질 수 있음을 알려드립니다.
 */
$(document).ready(function(){
	$("#rememberMode").prop("checked", $.cookie("wsb8000_mode"));

	$("input[name='wiswellFont'][value='"+ $.cookie("wsb8000_font") +"'").prop("checked", true);
	changeFont($.cookie("wsb8000_font"));
	
	drawModes();
});

function getMode(num){
	let rememberMode = $.cookie("wsb8000_mode");
	if(rememberMode != undefined) {
		let t = rememberMode.split("-");
		let mode1 = t[0];
		let mode2 = t[1];
		
		if(num == 1){
			return mode1;
		} else if(num == 2) {
			return mode2;
		}
	}
}

function drawModes() {
	let html = new Array();
	for (let i=0; i<wiswell.length; i++) {
		html.push(`<option value="${i}"${i == getMode(1) ? 'selected="selected"' : ''}>${wiswell[i].mode}</option>`);
	}
	$("select[name='modes']").html(html.join(""));

	drawBreads();
}

function drawBreads(isUserChange) {
	if(isUserChange){
		$.removeCookie('wsb8000_mode');
	}
	
	let selModesIdx = $("select[name='modes'] option:selected").val();
	
	let html = new Array();
	let breads = wiswell[selModesIdx].breads;
	for (let i=0; i<breads.length; i++) {
		html.push(`<option value="${i}"${i == getMode(2) ? 'selected="selected"' : ''}>`);
		if(breads[i].title){
			html.push(`${breads[i].title}${breads[i].by ? " (by. "+ breads[i].by +")" : ""}`);
		}
		html.push(`</option>`);
	}
	$("select[name='breads']").html(html.join("")).prop("disabled", breads[0].title == undefined);

	drawRecipe();
}

function drawRecipe(isUserChange) {
	if(isUserChange){
		$.removeCookie('wsb8000_mode');
	}
	
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();

	let html = new Array();
	let stepHtml = new Array();
	let totalWeight = 0;
	let breads = wiswell[selModesIdx].breads;
	let recipe = breads[selBreadsIdx].recipe;
	let rememberRatio = $.cookie("wsb8000_ratio-"+ selModesIdx +"-"+ selBreadsIdx);
	if (recipe != undefined) {
		html.push(`	<div class="dt recipe">
						<div class="dtr header">
							<div class="dtc ingredient">재료</div>
							<div class="dtc numerical">중량</div>
							<div class="dtc unit">단위</div>
						</div>`);
		Object.keys(recipe).map(key => { // Object.keys(recipe).sort().map(key => 
			if(recipe[key].unit == "g" || recipe[key].unit == "ml") {
				totalWeight += recipe[key].max;
			}
			
			html.push(`	<div class="dtr">
							<div class="dtc ingredient">${key}</div>
							<div class="dtc numerical">`);
								if(recipe[key].unit){
									if(recipe[key].min != undefined){
										html.push(
											`<input type="number" value="${recipe[key].min}" onkeyup="getRatio(this)" onchange="getRatio(this)"
												style="width:66px"
												data-idx1="${selModesIdx}"
												data-idx2="${selBreadsIdx}"
												data-idx3="${key}"
												data-idx4="min"
											> ~ `);
									}
									
									html.push(
											`<input type="number" value="${recipe[key].max}" onkeyup="getRatio(this)" onchange="getRatio(this)"
												style="${recipe[key].min == undefined ? '' : 'width:65px'}"
												data-idx1="${selModesIdx}"
												data-idx2="${selBreadsIdx}"
												data-idx3="${key}"
												data-idx4="max"
											>`);
								}
			html.push(`		</div>
							<div class="dtc unit">${recipe[key].unit ? recipe[key].unit : ""}</div>
					  	</div>`);
		});
			html.push(`	<div class="dtr weight">
							<div class="dtc ingredient">합산 중량(g,ml)</div>
							<div class="dtc numerical"><input type="number" id="totalWeight" disabled="disabled" value="${totalWeight}"/></div>
							<div class="dtc unit">g</div>
						</div>
					</div>`);
		html.push(`	<div class="dt under">
						<div class="dtr">
							<div class="dtc weightComment">단위 '알, 개, 장, 큰술'은 중량 계산이 불가하여 합산 중량에서 제외함</div>
						</div>
					</div>`);
		html.push(`	<div class="dt under" style="padding-bottom:10px;">
						<div class="dtr">
							<div class="dtc">
								<label><input type="checkbox" onchange="rememberRatio()" id="rememberRatio"${rememberRatio ? ' checked="checked"' : '""'}> 현재 중량 저장</label>
							</div>
							<div class="dtc tar" style="padding-right:10px;">
								<input type="button" onclick="defaultRatio()" value="현재 중량 초기화"/><br/>
							</div>
						</div>
					</div>`);
	}
	
	let recipeComment = breads[selBreadsIdx].recipeComment;
	if(recipeComment) {
		html.push(`<div class="dt under" style="padding-bottom:10px;">`);
		for(let i=0; i<recipeComment.length; i++){
			html.push(`<div class="dtr"><div class="dtc">${recipeComment[i]}</div></div>`);
		}
		html.push(`</div>`);
	}
	
	let step = breads[selBreadsIdx].step;
	if(step){
		let txt = step.txt;
		let seq = step.seq;
		let tip = step.tip;
		if(txt){
			stepHtml.push(`<div class="txt">`);
			for(let i=0; i<txt.length; i++){
				stepHtml.push(`<div>${txt[i]}</div>`);
			}
			stepHtml.push(`</div>`);
		}
		if(seq){
			stepHtml.push(`<div class="seq dt">`);
			for(let i=0; i<seq.length; i++) {
				stepHtml.push(
					`<div class="dtr">
						<div class="dtc seqNo">${(i+1)}. </div>
						<div class="dtc seqTxt">${seq[i]}</div>
					</div>`);
			}
			stepHtml.push(`</div>`);
		}
		if(tip){
			stepHtml.push(`<div class="tip">`);
			for(let i=0; i<tip.length; i++){
				stepHtml.push(`<div>${tip[i]}</div>`);
			}
			stepHtml.push(`</div>`);
		}
	}
	
	$("#recipe").html(html.join(""));
	$("#step").html(stepHtml.join(""));

	rememberMode();
	if(rememberRatio){
		changeNum(rememberRatio);
	}
}

function getRatio(el){
	let data = $(el).data();
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let selRecipeIdx = data.idx3;
	let isMin = data.idx4 == "min";
		
	let source = wiswell[selModesIdx].breads[selBreadsIdx].recipe[selRecipeIdx].max;
	if(isMin){
		source = wiswell[selModesIdx].breads[selBreadsIdx].recipe[selRecipeIdx].min;
	}
	let change = Number($(el).val());
	let ratio = change / source;
	
	changeNum(ratio);
}

function changeNum(ratio){
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();

	let totalWeight = 0;
	let recipe = wiswell[selModesIdx].breads[selBreadsIdx].recipe;
	Object.keys(recipe).map(key => {
		if(recipe[key].min != undefined){
			$("input[data-idx3='"+ key +"'][data-idx4='min']").val(Math.round(recipe[key].min * ratio));
		}
		let ratioWeight = Math.round(recipe[key].max * ratio); // .toLocaleString()
		$("input[data-idx3='"+ key +"'][data-idx4='max']").val(ratioWeight);
		if(recipe[key].unit == "g" || recipe[key].unit == "ml") {
			totalWeight += ratioWeight;
		}
	});
	$("#totalWeight").val(totalWeight);
	
	rememberRatio();
}

function rememberMode(){
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let cookieName = "wsb8000_mode";

	if($("#rememberMode").is(":checked")){
		$.cookie(cookieName, selModesIdx +"-"+ selBreadsIdx, { expires: (365*100)}); // , path: '/'
	} else {
		$.removeCookie(cookieName);
	}
}

function rememberRatio(){
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let cookieName = "wsb8000_ratio-"+ selModesIdx +"-"+ selBreadsIdx;

	if($("#rememberRatio").is(":checked")){
		let el = $("input[type='number']").eq(0);
		let source = wiswell[selModesIdx].breads[selBreadsIdx].recipe[el.data().idx3].max;
		let change = Number(el.val());
		let ratio = change / source;
		
		$.cookie(cookieName, ratio, { expires: (365*100)}); // , path: '/'
	} else {
		$.removeCookie(cookieName);
	}
}

function defaultRatio(){
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let cookieName = "wsb8000_ratio-"+ selModesIdx +"-"+ selBreadsIdx;
	$.removeCookie(cookieName);
	
	drawRecipe();
}

function changeFont(val){
	let cookieName = "wsb8000_font";
	if(val == "maplestory"){
		$(".wiswellBody").addClass(val);
		$.cookie(cookieName, val, { expires: (365*100)});
	} else {
		$(".wiswellBody").removeClass("maplestory");
		$.removeCookie(cookieName);
	}
}