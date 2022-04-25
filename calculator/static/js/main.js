window.onload = function() {
	var countArr = [];
	var interfaceBtn = document.getElementsByClassName("btn");
	var interfaceTxt = document.getElementsByClassName("txt")[0];
	var clearBtn = document.getElementsByClassName("clearBtn");
	for (var i = 0; i < clearBtn.length; i++) {
		clearBtn[i].onclick = function() {
			// AC
			if (this.value == "AC") {
				countArr = [];
				interfaceTxt.value = "";
			}
			// DEL
			else {
				interfaceTxt.value = interfaceTxt.value.substr(0, interfaceTxt.value.length - 1);
			}
		}
	}
	for (var i = 0; i < interfaceBtn.length; i++) {
		interfaceBtn[i].onclick = function() {
			// .
			if ((interfaceTxt.value == "" && this.value == ".") || (interfaceTxt.value == "0" && this.value == ".")) {
				interfaceTxt.value = "0.";
			} else {
				if (!isNaN(this.value) || this.value == ".") {
					if (interfaceTxt.value.indexOf(".") != -1) {
						if (this.value != ".") {
							interfaceTxt.value += this.value;
						}
					} else {
						if (interfaceTxt.value == "0") {
							interfaceTxt.value = this.value;
						} else {
							interfaceTxt.value += this.value;
						}
					}

				} else {
					// +-*/
					if (this.value != "=") {
						if (this.value == "×") {
							var arrEnd = Number(countArr[countArr.length - 1]);
							if (isNaN(arrEnd)) {
								countArr.pop();
							}
							countArr[countArr.length] = interfaceTxt.value;
							countArr[countArr.length] = "*";
							interfaceTxt.value = "";
						} else if (this.value == "÷") {
							var arrEnd = Number(countArr[countArr.length - 1]);
							if (isNaN(arrEnd)) {
								countArr.pop();
							}
							countArr[countArr.length] = interfaceTxt.value;
							countArr[countArr.length] = "/";
							interfaceTxt.value = "";
						} else {
							var arrEnd = Number(countArr[countArr.length - 1]);
							if (isNaN(arrEnd)) {
								countArr.pop();
							}
							countArr[countArr.length] = interfaceTxt.value;
							countArr[countArr.length] = this.value;
							interfaceTxt.value = "";
						}
					}
					// =
					else {
						countArr[countArr.length] = interfaceTxt.value;
						console.log(countArr)
						console.log(countArr.join(""))
						var arrEnd = countArr[countArr.length - 1];
						if (arrEnd == "") {
							while (arrEnd == "+" || arrEnd == "-" || arrEnd == "*" || arrEnd == "/" || arrEnd == "") {
								countArr.pop();
								var arrEnd = countArr[countArr.length - 1];
							}
							if (countArr != "") {
								interfaceTxt.value = eval(countArr.join(""));
							} else {
								interfaceTxt.value == "";
							}
							countArr = [];
						} else {
							var arrResult = eval(countArr.join(""));
							var strResult = parseFloat(arrResult).toPrecision(12);
							var result = parseFloat(strResult);
							interfaceTxt.value = result;
							countArr = [];
						}

					}
				}
			}
		}
	}
}