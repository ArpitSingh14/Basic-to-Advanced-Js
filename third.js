let grades = prompt("Enter your grades");
if (grades >= 80)
{
    console.log("A");
}
else if (grades >= 70 && grades <= 89)
{
    console.log("B");
}
else if (grades >= 60 && grades <= 69)
{
    console.log("C");
}
else if (grades >= 50 && grades <= 59)
{
    console.log("D");
}
else if (grades < 50)
{
    console.log("F");
}