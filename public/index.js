// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释

function calculatePrice() {
  var inputs = loadAllItems();
  var conner = document.getElementById('conner');
  var nodeDiv = document.createElement("div");
  var nodeSpan = document.createElement("div");
  nodeDiv.appendChild(nodeSpan);
  for(const item of inputs){
    newNode.innerHTML =item;
  }
  conner.appendChild(nodeDiv);

  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clear() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}
