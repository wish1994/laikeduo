
//  获取购物中心标题
//  并给列表页传递参数
$.get('http://h6.duchengjiu.top/shop/api_cat.php', function (str) {
    for (i = 0; i < 5; i++) {
        $(".shop-center").append("<li><span>"+ str["data"][i]["cat_name"]+"</span><a href='#Good"+ (i+1)+" '><div class='box'> <div class='border'>"+str["data"][i]["cat_name"]+"</div></div></a></li>")
        $(".goods_title a").eq(i).attr("href","list.html?cat_id="+str["data"][i]["cat_id"]);
        $(".goods_title .list p").eq(i).html(str["data"][i]["cat_name"]);
    }
})      

//  获取购物中心详细产品
//  第一排
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
    "type": "GET",
    "data": {
        "cat_id": 45,
        "pagesize": 10
    },
    "dataType": "json",
    "success": function (str) {
        for (var i = 0; i < 5; i++) {
            if (i != 0) {
                $(".group1 .goods3").append("<div class='pic'><a href=''><img src= " + str.data[i].goods_thumb + " alt=''></a><a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+ str["data"][i]["price"] +"</p><p class='title'>"+ str["data"][i]["goods_name"] +"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></div></a>");
            }
            else {
                $(".group1 .goods2 a img").attr("src", str.data[0].goods_thumb);
                $(".group1 .goods2").append("<a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+str["data"][i]["price"]+"</p><p class='title'>"+str["data"][i]["goods_name"]+"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></a>");
            }
        }
        for(i = 0; i < str.data.length; i++){
            $(".group1 .goods1 .type").append("<a href='detail.html?goods_id="+ str.data[i].goods_id+"'><li>"+str.data[i].goods_name+"</li></a>")
        }
        $(".group1 .bott img.ad1").attr("src",""+str.data[5]['goods_thumb']);
        $(".group1 .bott img.ad2").attr("src",""+str.data[6]['goods_thumb']);  

        $(".group1 .bott a.adlet").eq(0).attr("href","detail.html?goods_id="+str.data[5]['goods_id']);
        $(".group1 .bott a.adlet").eq(1).attr("href","detail.html?goods_id="+str.data[6]['goods_id']);        
    }
})

//  第二排
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
    "type": "GET",
    "data": {
        "cat_id": 55,
        "pagesize": 10
    },
    "dataType": "json",
    "success": function (str) {
        for (var i = 0; i < 5; i++) {
            if (i != 0) {
                $(".group2 .goods3").append("<div class='pic'><a href=''><img src= " + str.data[i].goods_thumb + " alt=''></a><a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+ str["data"][i]["price"] +"</p><p class='title'>"+ str["data"][i]["goods_name"] +"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></div></a>");
            }
            else {
                $(".group2 .goods2 a img").attr("src", str.data[0].goods_thumb);
                $(".group2 .goods2").append("<a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+str["data"][i]["price"]+"</p><p class='title'>"+str["data"][i]["goods_name"]+"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></a>");                
            }
        }
        for(i = 0; i < str.data.length; i++){
            $(".group2 .goods1 .type").append("<a href='detail.html?goods_id="+ str.data[i].goods_id+"'><li>"+str.data[i].goods_name+"</li></a>")
        }
        $(".group2 .bott img.ad1").attr("src",""+str.data[5]['goods_thumb']);
        $(".group2 .bott img.ad2").attr("src",""+str.data[6]['goods_thumb']);  

        $(".group2 .bott a.adlet").eq(0).attr("href","detail.html?goods_id="+str.data[5]['goods_id']);
        $(".group2 .bott a.adlet").eq(1).attr("href","detail.html?goods_id="+str.data[6]['goods_id']);        
    }
})

