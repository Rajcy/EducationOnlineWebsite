function play(v)
{
	video_index = v;
	getPlayList(v);
	getPlayer(videos[v].url);	
}

function getPlayList(step)
{
    for(var i=0; i<count; i++)
    {
        document.getElementById('current_' + i).className = 'plist';
        if (step == i)
        {
            document.getElementById('current_' + i).className = 'current';
        }
    }
	document.getElementById('playing').innerHTML = videos[step].title;
	document.getElementById('descript').innerHTML = videos[step].des;
}

function getPlayer(v)
{
	var swf = v +'&auto=1&r='+ Math.random(); 
	var id = 'vplayer';
	var width = '100%';
	var height = 525;
	var JcScpFile2 = 'CuSunV3Set.php';

	var _html = '';
		_html += '<object id="'+id+'" name="'+id+'" width="'+width+'" height="'+height+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://olm3zb2gw.bkt.clouddn.com/java/1/1/java-1-1-1.mp4">';
		_html += '<param name="movie" value="'+swf+'"/>';
		_html += '<param name="allowFullScreen" value="true" />';
		_html += '<param name="allowScriptAccess" value="always" />';
		_html += '<param name="salign" value="lt"/>';
		_html += '<param name="quality" value="high"/>';
		_html += '<param name="FlashVars" value="&JcScpFile='+JcScpFile2+'"/>';
		_html += '<embed src="'+swf+'" flashvars="&JcScpFile='+JcScpFile2+'" quality="high" scale="noscale" width="'+width+'" height="'+height+'" id="'+id+'" name="'+id+'" salign="LT"  allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://olm3zb2gw.bkt.clouddn.com/java/1/1/java-1-1-1.mp4"/>'+'</object>';
		document.getElementById('CuPlayer').innerHTML = _html;
}

play(0);