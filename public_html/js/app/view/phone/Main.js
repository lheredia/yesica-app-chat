
Ext.define('Yesica.chat.view.phone.Main', {
    extend: 'Ext.Container',
    
    requires: [
        'Yesica.chat.view.phone.MainController'
    ],
    
    controller: 'appchatmain',
    fullscreen: true,
    layout: 'card',
    items: [
        {
            xtype: 'titlebar',
            itemId: 'titMain',
            docked: 'top',
            items: [
                {
                    xtype: 'label',
                    html: 'Cloud Chat',
                    flex: 1
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-search',
                    align: 'right',
                    itemId: 'btnSearch'
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
            activeItem: 1,
            items: [
                {
                    title: 'Llamadas',
                    html: 'lamadas'
                },
                {
                    title: 'Chats',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'list',
                            itemId: 'lisChats',
                            cls: 'app-chat-chats-list',
                            itemTpl: [
                                '<div class="avatar {avatar}"></div>',
                                '<div class="wrapper">',
                                    '<div class="nombre">{nombre}</div>',
                                    '<div class="ultimoMensaje">{ultimoMensaje}</div>',
                                    '<div class="horaUltimoMensaje">{horaUltimoMensaje}</div>',
                                '</div>'
                            ],
                            data: [
                                {
                                    avatar: 'azul',
                                    nombre: 'Christian Jimenez',
                                    ultimoMensaje: 'Gracias',
                                    horaUltimoMensaje: '1:42 PM'
                                },
                                {
                                    avatar: 'rojo',
                                    nombre: 'Luis Valdez',
                                    ultimoMensaje: 'Gracias',
                                    horaUltimoMensaje: '1:42 PM'
                                },
                                {
                                    avatar: 'amarillo',
                                    nombre: 'Alfonso rangel',
                                    ultimoMensaje: 'Gracias',
                                    horaUltimoMensaje: '1:42 PM'
                                },
                                {
                                    avatar: 'gris',
                                    nombre: 'Rafael Escobedo',
                                    ultimoMensaje: 'Gracias',
                                    horaUltimoMensaje: '1:42 PM'
                                },
                                {
                                    avatar: 'rojo',
                                    nombre: 'Luis Heredia',
                                    ultimoMensaje: 'Gracias',
                                    horaUltimoMensaje: '1:42 PM'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Contactos',
                    html: '<h2>Contactos</h2>'
                }
            ]
        },
        {
            xtype: 'container',
            itemId: 'conChat',
            flex: 1,
            items: [
                {
                    xtype: 'titlebar',
                    itemId: 'titChat',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'button',
                            cls: 'fa fa-arrow-left'
                        },
                        {
                            xtype: 'label',
                            itemId: 'lblNombre',
                            flex: 1,
                            tpl: [
                                '<div class="nombre">{nombre}</div>',
                                '<small>{horaUltimoMensaje}</small>'
                            ],
                            data: {
                                nombre: 'Juan',
                                horaUltimoMensaje: '12:12pm'
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-phone',
                            align: 'right',
                            itemId: 'btnLlamar'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-paperclip',
                            align: 'right',
                            itemId: 'btnAdjuntar'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa fa-ellipsis-v',
                            align: 'right'
                        }
                    ]
                },
                {
                    xtype: 'titlebar',
                    itemId: 'titChat',
                    docked: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-smile-o'
                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Escribir mensaje',
                            flex: 1
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-camera',
                            align: 'right'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-microphone',
                            align: 'right'
                        }
                    ]
                },
                {
                    xtype: 'list',
                    flex: 1,
                    cls: 'app-chat-chats-window',
                    itemTpl: [
                        '<div class="wrapper {receptor}">',
                            '<div class="bubble">',
                                '<div class="mensaje">{mensaje}</div>',
                                '<div class="hora">{hora}</div>',
                                '<div class="status">{status}</div>',
                            '</div>',
                        '</div>'
                    ],
                    data: [
                        {
                            mensaje: 'Hola!!',
                            hora: '08:15',
                            status: 'visto',
                            receptor: 'si'
                        },
                        {
                            mensaje: 'Que tal!!',
                            hora: '08:15',
                            receptor: 'no'
                        },
                        {
                            mensaje: 'Bien mamama!!',
                            hora: '08:15',
                            status: 'visto',
                            receptor: 'si'
                        }
                    ]
                }
            ]
        }
    ]
    
});
