dhtmlXGridObject.prototype.enablePaging=function(e,t,a,i,r,n){this._pgn_parentObj="string"==typeof i?document.getElementById(i):i,this._pgn_recInfoParentObj="string"==typeof n?document.getElementById(n):n,this.pagingOn=e,this.showRecInfo=r,this.rowsBufferOutSize=parseInt(t),this.currentPage=1,this.pagesInGroup=parseInt(a),this._init_pgn_events(),this.setPagingSkin("default")},dhtmlXGridObject.prototype.setXMLAutoLoading=function(e,t){this.xmlFileUrl=e,this._dpref=t},dhtmlXGridObject.prototype.changePageRelative=function(e){this.changePage(this.currentPage+e)},dhtmlXGridObject.prototype.changePage=function(e){0==arguments.length&&(e=this.currentPage||0),e=parseInt(e),e=Math.max(1,Math.min(e,Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize))),this.callEvent("onBeforePageChanged",[this.currentPage,e])&&(this.currentPage=parseInt(e),this._reset_view(),this._fixAlterCss(),this.callEvent("onPageChanged",this.getStateOfView()))},dhtmlXGridObject.prototype.setPagingSkin=function(e){this._pgn_skin=this["_pgn_"+e],"toolbar"==e&&(this._pgn_skin_tlb=arguments[1])},dhtmlXGridObject.prototype.setPagingTemplates=function(e,t){this._pgn_templateA=this._pgn_template_compile(e),this._pgn_templateB=this._pgn_template_compile(t),this._page_skin_update()},dhtmlXGridObject.prototype._page_skin_update=function(){this.pagesInGroup||(this.pagesInGroup=Math.ceil(Math.min(5,this.rowsBuffer.length/this.rowsBufferOutSize)));var e=Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize);return e&&e<this.currentPage?this.changePage(e):void(this.pagingOn&&this._pgn_skin&&this._pgn_skin.apply(this,this.getStateOfView()))},dhtmlXGridObject.prototype._init_pgn_events=function(){this.attachEvent("onXLE",this._page_skin_update),this.attachEvent("onClearAll",this._page_skin_update),this.attachEvent("onPageChanged",this._page_skin_update),this.attachEvent("onGridReconstructed",this._page_skin_update),this._init_pgn_events=function(){}},dhtmlXGridObject.prototype._pgn_default=function(){if(!this.pagingBlock){if(this.pagingBlock=document.createElement("DIV"),this.pagingBlock.className="pagingBlock",this.recordInfoBlock=document.createElement("SPAN"),this.recordInfoBlock.className="recordsInfoBlock",!this._pgn_parentObj)return;this._pgn_parentObj.appendChild(this.pagingBlock),this._pgn_recInfoParentObj&&this.showRecInfo&&this._pgn_recInfoParentObj.appendChild(this.recordInfoBlock),this._pgn_templateA||(this._pgn_templateA=this._pgn_template_compile("[prevpages:&lt;:&nbsp;] [currentpages:,&nbsp;] [nextpages:&gt;:&nbsp;]"),this._pgn_templateB=this._pgn_template_compile("Results <b>[from]-[to]</b> of <b>[total]</b>"))}var e=this.getStateOfView();this.pagingBlock.innerHTML=this._pgn_templateA.apply(this,e),this.recordInfoBlock.innerHTML=this._pgn_templateB.apply(this,e),this._pgn_template_active(this.pagingBlock),this._pgn_template_active(this.recordInfoBlock),this.callEvent("onPaging",[])},dhtmlXGridObject.prototype._pgn_block=function(e){for(var t=Math.floor((this.currentPage-1)/this.pagesInGroup)*this.pagesInGroup,a=Math.min(Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize),t+this.pagesInGroup),i=[],r=t+1;a>=r;r++)i.push(r==this.currentPage?"<a class='dhx_not_active'><b>"+r+"</b></a>":"<a onclick='this.grid.changePage("+r+"); return false;'>"+r+"</a>");return i.join(e)},dhtmlXGridObject.prototype._pgn_link=function(e,t,a){if("prevpages"==e||"prev"==e)return 1==this.currentPage?a:"<a onclick='this.grid.changePageRelative(-1*"+("prev"==e?"1":"this.grid.pagesInGroup")+"); return false;'>"+t+"</a>";if("nextpages"==e||"next"==e)return this.rowsBuffer.length/this.rowsBufferOutSize<=this.currentPage?a:this.rowsBuffer.length/(this.rowsBufferOutSize*("next"==e?"1":this.pagesInGroup))<=1?a:"<a onclick='this.grid.changePageRelative("+("next"==e?"1":"this.grid.pagesInGroup")+"); return false;'>"+t+"</a>";if("current"==e){var i=this.currentPage+(t?parseInt(t):0);return 1>i||Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize)<i?a:"<a "+(i==this.currentPage?"class='dhx_active_page_link' ":"")+"onclick='this.grid.changePage("+i+"); return false;'>"+i+"</a>"}return t},dhtmlXGridObject.prototype._pgn_template_active=function(e){var t=e.getElementsByTagName("A");if(t)for(var a=0;a<t.length;a++)t[a].grid=this},dhtmlXGridObject.prototype._pgn_template_compile=function(e){return e=e.replace(/\[([^\]]*)\]/g,function(e,t){switch(t=t.split(":"),t[0]){case"from":return'"+(arguments[1]*1+(arguments[2]*1?1:0))+"';case"total":return'"+arguments[3]+"';case"to":return'"+arguments[2]+"';case"current":case"prev":case"next":case"prevpages":case"nextpages":return"\"+this._pgn_link('"+t[0]+"','"+t[1]+"','"+t[2]+"')+\"";case"currentpages":return"\"+this._pgn_block('"+t[1]+"')+\""}}),new Function('return "'+e+'";')},dhtmlXGridObject.prototype.i18n.paging={results:"Results",records:"Records from ",to:" to ",page:"Page ",perpage:"rows per page",first:"To first Page",previous:"Previous Page",found:"Found records",next:"Next Page",last:"To last Page",of:" of ",notfound:"No Records Found"},dhtmlXGridObject.prototype.setPagingWTMode=function(e,t,a,i){this._WTDef=[e,t,a,i]},dhtmlXGridObject.prototype._pgn_bricks=function(e,t,a){var i=(this.skin_name||"").split("_")[1],r="";("light"==i||"modern"==i||"skyblue"==i)&&(r="_"+i),this.pagerElAr=new Array,this.pagerElAr.pagerCont=document.createElement("DIV"),this.pagerElAr.pagerBord=document.createElement("DIV"),this.pagerElAr.pagerLine=document.createElement("DIV"),this.pagerElAr.pagerBox=document.createElement("DIV"),this.pagerElAr.pagerInfo=document.createElement("DIV"),this.pagerElAr.pagerInfoBox=document.createElement("DIV");var n=this.globalBox||this.objBox;if(this.pagerElAr.pagerCont.style.width=n.clientWidth+"px",this.pagerElAr.pagerCont.style.overflow="hidden",this.pagerElAr.pagerCont.style.clear="both",this.pagerElAr.pagerBord.className="dhx_pbox"+r,this.pagerElAr.pagerLine.className="dhx_pline"+r,this.pagerElAr.pagerBox.style.clear="both",this.pagerElAr.pagerInfo.className="dhx_pager_info"+r,this.pagerElAr.pagerCont.appendChild(this.pagerElAr.pagerBord),this.pagerElAr.pagerCont.appendChild(this.pagerElAr.pagerLine),this.pagerElAr.pagerCont.appendChild(this.pagerElAr.pagerInfo),this.pagerElAr.pagerLine.appendChild(this.pagerElAr.pagerBox),this.pagerElAr.pagerInfo.appendChild(this.pagerElAr.pagerInfoBox),this._pgn_parentObj.innerHTML="",this._pgn_parentObj.appendChild(this.pagerElAr.pagerCont),this.rowsBuffer.length>0){var s=20,p=22;if(e>this.pagesInGroup){var g=document.createElement("DIV"),h=document.createElement("DIV");g.className="dhx_page"+r,h.innerHTML="&larr;",g.appendChild(h),this.pagerElAr.pagerBox.appendChild(g);var o=this;g.pgnum=(Math.ceil(e/this.pagesInGroup)-1)*this.pagesInGroup,g.onclick=function(){o.changePage(this.pgnum)},s+=p}for(var l=1;l<=this.pagesInGroup;l++){var g=document.createElement("DIV"),h=document.createElement("DIV");if(g.className="dhx_page"+r,pageNumber=(Math.ceil(e/this.pagesInGroup)-1)*this.pagesInGroup+l,pageNumber>Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize))break;if(h.innerHTML=pageNumber,g.appendChild(h),e==pageNumber)g.className+=" dhx_page_active"+r,h.className="dhx_page_active"+r;else{var o=this;g.pgnum=pageNumber,g.onclick=function(){o.changePage(this.pgnum)}}s+=parseInt(p/3)*pageNumber.toString().length+15,h.style.width=parseInt(p/3)*pageNumber.toString().length+8+"px",this.pagerElAr.pagerBox.appendChild(g)}if(Math.ceil(e/this.pagesInGroup)*this.pagesInGroup<Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize)){var g=document.createElement("DIV"),h=document.createElement("DIV");g.className="dhx_page"+r,h.innerHTML="&rarr;",g.appendChild(h),this.pagerElAr.pagerBox.appendChild(g);var o=this;g.pgnum=Math.ceil(e/this.pagesInGroup)*this.pagesInGroup+1,g.onclick=function(){o.changePage(this.pgnum)},s+=p}this.pagerElAr.pagerLine.style.width=s+"px"}this.rowsBuffer.length>0&&this.showRecInfo?this.pagerElAr.pagerInfoBox.innerHTML=this.i18n.paging.records+(t+1)+this.i18n.paging.to+a+this.i18n.paging.of+this.rowsBuffer.length:0==this.rowsBuffer.length&&(this.pagerElAr.pagerLine.parentNode.removeChild(this.pagerElAr.pagerLine),this.pagerElAr.pagerInfoBox.innerHTML=this.i18n.paging.notfound),this.pagerElAr.pagerBox.appendChild(document.createElement("SPAN")).innerHTML="&nbsp;",this.pagerElAr.pagerBord.appendChild(document.createElement("SPAN")).innerHTML="&nbsp;",this.pagerElAr.pagerCont.appendChild(document.createElement("SPAN")).innerHTML="&nbsp;",this.callEvent("onPaging",[])},dhtmlXGridObject.prototype._pgn_toolbar=function(e,t,a){this.aToolBar||(this.aToolBar=this._pgn_createToolBar());var i=Math.ceil(this.rowsBuffer.length/this.rowsBufferOutSize);if(this._WTDef[0]&&(this.aToolBar.enableItem("right"),this.aToolBar.enableItem("rightabs"),this.aToolBar.enableItem("left"),this.aToolBar.enableItem("leftabs"),this.currentPage>=i&&(this.aToolBar.disableItem("right"),this.aToolBar.disableItem("rightabs")),1==this.currentPage&&(this.aToolBar.disableItem("left"),this.aToolBar.disableItem("leftabs"))),this._WTDef[2]){var r=this;this.aToolBar.forEachListOption("pages",function(e){r.aToolBar.removeListOption("pages",e)});for(var n={dhx_skyblue:4,dhx_web:0,dhx_terrace:14}[this.aToolBar.conf.skin],s=0;i>s;s++)this.aToolBar.addListOption("pages","pages_"+(s+1),0/0,"button","<span style='padding: 0px "+n+"px 0px 0px;'>"+this.i18n.paging.page+(s+1)+"</span>","paging_page.gif");this.aToolBar.setItemText("pages",this.i18n.paging.page+e)}this._WTDef[1]&&(this.getRowsNum()?this.aToolBar.setItemText("results","<div style='width:100%; text-align:center'>"+this.i18n.paging.records+(t+1)+this.i18n.paging.to+a+"</div>"):this.aToolBar.setItemText("results",this.i18n.paging.notfound)),this._WTDef[3]&&this.aToolBar.setItemText("perpagenum",this.rowsBufferOutSize.toString()+" "+this.i18n.paging.perpage),this.callEvent("onPaging",[])},dhtmlXGridObject.prototype._pgn_createToolBar=function(){this.aToolBar=new dhtmlXToolbarObject({parent:this._pgn_parentObj,skin:this._pgn_skin_tlb||this.skin_name,icons_path:this.imgURL}),this._WTDef||this.setPagingWTMode(!0,!0,!0,!0);var e=this;this.aToolBar.attachEvent("onClick",function(t){switch(t=t.split("_"),t[0]){case"leftabs":e.changePage(1);break;case"left":e.changePage(e.currentPage-1);break;case"rightabs":e.changePage(99999);break;case"right":e.changePage(e.currentPage+1);break;case"perpagenum":if(t[1]===this.undefined)return;e.rowsBufferOutSize=parseInt(t[1]),e.changePage(),e.aToolBar.setItemText("perpagenum",t[1]+" "+e.i18n.paging.perpage);break;case"pages":if(t[1]===this.undefined)return;e.changePage(t[1]),e.aToolBar.setItemText("pages",e.i18n.paging.page+t[1])}}),this._WTDef[0]&&(this.aToolBar.addButton("leftabs",0/0,null,"ar_left_abs.gif","ar_left_abs_dis.gif"),this.aToolBar.addButton("left",0/0,null,"ar_left.gif","ar_left_dis.gif")),this._WTDef[1]&&(this.aToolBar.addText("results",0/0,this.i18n.paging.results),this.aToolBar.setWidth("results","150"),this.aToolBar.disableItem("results")),this._WTDef[0]&&(this.aToolBar.addButton("right",0/0,null,"ar_right.gif","ar_right_dis.gif"),this.aToolBar.addButton("rightabs",0/0,null,"ar_right_abs.gif","ar_right_abs_dis.gif")),this._WTDef[2]&&("dhx_terrace"==this.aToolBar.conf.skin&&this.aToolBar.addSeparator(),this.aToolBar.addButtonSelect("pages",0/0,"select page",[],"paging_pages.gif",null,!1,!0));var t;if(t=this._WTDef[3]){"dhx_terrace"==this.aToolBar.conf.skin&&this.aToolBar.addSeparator(),this.aToolBar.addButtonSelect("perpagenum",0/0,"select size",[],"paging_rows.gif",null,!1,!0),"object"!=typeof t&&(t=[5,10,15,20,25,30]);for(var a={dhx_skyblue:4,dhx_web:0,dhx_terrace:18}[this.aToolBar.conf.skin],i=0;i<t.length;i++)this.aToolBar.addListOption("perpagenum","perpagenum_"+t[i],0/0,"button","<span style='padding: 0px "+a+"px 0px 0px;'>"+t[i]+" "+this.i18n.paging.perpage+"</span>","paging_page.gif")}return this.aToolBar};