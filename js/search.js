
var url = location.search.substr(1);
var goodsName = url.split("=")[1];
goodsName =decodeURI(goodsName);

$('header #search').attr('placeholder',goodsName);
$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "dataType":"json",
    "data":{
        "search_text":goodsName,
        "pagesize":"40"
    },
    "success":function(str){

        var obj = str.data;

        for( i = 0; i < str.data.length; i++ ){
            var html =`
                <div class="no">
                <ul class="goods_box">
                    <a href="detail.html?goods_id=${obj[i].goods_id}" target="_blank" class='img'><img src='${obj[i].goods_thumb}'></a>
                    <a href="detail.html?goods_id=${obj[i].goods_id}" target="_blank" class='name'><li>${obj[i].goods_name}</li></a>
                    <a href="detail.html?goods_id=${obj[i].goods_id}" target="_blank" class='desc'><li>${obj[i].goods_desc}</li></a>
                    <li class='price'>￥${obj[i].price}</li>
                </ul>
                </div> 
            `
            $(".father .row").append(html);
        }   
    }
})

