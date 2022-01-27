# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
To add the foreign key you would need to do a migration. This will generate a new class that you can name something like, "add_foreign_key_to_students". You will then need to add_column. It would be on the student model.
  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer:
The routes that must be passed params are show, edit, update, and destroy. They must be passed ":id" params because it's necessary to know which id to show, edit, update, or destroy.


3. Name three rails generator commands. What is created by each?

  Your answer: $ rails generate migration: updates the schema
  $ rails genererate resource: this will allow you to create the table column names and data types

  Researched answer:
$ rails generate model: This will set up the table, add the column names and data types


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students    
controller method would be index, displays a list of all students.

action: "POST"   route: /students   
controller method would be create, creates a new student in the db.

action: "GET"    route: /students/new
controller method would be new, return an HTML form for creating a new student in the db

action: "GET"    route: /students/2  
controller method would be show, displays a specific student from the db.

action: "GET"    route: /students/2/edit    
controller method would be edit, return an HTML form for editing a student in the db.

action: "PATCH"  route: /students/2
controller method would be update, update a specific student

action: "DELETE" route: /students/2
controller method would be destroy, deletes a specific student from the db.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) as a user I can see a header that says "to-do" list

2)as a user I can see an add task "+" button in the upper right hand corner.

3) as a user, when I click the +, a text field appears

4) as a user, I can type a task in the text field

5) as a user, I can see a square next to the newly added text.

6)as a user, when I click the square a check mark appears next to the task

7) as a user I can repeat steps 2-6 to add new tasks.

8) as a user I can drag tasks up or down depending on importance

9)as a user I can see numbers on the left hand side of the list, that don't move when the tasks do

10) as a user I can delete entire tasks by clicking on a "-" next to the '+' symbol
