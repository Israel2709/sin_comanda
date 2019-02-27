const loadContent = (content)=>{
	$(".content-block").addClass("d-none");
	$(content).removeClass("d-none")
	if (content == ".welcome"){
		setTimeout(function(){
			loadContent(".dashboard")
		},3000)
	}
}

const userLogin = ()=>{
	let userName = $("#user-name").val()
	let userPass = $("#user-password").val()
	console.log(userName);
	if(userName == ""){
		$("#user-name").addClass("is-invalid")
	}
	if(userPass == ""){
		$("#user-password").addClass("is-invalid")
	}
	else{
		loadContent(".welcome")
	}
}

const setTable = (sltTable)=>{
	if($(sltTable).hasClass("occupied")){
		return false
	} else {
		$(sltTable).addClass("active")
	}
}

const assignTable = ()=>{
	let userName = $("#client-name").val()
	let clientQty = $("#client-qty").val()
	console.log(userName);
	if(userName == ""){
		$("#client-name").addClass("is-invalid")
	}
	if(clientQty == ""){
		$("#client-qty").addClass("is-invalid")
	}
	if($(".table-icon.active").length == 0){
		alert("Debes asignar una mesa")
	}
	if(userName != "" && clientQty != "" && $(".table-icon.active").length != 0) {
		$("#codeModal").modal("show")
	}
}