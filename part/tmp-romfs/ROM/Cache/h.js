if(!String.prototype.replace){String.prototype.replace=function(o,n){return this.split(o).join(n)}}

d=document
rom='file://rom/'
htm=rom+'HTMLs/'
cch=rom+'Cache/'

rch='/ROMCache/'
thm=rch+'Themes/'
thi=thm+'Images/'
thb=thm+'Borders/'

th=0

function clientvers(){d.write('<form name=z2><input type=hidden name=v value=&wtv-appvers;></form>');return parseInt(d.z2.v.value)}
function go(u){location.href=u;d.open('text/url');d.write(u);d.close();}
function dial(){go('client:redialphone');go('client:logoshown')}
function nbsp(c){nout='';for(i=0;i<c;i++){nout+=' &nbsp;'}return nout}
function gTC(type,itm){
	//light
	bgclr='4c5a67'
	bgimg='Pattern.gif'
	shimg='ShadowLogo.gif'
	bbif=''
	gclr=''
	bclr='e7ce4a'
	tclr='cbcbcb'
	vclr='dddddd'
	lclr='dddddd'
	if(typeof itm=='undefined'){itm=th}
	switch(itm){
		case 1://dark
			bgclr='191919'
			tclr='42bd52'
			bbif=rom+'ButtonBorder2'
		break
		case 2://red
			bgclr='6e0005'
			tclr='f0f0f0'
			bclr='f0f0f0'
			bbif=thb+'ButtonBorder2'
		break
		case 3://basic
			bgclr='cccccc'
			tclr='000000'
			lclr='2a2aae'
			vclr='962ab5'
			bbif=''
		break
		case 4://tan
			bgclr='ece9d8'
			bgimg='xpbg.gif'
			tclr='000000'
			lclr='002244'
			vclr='002244'
			bclr='000000'
			shimg='ShadowLogo4.gif'
			bbif=thb+'ButtonBorder4'
		break
		case 5://green
			bgclr='004422'
			tclr='f0f0f0'
			bbif=thb+'ButtonBorder5'
		break
		case 6://blue
			bgclr='002244'
			tclr='f0f0f0'
			lclr='0080ff'
			vclr='0080ff'
			shimg=''
			gclr='004488'
			bbif=thb+'ButtonBorder6'
		break
		case 7://teal
			bgclr='008080'
			bgimg='9xbg.gif'
			tclr='f0f0f0'
			bclr='080808'
			bbif=thb+'ButtonBorder7'
		break
		case 8://purple
			bgclr='4a2766'
			lclr='aaaaaa'
			shimg='ShadowLogo8.gif'
			bbif=thb+'ButtonBorder8'
		break
		case 9://brown
			bgclr='442200'
			tclr='e7ce4a'
			bbif=thb+'ButtonBorder9'
		break
		case 10://white
			bgclr='c9c9c9'
			bgimg='Paper.jpg'
			tclr='020202'
			lclr='002244'
			vclr='002244'
			bclr='000000'
			bbif=thb+'ButtonBorder10'
		break
		case 11://halloween
			bgclr='080808'
			tclr='c06000'
			bbif=thb+'ButtonBorder11'
		break
	}switch(type){
		case 'bg':return bgclr
		case 'bgimg':return bgimg
		case 'shimg':return shimg
		case 'bbif':return bbif
		case 'g':return gclr
		case 'b':return bclr
		case 'l':return lclr
		case 't':return tclr
		case 'v':return vclr
	}
}

function headr(msg,fs,bgm,lp,nl,logo){
	th=gV(0)
	if(!logo){logo=rch+'WebTVLogoJewel.gif'}
	out=''
	switch(fs){
		case 'small':fsn=7
		break
		case 'large':fsn=4
		break
		default:fs='medium'
			fsn=5
		break
	}
	bgimg=gTC('bgimg')
	shimg=gTC('shimg')
	bgclr=gTC('bg')
	gclr=gTC('g')
	tclr=gTC('t')
	vclr=gTC('v')
	lclr=gTC('l')
	if(msg){out+='<title>'+msg+'</title>'}
	out+='<body background='+thi+bgimg+' text='+tclr+' bgcolor='+bgclr+' vlink='+vclr+' link='+lclr+' hspace=0 vspace=0 fontsize='+fs+'>'
	if(bgm){
		if(bgm.indexOf('.')<0){bgm += '.mid'}
		if(bgm.indexOf('/')<0){bgm = cch+'Music/' + bgm}
		out+='<embed name=ebgm src="'+bgm+'" autostart=true'
		if(!lp){out+='>'}
		else{
			if(lp==-1){lp=9999}
			out+=(' loop='+lp+'>')
		}
		d.write('</embed>')
	}
	if(!msg){msg=''}
	out+='<table cellspacing=0 cellpadding=0 abswidth=560 absheight=69'
	if(gclr){out+=' bgcolor='+gclr+' gradcolor='+bgclr}
	if(!shimg && bgimg=='Pattern.gif'){out+=' background='+thi+bgimg}
	out+='><tr><td>'
	out+=tab();
	out+='<spacer type=block width=11 height=11><br><spacer type=block width=10 height=1>'
	if(!nl){out+='<a href="javascript:goHTV()">'}
	out+='<img src='+logo+' width=90 height=69>'
	if(!nl){out+='</a>'}
	out+=tab(msg);
	out+='</td></tr></table>'
	return out;
}

