

function changeImg(){
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src",chgUrl(src));
}
//ʱ���\uFFFD
//Ϊ��ʹÿ�����ͼƬ��һ�£������������{��棬������Ҫ����ʱ���
function chgUrl(url){
    var timestamp = (new Date()).valueOf();
    url = url.substring(0,23);
    if((url.indexOf("&")>=0)){
        url = url + "��tamp=" + timestamp;
    }else{
        url = url + "?timestamp=" + timestamp;
    }


    return url;
}

function isRightCode(){

    var code = $("#veryCode").attr("value");
    code = "c=" + code;
    $.ajax({
        type:"POST",
        url:"../../resultServlet",
        data:code,
        success:callback
    });
}
$("#veryCode").click(function(){
      $("#imgObj").hide();
      $("#change").hide();
      $("#veryCode").attr("value","");
   });
function callback(data){


    if(data!='right')
        alert(data);

    else
        $("#loginForm").submit();
$("#veryCode").attr("value","����");
}