//  第三排
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
    "type": "GET",
    "data": {
        "cat_id": 62,
        "pagesize": 10
    },
    "dataType": "json",
    "success": function (str) {
        for (var i = 0; i < 5; i++) {
            if (i != 0) {
                $(".group3 .goods3").append("<div class='pic'><a href=''><img src= " + str.data[i].goods_thumb + " alt=''></a><a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+ str["data"][i]["price"] +"</p><p class='title'>"+ str["data"][i]["goods_name"] +"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></div></a>");
                
            }
            else {
                $(".group3 .goods2 a img").attr("src", str.data[0].goods_thumb);
                $(".group3 .goods2").append("<a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+str["data"][i]["price"]+"</p><p class='title'>"+str["data"][i]["goods_name"]+"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></a>");                
            }
        }
        for(i = 0; i < str.data.length; i++){
            $(".group3 .goods1 .type").append("<a href='detail.html?goods_id="+ str.data[i].goods_id+"'><li>"+str.data[i].goods_name+"</li></a>")
        }
        $(".group3 .bott img.ad1").attr("src",""+str.data[5]['goods_thumb']);
        $(".group3 .bott img.ad2").attr("src",""+str.data[6]['goods_thumb']);  

        $(".group3 .bott a.adlet").eq(0).attr("href","detail.html?goods_id="+str.data[5]['goods_id']);
        $(".group3 .bott a.adlet").eq(1).attr("href","detail.html?goods_id="+str.data[6]['goods_id']);     
    }
})

//  第四排
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
    "type": "GET",
    "data": {
        "cat_id": 69,
        "pagesize": 10
    },
    "dataType": "json",
    "success": function (str) {
        for (var i = 0; i < 5; i++) {
            if (i != 0) {
                $(".group4 .goods3").append("<div class='pic'><a href=''><img src= " + str.data[i].goods_thumb + " alt=''></a><a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+ str["data"][i]["price"] +"</p><p class='title'>"+ str["data"][i]["goods_name"] +"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></div></a>");
            }
            else {
                $(".group4 .goods2 a img").attr("src", str.data[0].goods_thumb);
                $(".group4 .goods2").append("<a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+str["data"][i]["price"]+"</p><p class='title'>"+str["data"][i]["goods_name"]+"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></a>");                
            }
        }
        for(i = 0; i < str.data.length; i++){
            $(".group4 .goods1 .type").append("<a href='detail.html?goods_id="+ str.data[i].goods_id+"'><li>"+str.data[i].goods_name+"</li></a>")
        }
        $(".group4 .bott img.ad1").attr("src",""+str.data[5]['goods_thumb']);
        $(".group4 .bott img.ad2").attr("src",""+str.data[6]['goods_thumb']);  

        $(".group4 .bott a.adlet").eq(0).attr("href","detail.html?goods_id="+str.data[5]['goods_id']);
        $(".group4 .bott a.adlet").eq(1).attr("href","detail.html?goods_id="+str.data[6]['goods_id']);  
    }
})

//  第五排
$.ajax({
    "url": 'http://h6.duchengjiu.top/shop/api_goods.php',
    "type": "GET",
    "data": {
        "cat_id": 77,
        "pagesize": 10
    },
    "dataType": "json",
    "success": function (str) {
        for (var i = 0; i < 5; i++) {
            if (i != 0) {
                $(".group5 .goods3").append("<div class='pic'><a href=''><img src= " + str.data[i].goods_thumb + " alt=''></a><a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+ str["data"][i]["price"] +"</p><p class='title'>"+ str["data"][i]["goods_name"] +"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></div></a>");                
            }
            else {
                $(".group5 .goods2 a img").attr("src", str.data[0].goods_thumb);
                $(".group5 .goods2").append("<a href='detail.html?goods_id="+ str.data[i].goods_id +"'><div class='text'><p class='price'>$"+str["data"][i]["price"]+"</p><p class='title'>"+str["data"][i]["goods_name"]+"</p><p class='content'>"+str["data"][i]["goods_desc"] +"</p></div></a>");                
                
            }
        }
        for(i = 0; i < str.data.length; i++){
            $(".group5 .goods1 .type").append("<a href='detail.html?goods_id="+ str.data[i].goods_id+"'><li>"+str.data[i].goods_name+"</li></a>")
        }
        $(".group5 .bott img.ad1").attr("src",""+str.data[5]['goods_thumb']);
        $(".group5 .bott img.ad2").attr("src",""+str.data[6]['goods_thumb']);  

        $(".group5 .bott a.adlet").eq(0).attr("href","detail.html?goods_id="+str.data[5]['goods_id']);
        $(".group5 .bott a.adlet").eq(1).attr("href","detail.html?goods_id="+str.data[6]['goods_id']);           
    }
})