function tab(msg){
	bgimg=gTC('bgimg')
	shimg=gTC('shimg')
	bgclr=gTC('bg')
	gclr=gTC('g')
	if(msg){
		msg=msg.replace(' ','&nbsp;')
		if(!shimg && bgimg=='Pattern.gif'){msg += nbsp(5)}
		tout='<td width=100% height=69 valign=top'
		if(shimg){tout+=' background='+thi+shimg+' novtilebg'}
		tout+='><td abswidth=460 height=69 valign=top'
		if(shimg){tout+=' background='+thi+shimg+' novtilebg'}
		tout+=' align=right><spacer height=32 type=block><strong><shadow><font color=cbcbcb size=+1>'+msg+' &nbsp; </font></shadow></strong>'
	}else{
		tout='<td width=100% height=69 valign=top align=left'
		if(shimg){tout+=' background='+thi+shimg}
		if(gclr){tout+=' bgcolor='+gclr+' gradcolor='+bgclr}
		tout+=' novtilebg>'
	}
	return tout
}
function ta(r,s,n,b,c,x,u){
	bgclr=gTC('bg')
	tclr=gTC('t')
	if(u){x+=' usestyle';d.write('<font color='+tclr+'>')}
	d.write('<textarea rows='+r+' size='+s+' id='+n+' name='+n+' border='+b+' text='+tclr+' bgcolor='+bgclr+' '+x+'>'+c+'</textarea>');
	if(u){d.write('</font>')}
}
function as(bg,h,w,g,b,lc,rc,lo,ro,s){
	if(s){
		if(!lc){lc=gTC('t')}
		if(!rc){rc=gTC('bg')}
	}else{
		if(!lc){lc=gTC('bg')}
		if(!rc){rc=gTC('t')}
	}
	if(th==1){bgclr='333333'}
	if(!bg){bg='191919'}
	if(!h){h=32}
	if(!w){w=320}
	if(!g){g=0}
	if(!lo){lo=0}
	if(!ro){ro=0}
	if(!b){b=1}
	d.write('<audioscope bgcolor='+bg+' height='+h+' width='+w+' gain='+g+' leftcolor='+tclr+' rightcolor='+bgclr+' leftoffset='+lo+' rightoffset='+ro+' border='+b+'>')
}
function butt(v,n,w,t,x){
	if(th>0&&th!=4&&th!=7&&th!=10){sh=true}
	bclr=gTC('b')
	bbif=gTC('bbif')
	if(sh){d.write('<shadow>')}
	d.write('<font color='+bclr+'>')
	if(!t)t='submit'
	d.write('<input type='+t+' value="'+v+'"')
	if(n)d.write(' name='+n)
	if(w)d.write(' width='+w)
	if(x)d.write(' '+x)
	if(bbif){d.write(' usestyle borderimage='+bbif+'.bif')}
	d.write('></font>')
	if(sh){d.write('</shadow>')}
}
function csa(m,i,b1t,b1a,b2t,b2a) {
	u='client:showalert?message='+escape(m);
	if(i)u+='&image='+escape(i);
	if(b1t)u+='&buttonlabel1='+escape(b1t);
	if(b1t&&!b1a){b1a='client:donothing'}
	if(b1a)u+='&buttonaction1='+escape(b1a);
	if(b2t)u+='&buttonlabel2='+escape(b2t);
	if(b2t&&!b2a){b2a='client:donothing'}
	if(b2a)u+='&buttonaction2='+escape(b2a);
	return u;
}

function redir(){
	r=history.previous
	if(r==htm+'Themes.html'||r==htm+'PhoneCallWaitThresh.html'||r==htm+'BGM.html'||r==htm+'NVRAM.html'||r.indexOf('wtv-')==0){go(r)}
	if(r==htm+'HackTV.html'){go(htm+'BGM.html')}
}

function goHTV(){go('client:gotoadvancedsetup')}
function gsa(m,i,b1t,b1a,b2t,b2a){go(csa(m,i,b1t,b1a,b2t,b2a))}
function head(msg,fs,bgm,lp,nl){d.write(headr(msg,fs,bgm,lp,nl))}
function dhh(tit){if(tit==1){head('Partition Map','','','',true)}}
function vh(){d.write(headr('VFat Hax'))}