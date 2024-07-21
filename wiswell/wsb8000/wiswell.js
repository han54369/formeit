/**
 * 무단 변경, 복제‧배포, 개작 등의 이용은 금지되며 비정상적으로 이용할 경우 저작권 침해로 민형사상 책임을 질 수 있음을 알려드립니다.
 */
const CN_FONT = "wiswell_wsb8000_font";
const CN_MODE = "wiswell_wsb8000_mode";
const CN_BREAD = "wiswell_wsb8000_bread";
const CN_RATIO = "wiswell_wsb8000_ratio";

$(document).ready(function() {
	$("input[name='wiswellFont'][value='" + getCookieFont() + "'").prop("checked", true);
	changeFont();
	$("#rememberMode").prop("checked", $.cookie(CN_MODE));
	$("#rememberRatio").prop("checked", $.cookie(CN_RATIO));

	drawModes();
});

function drawModes() {
	let html = new Array();
	for (let i = 0; i < wiswell.length; i++) {
		html.push(`<option value="${i}" ${i == $.cookie(CN_MODE) ? 'selected="selected"' : ''}>${wiswell[i].mode}</option>`);
	}
	$("select[name='modes']").html(html.join(""));

	drawBreads();
}

function drawBreads(isUserAction) {
	if (isUserAction) {
		$.removeCookie(CN_BREAD);
	}

	let selModesIdx = $("select[name='modes'] option:selected").val();
	let breads = wiswell[selModesIdx].breads;

	let html = new Array();
	for (let i = 0; i < breads.length; i++) {
		html.push(`<option value="${i}" ${i == $.cookie(CN_BREAD) ? 'selected="selected"' : ''}>`);
		if (breads[i].title) {
			html.push(`${breads[i].title}${breads[i].by ? " (by. " + breads[i].by + ")" : ""}`);
		}
		html.push(`</option>`);
	}
	$("select[name='breads']").html(html.join("")).prop("disabled", breads[0].title == undefined);

	drawRecipe(isUserAction);
}

function drawRecipe(isUserChange) {
	if (isUserChange) {
		setCookieMode();
	}

	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let breads = wiswell[selModesIdx].breads;
	let recipe = breads[selBreadsIdx].recipe;
	let totalWeight = 0;

	let html = new Array();
	if (recipe != undefined) {
		html.push(`
			<div class="dt recipeT vam padL">
				<div class="dtr recipeHeader">
					<div class="dtc ingredient">재료</div>
					<div class="dtc numerical">중량</div>
					<div class="dtc unit">단위</div>
				</div>`
		);

		Object.keys(recipe).map(key => {
			if (recipe[key].unit == "g" || recipe[key].unit == "ml") {
				totalWeight += recipe[key].max;
			}

			html.push(`
				<div class="dtr">
					<div class="dtc">${key}</div>
					<div class="dtc">`
			);

			if (recipe[key].max) {
				if (recipe[key].min != undefined) {
					html.push(`
						<div class="dt">
							<div class="dtc">
								<input type="number" value="${recipe[key].min}" onkeyup="updateNum(this)" onchange="updateNum(this)"
									data-idx1="${selModesIdx}" data-idx2="${selBreadsIdx}" data-idx3="${key}" data-idx4="min">
							</div>
							<div class="dtc"> ~ </div>
							<div class="dtc">`
					);
				}

				html.push(`		<input type="number" value="${recipe[key].max}" onkeyup="updateNum(this)" onchange="updateNum(this)"
									data-idx1="${selModesIdx}" data-idx2="${selBreadsIdx}" data-idx3="${key}" data-idx4="max">`
				);

				if (recipe[key].min != undefined) {
					html.push(`
							</div>
						</div>`
					);
				}
			}
			html.push(`
					</div>
					<div class="dtc">${recipe[key].unit ? recipe[key].unit : ""}</div>
				</div>`
			);
		});
		html.push(`
				<div class="dtr recipeUnder totalWeight">
					<div class="dtc">g + ml 합</div>
					<div class="dtc"><input type="number" id="totalWeight" disabled="disabled" value="${totalWeight}"/></div>
					<div class="dtc">g</div>
				</div>
				<div class="dtr recipeUnder">
					<div class="dtc totalComment">단위 '알,개,장,큰술'은 합에서 제외 (중량 X)</div>
					<div class="dtc"><input type="button" id="defaultBtn" class="w100" onclick="setDefaultRatio()" value="기본값으로 복구"></div>
					<div class="dtc"></div>
				</div>
			</div>`
		);
	}

	let recipeComment = breads[selBreadsIdx].recipeComment;
	if (recipeComment) {
		html.push(`
			<div class="dt padLR">`
		);
		for (let i = 0; i < recipeComment.length; i++) {
			html.push(`
				<div class="dtr">
					<div class="dtc">${recipeComment[i]}</div>
				</div>`
			);
		}
		html.push(`
			</div>`
		);
	}
	$("#recipeDiv").html(html.join(""));



	let step = breads[selBreadsIdx].step;
	html = new Array();
	if (step) {
		let txt = step.txt;
		let seq = step.seq;
		let tip = step.tip;
		if (txt) {
			html.push(`<div class="txt">`);
			for (let i = 0; i < txt.length; i++) {
				html.push(`<div>${txt[i]}</div>`);
			}
			html.push(`</div>`);
		}
		if (seq) {
			html.push(`<div class="seq dt">`);
			for (let i = 0; i < seq.length; i++) {
				html.push(`	<div class="dtr">
								<div class="dtc seqNo">${(i + 1)}. </div>
								<div class="dtc seqTxt">${seq[i]}</div>
							</div>`
				);
			}
			html.push(`</div>`);
		}
		if (tip) {
			html.push(`<div class="tip">`);
			for (let i = 0; i < tip.length; i++) {
				html.push(`<div>${tip[i]}</div>`);
			}
			html.push(`</div>`);
		}
	}
	$("#stepDiv").html(html.join(""));

	updateAllNum();
}





