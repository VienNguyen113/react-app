'use strict';var Zf=function(a){this.CL="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};Zf.prototype.j4=function(a,b){var c=0,e=0,f=!1;a=Ke(a,b).split(Oe);for(b=0;b<a.length;b++){var h=a[b];Me.test(Ke(h,void 0))?(c++,e++):Ne.test(h)?f=!0:Le.test(Ke(h,void 0))?e++:Pe.test(h)&&(f=!0)}return 0==e?f?1:0:.4<c/e?-1:1};Zf.prototype.B3=function(a,b){return this.Q$(this.j4(a,b))};Zf.prototype.Q$=function(a){return-1==(0==a?this.CL:a)?"rtl":"ltr"};
Zf.prototype.mark=function(){switch(this.CL){case 1:return"\u200e";case -1:return"\u200f";default:return""}};if("undefined"!=typeof angular){var $f=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&$f.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var b=this;this.UA=this.Sq=null;a.dirForText=function(a){b.Sq||(b.Sq=chrome.i18n.getMessage("@@bidi_dir")||"ltr");b.UA||(b.UA=new Zf("rtl"==b.Sq));return b.UA.B3(a||"")}}],compile:function(a,b){b=b.key;var c=null,e=document.createElement("amr");
b&&!b.match(/^\d+$/)&&(b=chrome.i18n.getMessage(b),null==b&&e.setAttribute("id","missing"));if(b){var f=chrome.i18n.getMessage(b+"_ph"),c=[];if(null!=f)for(c=f.split("\ue000"),f=0;f<c.length;++f)c[f]=c[f].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');c=chrome.i18n.getMessage(b,c)}else e.setAttribute("r","nokey");c?e.innerHTML=c:(e.setAttribute("tl","false"),e.innerHTML=a.html());a.replaceWith(e)}}})};var ag=/^[\w+/]+[=]{0,2}$/;var bg=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var e=c||g,f=e.document,h;a:{if((h=(e||g).document.querySelector("script[nonce]"))&&(h=h.nonce||h.getAttribute("nonce"))&&ag.test(h))break a;h=void 0}h&&(a.nonce=h);if("help"==a.flow){var k=ma("document.location.href",e);!a.helpCenterContext&&k&&(a.helpCenterContext=k.substring(0,1200));k=!0;if(b&&JSON&&JSON.stringify){var n=JSON.stringify(b);(k=1200>=n.length)&&(a.psdJson=n)}k||(b={invalidPsd:!0})}b=[a,b,c];e.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(k=e.GOOGLE_FEEDBACK_START)k.apply(e,b);else{var e=c+"/load.js?",q;for(q in a)b=a[q],null!=b&&!ua(b)&&(e+=encodeURIComponent(q)+"="+encodeURIComponent(b)+"&");a=f.createElement("script");h&&a.setAttribute("nonce",h);a.src=e;f.body.appendChild(a)}};m("userfeedback.api.startFeedback",bg,void 0);var cg=function(){this.dM=this.UK=this.receiverVersion=this.modelName=this.SS=this.Hv=this.jx=""};var dg=chrome.i18n.getMessage("4163185390680253103"),eg=chrome.i18n.getMessage("492097680647953484"),fg=chrome.i18n.getMessage("2575016469622936324"),gg=chrome.i18n.getMessage("128276876460319075"),hg=chrome.i18n.getMessage("3326722026796849289"),ig=chrome.i18n.getMessage("1018984561488520517"),jg=chrome.i18n.getMessage("8205999658352447129"),kg=chrome.i18n.getMessage("5723583529370342957"),lg=chrome.i18n.getMessage("1550904064710828958"),mg=chrome.i18n.getMessage("5014364904504073524"),og=chrome.i18n.getMessage("2194670894476780934"),
pg=chrome.i18n.getMessage("6614468912728530636"),qg=chrome.i18n.getMessage("5910595154486533449"),rg=chrome.i18n.getMessage("5363086287710390513"),sg=chrome.i18n.getMessage("244647017322945605"),tg=chrome.i18n.getMessage("5375576275991472719"),ug=chrome.i18n.getMessage("4592127349908255218"),vg=chrome.i18n.getMessage("843316808366399491"),wg=chrome.i18n.getMessage("5699813974548050528"),xg=chrome.i18n.getMessage("8515148417333877999"),yg=chrome.i18n.getMessage("1636686747687494376"),zg=chrome.i18n.getMessage("4148300086676792937"),
Ag=chrome.i18n.getMessage("3219866268410307919"),Bg=chrome.i18n.getMessage("9211708838274008657"),Cg=chrome.i18n.getMessage("8706273405040403641"),Dg=chrome.i18n.getMessage("4756056595565370923"),Eg=chrome.i18n.getMessage("7876724262035435114"),Fg=chrome.i18n.getMessage("5485620192329479690"),Gg=chrome.i18n.getMessage("6963873398546068901"),Hg=chrome.i18n.getMessage("3567591856726172993"),Ig=chrome.i18n.getMessage("3239956785410157548");var Jg=function(a,b){var c=this;this.fM=b;this.G=a;this.G.top=a;this.EM=[];this.qJ=!1;this.uf=new cg;this.sla();this.lla();this.mla();this.nla();this.pla();this.v4=Ra();this.G.userEmail="";chrome.identity.getProfileUserInfo(function(a){c.G.userEmail=a.email;c.lt()});this.G.yourAnswerText=Ig;this.G.language=chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.G.requestLogsInProgress=!1};d=Jg.prototype;
d.lla=function(){this.EM=[{value:"Bug",desc:dg},{value:"FeatureRequest",desc:eg},{value:"MirroringQuality",desc:fg},{value:"Discovery",desc:gg},{value:"Other",desc:hg}];this.G.feedbackTypes=this.EM};d.xI=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(new Kg(c,arguments[c]));b.push(new Kg(0,arguments[0]));return b};
d.sla=function(){this.G.videoSmoothnessRatings=this.xI(og,ig,jg,kg,lg,mg);this.G.videoQualityRatings=this.xI(og,pg,qg,rg,sg,tg);this.G.audioQualityRatings=this.xI(og,ug,vg,wg,xg,yg)};d.mla=function(){this.G.includeFineLogs=!0;this.G.feedbackType="Bug";this.G.sendFeedback=this.iha.bind(this);this.G.cancel=this.Q1.bind(this);this.G.attachLogsClick=this.xK.bind(this);this.G.viewLogs=this.Bna.bind(this)};
d.nla=function(){this.G.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.g2.bind(this));this.G.sufficientFeedback=!1};d.pla=function(){this.G.$watch("attachLogs",this.xK.bind(this));this.G.attachLogs=!0};d.Q1=function(){this.G.feedbackDescription&&!confirm(zg)||window.close()};
d.g2=function(){var a=this.G.feedbackType;this.G.sufficientFeedback="MirroringQuality"==a?this.G.videoSmoothness||this.G.videoQuality||this.G.audioQuality||this.G.comments:"Discovery"==a?this.G.visibleInSetup||this.G.comments:!!this.G.feedbackDescription};
d.iha=function(){if(this.G.sufficientFeedback){var a=this.G.feedbackType,b="";"MirroringQuality"==a?(this.G.videoSmoothness&&(b+="\nVideo Smoothness: "+this.G.videoSmoothness),this.G.videoQuality&&(b+="\nVideo Quality: "+this.G.videoQuality),this.G.audioQuality&&(b+="\nAudio: "+this.G.audioQuality),this.G.projectedContentUrl&&(b+="\nProjected Content/URL: "+this.G.projectedContentUrl),this.G.comments&&(b+="\nComments: "+this.G.comments)):"Discovery"==a?(this.G.visibleInSetup&&(b+="\nChromecast Visible in Setup: "+
this.G.visibleInSetup),this.G.hasNetworkSoftware&&(b+="\nUsing VPN/proxy/firewall/NAS Software: "+this.G.hasNetworkSoftware),this.G.networkDescription&&(b+="\nNetwork Description: "+this.G.networkDescription),this.G.comments&&(b+="\nComments: "+this.G.comments)):b=this.G.feedbackDescription;this.hha("Type: "+a+"\n\n"+b)}};
d.hha=function(a){this.G.sendDialogText=Ag;this.G.okButton=Hg;this.G.feedbackSent=!1;this.fM.show({locals:{nxa:this.G.feedbackSent,vDa:this.G.sendDialogText,mba:this.G.okButton},scope:this.G,preserveScope:!0,bindToController:!0,template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',
controller:this.lA});this.pV(a,Date.now())};d.pV=function(a,b){var c=Date.now();!this.G.requestLogsInProgress||5E3<c-b?this.Q3(a):setTimeout(this.pV.bind(this),1E3,a,b)};
d.Q3=function(a){var b=this,c=0,e=function(a,c,e){e?a(!0):(b.G.sendDialogText=Dg,b.lt(),c(Error("Failed to send")))},f=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";(new Ge(function(){c++;return new Promise(function(c,k){var h=b.G.userEmail,q=b.uf;c=e.bind(null,c,k);k=chrome.runtime.getManifest();bg({productId:85561,bucket:f,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:k.default_locale,enableAnonymousFeedback:!h,report:{description:a},callback:c},
{version:k.version,description:k.description,user_email:h||"NA",logs:q.jx||"NA",external_logs:q.Hv||"NA",device_model:q.modelName||"NA",receiver_version:q.receiverVersion||"NA",dash_report_url:q.SS||"NA",cast_device_counts:q.UK,dial_device_counts:q.dM})})},1E4,4)).yy(2).start().then(function(){b.G.sendDialogText=Cg;b.G.feedbackSent=!0;b.lt()},function(){b.G.sendDialogText=Bg;b.G.feedbackSent=!0;b.lt()})};
d.xK=function(){var a=this;this.uf=new cg;this.G.attachLogs&&(this.G.requestLogsInProgress=!0,chrome.runtime.sendMessage(new Tf(this.v4,"retrieve_log_data"),function(b){a.G.requestLogsInProgress=!1;a.uf.jx=b.logs||"no extension";b.castStreamingLogs&&(a.uf.SS=b.castStreamingLogs);b.castDeviceCounts&&(a.uf.UK=b.castDeviceCounts);b.dialDeviceCounts&&(a.uf.dM=b.dialDeviceCounts);if(b=b.device)if(b.model&&(a.uf.modelName=b.model),b.version&&(a.uf.receiverVersion=b.version),!a.qJ){var c=Ra();a.qJ=!0;a.uf.Hv=
Wf(b.ip,c,a.Gca.bind(a))}}))};
d.Bna=function(){this.G.logs=this.uf.jx;this.G.logsHeader=Eg;this.G.sendLogs=Fg;this.G.fineLogsWarning=Gg;this.G.okButton=Hg;this.fM.show({locals:{Tta:this.G.attachLogs,jx:this.G.logs,Hya:this.G.includeFineLogs,Dza:this.G.logsHeader,xDa:this.G.sendLogs,pxa:this.G.fineLogsWarning,mba:this.G.okButton},scope:this.G,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.lA})};
d.Gca=function(a,b){this.qJ=!1;this.uf.Hv="error"==a?"":b;this.G.attachLogs||(this.uf.Hv="");this.lt()};d.lt=function(){this.G.$$phase||this.G.$apply()};d.lA=function(a,b){a.closeWindow=function(){window.close()};a.closeDialog=function(){b.hide()}};Jg.prototype.lA.$inject=["$scope","$mdDialog"];var Kg=function(a,b){this.id=a;this.desc=b;this.text=0==a?b:a+" ("+b+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",Jg]);m("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.Ao?!0:!1},void 0);m("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0},void 0);m("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof $e)return af(a);if(a instanceof ff)return gf(a);if(a instanceof cf)return df(a);if(a instanceof Xe)return Ye(a);if(a instanceof Ue)return Ve(a);throw Error();},void 0);
m("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,b){if("html"==a)return gf(b);if("resourceUrl"==a||"templateUrl"==a)return af(b);if("url"==a)return b instanceof $e?af(b):df(b);if("css"==a)return Ye(b);if("js"==a)return Ve(b);throw Error();},void 0);
