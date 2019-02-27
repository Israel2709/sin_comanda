const showOptions = (selectedDd) => {
    if (!$(selectedDd).hasClass("open")) {
        $(selectedDd).addClass("open").find(".custom-options").slideDown("slow")
    } else {
        $(selectedDd).removeClass("open").find(".custom-options").slideUp("slow")
    }
}

const selectOption = (selectedOption) => {
	console.log(selectedOption)
	let selectedText = $(selectedOption).text();
	$(selectedOption).closest(".custom-dd-wrapper").find(".selected-option").text(selectedText);
}