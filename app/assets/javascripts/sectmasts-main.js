jQuery(function($){

	$("#list").jqGrid({
	   	url:'/sectmasts/readForIndex',
		datatype: "json",
	   	colNames:['id','Section cd', 'Section Name', 'created','updated'],
	   	colModel:[
	   		{name:'id',index:'id', width:55},
	   		{name:'sectcd',index:'sectcd', width:90},
	   		{name:'sectname',index:'sectname', width:200},
	   		{name:'created_at',index:'created_at', width:150},		
	   		{name:'updated_at',index:'updated_at', width:150}		
	   	],
	   	rowNum:10,
	   	rowList:[10,20,30],
		jsonReader: {
			repeatitems : false,
			id: "0"
		},
	   	pager: '#pager',
	   	sortname: 'id',
	    viewrecords: true,
	    sortorder: "asc",
	    caption:"Section master"
	});
	
	$("#list").jqGrid('navGrid','#pager',{edit:false,add:false,del:false});	



});
	
