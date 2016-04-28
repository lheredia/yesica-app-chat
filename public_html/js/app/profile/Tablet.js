Ext.define('Yesica.chat.profile.Tablet', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        
        return Ext.platformTags.tablet;
        
    },
    
    launch: function() {
        
        console.log('launch phone');
        
    }
});
