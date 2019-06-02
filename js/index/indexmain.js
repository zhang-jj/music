var jh=new Array();
			jh[0]="url(images/index/1.jpg)";
			jh[1]="url(images/index/2.jpg)";
			jh[2]="url(images/index/3.jpg)";
			jh[3]="url(images/index/4.jpg)";
			jh[4]="url(images/index/5.jpg)";

			var kj=document.getElementById("kuangjia");					<!--获取框架div的标签，在下面进行更改背景-->
			var x=-1;													<!--定义变量x，建立索引-->
			var l=jh.length;											<!--获取集合中元素个数-->
			
			function lb()
			{
				x++;
				if (x==l)
				{
					x=0;
				}
				kj.style.backgroundImage=jh[x];
				window.setTimeout("lb()",2000);							<!--2s后再次播放集合中的图片-->
			}
			window.setTimeout("lb()",0);								<!--开始进行轮播-->

			function a(m)
			{
				x=x+m;
				if(x==-1)
				{
					kj.style.backgroundImage=jh[4];
				}
				else if(x<l)
				{
					kj.style.backgroundImage=jh[x];
				}
			}
			
			function b(m)
			{
				x=x+m;
				if(x==5)
				{
					kj.style.backgroundImage=jh[0];
				}
				else if(x<l)
				{
					kj.style.backgroundImage=jh[x];
				}
			}