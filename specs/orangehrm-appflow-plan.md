# OrangeHRM Application Flow Test Plan

## Application Overview

This test plan covers the end-to-end user flows for the OrangeHRM demo application, including authentication, dashboard navigation, and key module functionalities such as Admin user management, PIM employee management, Recruitment processes, Time tracking, and personal My Info updates. The plan includes happy path scenarios, edge cases, and error handling to ensure comprehensive coverage.

## Test Scenarios

### 1. Authentication Suite

**Seed:** `e2e/seed.spec.js`

#### 1.1. Successful Login

**File:** `tests/auth/login-success.spec.ts`

**Steps:**
  1. Navigate to the login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: User is redirected to the dashboard page
    - expect: Dashboard elements like Time at Work, My Actions, and Quick Launch are visible
  2. Enter 'Admin' in the Username field
    - expect: Username field is filled with 'Admin'
  3. Enter 'admin123' in the Password field
    - expect: Password field is filled
  4. Click the Login button
    - expect: Login button is clicked

#### 1.2. Invalid Login Credentials

**File:** `tests/auth/login-invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login page is displayed
  2. Enter 'InvalidUser' in the Username field
    - expect: Username field is filled with invalid data
  3. Enter 'wrongpass' in the Password field
    - expect: Password field is filled with invalid data
  4. Click the Login button
    - expect: Login button is clicked
  5. Verify the error message appears
    - expect: Error message 'Invalid credentials' is displayed

#### 1.3. Forgot Password

**File:** `tests/auth/forgot-password.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login page is displayed
  2. Click the 'Forgot your password?' link
    - expect: Forgot password link is clicked
  3. Verify navigation to reset password page
    - expect: Reset password page is displayed
  4. Enter 'Admin' in the Username field
    - expect: Username field is filled
  5. Click the Reset Password button
    - expect: Reset button is clicked
  6. Verify success message is displayed
    - expect: Success message indicating password reset instructions sent

#### 1.4. Login with Empty Fields

**File:** `tests/auth/login-empty-fields.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login page is displayed
  2. Click the Login button
    - expect: Login button is clicked without entering data
  3. Verify validation errors for empty fields
    - expect: Error message 'Required' is displayed for Username and Password fields

### 2. Dashboard Suite

**Seed:** `e2e/seed.spec.js`

#### 2.1. View Dashboard

**File:** `tests/dashboard/view-dashboard.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Verify dashboard elements are visible
    - expect: Dashboard page is displayed with sections: Time at Work, My Actions, Quick Launch, Buzz Latest Posts, Employee Distribution
  3. Scroll through the dashboard to view all sections
    - expect: User can scroll through the dashboard

#### 2.2. Navigate to Modules from Dashboard

**File:** `tests/dashboard/navigate-modules.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Click on 'Admin' in the side panel
    - expect: Admin module page is loaded
  3. Click on 'Dashboard' in the side panel
    - expect: User is back on dashboard
  4. Click on 'PIM' in the side panel
    - expect: PIM module page is loaded
  5. Click on 'Dashboard' in the side panel
    - expect: User is back on dashboard
  6. Click on 'Recruitment' in the side panel
    - expect: Recruitment module page is loaded
  7. Click on 'Dashboard' in the side panel
    - expect: User is back on dashboard

#### 2.3. User Profile Menu

**File:** `tests/dashboard/user-profile-menu.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Click on the user profile picture in the top bar
    - expect: Profile dropdown is opened
  3. Verify dropdown menu options
    - expect: Options like About, Support, Change Password, Logout are visible

#### 2.4. Side Panel Search

**File:** `tests/dashboard/search-functionality.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Click on the search box in the side panel
    - expect: Search box is focused
  3. Type 'Admin' in the search box
    - expect: Filtered results for 'Admin' are shown
  4. Clear the search box
    - expect: Search is cleared

#### 2.5. Upgrade Banner Interaction

**File:** `tests/dashboard/upgrade-banner.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Verify 'Upgrade' button in the top bar
    - expect: Upgrade button is visible
  3. Click the 'Upgrade' button
    - expect: Upgrade page opens in new tab

