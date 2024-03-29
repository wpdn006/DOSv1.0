
var red = {
	xtype: 'carousel',
	items:	[ 
				{cls: "monster1-2 monsterCls"},
				{cls: "monster2-2 monsterCls"},
				{cls: "monster3-2 monsterCls"}
			]
};

var blue = {
	xtype: 'carousel',
	items:	[ 
				{cls: "monster1-3 monsterCls"},
				{cls: "monster2-3 monsterCls"},
				{cls: "monster3-3 monsterCls"}
			]
};

var copyright = {
	docked: 'bottom',
	html:	"Illustrations by <a href='http://www.flickr.com/photos/laurie_pink/'>Lauie Pink</a>"
};

Ext.define('ST2.view.Hello', {
	extend : 'Ext.Panel',
	requires: [
        'ST2.view.Yellow'
    ],
	id : 'hello',
	xtype : 'hello',
	config : {
		layout : {
			type : 'vbox',
			animation : { type: 'fade', duration: 1300 }
		},
		defaults: { flex : 1 },
		items : [{xtype: 'yellow'}, red, blue, copyright],
	}
});
