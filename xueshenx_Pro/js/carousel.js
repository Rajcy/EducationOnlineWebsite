// JavaScript Document

$(document).ready(function() {

	$.ajax({
		url:"http://api.xueshenx.com/pc/type/2",
		data:{"type_id":2}, //以键/值对的形式
		async : true,
		dataType : "json",
		success : function(data) {
			for(var i=0;i<data.data.length;i++){
				$('#listdata').append("<li><a href='javascript:;' class='inactive' data-id='"+ data.data[i].unit_number+"'>" +data.data[i].name+"</a></li>")
			}
		$('.inactive').click(function(){

				var $this = $(this);
				var typeId = $(this).attr('data-id');
       /*       if($(this).parents('li').siblings('li').children('ul').css('display')=='block')
				{
					$(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
					$(this).parents('li').siblings('li').children('ul').slideUp(100);
				}*/
	        $('.inactives').next().slideUp("slow");
            $('.inactives').addClass('inactive');
            $('.inactives').removeClass('inactives');

	              if($this.next().length <= 0){
					$.get('http://api.xueshenx.com/pc/lists/2/'+typeId, function(data) {

						var lists = data.data;
						var $li = $this.parent().append('<ul></ul>');
						var $ul = $li.find('ul');
						for (var i = 0; i < lists.length; i++) {

							$ul.append("<li><a class='listmenu' style=' border:1px solid #d3e9ce;' href='javascript:;' menuload='http://olm3zb2gw.bkt.clouddn.com"+lists[i].video_path+"'>" + lists[i].name+"</a></li>");

						}
					});
					$this.toggleClass('inactive');
					$this.toggleClass('inactives');
				}

            $this.next().slideDown("slow");
            $this.addClass('inactives');
            $this.removeClass('inactive');

			});
		}
	});

    $("#course_java").click(function () {
        $("#videoList li").removeClass("highlighted");
        $("#course_java").addClass("highlighted");
        $('#listdata li').remove();
        $('#teacher_icon').attr("src", "images/j_teacher.png");
        $('#teacher_name').html("高级讲师：李能子");
        $('#teacher_describe').html(" 广东开源软件促进协会首席专家，7+年IT开发经验；资深移动互联网技术大咖，精通java开源技术、SSM、SSH开发框架等多个领域；国内知名IT项目经理，曾任职移动、联通、摩托罗拉等多家国内IT名企，多年超大型项目管理和资深架构经验。");
        $('#course_describe').html(" Java是一门面向对象编程语言，不仅吸收了C++语言的 <br/>各种优点，还摒弃了C++里难以理解的多继承、指 <br/>针等概念，因此Java语言具有功能强大和简单易用 <br/>两个特征。Java语言作为静态面向对象编程语 <br/>言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。");
        $('#course_quest li').remove();
        $('#course_quest').append("<li>老师， 为什么 -0/3 结果是 0，而 -0.0/3.0 结果是 -0.0？<span>在Java里，整数是用补码表示的。在补码中0只有一种表示方法。另一方面，浮点数则是用 IEEE 标准表示的, 对于0有两种表示方法， 0 和 -0。</span> </li>");
        $('#course_quest').append("<li>老师， 为什么判断字符串相等不能使用 == ？ <span>这反映了基础类型（int, double, boolean）和引用类型（String）的区别。</span> </li>");
        $('#course_quest').append("<li>老师， 我可以用 % 除以一个小数吗？ <span>当然可以。比如，如果 angle 是一个非负数，那么 angle % (2 * Math.PI) 就会把 angle 转换到 0 到 2 π 之间。</span> </li>");

        $.ajax({
            url:"http://api.xueshenx.com/pc/type/2",
            data:{"type_id":2}, //以键/值对的形式
            async : true,
            dataType : "json",
            success : function(data) {
                for(var i=0;i<data.data.length;i++){
                    $('#listdata').append("<li><a href='javascript:;' class='inactive' data-id='"+ data.data[i].unit_number+"'>" +data.data[i].name+"</a></li>")
                }
                $('.inactive').click(function(){

                    var $this = $(this);
                    var typeId = $(this).attr('data-id');
                    /*				if($(this).parents('li').siblings('li').children('ul').css('display')=='block')
                     {
                     $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                     $(this).parents('li').siblings('li').children('ul').slideUp(100);
                     }*/
                    $('.inactives').next().slideUp("slow");
                    $('.inactives').addClass('inactive');
                    $('.inactives').removeClass('inactives');

                    if($this.next().length <= 0){
                        $.get('http://api.xueshenx.com/pc/lists/2/'+typeId, function(data) {

                            var lists = data.data;
                            var $li = $this.parent().append('<ul></ul>');
                            var $ul = $li.find('ul');
                            for (var i = 0; i < lists.length; i++) {

                                $ul.append("<li><a class='listmenu' style=' border:1px solid #d3e9ce; font-size:14px; ' href='javascript:;' menuload='http://olm3zb2gw.bkt.clouddn.com"+lists[i].video_path+"'>" + lists[i].name+"</a></li>");

                            }
                        });
                        $this.toggleClass('inactive');
                        $this.toggleClass('inactives');

                    }

                    $this.next().slideDown("slow");
                    $this.addClass('inactives');
                    $this.removeClass('inactive');

                });
            }
        });

    });

	$("#course_swift").click(function () {
        $("#videoList li").removeClass("highlighted");
        $("#course_swift").addClass("highlighted");
        $('#listdata li').remove();
        $('#teacher_icon').attr("src", "images/class_little9.jpg");
        $('#teacher_name').html("高级讲师：黄伟佳");
        $('#teacher_describe').html("国际手游培训师，深圳市伟佳教育有限公司创始人，毕业于波斯顿大学，哈佛大学进修学院研究生。发明家，程序员，设计师，画家，11年编程经验，掌握超过10门编程语言，熟悉各种常用作图，设计，开发软件和游戏引擎（Unity，Gamesalad，Unreal）。在硅谷期间，曾经培训过来自苹果公司，谷歌，EA，Epic，哈佛，斯坦福，MIT的学子和员工制做过手机游戏。全世界最早线下教学swift语言（iPhone最新编程语言）的人，在全中国举行过上100场演讲教学，开设过超过10种经典课程。");
        $('#course_describe').html(" 在本课程，你将从Swift的基础知识内容学起，之后就开始进入Swift的游戏开发实战，其中包括超级马里奥，飞扬的小鸟等当下热门游戏的开发，让你真正从Swift的入门到精通，以至于可以自己开发一款属于自己的游戏。");
        $('#course_quest li').remove();
        $('#course_quest').append("<li> 如果我是个刚入门的iOS开发者，选swift学习呢，还是选objective-c学习，还是两个都学？<span>这个可以根据两种情况来决定：<br/>1、我想进入公司担任iOS开发的职位    <br/>2、我只想做个独立开发者，自己开发app发布。<br/>第一种情况的话，你必须要学Objective-C，现在市面上绝大部分的app都是用oc开发的，从oc到Swift过渡是要很长一段时间的。当然swift最好也同时要学会。 <br/>第二种情况：你不考虑兼容性（iOS7以下版本，后面会提到）的情况下，完全可以只学习swift。不过objective-c第三方开源库非常的丰富，有时间，最好还是要学习了解oc。随着时间的推移，肯定是转向swift的。</span> </li>");
        $('#course_quest').append("<li> 我有多年的iOS  Objective-C的开发经验，对应swift，我还是新手吗？<span>在我看来，你不是新手了。因为你很熟悉Xcode和Cocoa/Cocoa Touch API 。熟悉和学习这些API和工具过程比学Swift花的时间更长。只要花点时间熟悉使用Swift语法，就能很快的在项目中使用swift了。</span> </li>");

        $.ajax({
            url:"http://api.xueshenx.com/pc/type/3",
            data:{"type_id":2}, //以键/值对的形式
            async : true,
            dataType : "json",
            success : function(data) {
                for(var i=0;i<data.data.length;i++){
                    $('#listdata').append("<li><a href='javascript:;' class='inactive' data-id='"+ data.data[i].unit_number+"'>" +data.data[i].name+"</a></li>")
                }
                $('.inactive').click(function(){

                    var $this = $(this);
                    var typeId = $(this).attr('data-id');
                    /*				if($(this).parents('li').siblings('li').children('ul').css('display')=='block')
                     {
                     $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                     $(this).parents('li').siblings('li').children('ul').slideUp(100);
                     }*/
                    $('.inactives').next().slideUp("slow");
                    $('.inactives').addClass('inactive');
                    $('.inactives').removeClass('inactives');

                    if($this.next().length <= 0){
                        $.get('http://api.xueshenx.com/pc/lists/3/'+typeId, function(data) {

                            var lists = data.data;
                            var $li = $this.parent().append('<ul></ul>');
                            var $ul = $li.find('ul');
                            for (var i = 0; i < lists.length; i++) {

                                $ul.append("<li><a class='listmenu' style=' border:1px solid #d3e9ce; ' href='javascript:;' menuload='http://olm3zb2gw.bkt.clouddn.com"+lists[i].video_path+"'>" + lists[i].name+"</a></li>");

                            }
                        });
                        $this.toggleClass('inactive');
                        $this.toggleClass('inactives');

                    }

                    $this.next().slideDown("slow");
                    $this.addClass('inactives');
                    $this.removeClass('inactive');

                });
            }
        });
    });


	$("#course_android").click(function () {
        $("#videoList li").removeClass("highlighted");
        $("#course_android").addClass("highlighted");
        $('#listdata li').remove();
        $('#teacher_icon').attr("src", "images/andriod4.png");
        $('#teacher_name').html("高级讲师：杨老师");
        $('#teacher_describe').html("该老师过于神秘");
        $('#course_describe').html("待更新中！");
        $('#course_quest li').remove();
        $('#course_quest').append("<li> 如果我是个刚入门的iOS开发者，选swift学习呢，还是选objective-c学习，还是两个都学？<span>这个可以根据两种情况来决定：<br/>1、我想进入公司担任iOS开发的职位    <br/>2、我只想做个独立开发者，自己开发app发布。<br/>第一种情况的话，你必须要学Objective-C，现在市面上绝大部分的app都是用oc开发的，从oc到Swift过渡是要很长一段时间的。当然swift最好也同时要学会。 <br/>第二种情况：你不考虑兼容性（iOS7以下版本，后面会提到）的情况下，完全可以只学习swift。不过objective-c第三方开源库非常的丰富，有时间，最好还是要学习了解oc。随着时间的推移，肯定是转向swift的。</span> </li>");
        $('#course_quest').append("<li> 我有多年的iOS  Objective-C的开发经验，对应swift，我还是新手吗？<span>在我看来，你不是新手了。因为你很熟悉Xcode和Cocoa/Cocoa Touch API 。熟悉和学习这些API和工具过程比学Swift花的时间更长。只要花点时间熟悉使用Swift语法，就能很快的在项目中使用swift了。</span> </li>");

        $.ajax({
            url:"http://api.xueshenx.com/pc/type/4",
            data:{"type_id":2}, //以键/值对的形式
            async : true,
            dataType : "json",
            success : function(data) {
                for(var i=0;i<data.data.length;i++){
                    $('#listdata').append("<li><a href='javascript:;' class='inactive' data-id='"+ data.data[i].unit_number+"'>" +data.data[i].name+"</a></li>")
                }
                $('.inactive').click(function(){

                    var $this = $(this);
                    var typeId = $(this).attr('data-id');
                    /*				if($(this).parents('li').siblings('li').children('ul').css('display')=='block')
                     {
                     $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                     $(this).parents('li').siblings('li').children('ul').slideUp(100);
                     }*/
                    $('.inactives').next().slideUp("slow");
                    $('.inactives').addClass('inactive');
                    $('.inactives').removeClass('inactives');

                    if($this.next().length <= 0){
                        $.get('http://api.xueshenx.com/pc/lists/4/'+typeId, function(data) {

                            var lists = data.data;
                            var $li = $this.parent().append('<ul></ul>');
                            var $ul = $li.find('ul');
                            for (var i = 0; i < lists.length; i++) {

                                $ul.append("<li><a class='listmenu' style=' border:1px solid #d3e9ce; ' href='javascript:;' menuload='http://olm3zb2gw.bkt.clouddn.com"+lists[i].video_path+"'>" + lists[i].name+"</a></li>");

                            }
                        });
                        $this.toggleClass('inactive');
                        $this.toggleClass('inactives');

                    }

                    $this.next().slideDown("slow");
                    $this.addClass('inactives');
                    $this.removeClass('inactive');

                });
            }
        });
    });

    $("#course_ui").click(function () {
        $("#videoList li").removeClass("highlighted");
        $("#course_ui").addClass("highlighted");
        $('#listdata li').remove();
        $('#teacher_icon').attr("src", "images/class_little5.jpg");
        $('#teacher_name').html("高级讲师：边力老师/黄伟佳老师");
        $('#teacher_describe').html("高级界面设计总监，毕业于广州大学艺术与设计学院，参与创作广州网易公司的大话系列游戏界面设计，并担任GUI设计总监，亲自设计和指导大型在线学习服务平台提分宝，在界面设计业内积累了丰富的经验。现就职于广州东方标准IT学院，负责UID课程教学经理与主UI设计师。");
        $('#course_describe').html("在本课程，你能选择黄伟佳老师的Sketch开发教程来学习用苹果电脑来实现效率最高的UI设计学习，也能选择边力老师的Flash从小白到精通的课程，后期还会介绍部分AI与PS的使用入门教程，让你实现真正的UI开发入门");
        $('#course_quest li').remove();
        $('#course_quest').append("<li> 什么是Sketch啊？<span>Sketch——矢量绘图应用<br/>Sketch是一款矢量绘图应用，而矢量绘图无疑是目前进行网页、图标以及界面设计的最好方式。<ul> <li>矢量文件，不失真；</li><li>Symbol（图形样式）和Style（文本样式）功能，有利于批量修改和复用；</li> <li>每个图层都支持多种填充模式（Fills可以添加/隐藏填充效果）；</li> <li>多种尺寸导出功能，可导出部件；</li> <li>自动保存所有历史记录，便于追溯修改。</li> </ul></span> </li>");
        $('#course_quest').append("<li> 为什么要学UI设计？<span>个人觉得，现在学习Ui设计还是不错的，前景不错，学完之后找工作不成问题，在现在对于UI设计师的需求量是比较大的，是一个不错的工作！源码时代Ui设计就还不错！！在当前时代的任何一个互联网产品都离不开UI设计</span> </li>");



        $.ajax({
            url:"http://api.xueshenx.com/pc/type/1",
            data:{"type_id":2}, //以键/值对的形式
            async : true,
            dataType : "json",
            success : function(data) {
                for(var i=0;i<data.data.length;i++){
                    $('#listdata').append("<li><a href='javascript:;' class='inactive' data-id='"+ data.data[i].unit_number+"'>" +data.data[i].name+"</a></li>")
                }
                $('.inactive').click(function(){

                    var $this = $(this);
                    var typeId = $(this).attr('data-id');
                    /*				if($(this).parents('li').siblings('li').children('ul').css('display')=='block')
                     {
                     $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                     $(this).parents('li').siblings('li').children('ul').slideUp(100);
                     }*/
                    $('.inactives').next().slideUp("slow");
                    $('.inactives').addClass('inactive');
                    $('.inactives').removeClass('inactives');

                    if($this.next().length <= 0){
                        $.get('http://api.xueshenx.com/pc/lists/1/'+typeId, function(data) {

                            var lists = data.data;
                            var $li = $this.parent().append('<ul></ul>');
                            var $ul = $li.find('ul');
                            for (var i = 0; i < lists.length; i++) {

                                $ul.append("<li><a class='listmenu' style=' border:1px solid #d3e9ce; ' href='javascript:;' menuload='http://olm3zb2gw.bkt.clouddn.com"+lists[i].video_path+"'>" + lists[i].name+"</a></li>");

                            }
                        });
                        $this.toggleClass('inactive');
                        $this.toggleClass('inactives');

                    }

                    $this.next().slideDown("slow");
                    $this.addClass('inactives');
                    $this.removeClass('inactive');

                });
            }
        });
    });
	//附加视频路径:.listmenu是每个菜单的类，menuload是路径
	$('body').on('click', '.listmenu', function(){// 4Hz
		var load = $(this).attr('menuload');
		//jPlayer: "#jquery_jplayer_1",
		console.log(load);
		console.log(JPLAYER);
		$("#jquery_jplayer_1").jPlayer("setMedia", { // Set the media
      m4v: load
    }).jPlayer("play");
	});
});






