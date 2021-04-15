// JavaScript Document
    window.onload = function () {
        // content
        document.body.innerHTML = document.body.innerHTML.replace(/四川广播电视大学微信订阅号/g, '');
        document.body.innerHTML = document.body.innerHTML.replace(/扫一扫，欢迎关注/g, '电大小微');
        document.body.innerHTML = document.body.innerHTML.replace(/输入/g, '输出');
		document.body.innerHTML = document.body.innerHTML.replace(/附件【/g, '<i class="fas fa-download fa-lg fa-fw" style="color: #0E5EBE;"></i>附件【');

		var x = document.getElementsByClassName("vsbcontent_img");  
		x.img.style.width = "80%";
		
    }