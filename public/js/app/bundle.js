var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/messages.component", ["angular2/core", "./messages/message-list.component", "./messages/message-input.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, message_list_component_1, message_input_component_1;
    var MessagesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            MessagesComponent = (function () {
                function MessagesComponent() {
                }
                MessagesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div class=\"row spacing\">\n\t\t\t<my-message-input></my-message-input>\n\t\t</div>\n\t\t<div class=\"row spacing\">\n\t\t\t<my-message-list></my-message-list>\n\t\t</div>\n\t",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessagesComponent);
                return MessagesComponent;
            }());
            exports_1("MessagesComponent", MessagesComponent);
        }
    }
});
System.register("auth/signup.component", ["angular2/core", "angular2/common"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, common_1;
    var SignupComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_fb) {
                    this._fb = _fb;
                }
                SignupComponent.prototype.onSubmit = function () {
                    console.log(myForm.value);
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_1.Validators.required]
                    });
                };
                SignupComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("/^(([^<>()\[\]\\.,;:\s@", +(), [ ^ (), [], ,]))
                        ;
                    s;
                    +"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
                    {
                        return { invalidMail: true };
                    }
                };
                SignupComponent = __decorate([
                    core_2.Component({
                        selector: 'my-signup',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('firstName')\" type=\"text\" id=\"firstName\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('lastName')\" type=\"text\" id=\"lastName\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Mail</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n\t\t\t</form>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_2("SignupComponent", SignupComponent);
        }
    }
});
System.register("auth/signin.component", ["angular2/core", "angular2/common"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, common_2;
    var SignInComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(_fb) {
                    this._fb = _fb;
                }
                SignInComponent.prototype.onSubmit = function () {
                    console.log(myForm.value);
                };
                SignInComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        email: ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                this.isEmail
                            ])],
                        password: ['', common_2.Validators.required]
                    });
                };
                SignInComponent.prototype.isEmail = function (control) {
                    if (!control.value.match("/^(([^<>()\[\]\\.,;:\s@", +(), [ ^ (), [], ,]))
                        ;
                    s;
                    +"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
                    {
                        return { invalidMail: true };
                    }
                };
                SignInComponent = __decorate([
                    core_3.Component({
                        selector: 'my-signin',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">Mail</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('email')\" type=\"email\" id=\"email\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input [ngFormControl]=\"myForm.find('password')\" type=\"password\" id=\"password\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Sign Up</button>\n\t\t\t</form>\n\t\t</section>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [common_2.FormBuilder])
                ], SignInComponent);
                return SignInComponent;
            }());
            exports_3("SignInComponent", SignInComponent);
        }
    }
});
System.register("auth/logout.component", ["angular2/core"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4;
    var LogoutComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent() {
                }
                LogoutComponent.prototype.onLogout = function () {
                };
                LogoutComponent = __decorate([
                    core_4.Component({
                        selector: 'my-logout',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_4("LogoutComponent", LogoutComponent);
        }
    }
});
System.register("auth/authentication.component", ["angular2/core", "auth/signup.component", "auth/signin.component", "auth/logout.component", "angular2/router"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_5, signup_component_1, signin_component_1, logout_component_1, router_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent() {
                }
                AuthenticationComponent = __decorate([
                    core_5.Component({
                        selector: 'my-auth',
                        template: "\n\t\t<header class=\"row spacing\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li><a [routerLink]=\"['Signup']\">Signup</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Signin']\">Signin</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Logout']\">Logout</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t<div class=\"row spacing\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\n\t",
                        directives: [ROUTER_DIRECTIVES],
                        styles: ["\n\t\t.router-link-active {\n\t\t\tcolor: #555;\n\t\t\tcursor: default;\n\t\t\tbackground-color: #fff;\n\t\t\tborder: 1px solid #ddd;\n\t\t\tborder-bottom-color: transparent;\n\t\t}\n\n\t"]
                    }),
                    router_1.RouteConfig([
                        { path: '/signup', name: 'Signup', component: signup_component_1.SignupComponent, useAsDefault: true },
                        { path: '/signin', name: 'Signin', component: signin_component_1.SigninComponent },
                        { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },]), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_5("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
System.register("messages/message", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_6("Message", Message);
        }
    }
});
System.register("messages/message.service", ["messages/message"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var message_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.addMessage = function (message) {
                    this.messages.push(message);
                    console.log(this.messages);
                };
                MessageService.prototype.getMessages = function () {
                    return this.messages;
                };
                return MessageService;
            }());
            exports_7("MessageService", MessageService);
            deleteMessage(message, message_1.Message);
            {
                this.messages.splice(this.messages.indexOf(message), 1);
            }
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message", "messages/message.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, message_2, message_service_1;
    var MessageComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(_messageService) {
                    this._messageService = _messageService;
                    this.editClicked = new core_6.EventEmitter();
                }
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    this._messageService.deleteMessage(this.message);
                };
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_6.Input(), 
                    __metadata('design:type', message_2.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_6.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_6.Component({
                        selector: 'my-message',
                        template: "\n\t\t<article class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t        \t{{ message.content }}\n\t        </div>\n\t        <footer class=\"panel-footer\">\n\t        <div class=\"author\">\n\t        \t{{ message.username }}\n\t        </div>\n\t        <div class=\"config\">\n\t        \t<a href=\"#\" (click)=\"onEdit()\">Edit</a>\n\t       \t\t<a href=\"#\" (click)=\"onDelete()\">Delete</a>\n\t        </div>\n\t        </footer>\n\t    </article>\n\t",
                        styles: ["\n    .author {\n    \tdisplay: inline-block;\n    \tfont-style: italic;\n    \tfont-size: 12px;\n    \twidth: 80%;\n    }\n    .config {\n    \tdisplay: inline-block;\n    \ttext-align: right;\n    \tfont-size: 12px;\n    \twidth: 19%;\n    }"]
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_8("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ["messages/message", "messages/message.service"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var message_3, message_service_2;
    return {
        setters:[
            function (message_3_1) {
                message_3 = message_3_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
            }],
        execute: function() {
            Class;
            MessageListComponent;
            implements;
            OnInit;
            {
                constructor(private, _messageService, message_service_2.MessageService);
                { }
                messages: message_3.Message[];
                ngOnInit();
                {
                    this.messages = this._messageService.getMessages();
                }
            }
        }
    }
});
System.register("messages/message-input.component", ["angular2/core", "messages/message"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_7, message_4;
    var MessageInputComponent;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (message_4_1) {
                message_4 = message_4_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent(_messageService) {
                    this._messageService = _messageService;
                }
                MessageInputComponent.prototype.onSubmit = function (form) {
                    var message = new message_4.Message(form.content, null, 'Dummy UserName');
                    this._messageService.addMessage(message);
                };
                MessageInputComponent = __decorate([
                    core_7.Component({
                        selector: 'my-message-input',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"content\">Content</label>\n\t\t\t\t\t<input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send Message</button>\n\t\t\t</form>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_10("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ["angular2/core", "angular2/router", "messages/messages.component", "auth/authentication.component"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_8, router_2, messages_component_1, authentication_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (messages_component_1_1) {
                messages_component_1 = messages_component_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_8.Component({
                        selector: 'my-app',
                        template: " \n    \t<div class=\"container\">\n    \t\t<my-header></my-header>\n    \t\t<router-outlet></router-outlet>\n    \t</div> \t\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES, HeaderComponent]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Messages', component: messages_component_1.MessagesComponent, useAsDefault: true },
                        { path: '/auth/...', name: 'Auth', component: authentication_component_1.AuthenticationComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_11("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service", 'angular2/router', 'angular2/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var browser_1, app_component_1, message_service_3, router_3, core_9;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_3.MessageService, ROUTER_PROVIDERS, core_9.provide(router_3.LocationStrategy, { useClass: router_3.HashLocationStrategy })]);
        }
    }
});
System.register("header.component", ["angular2/core", "angular2/router"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_10, router_4;
    var HeaderComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_10.Component({
                        selector: 'my-header',
                        template: "\n\t\t<header class=\"row\">\n\t\t\t<nav class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t\t<li><a [routerLink]=\"['Messages']\">Messenger</a></li>\n\t\t\t\t\t<li><a [routerLink]=\"['Auth']\">Authentication</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t",
                        directives: [router_4.ROUTER_DIRECTIVES],
                        styles: ["\n\t\theader {\n\t\t\tmargin-bottome: 20px;\n\t\t}\n\t\tul {\n\t\t\ttext-align: center;\n\t\t}\n\t\tli {\n\t\t\tfloat: none;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t\t.router-link-active {\n\t\t\tbackground-color: #337ab7;\n\t\t\tcolor: white;\n\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_13("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("auth/user", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                }
                return User;
            }());
            exports_14("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyIsImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyIsImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyIsImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS50cyIsIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyIsIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiLCJoZWFkZXIuY29tcG9uZW50LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsd0xBT1Q7d0JBQ0EsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUM7cUJBQzFELENBQUM7O3FDQUFBO2dCQUdGLHdCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxpREFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNZRDtnQkFJQyx5QkFBb0IsR0FBZTtvQkFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO2dCQUFFLENBQUM7Z0JBRXRDLGtDQUFRLEdBQVI7b0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUM1QixTQUFTLEVBQUUsQ0FB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QUFDLDBCQUFpQixFQUFFLGVBQWUsQ0FBQztxQkFDbkQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUMvRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx3Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2pCRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMwQnpIO2dCQUFBO2dCQUVBLENBQUM7Z0JBakNEO29CQUFDLGlCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwyU0FTVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsTUFBTSxFQUFFLENBQUMsa1FBZ0JSLENBQUM7cUJBQ0YsQ0FBQzs7bUNBQUE7Z0JBR0Ysc0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDhDQUVDLENBQUE7Ozs7Ozs7Ozs7O1lDbkNEO2dCQUNDLGNBQW1CLEtBQWEsRUFBRSxRQUFnQixFQUFFLFNBQWtCLEVBQUUsUUFBaUI7b0JBQXRFLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQTRELENBQUM7Z0JBQzlGLFdBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHdCQUVDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vU2VlZCBQcm9qZWN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LWFwcCcsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxyXG5cdFx0XHQ8bXktbWVzc2FnZS1pbnB1dD48L215LW1lc3NhZ2UtaW5wdXQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxyXG5cdFx0XHQ8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxyXG5cdFx0PC9kaXY+XHJcblx0YFxyXG5cdCBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcclxuXHRcclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBPbkl0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1zaWdudXAnO1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHQ8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdmaXJzdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdsYXN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwYXNzd29yZCcpXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cdG15Rm9ybTpDb250cm9sR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyKXt9XHJcblxyXG5cdG9uU3VibWl0KCl7XHJcblx0XHRjb25zb2xlLmxvZyhteUZvcm0udmFsdWUpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG5cdFx0XHRmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcblx0XHRcdGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG5cdFx0XHRlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG5cdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcblx0XHRcdFx0dGhpcy5pc0VtYWlsXHJcblx0XHRcdFx0XSldLFxyXG5cdFx0XHRwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG5cdFx0aWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cIikpIHtcclxuXHRcdFx0cmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktc2lnbmluJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuXHRcdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPk1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbWFpbCcpXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGFzc3dvcmQnKVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TaWduIFVwPC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHJcblx0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0XHJcblx0bXlGb3JtOkNvbnRyb2xHcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIpe31cclxuXHJcblx0b25TdWJtaXQoKXtcclxuXHRcdGNvbnNvbGUubG9nKG15Rm9ybS52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcblx0XHRcdGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcblx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuXHRcdFx0XHR0aGlzLmlzRW1haWxcclxuXHRcdFx0XHRdKV0sXHJcblx0XHRcdHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XHJcblx0XHRpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCIvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1wiKSkge1xyXG5cdFx0XHRyZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1sb2dvdXQnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xyXG5cdG9uTG9nb3V0KCl7XHJcblx0XHJcblx0fVxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1hdXRoJyxcclxuXHR0ZW1wbGF0ZTpgXHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuXHRcdFx0PG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG5cdFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ1NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydMb2dvdXQnXVwiPkxvZ291dDwvYT48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG5cdHN0eWxlczogW2BcclxuXHRcdC5yb3V0ZXItbGluay1hY3RpdmUge1xyXG5cdFx0XHRjb2xvcjogIzU1NTtcclxuXHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHJcblx0YF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7cGF0aDogJy9zaWdudXAnLCBuYW1lOiAnU2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcblx0e3BhdGg6ICcvc2lnbmluJywgbmFtZTogJ1NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcclxuXHR7cGF0aDogJy9sb2dvdXQnLCBuYW1lOiAnTG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuXHRcclxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuXHRjb250ZW50OiBzdHJpbmc7XHJcblx0dXNlcm5hbWU6IHN0cmluZztcclxuXHRtZXNzYWdlSWQ6IHN0cmluZztcclxuXHR1c2VySWQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQ/OiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHR0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcclxuXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xyXG5cdH1cclxufSIsImltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG5cdG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcclxuXHJcblx0YWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XHJcblx0XHR0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKTtcclxuXHR9XHJcblx0Z2V0TWVzc2FnZXMoKXtcclxuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VzO1xyXG5cdH1cclxuXHRlZGl0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdle1xyXG5cdFx0dGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdEdW1teVVzZXJOYW1lJzspXHJcblx0fVxyXG5cdGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKSB7XHJcblx0XHR0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xyXG5cdH1cclxuXHRcclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcblx0ICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG5cdCAgICAgICAgXHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG5cdCAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG5cdCAgICAgICAgXHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XHJcblx0ICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuXHQgICAgICAgIFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxyXG5cdCAgICAgICBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cclxuXHQgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPC9mb290ZXI+XHJcblx0ICAgIDwvYXJ0aWNsZT5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuICAgIC5hdXRob3Ige1xyXG4gICAgXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIFx0Zm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHR3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmNvbmZpZyB7XHJcbiAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcdGZvbnQtc2l6ZTogMTJweDtcclxuICAgIFx0d2lkdGg6IDE5JTtcclxuICAgIH1gXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTtcclxuXHRAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcblx0Y29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cclxuXHJcblx0b25FZGl0KCl7XHJcblx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xyXG5cdH1cclxuXHJcblx0b25EZWxldGUoKXtcclxuXHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcclxuXHR9XHJcblx0XHJcblxyXG5cdG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8bXktbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxyXG5cdGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IENsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHt9XHJcblxyXG5cdG1lc3NhZ2VzOiBNZXNzYWdlW107XHJcblxyXG5cdG5nT25Jbml0KCl7XHJcblx0XHR0aGlzLm1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcclxuXHJcblx0fVxyXG5cdFxyXG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQge01lc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHQ8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IG5nQ29udHJvbD1cImNvbnRlbnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ3JlYXRlKGlucHV0LnZhbHVlKVwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cclxuXHJcblx0b25TdWJtaXQoZm9ybTphbnkpe1xyXG5cdFx0Y29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15IFVzZXJOYW1lJyk7XHJcblx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdH1cclxuXHRcclxuXHRcclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UtbGlzdC1jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LWNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHRcdDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgXHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBcdDwvZGl2PiBcdFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBIZWFkZXJDb21wb25lbnRdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0e3BhdGg6ICcvJywgbmFtZTogJ01lc3NhZ2VzJywgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcblx0e3BhdGg6ICcvYXV0aC8uLi4nLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdFxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7Uk9VVEVfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtNZXNzYWdlU2VydmljZSwgUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSldKTsiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LWhlYWRlcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cclxuXHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ01lc3NhZ2VzJ11cIj5NZXNzZW5nZXI8L2E+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48YSBbcm91dGVyTGlua109XCJbJ0F1dGgnXVwiPkF1dGhlbnRpY2F0aW9uPC9hPjwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHRgLFxyXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcblx0c3R5bGVzOiBbYFxyXG5cdFx0aGVhZGVyIHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbWU6IDIwcHg7XHJcblx0XHR9XHJcblx0XHR1bCB7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdGxpIHtcclxuXHRcdFx0ZmxvYXQ6IG5vbmU7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdH1cclxuXHRcdC5yb3V0ZXItbGluay1hY3RpdmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblxyXG5cdFx0fVxyXG5cdGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cdFxyXG59IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBmaXJzdE5hbWU/OiBzdHJpbmcsIGxhc3ROYW1lPzogc3RyaW5nKSB7fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