#### 2.6. Buzz Latest Posts

**File:** `tests/dashboard/buzz-posts.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Scroll to 'Buzz Latest Posts' section
    - expect: Buzz posts are displayed
  3. Verify post content, author, and date
    - expect: Post details are visible

#### 2.7. Employee Distribution Charts

**File:** `tests/dashboard/employee-distribution.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is on dashboard
  2. Scroll to 'Employee Distribution by Sub Unit'
    - expect: Employee distribution by sub unit is displayed
  3. Scroll to 'Employee Distribution by Location'
    - expect: Employee distribution by location is displayed
  4. Hover over chart elements to see tooltips
    - expect: Charts are interactive

### 3. Admin Suite

**Seed:** `e2e/seed.spec.js`

#### 3.1. View System Users

**File:** `tests/admin/view-system-users.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Navigate to Admin module
    - expect: Admin > User Management > System Users page is loaded
  3. Verify user table with columns: Username, User Role, Employee Name, Status, Actions
    - expect: Table with users is displayed
  4. Verify '(X) Records Found' text
    - expect: Records count is shown

#### 3.2. Search System Users

**File:** `tests/admin/search-users.spec.ts`

**Steps:**
  1. Navigate to Admin > System Users
    - expect: System Users page is loaded
  2. Enter 'Admin' in Username filter
    - expect: Username field is filled
  3. Click Search button
    - expect: Search button is clicked
  4. Verify table shows only matching users
    - expect: Filtered results are displayed
  5. Click Reset button
    - expect: Results are reset

#### 3.3. Add New User

**File:** `tests/admin/add-user.spec.ts`

**Steps:**
  1. Navigate to Admin > System Users
    - expect: System Users page is loaded
  2. Click 'Add' button
    - expect: Add User page is loaded
  3. Fill in User Role, Employee Name, Username, Status, Password
    - expect: Form fields are filled
  4. Click Save button
    - expect: User is saved
  5. Verify user added successfully
    - expect: Success message is displayed
  6. Navigate back to System Users and verify
    - expect: New user appears in the list

#### 3.4. Edit User

**File:** `tests/admin/edit-user.spec.ts`

**Steps:**
  1. Navigate to Admin > System Users
    - expect: System Users page is loaded
  2. Click edit icon for a user
    - expect: Edit page is loaded
  3. Modify user details
    - expect: Fields are updated
  4. Click Save button
    - expect: Changes are saved
  5. Verify changes in the user list
    - expect: Updated user is listed

#### 3.5. Delete User

**File:** `tests/admin/delete-user.spec.ts`

**Steps:**
  1. Navigate to Admin > System Users
    - expect: System Users page is loaded
  2. Check the checkbox for a user
    - expect: User is selected
  3. Click Delete button
    - expect: Delete confirmation is shown
  4. Confirm deletion
    - expect: User is deleted
  5. Verify user no longer in table
    - expect: User is removed from list

#### 3.6. View Job Titles

**File:** `tests/admin/view-job-titles.spec.ts`

**Steps:**
  1. Navigate to Admin
    - expect: User is in Admin
  2. Click Job > Job Titles
    - expect: Job Titles page is loaded
  3. Verify job titles list
    - expect: Table with job titles is displayed

#### 3.7. Add Job Title

**File:** `tests/admin/add-job-title.spec.ts`

**Steps:**
  1. Navigate to Admin > Job > Job Titles
    - expect: Job Titles page is loaded
  2. Click 'Add' button
    - expect: Add Job Title page is loaded
  3. Enter Job Title, Job Description, Job Specification
    - expect: Form is filled
  4. Click Save button
    - expect: Job title is saved
  5. Verify in the list
    - expect: New job title is listed

### 4. PIM Suite

**Seed:** `e2e/seed.spec.js`

#### 4.1. View Employee List

**File:** `tests/pim/view-employee-list.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Navigate to PIM module
    - expect: PIM > Employee List page is loaded
  3. Verify table with Id, Name, Job Title, etc.
    - expect: Employee table is displayed

#### 4.2. Search Employees

