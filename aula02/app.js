Ext.application({
    name: 'Sencha',

    launch: function() {
        //alert('launched');

        Ext.create('Ext.Panel', {
            fullscreen: true,
            html: 'Hello World'
        });
    }
});