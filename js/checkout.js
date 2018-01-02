//  增加地址
var address_id = 0;
function Address() {
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token=" + localStorage.token,
        "type": "GET",
        "dataType": "json",
        "success": function (str) {
            if (str.code === 0) {
                var html = "";
                for (i = 0; i < str.data.length; i++) {

                    var obj = str.data[i];

                    html += '<div  class="item-check" data-id=' + obj.address_id + '><div class="row"><div class="col-md-2 col-sm-2">收货人：'
                        + obj.address_name
                        + '</div><div class="col-md-2 col-sm-2">省份：' + obj.province
                        + '</div><div class="col-md-2 col-sm-2">市：' + obj.city
                        + '</div><div class="col-md-2 col-sm-2">区：' + obj.district
                        + '</div><div class="col-md-2 col-sm-2">街道：' + obj.address
                        + '</div><div class="col-md-2 col-sm-2">手机号：' + obj.mobile
                        + '</div></div><div class="remove">删除</div></div>'
                }
                $(".detail-address").html(html);

                //添加点击事件    
                $(".item-check").click(function (event) {

                    $(this).addClass("selected").siblings().removeClass("selected");
                    if (event.target) {
                        address_id = event.target.getAttribute("data-id");
                    }
                })

                $(".remove").click(function (event) {

                    var remmoveLi = this.parentNode;
                    $(".detail-address").eq(0).get(0).removeChild(remmoveLi);

                    //调用删除的ajax
                    removeAjax(remmoveLi);
                })
            }
        }
    })
}

Address();


$(".keep").click(function () {

    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token=" + localStorage.token + "&status=add",
        "type": "POST",
        "dataType": "json",
        "data": {
            "address_name": $("input[name='address_name']").val(),
            "province": $("input[name='province']").val(),
            "city": $("input[name='city']").val(),
            "district": $("input[name='district']").val(),
            "address": $("input[name='address']").val(),
            "mobile": $("input[name='mobile']").val(),
        },
        "success": function () {
            // window.location.href = 'checkout.html';
            Address();
        }

    })

})

//删除地址事件
function removeAjax(obj) {
    //获取地址的id
    console.log($(obj).attr("data-id"));
    var address_id = $(obj).attr("data-id");

    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_useraddress.php?token=" + localStorage.token + "&status=delete&address_id=" + address_id,
        "type": "GET",
        "dataType": "json",
        "success": function (response) {
            console.log(response);
        }
    });
}



// $(".add-add").click(function(){
//     $(".address-box").show();
// })
// $(".remove").click(function(){
//     $(".address-box").hide();
// })


var str = location.search.substr(1);
//用分割方法得到 = 号两边的内容
var sum = str.split("=");

$("#sum").html("￥" + sum[1] )

//下订单事件
$(".row2 .count").click(function () {
    //判断地址是否选中
    if (address_id === 0) {
        alert("请选择地址后在下单！");
        return;
    }

    //ajax调用
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_order.php?token=" + localStorage.token + "&status=add",
        "type": "POST",
        "dataType": "json",
        "data": {
            "address_id": address_id,
            "total_prices": sum[1]
        },
        "success": function (response) {
            console.log(response);
            if (response.code === 0) {
                alert("提交订单成功！");
                //跳转到查询订单页面
                location.href = "order.html";
            }
        }
    });

    //跳转到订单页
})











