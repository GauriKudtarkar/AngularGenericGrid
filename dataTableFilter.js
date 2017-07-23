"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DataTableFilter = (function () {
    function DataTableFilter() {
    }
    DataTableFilter.prototype.IsBlank = function (keyVal) {
        if (keyVal) {
            return false;
        }
        else {
            return true;
        }
    };
    DataTableFilter.prototype.transform = function (items, filter) {
        var _this = this;
        var NumOfProperties = Object.keys(filter).length;
        var nonNullFilter = {};
        Object.keys(filter).forEach(function (key) {
            if (!_this.IsBlank(filter[key])) {
                nonNullFilter[key] = filter[key];
            }
        });
        return items.filter(function (item) {
            var notMatchingField = Object.keys(nonNullFilter).find(function (key) { return !(new RegExp('\\b' + filter[key], 'gi').test(item[key])); });
            if (notMatchingField) {
                var counter = 0;
                for (var prop in filter) {
                    if (!(filter[prop])) {
                        counter++;
                    }
                }
                if (NumOfProperties == counter) {
                    return true;
                }
            }
            else {
                return !notMatchingField; // true if matches all fields
            }
        });
    };
    return DataTableFilter;
}());
DataTableFilter = __decorate([
    core_1.Pipe({
        name: 'dataTableFilter'
    }),
    core_1.Injectable()
], DataTableFilter);
exports.DataTableFilter = DataTableFilter;
//# sourceMappingURL=dataTableFilter.js.map