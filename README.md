# Angular-from-scratch Try and Learn - Due Date - 2022-04-12

**Voucher MasterCheif**

Voucher MasterCheif is a web application that show all pending approval to an expected user. The aim is to accelerate business approval process.

![angular-from-scratch (2)](https://user-images.githubusercontent.com/31771810/162213503-62ba96a8-ceee-4ac2-9de9-651059755777.png)

## Getting started 

Generate new project by using [Angular CLI](https://angular.io/cli/new#ng-new).
```ng new <name> [options]```

# Subjects

## Level - Beginner

**Objective:** Create a from scratch an Angular Project with expected outcome.

### Acceptance Criteria
* Be able to navigate to the home page.
* Home page must show assigned requests.
* When I click on **Approve** button I should see the **Approval Form**
* When I click on **Reject** button I should see the **Reject Form**

## Level - Advanced

**Objective:** Create a from scratch an Angular Project that use AgGrid library with expected outcome.

### Acceptance Criteria
* Be able to navigate to the home page.
* Home page must show assigned requests.
   * The library to render the table must be AgGrid.
* When I click on **Approve** button I should navigate to the **Approval Form** page
   * WBS and Amount are readonly input field.
   * I must be able to share the URL link.
   * When I click on Discard button I must be redirected to the Home page.
   * When I click on Approve button I must be redirected to the Home page.
* When I click on **Reject** button I should navigate to the **Reject Form** page
   * WBS and Amount are readonly input field. 
   * Reason is mandatory field.
      * I cannot click on **Reject** button if **Reason** input field is not filled.
   * I must be able to share the URL link.
   * When I click on Discard button I must be redirected to the Home page.
   * When I click on Reject button I must be redirected to the Home page.

# Useful links
- Angular: https://angular.io/docs
- AgGrid: https://www.ag-grid.com/
- Data Generator: https://www.mockaroo.com/
