"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.LoadRules();
    };
    AppComponent.prototype.LoadRules = function () {
        this.Rules = {
            headers: [{ Name: "Group_Name", Label: "Group Name", IsAction: false, IsSearchable: true, SearchedValue: "" },
                { Name: "SOURCE_GROUP", Label: "Source Group", IsAction: false, IsSearchable: true, SearchedValue: "" },
                { Name: "PRIORITY", Label: "Priority", IsAction: false, IsSearchable: false, SearchedValue: "" },
                { Name: "STATUS", Label: "Status", IsAction: false, IsSearchable: true, SearchedValue: "" },
                { Name: "Actions", Label: "Actions", IsAction: true }
            ],
            Rows: [{ Group_Name: "Rule 1 Group", SOURCE_GROUP: "Rule 1 Source Group", PRIORITY: 1, STATUS: "Active", Actions: ["MoveDown", "Edit", "Clone", "Disable"] },
                { Group_Name: "Rule 2 Group", SOURCE_GROUP: "Rule 2 Source Group", PRIORITY: 2, STATUS: "Active", Actions: ["MoveUp", "MoveDown", "Edit", "Clone", "Disable"] },
                { Group_Name: "Rule 3 Group", SOURCE_GROUP: "Rule 3 Source Group", PRIORITY: 3, STATUS: "Archived", Actions: ["MoveUp", "MoveDown", "Edit", "Clone", "Enable"] },
                { Group_Name: "Rule 4 Group", SOURCE_GROUP: "Rule 4 Source Group", PRIORITY: 4, STATUS: "Active", Actions: ["MoveUp", "Edit", "Clone", "Disable"] },
                { Group_Name: "Rule 14 Grp", SOURCE_GROUP: "Rule 14 Src Grp", PRIORITY: 5, STATUS: "Active", Actions: ["MoveUp", "Edit", "Clone", "Disable"] },
                { Group_Name: "Rule 44 Grp2", SOURCE_GROUP: "Rule 44 Source Group", PRIORITY: 6, STATUS: "Active", Actions: ["MoveUp", "Edit", "Clone", "Disable"] },
                { Group_Name: "Rule 11 GroupNew", SOURCE_GROUP: "Rule 11 Src Grp", PRIORITY: 7, STATUS: "Active", Actions: ["MoveUp", "Edit", "Clone", "Enable"] }],
            HasRows: true
        };
        this.RowsCopy = Object.assign([], this.Rules.Rows);
    };
    AppComponent.prototype.setClass = function (action) {
        var styleName;
        switch (action) {
            case "MoveUp":
                styleName = "glyphicon glyphicon-arrow-up";
                break;
            case "MoveDown":
                styleName = "glyphicon glyphicon-arrow-down";
                break;
            case "Edit":
                styleName = "glyphicon glyphicon-edit";
                break;
            case "Clone":
                styleName = "glyphicon glyphicon-copy";
                break;
            case "Enable":
                styleName = "glyphicon glyphicon-ok-sign";
                break;
            case "Disable":
                styleName = "glyphicon glyphicon-remove-sign";
                break;
            default:
                break;
        }
        console.log("class name:" + styleName);
        return styleName;
    };
    AppComponent.prototype.getValue = function (row, propName) {
        return row[propName];
    };
    AppComponent.prototype.setRowClass = function (row) {
        var rowClass;
        console.log(row.Actions.indexOf("Enable"));
        if (row.Actions.indexOf("Enable") > 0) {
            rowClass = "warning";
        }
        return rowClass;
    };
    AppComponent.prototype.SearchGrid = function (event) {
        var _this = this;
        debugger;
        var isCriteriaMatched = true;
        this.Rules.Rows = [];
        this.RowsCopy.forEach(function (row) {
            debugger;
            isCriteriaMatched = true;
            _this.Rules.headers.forEach(function (head) {
                if (head.IsSearchable && head.SearchedValue) {
                    console.log("Header:" + head.Name + " SearchedValue:" + head.SearchedValue);
                    if (!(row[head.Name] == head.SearchedValue)) {
                        isCriteriaMatched = false;
                    }
                }
            });
            if (isCriteriaMatched) {
                _this.Rules.Rows.push(row);
            }
        });
        if (this.Rules.Rows.Length > 0) {
            this.Rules.HasRows = true;
        }
        else {
            this.Rules.HasRows = false;
        }
    };
    AppComponent.prototype.ClearSearch = function (event) {
        var _this = this;
        debugger;
        this.RowsCopy.forEach(function (row) {
            _this.Rules.Rows.push(row);
        });
    };
    AppComponent.prototype.GetFilterValue = function () {
        debugger;
        var SearchObject = {};
        this.Rules.headers.forEach(function (header) {
            SearchObject[header.Name] = header.SearchedValue;
        });
        return SearchObject;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/styles.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map