**File:** `tests/pim/search-employees.spec.ts`

**Steps:**
  1. Navigate to PIM > Employee List
    - expect: Employee List page is loaded
  2. Enter employee name in filter
    - expect: Employee Name field is filled
  3. Click Search
    - expect: Search button is clicked
  4. Verify results
    - expect: Filtered employees are shown

#### 4.3. Add Employee

**File:** `tests/pim/add-employee.spec.ts`

**Steps:**
  1. Navigate to PIM > Employee List
    - expect: Employee List page is loaded
  2. Click 'Add' button
    - expect: Add Employee page is loaded
  3. Enter First Name, Last Name, etc.
    - expect: Form is filled
  4. Click Save
    - expect: Employee is saved
  5. Verify new employee added
    - expect: Employee details page is shown

#### 4.4. Edit Employee

**File:** `tests/pim/edit-employee.spec.ts`

**Steps:**
  1. Navigate to PIM > Employee List
    - expect: Employee List page is loaded
  2. Click on an employee
    - expect: Employee details page is loaded
  3. Verify tabs: Personal Details, Contact Details, etc.
    - expect: Personal Details tab is active
  4. Edit fields and save
    - expect: Details are updated
  5. Verify updates
    - expect: Changes are saved

#### 4.5. Delete Employee

**File:** `tests/pim/delete-employee.spec.ts`

**Steps:**
  1. Navigate to PIM > Employee List
    - expect: Employee List page is loaded
  2. Check employee checkbox
    - expect: Employee is selected
  3. Click Delete
    - expect: Delete confirmation
  4. Confirm
    - expect: Employee is deleted
  5. Verify
    - expect: Employee removed from list

### 5. Recruitment Suite

**Seed:** `e2e/seed.spec.js`

#### 5.1. View Candidates

**File:** `tests/recruitment/view-candidates.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Navigate to Recruitment module
    - expect: Recruitment > Candidates page is loaded
  3. Verify table with Vacancy, Candidate, etc.
    - expect: Candidates table is displayed

#### 5.2. Search Candidates

**File:** `tests/recruitment/search-candidates.spec.ts`

**Steps:**
  1. Navigate to Recruitment > Candidates
    - expect: Candidates page is loaded
  2. Fill search filters
    - expect: Filters are applied
  3. Click Search
    - expect: Search button is clicked
  4. Verify results
    - expect: Filtered candidates are shown

#### 5.3. Add Candidate

**File:** `tests/recruitment/add-candidate.spec.ts`

**Steps:**
  1. Navigate to Recruitment > Candidates
    - expect: Candidates page is loaded
  2. Click 'Add' button
    - expect: Add Candidate page is loaded
  3. Enter candidate details
    - expect: Form is filled
  4. Click Save
    - expect: Candidate is saved
  5. Verify
    - expect: Candidate added to list

### 6. Time Suite

**Seed:** `e2e/seed.spec.js`

#### 6.1. View Timesheets

**File:** `tests/time/view-timesheets.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Navigate to Time module
    - expect: Time > Timesheets page is loaded
  3. Verify employee selection
    - expect: Select Employee section is shown
  4. Verify 'Timesheets Pending Action' table
    - expect: Pending timesheets are listed

### 7. My Info Suite

**Seed:** `e2e/seed.spec.js`

#### 7.1. View Personal Details

**File:** `tests/myinfo/view-personal-details.spec.ts`

**Steps:**
  1. Perform successful login
    - expect: User is logged in
  2. Navigate to My Info
    - expect: My Info page is loaded
  3. Verify form fields: Name, Id, etc.
    - expect: Personal Details form is displayed
  4. Verify tabs: Personal Details, Contact Details, etc.
    - expect: Tabs are visible

#### 7.2. Edit Personal Details

**File:** `tests/myinfo/edit-personal-details.spec.ts`

**Steps:**
  1. Navigate to My Info
    - expect: My Info page is loaded
  2. Edit personal details
    - expect: Fields are updated
  3. Click Save
    - expect: Changes are saved
  4. Verify save confirmation
    - expect: Success message
