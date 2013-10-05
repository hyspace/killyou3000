	"use strict";
	var convert=function (id) {
		var reg = {};
		reg['s'] = /^✣近/i;
		reg['a'] = /^✣反/i;
		reg['e'] = /^✣例/i;
		reg['d'] = /^✣派/i;
		var obj = L3K[id];
		var str = obj.detail;
		var newObj = {};
		newObj.id = obj.id;
		newObj.label = obj.label;
		newObj.meanings = [];
		newObj.pronunciation = obj.phonetic;
		var strs = str.split('✣考法');
		strs.shift();
		var meanings = [];
		for(let i=0;i<strs.length;i++){
			let info = strs[i].split('\n');
			info.pop();
			meanings[i] = {};
			meanings[i].translation = info[0];
			for(let j=0;j<info.length;j++){
				for(let r in reg){
					if(reg[r].test(info[j])){
						meanings[i][r]=info[j].replace('✣','');
					}
				}
			}
		}
		newObj.meanings = meanings;
		return newObj;
	}

	var L3K1 = [];
	for(let i=0;i<L3K.length;i++){
		L3K1[i]=convert(i);
	}
	var a = JSON.stringify(L3K1);