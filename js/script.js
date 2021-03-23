function renderHtml(data) {
    // console.table(data);
    // test data JSON ->print JSON array in console window
    // use for/in loop -> get the key of object/array. 
    // -> array[key] = array[index] = value of array
    for (const key in data) {
        console.log(data[key]);
    }

    // Create a variable to store HTML 
    let html = '';    

    // Loop through each data and add a table row 
    data.forEach(course => {
        html += `<div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card opacity-75">
                        <img src="${course.image}">
                        <div class="card-body">
                            <h5 class="card-title">${course.titleCourse}</h5>
                            <p class="card-text">${course.content}
                            </p>
                            <a href="${course.URL}">See more</a>
                        </div>
                    </div>
                </div>`;

        // list += `<tr> 
		// 		<td><p>${course.id}</p></td>
		// 		<td><div class="img-container"><img src="${course.image}" alt="image-course"></div></td>
        //         <td><p>${course.titleCourse}</p></td>
        //         <td><p>${course.content}</p></td>
        //         <td><a href="${course.URL}" target="_blank">See more</a></td>
		// 	</tr>`;
    });

    // Display result 
    document.getElementById("course-list").innerHTML = html;
}

// main.js 
// GET request using fetch() 
fetch("http://601007586c21e1001704fc0c.mockapi.io/course/Courses")

    // Converting received data to JSON 
    .then(response => response.json())
    .then(json => { renderHtml(json) });


// POST request using fetch() 
// fetch("http://601007586c21e1001704fc0c.mockapi.io/course/Courses", {

    // Adding method type 
   /*  method: "POST",

    // Adding body or contents to send 
    body: JSON.stringify({
        id: 51,
        image: "http://lorempixel.com/640/480/animals",
        titleCourse: "Demo API data",
        content: "This is the content for testing",
        URL: "http://mayy-site.designer-land.com"
    }),

    // Adding headers to the request 
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

    // Converting to JSON 
    .then(response => response.json())

    // Displaying results to console 
    .then(json => console.log(json)); */