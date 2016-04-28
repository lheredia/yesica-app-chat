
Ext.define('Yesica.chat.view.phone.Main', {
    extend: 'Ext.Container',
    
    fullscreen: true,
    layout: 'fit',
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            items: [
                {
                    xtype: 'label',
                    html: 'Cuentas de gastos',
                    flex: 1
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-search',
                    align: 'right'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-ellipsis-v',
                    align: 'right'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            flex: 1,
            items: [
                {
                    title: 'Llamadas',
                    html: 'lamadas'
                },
                {
                    title: 'Chats',
                    html: 'Chats'
                },
                {
                    title: 'Contactos',
                    html: '<h2>Contactos</h2>'
                }
            ]
        }
    ]
    
});