function getCookieFont(){
	return $.cookie(CN_FONT) ? $.cookie(CN_FONT) : "";
}
function setCookieFont(el) {
	el = $(el);
	if (el.val() == "" || el.val() == undefined) {
		$.removeCookie(CN_FONT);
	} else {
		$.cookie(CN_FONT, el.val(), getCookieOpt());
	}
	changeFont();
}
function changeFont() {
	let fontName = getCookieFont();
	if (fontName == "") {
		$("#wiswellContent").removeClass();
	} else {
		$("#wiswellContent").addClass(fontName);
	}
}



function setCookieMode() {
	if ($("#rememberMode").is(":checked")) {
		$.cookie(CN_MODE, $("select[name='modes'] option:selected").val(), getCookieOpt());
		$.cookie(CN_BREAD, $("select[name='breads'] option:selected").val(), getCookieOpt());
	} else {
		$.removeCookie(CN_MODE);
		$.removeCookie(CN_BREAD);
	}
}





function updateNum(el) {
	setCookieRatio(el);
	updateAllNum(el);
}
function updateAllNum(el) {
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	let recipe = wiswell[selModesIdx].breads[selBreadsIdx].recipe;
	let ratio = getRatio(el);
	let totalWeight = 0;
	Object.keys(recipe).map(key => {
		if (recipe[key].min != undefined) {
			$("input[data-idx3='" + key + "'][data-idx4='min']").val(Math.round(recipe[key].min * ratio));
		}
		let ratioWeight = Math.round(recipe[key].max * ratio); // .toLocaleString()
		$("input[data-idx3='" + key + "'][data-idx4='max']").val(ratioWeight);
		if (recipe[key].unit == "g" || recipe[key].unit == "ml") {
			totalWeight += ratioWeight;
		}
	});
	$("#totalWeight").val(totalWeight);
	$("#defaultBtn").prop("disabled", ratio == 1);
}
function getRatio(el) {
	let val;
	let selModesIdx = $("select[name='modes'] option:selected").val();
	let selBreadsIdx = $("select[name='breads'] option:selected").val();
	if ($("#rememberRatio").is(":checked")) {
		val = JSON.parse($.cookie(CN_RATIO))[selModesIdx + "-" + selBreadsIdx];
	} else {
		if(el == undefined) {
			val = 1;
		} else {
			let data = $(el).data();
			let r = wiswell[selModesIdx].breads[selBreadsIdx].recipe[data.idx3]
			let source = data.idx4 == "min" ? r.min : r.max;
			let change = Number($(el).val());
			val = change / source;
		}
	}
	return val == undefined ? 1 : val;
}
function setCookieRatio(el) {
	if ($("#rememberRatio").is(":checked")) {
		let selModesIdx = $("select[name='modes'] option:selected").val();
		let selBreadsIdx = $("select[name='breads'] option:selected").val();
		el = el == undefined ? $("input[type='number']").eq(0) : $(el);
		let source = wiswell[selModesIdx].breads[selBreadsIdx].recipe[el.data().idx3].max;
		let change = Number(el.val());
		let json = $.cookie(CN_RATIO) ? JSON.parse($.cookie(CN_RATIO)) : new Object();
		json[selModesIdx + "-" + selBreadsIdx] = change / source;
		$.cookie(CN_RATIO, JSON.stringify(json), getCookieOpt());
	} else {
		$.removeCookie(CN_RATIO);
	}
}

function setDefaultRatio() {
	if ($("#rememberRatio").is(":checked")) {
		let selModesIdx = $("select[name='modes'] option:selected").val();
		let selBreadsIdx = $("select[name='breads'] option:selected").val();
		let json = JSON.parse($.cookie(CN_RATIO));
		delete json[selModesIdx + "-" + selBreadsIdx];
		$.cookie(CN_RATIO, JSON.stringify(json), getCookieOpt());
	}
	updateAllNum();
}





function getCookieOpt() {
	return { expires: (365 * 100) }; // , path: '/'
}