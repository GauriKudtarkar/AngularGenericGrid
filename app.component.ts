import { Component, OnInit } from '@angular/core';
import { DataTableFilter } from './dataTableFilter';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/styles.css']
})
export class AppComponent implements OnInit {
  Rules: any;
  RowsCopy: any;
  DataFilter: any;

  ngOnInit() {
    this.LoadRules();
  }

  LoadRules() {
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
      { Group_Name: "Rule 11 GroupNew", SOURCE_GROUP: "Rule 11 Src Grp", PRIORITY: 7, STATUS: "Active", Actions: ["MoveUp", "Edit", "Clone", "Enable"] }]
      , HasRows: true
    };

    this.RowsCopy = Object.assign([], this.Rules.Rows);

  }

  setClass(action: string) {
    let styleName: string;

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
  }

  getValue(row: object, propName: string) {
    return row[propName];
  }

  setRowClass(row: any) {
    let rowClass: string;
    console.log(row.Actions.indexOf("Enable"));
    if (row.Actions.indexOf("Enable") > 0) {
      rowClass = "warning";
    }
    return rowClass;
  }

  SearchGrid(event) {
    debugger;
    let isCriteriaMatched: boolean = true;
    this.Rules.Rows = [];
    this.RowsCopy.forEach(row => {
      debugger;
      isCriteriaMatched = true;
      this.Rules.headers.forEach(head => {
        if (head.IsSearchable && head.SearchedValue) {
          console.log("Header:" + head.Name + " SearchedValue:" + head.SearchedValue);
          if (!(row[head.Name] == head.SearchedValue)) {

            isCriteriaMatched = false;
          }
        }
      });
      if (isCriteriaMatched) {
        this.Rules.Rows.push(row);
      }
    });

    if (this.Rules.Rows.Length > 0) {
      this.Rules.HasRows = true;
    }
    else {
      this.Rules.HasRows = false;
    }
  }

  ClearSearch(event) {
    debugger;
    this.RowsCopy.forEach(row => {
      this.Rules.Rows.push(row);
    });

  }

  GetFilterValue(){
    debugger;
    let SearchObject:{[k: string]: any} = {};
    this.Rules.headers.forEach(header => {
      SearchObject[header.Name]=header.SearchedValue;
    });
    return SearchObject;
  }

} 