Ext.define('Yesica.chat.profile.Desktop', {
    extend: 'Ext.app.Profile',
    
    isActive: function() {
        
        return Ext.platformTags.desktop;
        
    },
    
    launch: function() {
        
        console.log('launch phone');
        
    }
});
