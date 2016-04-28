
Ext.define('Yesica.chat.view.phone.MainController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.appchatmain',
    
    control: {
        
        '#lisChats': {
            itemsingletap: 'onItemSingleTapListChats'
        },
        
        '#btnSearch': {
            tap: 'onTabBtnSearch'
        }
        
    },
    
    onItemSingleTapListChats: function(dv, i, t, record) {
        
        var me = this,
            view = me.getView(),
            chat = view.down('#conChat');
        
        view.setActiveItem(chat);
        view.down('#titMain').hide();
        
    },
    
    onTabBtnSearch: function() {
        
        console.log(arguments);
        
    }
    
});
