var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                }
                MessageComponent.prototype.onClick = function () {
                    this.editClicked.emit('Changed');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t<article class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t        \t{{ message.content }}\n\t        </div>\n\t        <footer class=\"panel-footer\">\n\t        <div class=\"author\">\n\t        \t{{ message.username }}\n\t        </div>\n\t        <div class=\"config\">\n\t        \t<a href=\"#\" (click)=\"onClick()\">Edit</a>\n\t       \t\t<a href=\"#\">Delete</a>\n\t        </div>\n\t        </footer>\n\t    </article>\n\t",
                        styles: ["\n    .author {\n    \tdisplay: inline-block;\n    \tfont-style: italic;\n    \tfont-size: 12px;\n    \twidth: 80%;\n    }\n    .config {\n    \tdisplay: inline-block;\n    \ttext-align: right;\n    \tfont-size: 12px;\n    \twidth: 19%;\n    }"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ["angular2/core", "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [
                        new message_2.Message('A new message', null, 'Max'),
                        new message_2.Message('Another message', null, 'Anna'),
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n\t\t<my-message *ngFor=\"#message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n\t",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ["angular2/core", "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            }],
        execute: function() {
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, 'Dummy UserName');
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n\t\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"content\">Content</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send Message</button>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_4("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ["angular2/core", "messages/message-list.component", "messages/message-input.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, message_list_component_1, message_input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        template: "  \n    \t<div class=\"row spacing\">\n    \t\t<my-message-input></my-message-input>\n       \t</div>\n        <div class=\"row spacing\">\n        \t<my-message-list></my-message-list>\n        </div>\n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
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
            exports_7("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyxpQkFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDZCQVlDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3VCRDtnQkFBQTtvQkFFVyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQU1wRCxDQUFDO2dCQUhBLGtDQUFPLEdBQVA7b0JBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQW5DVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsNmNBZVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMscVBBWUosQ0FBQztxQkFDTixDQUFDOztvQ0FBQTtnQkFVRix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDakNEO2dCQUFBO29CQUNDLGFBQVEsR0FBYzt3QkFDckIsSUFBSSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO3dCQUN6QyxJQUFJLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztxQkFDNUMsQ0FBQztnQkFFSCxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLHNJQUVUO3dCQUNFLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOzt3Q0FBQTtnQkFPRiwyQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsdURBTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDREQ7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFMQSx3Q0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFqQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUscVdBUVQ7cUJBQ0QsQ0FBQzs7eUNBQUE7Z0JBUUYsNEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHlEQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ05EO2dCQUFBO2dCQUVBLENBQUM7Z0JBZEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlOQU9UO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLCtDQUFxQixDQUFDO3FCQUM1RCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNiRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBQ0MsY0FBbUIsS0FBYSxFQUFFLFFBQWdCLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtvQkFBdEUsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFBNEQsQ0FBQztnQkFDOUYsV0FBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUJBRUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi90ZXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcblx0Y29udGVudDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRtZXNzYWdlSWQ6IHN0cmluZztcblx0dXNlcklkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQ/OiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0fVxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuXHQgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cdCAgICAgICAgXHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cblx0ICAgICAgICA8L2Rpdj5cblx0ICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG5cdCAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuXHQgICAgICAgIFx0e3sgbWVzc2FnZS51c2VybmFtZSB9fVxuXHQgICAgICAgIDwvZGl2PlxuXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cblx0ICAgICAgICBcdDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkVkaXQ8L2E+XG5cdCAgICAgICBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG5cdCAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgPC9mb290ZXI+XG5cdCAgICA8L2FydGljbGU+XG5cdGAsXG5cdHN0eWxlczogW2BcbiAgICAuYXV0aG9yIHtcbiAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5jb25maWcge1xuICAgIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFx0dGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgXHRmb250LXNpemU6IDEycHg7XG4gICAgXHR3aWR0aDogMTklO1xuICAgIH1gXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXHRASW5wdXQoKSBtZXNzYWdlOk1lc3NhZ2U7XG5cdEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXHRcblxuXHRvbkNsaWNrKCkge1xuXHRcdHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuXHR9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gXCIuL21lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG15LW1lc3NhZ2UgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cblx0YCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQge1xuXHRtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuXHRcdG5ldyBNZXNzYWdlKCdBIG5ldyBtZXNzYWdlJywgbnVsbCwgJ01heCcpLFxuXHRcdG5ldyBNZXNzYWdlKCdBbm90aGVyIG1lc3NhZ2UnLCBudWxsLCAnQW5uYScpLFxuXHRdO1xuXHRcbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dC52YWx1ZSlcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cblx0XHQ8L3NlY3Rpb24+XG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuXHRvbkNyZWF0ZShjb250ZW50OiBzdHJpbmcpIHtcblx0XHRjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgJ0R1bW15IFVzZXJOYW1lJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cblx0XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCAgXG4gICAgXHQ8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICBcdFx0PG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuICAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICBcdDxteS1tZXNzYWdlLWxpc3Q+PC9teS1tZXNzYWdlLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VMaXN0Q29tcG9uZW50LCBNZXNzYWdlSW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdFxufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Y29uc3RydWN0b3IocHVibGljIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGZpcnN0TmFtZT86IHN0cmluZywgbGFzdE5hbWU/OiBzdHJpbmcpIHt9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
