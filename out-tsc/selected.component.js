"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SelectedComponent = (function () {
    function SelectedComponent() {
        this.selectedRemoved = new core_1.EventEmitter();
    }
    SelectedComponent.prototype.removeItem = function (item) {
        this.selectedRemoved.next(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SelectedComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectedComponent.prototype, "selectedRemoved", void 0);
    SelectedComponent = __decorate([
        core_1.Component({
            selector: 'supre-selected',
            template: require('./selected.component.html'),
            styles: [require('./selected.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectedComponent);
    return SelectedComponent;
}());
exports.SelectedComponent = SelectedComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-selected/src/selected.component.js.map