var coeff = new Array();
coeff[15] = 0.45;
coeff[10] = 0.6;
coeff[5] = 0.75;
coeff[0] = 0.9;

var group_1 = new Array();
group_1[1] = 32500;
group_1[2] = 28250;
group_1[3] = 28250;
group_1[4] = 24000;
group_1[5] = 24000;
group_1[6] = 20000;
group_1[7] = 20000;
group_1[8] = 15000;
group_1[9] = 15000;
group_1[10] = 9000;
group_1[11] = 9000;
group_1[12] = 4000;
group_1[13] = 4000;

var group_2 = new Array();
group_2[1] = 42500;
group_2[2] = 33250;
group_2[3] = 33250;
group_2[4] = 29000;
group_2[5] = 29000;
group_2[6] = 23000;
group_2[7] = 23000;
group_2[8] = 17000;
group_2[9] = 17000;
group_2[10] = 11000;
group_2[11] = 11000;
group_2[12] = 5000;
group_2[13] = 5000;

var group_3 = new Array();
group_3[1] = 50000;
group_3[2] = 35000;
group_3[3] = 35000;
group_3[4] = 31000;
group_3[5] = 31000;
group_3[6] = 26000;
group_3[7] = 26000;
group_3[8] = 20000;
group_3[9] = 20000;
group_3[10] = 12500;
group_3[11] = 12500;
group_3[12] = 6000;
group_3[13] = 6000;

var group_4 = new Array();
group_4[1] = 57500;
group_4[2] = 43250;
group_4[3] = 43250;
group_4[4] = 39000;
group_4[5] = 39000;
group_4[6] = 29000;
group_4[7] = 29000;
group_4[8] = 22500;
group_4[9] = 22500;
group_4[10] = 15000;
group_4[11] = 15000;
group_4[12] = 7000;
group_4[13] = 7000;

var group_5 = new Array();
group_5[1] = 62500;
group_5[2] = 45000;
group_5[3] = 45000;
group_5[4] = 41000;
group_5[5] = 41000;
group_5[6] = 32000;
group_5[7] = 32000;
group_5[8] = 25000;
group_5[9] = 25000;
group_5[10] = 17500;
group_5[11] = 17500;
group_5[12] = 8000;
group_5[13] = 8000;

var group_6 = new Array();
group_6[1] = 67500;
group_6[2] = 55000;
group_6[3] = 55000;
group_6[4] = 45000;
group_6[5] = 45000;
group_6[6] = 35000;
group_6[7] = 35000;
group_6[8] = 27500;
group_6[9] = 27500;
group_6[10] = 20000;
group_6[11] = 20000;
group_6[12] = 10000;
group_6[13] = 10000;

var small = new Array();
small[1] = 1.4;
small[2] = 1.3;
small[3] = 1.2;
small[4] = 1.1;
small[5] = 1.0;
small[6] = 0.9;
small[7] = 0.8;
small[8] = 0.7;
small[9] = 0.6;
small[10] = 0.5;
small[11] = 0.4;
small[12] = 0.4;
small[13] = 6;

var big = new Array();
big[1] = 2.1;
big[2] = 2.0;
big[3] = 1.8;
big[4] = 1.7;
big[5] = 1.5;
big[6] = 1.4;
big[7] = 1.2;
big[8] = 1.1;
big[9] = 0.9;
big[10] = 0.8;
big[11] = 0.6;
big[12] = 0.6;
big[13] = 6;

var hybrids = new Array();
hybrids[1] = 0.5;
hybrids[2] = 0.5;
hybrids[3] = 0.5;
hybrids[4] = 0.5;
hybrids[5] = 0.6;
hybrids[6] = 0.6;
hybrids[7] = 0.6;
hybrids[8] = 0.6;
hybrids[9] = 0.6;
hybrids[10] = 1;
hybrids[11] = 4;
hybrids[12] = 4;
hybrids[13] = 6;

var calculator = new Vue({
	el: '#calculator',
	data: {
		price: '',
		new_price: '',
		cc: '1000',
		fuel: 'gas',
		freight: '2500',
		rate: '1123',
		calcPayment: '',
		rate_kgs: '69.7',
		custom: '',
		year: '12'
	},
	computed: {
			price_new: function(e){
				var new_price = this.price/this.rate;
				return Math.round(new_price);
			},
			custom_fee: function(e){
				var cf = 0;
				if(this.fuel == 'gas' && this.cc < 3001) { cf = small[this.year] * this.cc;}
				else if(this.fuel =='gas' && this.cc > 3000) { cf = big[this.year] * this.cc;}
				else if(this.fuel =='diesel' && this.cc < 2501) { cf = small[this.year] * this.cc;}
				else if(this.fuel =='diesel' && this.cc > 2500) { cf = big[this.year] * this.cc;}
				else if(this.fuel =='hybrid') { cf = hybrids[this.year] * this.cc;}
				else if(this.fuel =='electric') { cf = this.cc * 0; };
				return Math.round(cf);
			},
			transportation: function(e){
				return Math.round(this.freight);
			},
			unloading: function(e){
				var unl = 100;
				return Math.round(unl);
			},
			regfee: function(e){
				var reg = 0;
				if(this.cc <= 1000) { reg = group_1[this.year] / this.rate_kgs;}
				else if(this.cc > 1000 && this.cc <= 2000) { reg = group_2[this.year] / this.rate_kgs;}
				else if(this.cc > 2000 && this.cc <= 3000) { reg = group_3[this.year] / this.rate_kgs;}
				else if(this.cc > 3000 && this.cc <= 4000) { reg = group_4[this.year] / this.rate_kgs;}
				else if(this.cc > 4000 && this.cc <= 5000) { reg = group_5[this.year] / this.rate_kgs;}
				else if(this.cc > 5000) { reg = group_6[this.year] / this.rate_kgs;};
				return Math.round(reg);
			},
			taxfee: function(e){
				var tx = 0;
				if(this.year < 5){ tx = this.cc * coeff[0];}
				if(this.year >= 5 && this.year <=10){tx = this.cc * coeff[5];}
				if(this.year >10 && this.year <=15){tx = this.cc * coeff[10];}
				if(this.year >15){tx = this.cc * coeff[15];}
				return Math.round(tx / this.rate_kgs);
			},
			total: function(e){
				var tot = this.price_new + this.transportation + this.custom_fee + this.unloading + this.regfee + this.taxfee;
				return currencyFormat(tot);
			},
			
			numFormat: function(e){
				e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
	}
	
});


//https://blog.tompawlak.org/number-currency-formatting-javascript
function currencyFormat (num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}