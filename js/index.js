// 封装getElementById事件
var docGetId=function(id){
	return document.getElementById(id);
};
// 封装修改元素属性事件
var ChangeStyle=function(id){
	return docGetId(id).style;
}
function inputMouseout(){
		ChangeStyle("span-input").borderTopColor="#B8B8B8";
		ChangeStyle("span-input").borderLeftColor="#B8B8B8";
		ChangeStyle("span-input").borderBottomColor="#CCCCCC";
}
function inputMouseover(){
		ChangeStyle("span-input").borderTopColor="#999999";
		ChangeStyle("span-input").borderLeftColor="#999999";
		ChangeStyle("span-input").borderBottomColor="#B3B3B3";
}

// input框获取焦点函数
function inputFocus(){
	ChangeStyle("span-input").borderColor="#4791FF";
}
// input框失去焦点函数
function inputBlur(){
	ChangeStyle("span-input").borderTopColor="#B8B8B8";
	ChangeStyle("span-input").borderLeftColor="#B8B8B8";
	ChangeStyle("span-input").borderBottomColor="#CCCCCC";
}

