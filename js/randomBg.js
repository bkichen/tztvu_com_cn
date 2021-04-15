    //<!CDATA[
        var bodyBgs = [];
        bodyBgs[0] = "images/bg_1.jpg";
        bodyBgs[1] = "images/bg_2.jpg";
        bodyBgs[2] = "images/bg_3.jpg";
        bodyBgs[3] = "images/bg_4.jpg";
        var randomBgIndex = Math.round( Math.random() * 3 );
    //输出随机的背景图
        document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat top center}</style>');
    //]]>

