array = [];

function submit()
{
    var name_1 = document.getElementById("student_1").value;
    var name_2 = document.getElementById("student_2").value;
    var name_3 = document.getElementById("student_3").value;
    var name_4 = document.getElementById("student_4").value;
    var name_5 = document.getElementById("student_5").value;

    array.push(name_1);
    array.push(name_2);
    array.push(name_3);
    array.push(name_4);
    array.push(name_5);

    console.log(array);

    document.getElementById("display_name").innerHTML = array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sort()
{
    array.sort();
    console.log(array);
    document.getElementById("display_name").innerHTML = array;
}