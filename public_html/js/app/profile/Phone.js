
Ext.define('Yesica.chat.profile.Phone', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        
        return Ext.platformTags.phone;
        
    },
    
    launch: function() {
        
        Ext.require('Yesica.chat.view.phone.Main', function(a) {
            
            Ext.create(a);
            
        });
        
    }
});
