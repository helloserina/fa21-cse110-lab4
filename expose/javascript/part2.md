1. Line 12 prints "3". The var keyword for i allows it to be accessed anywhere in the function block, including outside of the for loop.
   
2. Line 13 prints "150", which is the last value that discountedPrice reaches in the last iteration of the for loop. The var keyword allows the variable discountedPrice to be accessed anywhere within the function.
   
3. Line 14 prints "150", which is the last value that finalPrice reaches. finalPrice is defined inside the function but outside the for loop, which means that it can be accessed anywhere in the function. The var keyword lets it be accessed anywhere within the for loop as well.
   
4. The function returns: "[ 50, 100, 150 ]". These are the original prices discounted at 50% after being processed through the function.
   
5. Line 12 will throw an error that i is not defined. Since the "let" keywork limits the scope of i to the for loop, the console.log statement on Line 12 cannot access the variable.

6. Line 13 will throw an error that discountedPrice is not defined. Since discountedPrice was created within the for loop and has the "let" keywork, it is limited to the for loop only.

7. Line 14 will print "150". finalPrice is defined within the function, but not within the for loop, so it is able to be accessed by the console.log statement.

8. The function returns "[50,100,150]". Discounted is defined within the function with the "let" keyword, and the return statement is able to access it since it is within the same block. There is no modifying of the variable, so no errors are thrown.

9. Line 11 will throw an error that i is not defined. Since the "const" keywork limits the scope of i to the for loop, the console.log statement cannot access it.

10. Line 12 prints "3", which is the length of the list of prices. length was created within the function and Line 12's console.log statement is able to access it since it is within the same block. There is no modifying of the length variable, so no errors are thrown.

11. The function returns "[50,100,150]", which are the discounted prices from the discounted variable. No variables are modified illegally, so the function runs without errors.

12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

13. A. 32. This is the output since '3' is a string, 2 is treated as a string as well.
    B. 1. 3 is converted from a string to an integer, and 3-2 = 1.
    C. 3. Null is taken numerically as 0, and 3 + nothing = 3.
    D. 3null. Null is converted a string.
    E. 4. The integer value of True is 1, and the True is converted into an integer. 3+1 = 4.
    F. 0. Null becomes 0 numerically, and false becomes 0 numerically. 
    G. 3undefined. Undefined becomes a string.
    H. NaN. Undefined becomes NaN, as defined on the website. 

14. A. True. '2' is converted to an integer.
    B. False. '2' and '12' are both strings, so no conversion is needed. With string comparison, '2' is not less than '12'.
    C. True. 2 becomes a string, so the statement evaluates to true.
    D. False. Checking the types, one of the 2's is a string and the other is number. Therefore the statement is false.
    E. False. True evaluates to 1 as a number, which is not equal to 2.
    F. True. The type evaluation sets to True since 2 is casted to a Boolean value, and true is a Boolean.

15. == checks for a value equality. === checks for type equality. For example, "true == false" returns false, since true is not false. However, true === false evaluates to true, since true and false are both Booleans.

17. [2,4,6]. callback represents the function doSomething(num). Whenever callback() is called within modifyArray(), it alters the given number and returns double of it. All the numbers within the array end up doubled.

19. 1 4 3 2. 